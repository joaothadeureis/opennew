import React, { useRef } from 'react';
import { Section } from './ui/Section';
import { CONTENT } from '../constants';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
    <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
      <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z" />
      <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z" />
      <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.734 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.489 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.989 -25.464 56.619 L -21.484 53.529 Z" />
      <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.424 44.599 -10.174 45.789 L -6.704 42.319 C -8.804 40.359 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z" />
    </g>
  </svg>
);

const VerifiedBadge = () => (
    <svg className="w-4 h-4 text-blue-500 fill-current" viewBox="0 0 24 24">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
    </svg>
);

export const Testimonials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      scrollRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Section background="white" id="clientes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 tracking-tight">
                {CONTENT.testimonials.heading}
            </h2>
            <p className="text-gray-600">
                Confira o que dizem empresas que deram um salto tecnológico com nossas soluções.
            </p>
          </div>
          
          <div className="flex gap-2">
            <button 
                onClick={() => scroll('left')}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-primary transition-colors"
                aria-label="Previous testimonials"
            >
                <ChevronLeft size={20} />
            </button>
            <button 
                onClick={() => scroll('right')}
                className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center hover:bg-opacity-90 transition-colors shadow-lg"
                aria-label="Next testimonials"
            >
                <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Scrolling Container for Cards */}
        <div 
            ref={scrollRef}
            className="flex overflow-x-auto pb-12 gap-6 no-scrollbar snap-x snap-mandatory scroll-smooth"
        >
          {CONTENT.testimonials.items.map((item, idx) => (
            <div 
              key={idx} 
              className="min-w-[320px] md:min-w-[380px] bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] snap-center hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-5">
                <div className="flex items-center gap-3">
                    <img 
                        src={item.avatar} 
                        alt={item.name} 
                        className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                    />
                    <div>
                        <h4 className="font-bold text-gray-900 text-sm leading-tight">{item.name}</h4>
                        <p className="text-xs text-gray-500 mt-1">{item.date}</p>
                    </div>
                </div>
                <div className="opacity-80 scale-90">
                    <GoogleLogo />
                </div>
              </div>

              <div className="flex items-center gap-1 mb-4">
                {[1,2,3,4,5].map(star => (
                    <Star key={star} size={18} className="text-yellow-400 fill-yellow-400" />
                ))}
                <div className="bg-blue-50 px-1.5 py-0.5 rounded ml-2 flex items-center gap-1">
                    <VerifiedBadge />
                    <span className="text-[10px] font-medium text-blue-600">Verificado</span>
                </div>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed line-clamp-4 font-medium">
                {item.text}
              </p>
            </div>
          ))}
          {/* Spacer to ensure last card is fully visible */}
          <div className="min-w-[20px]" />
        </div>
      </div>
    </Section>
  );
};