import React from 'react';

const Alert = ({ 
  type = 'info', 
  title, 
  message, 
  className = '' 
}) => {
  const types = {
    success: {
      container: 'bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 border-green-200 dark:border-green-700',
      icon: 'from-green-500 to-emerald-500',
      iconPath: 'M5 13l4 4L19 7',
      titleColor: 'text-green-800 dark:text-green-200',
      messageColor: 'text-green-700 dark:text-green-300'
    },
    error: {
      container: 'bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/30 dark:to-pink-900/30 border-red-200 dark:border-red-700',
      icon: 'from-red-500 to-pink-500',
      iconPath: 'M6 18L18 6M6 6l12 12',
      titleColor: 'text-red-800 dark:text-red-200',
      messageColor: 'text-red-700 dark:text-red-300'
    },
    warning: {
      container: 'bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200',
      icon: 'from-yellow-500 to-orange-500',
      iconPath: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z',
      titleColor: 'text-yellow-800',
      messageColor: 'text-yellow-700'
    },
    info: {
      container: 'bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200',
      icon: 'from-blue-500 to-indigo-500',
      iconPath: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      titleColor: 'text-blue-800',
      messageColor: 'text-blue-700'
    }
  };

  const config = types[type];

  return (
    <div className={`border rounded-xl p-6 ${config.container} ${className}`}>
      <div className="flex items-start">
        <div className={`w-10 h-10 bg-gradient-to-r ${config.icon} rounded-full flex items-center justify-center mr-3 flex-shrink-0`}>
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={config.iconPath} />
          </svg>
        </div>
        <div className="flex-1">
          {title && (
            <h3 className={`text-lg font-semibold mb-2 ${config.titleColor}`}>
              {title}
            </h3>
          )}
          <div className={config.messageColor}>
            {typeof message === 'string' ? <p>{message}</p> : message}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;