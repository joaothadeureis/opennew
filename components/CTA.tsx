
import React from 'react';
import { Section } from './ui/Section';
import { CONTENT } from '../constants';
import { RDStationForm } from './RDStationForm';

export const CTA: React.FC = () => {
  return (
    <Section className="!py-0" id="demo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="relative rounded-[2.5rem] overflow-hidden bg-secondary">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <img 
                    src={CONTENT.cta_final.image} 
                    alt="Office" 
                    className="w-full h-full object-cover opacity-20 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/95 to-secondary/80" />
            </div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center p-8 md:p-16">
                <div className="text-left">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        {CONTENT.cta_final.heading}
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                        {CONTENT.cta_final.text}
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-4 text-white/60 text-sm mt-4">
                        <div className="flex -space-x-3">
                            {CONTENT.cta_final.avatars.map((avatar, idx) => (
                                <img 
                                    key={idx}
                                    src={avatar}
                                    alt="Partner"
                                    className="w-10 h-10 rounded-full border-2 border-secondary object-cover"
                                />
                            ))}
                        </div>
                        <span className="sm:pl-2 text-center sm:text-left">Junte-se a centenas de parceiros satisfeitos.</span>
                    </div>
                </div>

                <div className="w-full max-w-md mx-auto">
                    <div className="bg-white rounded-2xl p-2 shadow-2xl">
                        <RDStationForm />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </Section>
  );
};
