import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'default', 
  disabled = false, 
  className = '',
  ...props 
}) => {
  const baseClasses = 'font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100';
  
  const variants = {
    primary: 'bg-gradient-to-br from-primary-500 to-primary-600 text-white hover:from-primary-400 hover:to-primary-500',
    secondary: 'bg-background-primary text-text-secondary border-2 border-secondary-200 hover:border-primary-300',
    accent: 'bg-gradient-to-br from-accent-500 to-accent-600 text-white hover:from-accent-400 hover:to-accent-500',
    success: 'bg-gradient-to-br from-success-500 to-success-600 text-white hover:from-success-400 hover:to-success-500',
    warning: 'bg-gradient-to-br from-warning-500 to-warning-600 text-white hover:from-warning-400 hover:to-warning-500',
    danger: 'bg-gradient-to-br from-error-500 to-error-600 text-white hover:from-error-400 hover:to-error-500'
  };

  const sizes = {
    small: 'px-4 py-2 text-sm',
    default: 'px-6 py-3',
    large: 'px-8 py-4 text-lg',
    full: 'w-full px-6 py-4'
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;