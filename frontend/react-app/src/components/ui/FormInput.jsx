import React from 'react';

const FormInput = ({ 
  label, 
  error, 
  className = '', 
  required = false,
  ...props 
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {label}
          {required && <span className="text-error-500 ml-1">*</span>}
        </label>
      )}
      <input
        className={`
          w-full px-4 py-3 border rounded-xl transition-all duration-200
          focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none
          bg-white dark:bg-background-dark text-gray-900 dark:text-white
          placeholder-gray-500 dark:placeholder-gray-400
          ${error 
            ? 'border-error-500 focus:ring-error-500 focus:border-error-500' 
            : 'border-gray-300 dark:border-secondary-600'
          }
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-error-600 dark:text-error-400 flex items-center">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
};

export default FormInput;