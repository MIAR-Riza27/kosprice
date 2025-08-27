import React, { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Check if user has a saved preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsAnimating(true);
    const newMode = !isDark;
    setIsDark(newMode);
    
    // Add smooth transition
    document.documentElement.style.transition = 'all 0.5s ease-in-out';
    
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }

    // Reset animation state
    setTimeout(() => {
      setIsAnimating(false);
      document.documentElement.style.transition = '';
    }, 500);
  };

  return (
    <button
      onClick={toggleDarkMode}
      disabled={isAnimating}
      className={`
        fixed top-20 right-4 z-40 p-3 rounded-xl
        bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm
        border border-gray-200/50 dark:border-slate-700/50
        shadow-lg hover:shadow-xl transform transition-all duration-300
        hover:scale-110 text-gray-600 dark:text-gray-300
        hover:text-blue-600 dark:hover:text-blue-400
        disabled:opacity-50 disabled:cursor-not-allowed
        ${isAnimating ? 'animate-pulse' : ''}
      `}
      aria-label="Toggle dark mode"
    >
      <div className="relative w-5 h-5">
        {/* Sun icon */}
        <svg 
          className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
            isDark ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'
          }`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
        
        {/* Moon icon */}
        <svg 
          className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
            isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'
          }`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      </div>
    </button>
  );
};

export default DarkModeToggle;