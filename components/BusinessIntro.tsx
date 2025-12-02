
import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { CONTENT } from '../constants';

export const BusinessIntro: React.FC = () => {
  return (
    <Section className="relative overflow-hidden min-h-[600px] bg-white">
      {/* Background with pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-dot-pattern opacity-30" />
        {/* Decorative circles */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary tracking-tight">
              {CONTENT.business_intro.heading}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {CONTENT.business_intro.text}
            </p>
            <div className="pt-4">
                <div className="h-1.5 w-24 bg-primary rounded-full" />
            </div>
          </motion.div>

          {/* Image without box */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center lg:justify-end"
          >
             <img 
                src={CONTENT.business_intro.image} 
                alt="Business Growth" 
                className="relative w-full max-w-lg h-auto object-contain"
              />
          </motion.div>

        </div>
      </div>
    </Section>
  );
};