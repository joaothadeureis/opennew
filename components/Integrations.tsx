import React from 'react';
import { Section } from './ui/Section';
import { CONTENT } from '../constants';

export const Integrations: React.FC = () => {
  return (
    <Section background="gray" className="!py-12" id="integrações">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-lg font-semibold text-gray-500 uppercase tracking-widest mb-8">
          {CONTENT.integrations.heading}
        </h3>
        
        {/* Grid layout for 2 rows on desktop */}
        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-8 md:gap-10 items-center justify-items-center">
          {CONTENT.integrations.logos.map((logo, idx) => (
            <div 
              key={idx} 
              className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 flex items-center justify-center"
            >
              <img 
                src={logo.image} 
                alt={logo.name}
                className="h-10 md:h-14 lg:h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};