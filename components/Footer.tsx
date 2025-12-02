
import React from 'react';
import { CONTENT } from '../constants';
import { Mail, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-white">
      {/* Top accent line */}
      <div className="h-0.5 bg-primary" />
      
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main content - all left aligned */}
          <div className="grid md:grid-cols-3 gap-10">
            
            {/* Logo */}
            <div>
              <img 
                src="/v2/logo opennew.webp" 
                alt="OpenNew" 
                className="h-20 w-auto object-contain brightness-0 invert"
              />
            </div>

            {/* Soluções */}
            <div>
              <h4 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-4">Soluções</h4>
              <ul className="space-y-2">
                {CONTENT.footer.services.map((service, idx) => (
                  <li key={idx} className="text-sm text-white/70">
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contato */}
            <div>
              <h4 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-4">Contato</h4>
              <div className="space-y-2">
                <a href="tel:+556137726474" className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors">
                  <Phone size={14} />
                  +55 (61) 3772-6474
                </a>
                <a href={`mailto:${CONTENT.footer.email}`} className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors">
                  <Mail size={14} />
                  {CONTENT.footer.email}
                </a>
              </div>
            </div>

          </div>

          {/* Bottom bar */}
          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
            <p className="text-xs text-white/40">
              {CONTENT.footer.copyright}
            </p>
            <a 
              href="https://agenciamaximum.com" 
              target="_blank" 
              rel="noreferrer" 
              className="text-xs text-white/40 hover:text-white transition-colors"
            >
              Desenvolvido por Agência Maximum
            </a>
          </div>
          
        </div>
      </div>
    </footer>
  );
};
