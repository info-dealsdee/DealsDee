import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
  disabled?: boolean;
};

export default function Button({ children, onClick, variant = 'primary', className = '', disabled = false }: ButtonProps) {
  const baseClasses = 'px-6 py-3 font-semibold rounded-lg shadow-sm transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.98] relative overflow-hidden';
  
  const variantClasses = {
    primary: 'bg-accent text-white hover:bg-orange-600 hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5 focus:ring-accent before:absolute before:inset-0 before:bg-white/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300',
    secondary: 'bg-surface dark:bg-gray-800 border border-border dark:border-gray-600 text-text-secondary dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-500 hover:-translate-y-0.5 hover:shadow-md focus:ring-accent',
  };

  return (
    <button 
      onClick={onClick} 
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed hover:transform-none hover:shadow-sm' : ''}`}
    >
      {children}
    </button>
  );
}