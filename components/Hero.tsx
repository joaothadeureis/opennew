
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { Section } from './ui/Section';
import { CONTENT } from '../constants';
import { ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <Section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-gradient-to-br from-white via-surface to-white relative overflow-hidden min-h-[90vh] border-b border-gray-200">
      {/* Background Pattern for Mobile */}
      <div className="absolute inset-0 z-0 lg:hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-40" />
        <div className="absolute top-20 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      </div>
      
      {/* Background Image Desktop */}
      <div className="absolute inset-0 z-0 hidden lg:block">
        <img 
          src={CONTENT.hero.image} 
          alt="OpenNew Dashboard" 
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[55%] h-auto object-contain"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 md:space-y-8 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-secondary text-xs font-semibold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"/>
              White Label Solution
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-secondary leading-[1.1] tracking-tight">
              {CONTENT.hero.heading}
            </h1>
            
            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
              {CONTENT.hero.subheading}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2 md:pt-4 justify-center lg:justify-start">
              <Button href={CONTENT.hero.cta_primary.link} className="group">
                {CONTENT.hero.cta_primary.text}
                <ChevronRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>

          {/* Mobile Image - positioned better */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:hidden flex justify-center mt-4"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-50" />
              <img 
                src={CONTENT.hero.image} 
                alt="OpenNew Dashboard" 
                className="relative w-full h-auto object-contain"
              />
            </div>
          </motion.div>
          
        </div>
      </div>
    </Section>
  );
};