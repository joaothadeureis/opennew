
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from './ui/Section';
import { CONTENT } from '../constants';
import { ChevronLeft, ChevronRight, CheckCheck } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = CONTENT.portfolio.slides.length + 1; 

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const isCtaSlide = currentIndex === CONTENT.portfolio.slides.length;

  return (
    <Section background="gray" id="portfolio-de-serviços" className="!py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-2 tracking-tight">
            Sua Marca, Nosso Poder: Um
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
            Portfólio Completo de Serviços
          </h2>
          
          {/* Navigation Arrows */}
          <div className="flex justify-center items-center gap-4 mt-8">
             <button 
                 onClick={prevSlide}
                 className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-opacity-90 transition-colors shadow-lg shadow-primary/20"
             >
                 <ChevronLeft size={20} />
             </button>
             <div className="flex gap-2">
                 {Array.from({ length: totalSlides }).map((_, idx) => (
                   <button
                     key={idx}
                     onClick={() => setCurrentIndex(idx)}
                     className={`w-2.5 h-2.5 rounded-full transition-all ${
                       idx === currentIndex ? 'bg-primary scale-110' : 'bg-gray-300 hover:bg-gray-400'
                     }`}
                   />
                 ))}
             </div>
             <button 
                 onClick={nextSlide}
                 className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-opacity-90 transition-colors shadow-lg shadow-primary/20"
             >
                 <ChevronRight size={20} />
             </button>
          </div>
        </div>

        {/* Slider Content */}
        <AnimatePresence mode="wait">
          {!isCtaSlide ? (
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            >
              {/* Left: Image - clean, no box */}
              <div className="flex justify-center lg:justify-start">
                <motion.img 
                  src={CONTENT.portfolio.slides[currentIndex].image} 
                  alt={CONTENT.portfolio.slides[currentIndex].title}
                  className="w-full h-auto object-contain"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              {/* Right: Content */}
              <div className="space-y-6">
                {CONTENT.portfolio.slides[currentIndex].items.map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    className="flex gap-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="flex-shrink-0 mt-1">
                      <CheckCheck size={22} className="text-primary" strokeWidth={2.5} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1 text-lg">{item.title}</h4>
                      <p className="text-gray-500 leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            // CTA Slide
            <motion.div
              key="cta-slide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center justify-center p-12 text-center bg-secondary rounded-3xl relative overflow-hidden min-h-[400px]"
            >
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
              
              <div className="relative z-10 max-w-2xl mx-auto">
                <span className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-4 border border-primary/20">
                  Oportunidade
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Sua Próxima Grande Oportunidade
                </h3>
                <p className="text-base text-gray-300 mb-6 leading-relaxed max-w-lg mx-auto">
                  Você viu o potencial. Agora, imagine tudo isso com a sua marca, gerando receita recorrente.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button 
                      onClick={() => window.location.href = '#demo'}
                      className="px-8 py-3 bg-white text-secondary font-bold rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 transition-transform duration-300 text-sm"
                  >
                      VEJA UMA APRESENTAÇÃO
                  </button>
                  <button 
                       onClick={() => setCurrentIndex(0)}
                       className="text-white/60 hover:text-white text-sm font-medium px-4 py-2"
                  >
                      Voltar ao Portfólio
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Section>
  );
};