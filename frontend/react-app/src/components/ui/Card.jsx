import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ children, title, className = '', ...props }) => {
  return (
    <div 
      className={`bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200/50 dark:border-slate-700/50 transition-colors duration-300 ${className}`}
      {...props}
    >
      {title && (
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">{title}</h2>
      )}
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  className: PropTypes.string
};

export default Card;