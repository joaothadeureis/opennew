import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { CONTENT } from '../constants';

export const Steps: React.FC = () => {
  return (
    <Section id="como-funciona" className="bg-dot-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary tracking-tight">
            {CONTENT.steps.heading}
          </h2>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0 opacity-50" />

          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {CONTENT.steps.steps.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center relative group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-secondary text-white rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg shadow-secondary/20 group-hover:scale-110 group-hover:bg-primary transition-all duration-300 relative z-20">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 relative z-20">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed relative z-20">
                  {step.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};