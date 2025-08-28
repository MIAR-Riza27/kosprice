import React, { useState, useEffect } from 'react';

const SidebarToggle = ({ onToggleSidebar, isSidebarOpen }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when scrolled down more than 100px
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggle = () => {
    setIsAnimating(true);
    onToggleSidebar();
    
    // Reset animation state
    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  };

  return (
    <button
      onClick={handleToggle}
      disabled={isAnimating}
      className={`
        fixed top-20 left-4 z-[80] px-4 py-2.5 rounded-xl
        font-semibold text-sm shadow-lg hover:shadow-xl 
        transform transition-all duration-300 hover:scale-105 active:scale-95
        border backdrop-blur-sm overflow-hidden group
        ${isVisible && !isSidebarOpen 
          ? 'translate-x-0 opacity-100' 
          : '-translate-x-16 opacity-0 pointer-events-none'
        }
        ${isAnimating ? 'scale-95' : ''}
        bg-white/80 dark:bg-background-dark/80 
        hover:bg-white/90 dark:hover:bg-background-dark/90
        text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400
        border-primary-200/60 dark:border-primary-500/70
        hover:border-primary-300/80 dark:hover:border-primary-400/80
      `}
      title="Buka Menu"
    >
      {/* Background gentle overlay - single color */}
      <div className="absolute inset-0 bg-primary-500/5 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl"></div>
      
      {/* Content - mengikuti style Navbar */}
      <div className="flex items-center space-x-2 relative z-10">
        {/* Hamburger icon */}
        <div className="w-4 h-4 flex flex-col justify-center items-center space-y-1">
          <span className={`block h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
            isSidebarOpen 
              ? 'w-4 rotate-45 translate-y-1' 
              : 'w-4 rotate-0 translate-y-0'
          }`}></span>
          <span className={`block h-0.5 bg-current transition-all duration-200 ease-in-out ${
            isSidebarOpen 
              ? 'w-0 opacity-0 scale-0' 
              : 'w-4 opacity-100 scale-100'
          }`}></span>
          <span className={`block h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
            isSidebarOpen 
              ? 'w-4 -rotate-45 -translate-y-1' 
              : 'w-4 rotate-0 translate-y-0'
          }`}></span>
        </div>
        <span>Menu</span>
      </div>
      
      {/* Active indicator - disesuaikan dengan theme transparan */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 rounded-full transition-all duration-300 w-0 bg-primary-500 dark:bg-primary-400 group-hover:w-1/2"></div>
      
      {/* Subtle shine effect - single color */}
      <div className="absolute inset-0 bg-white/3 transform -skew-x-12 group-hover:animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
    </button>
  );
};

export default SidebarToggle;
