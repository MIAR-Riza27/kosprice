import React from 'react';

const Loader = ({ 
  size = 'default', 
  text = '', 
  className = '' 
}) => {
  const sizes = {
    small: 'h-4 w-4',
    default: 'h-5 w-5',
    large: 'h-12 w-12'
  };

  const borderSizes = {
    small: 'border-2',
    default: 'border-2',
    large: 'border-4'
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className={`animate-spin rounded-full ${sizes[size]} ${borderSizes[size]} border-blue-500 border-t-transparent ${text ? 'mr-2' : ''}`}></div>
      {text && <span>{text}</span>}
    </div>
  );
};

export default Loader;