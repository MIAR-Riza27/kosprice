import React, { useState, useEffect } from 'react';

const Toast = ({ 
  type = 'info', 
  title, 
  message, 
  duration = 5000, 
  onClose,
  isVisible = false 
}) => {
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (isVisible) {
      setShow(true);
      
      // Progress bar animation
      const interval = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev - (100 / (duration / 100));
          if (newProgress <= 0) {
            clearInterval(interval);
            handleClose();
            return 0;
          }
          return newProgress;
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [isVisible, duration]);

  const handleClose = () => {
    setShow(false);
    setTimeout(() => {
      if (onClose) onClose();
    }, 300);
  };

  const types = {
    success: {
      bg: 'from-green-500 to-emerald-500',
      bgLight: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20',
      border: 'border-green-200 dark:border-green-700',
      icon: 'M5 13l4 4L19 7',
      textColor: 'text-green-800 dark:text-green-200'
    },
    error: {
      bg: 'from-red-500 to-pink-500',
      bgLight: 'from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20',
      border: 'border-red-200 dark:border-red-700',
      icon: 'M6 18L18 6M6 6l12 12',
      textColor: 'text-red-800 dark:text-red-200'
    },
    warning: {
      bg: 'from-yellow-500 to-orange-500',
      bgLight: 'from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20',
      border: 'border-yellow-200 dark:border-yellow-700',
      icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z',
      textColor: 'text-yellow-800 dark:text-yellow-200'
    },
    info: {
      bg: 'from-blue-500 to-indigo-500',
      bgLight: 'from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20',
      border: 'border-blue-200 dark:border-blue-700',
      icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      textColor: 'text-blue-800 dark:text-blue-200'
    }
  };

  const config = types[type];

  return (
    <div className={`
      fixed top-24 right-4 z-[200] max-w-sm w-full
      transform transition-all duration-300 ease-in-out
      ${show ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-full opacity-0 scale-95'}
    `}>
      <div className={`
        relative bg-gradient-to-r ${config.bgLight} backdrop-blur-sm
        border ${config.border} rounded-xl shadow-xl p-4
        overflow-hidden
      `}>
        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 h-1 bg-gray-200 dark:bg-gray-700 w-full">
          <div 
            className={`h-full bg-gradient-to-r ${config.bg} transition-all duration-100 ease-linear`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="flex items-start">
          {/* Icon */}
          <div className={`w-8 h-8 bg-gradient-to-r ${config.bg} rounded-lg flex items-center justify-center mr-3 flex-shrink-0`}>
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={config.icon} />
            </svg>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            {title && (
              <h4 className={`text-sm font-semibold mb-1 ${config.textColor}`}>
                {title}
              </h4>
            )}
            <p className={`text-sm ${config.textColor} opacity-90`}>
              {message}
            </p>
          </div>

          {/* Close button */}
          <button
            onClick={handleClose}
            className={`ml-2 p-1 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ${config.textColor} opacity-60 hover:opacity-100`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

// Toast Container untuk multiple toasts
export const ToastContainer = ({ toasts = [] }) => {
  return (
    <div className="fixed top-24 right-4 z-[200] space-y-2">
      {toasts.map((toast, index) => (
        <Toast
          key={toast.id || index}
          {...toast}
          isVisible={true}
        />
      ))}
    </div>
  );
};

export default Toast;