
import React from 'react';
import { Section } from './ui/Section';
import { CONTENT } from '../constants';
import { CheckCircle2 } from 'lucide-react';

export const AlgarSection: React.FC = () => {
  return (
    <Section className="!py-16 bg-gradient-to-r from-gray-50 to-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            
            <div className="md:w-1/2 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wider">
                    <CheckCircle2 size={14} />
                    Parceria Estratégica
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary tracking-tight leading-tight">
                    {CONTENT.algar_section.heading.split('Algar Telecom').map((part, i, arr) => (
                        <React.Fragment key={i}>
                            {part}
                            {i < arr.length - 1 && <span className="text-[#00B077]">Algar Telecom</span>}
                        </React.Fragment>
                    ))}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                    {CONTENT.algar_section.text}
                </p>
            </div>

            <div className="md:w-1/2 flex justify-center">
                <img 
                    src={CONTENT.algar_section.logo_url} 
                    alt="Algar Telecom" 
                    className="max-w-[280px] md:max-w-[380px] opacity-90 hover:opacity-100 transition-opacity drop-shadow-lg"
                />
            </div>

        </div>
      </div>
    </Section>
  );
};
