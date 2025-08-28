import React from 'react';

const PageHeader = ({ 
  title, 
  subtitle, 
  children, 
  className = '',
  titleClassName = '',
  subtitleClassName = '',
  size = 'normal' // 'small', 'normal', 'large', 'hero'
}) => {
  const sizeClasses = {
    small: 'text-2xl md:text-3xl lg:text-4xl',
    normal: 'text-3xl md:text-4xl lg:text-5xl', 
    large: 'text-4xl md:text-5xl lg:text-6xl',
    hero: 'text-5xl md:text-6xl lg:text-7xl xl:text-8xl'
  };

  return (
    <div className={`text-center ${className}`}>
      <h1 className={`
        ${sizeClasses[size]} font-bold 
        bg-gradient-to-br from-primary-600 to-primary-800 
        dark:from-primary-400 dark:to-primary-600 
        bg-clip-text text-transparent 
        mb-6 leading-[1.1] pb-4
        ${titleClassName}
      `}>
        {title}
      </h1>
      
      {subtitle && (
        <p className={`
          text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed
          ${subtitleClassName}
        `}>
          {subtitle}
        </p>
      )}
      
      {children && (
        <div className="mt-8">
          {children}
        </div>
      )}
    </div>
  );
};

export default PageHeader;