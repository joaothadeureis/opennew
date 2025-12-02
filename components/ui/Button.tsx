import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  href,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 text-sm font-semibold transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-primary hover:bg-[#3ec49a] text-secondary shadow-[0_4px_14px_0_rgba(75,218,174,0.39)] hover:shadow-[0_6px_20px_rgba(75,218,174,0.23)] hover:-translate-y-0.5",
    secondary: "bg-secondary hover:bg-[#1a1a1a] text-white shadow-lg hover:-translate-y-0.5",
    outline: "border-2 border-primary text-secondary hover:bg-primary/10",
    ghost: "text-gray-600 hover:text-primary hover:bg-gray-50"
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};