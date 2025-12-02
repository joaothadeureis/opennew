import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  background?: 'white' | 'gray' | 'dark';
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ 
  id, 
  className = '', 
  background = 'white', 
  children 
}) => {
  const bgColors = {
    white: 'bg-white',
    gray: 'bg-[#F7F9FC]',
    dark: 'bg-secondary text-white'
  };

  return (
    <section 
      id={id} 
      className={`py-20 md:py-32 relative overflow-hidden ${bgColors[background]} ${className}`}
    >
      {children}
    </section>
  );
};