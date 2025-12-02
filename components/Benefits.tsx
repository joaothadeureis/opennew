
import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { CONTENT } from '../constants';

export const Benefits: React.FC = () => {
  // Split cards into left and right groups
  const leftCards = CONTENT.benefits.cards.slice(0, 3);
  const rightCards = CONTENT.benefits.cards.slice(3, 6);

  return (
    <Section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-surface/50 to-white z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 tracking-tight">
            {CONTENT.benefits.heading}
          </h2>
        </div>

        {/* Desktop Layout - 3 columns with image in center */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 items-start">
            
          {/* Left Column */}
          <div className="space-y-6 pt-8">
            {leftCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-4 p-2.5 rounded-lg bg-surface text-secondary w-fit">
                  <card.icon size={24} className="stroke-primary" />
                </div>
                <h3 className="text-lg font-bold text-secondary mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {card.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Center Image - positioned to show full person */}
          <div className="relative flex items-end justify-center">
             {/* Gradient overlay to smooth the bottom */}
             <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-20" />
             <motion.img 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src={CONTENT.benefits.center_image} 
                alt="Support Team" 
                className="relative z-10 w-full max-w-sm h-auto object-contain"
             />
          </div>

          {/* Right Column */}
          <div className="space-y-6 pt-8">
            {rightCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-4 p-2.5 rounded-lg bg-surface text-secondary w-fit">
                  <card.icon size={24} className="stroke-primary" />
                </div>
                <h3 className="text-lg font-bold text-secondary mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {card.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Layout - Image on top, then cards */}
        <div className="lg:hidden">
          {/* Mobile Image */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-8"
          >
            <img 
              src={CONTENT.benefits.center_image} 
              alt="Support Team" 
              className="w-full max-w-xs h-auto object-contain"
            />
          </motion.div>
          
          {/* Mobile Cards Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {CONTENT.benefits.cards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm"
              >
                <div className="mb-3 p-2 rounded-lg bg-surface text-secondary w-fit">
                  <card.icon size={20} className="stroke-primary" />
                </div>
                <h3 className="text-base font-bold text-secondary mb-1">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {card.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};