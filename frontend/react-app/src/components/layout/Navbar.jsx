import React, { useEffect, useState } from 'react'

const Navbar = ({ onToggleSidebar, isSidebarOpen, navigateTo, currentPage }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`
      fixed top-0 left-0 right-0 z-[100]
      bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 
      dark:from-slate-800 dark:via-slate-900 dark:to-slate-800
      shadow-xl backdrop-blur-md border-b border-blue-500/20 dark:border-slate-700/50
      transition-all duration-500 transform
      ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
      ${scrolled ? 'bg-opacity-95 shadow-2xl' : 'bg-opacity-90'}
      relative overflow-hidden
    `}>
      
      {/* REMOVED: Floating particles */}
      {/* ADDED: Clean modern background patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle geometric pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.2) 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px, 40px 40px'
          }}></div>
        </div>
        
        {/* Modern light rays */}
        <div className="absolute top-0 right-0 w-96 h-16 bg-gradient-to-l from-white/10 to-transparent transform rotate-12 translate-x-32 -translate-y-8"></div>
        <div className="absolute top-0 left-0 w-64 h-16 bg-gradient-to-r from-white/5 to-transparent transform -rotate-12 -translate-x-16 translate-y-4"></div>
      </div>

      {/* Enhanced gradient wave - more subtle */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 opacity-40">
        <div className={`h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform transition-transform duration-[3000ms] ${
          isLoaded ? 'translate-x-full' : '-translate-x-full'
        }`} style={{ animation: 'shimmer 4s ease-in-out infinite' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between h-16">
          
          {/* Logo & Brand */}
          <div className="flex items-center">
            {/* Enhanced Hamburger Button - Redesigned to match nav buttons */}
            <button 
              onClick={onToggleSidebar}
              className={`
                group relative px-4 py-2.5 rounded-xl font-semibold text-sm mr-4
                shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105
                border backdrop-blur-sm overflow-hidden
                ${isSidebarOpen 
                  ? 'bg-gradient-to-r from-red-500/90 to-red-600/90 text-white border-red-400/50 shadow-red-500/25' 
                  : 'bg-white/10 text-white border-white/20 hover:bg-white/20 hover:border-white/40'
                }
              `}
            >
              {/* Background gradient overlay */}
              <div className={`absolute inset-0 transition-all duration-300 rounded-xl ${
                isSidebarOpen
                  ? 'bg-gradient-to-r from-red-300/20 to-red-400/20 opacity-100'
                  : 'bg-gradient-to-r from-blue-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100'
              }`}></div>
              
              {/* Content */}
              <div className="flex items-center space-x-2 relative z-10">
                {/* Hamburger icon */}
                <div className="w-4 h-4 flex flex-col justify-center items-center">
                  <span className={`block h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                    isSidebarOpen 
                      ? 'w-4 rotate-45 translate-y-0.5' 
                      : 'w-4 rotate-0 -translate-y-0.5'
                  }`}></span>
                  <span className={`block h-0.5 bg-current transition-all duration-200 ease-in-out ${
                    isSidebarOpen 
                      ? 'w-0 opacity-0 scale-0' 
                      : 'w-4 opacity-100 scale-100'
                  }`}></span>
                  <span className={`block h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                    isSidebarOpen 
                      ? 'w-4 -rotate-45 -translate-y-0.5' 
                      : 'w-4 rotate-0 translate-y-0.5'
                  }`}></span>
                </div>
                <span>{isSidebarOpen ? 'Tutup' : 'Menu'}</span>
              </div>
              
              {/* Active indicator */}
              <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 rounded-full transition-all duration-300 ${
                isSidebarOpen 
                  ? 'w-3/4 bg-white shadow-lg' 
                  : 'w-0 bg-yellow-300 group-hover:w-1/2'
              }`}></div>
              
              {/* Shine effect */}
              <div className="absolute inset-0 -top-2 -bottom-2 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 group-hover:animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            {/* Enhanced Logo */}
            <div className={`flex-shrink-0 transition-all duration-500 delay-150 ${
              isLoaded ? 'translate-x-0 opacity-100 scale-100' : '-translate-x-8 opacity-0 scale-95'
            }`}>
              <h1 className="text-white text-2xl font-bold hover:text-yellow-300 transition-all duration-300 cursor-pointer group relative">
                <span className="relative z-10">
                  Kos<span className="text-yellow-300 font-extrabold">Price</span>
                </span>
                {/* Logo glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300/20 to-orange-400/20 opacity-0 group-hover:opacity-100 rounded-lg blur-lg transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-300 to-orange-400 group-hover:w-full transition-all duration-300"></div>
              </h1>
            </div>
          </div>

          {/* Enhanced Navigation Links */}
          <div className="hidden md:flex items-center space-x-3">
            {[
              { 
                page: "home", 
                text: "Beranda", 
                icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
                delay: 200 
              },
              { 
                page: "predict", 
                text: "Prediksi", 
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                delay: 250 
              },
              { 
                page: "history", 
                text: "Riwayat", 
                icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                delay: 300 
              },
              { 
                page: "about", 
                text: "Tentang", 
                icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                delay: 350 
              }
            ].map((item, index) => (
              <button 
                key={index}
                onClick={() => navigateTo(item.page)}
                className={`
                  group relative px-4 py-2.5 rounded-xl font-semibold text-sm
                  shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105
                  border backdrop-blur-sm overflow-hidden
                  ${currentPage === item.page 
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-white border-yellow-300/50 shadow-yellow-500/25' 
                    : 'bg-white/10 text-white border-white/20 hover:bg-white/20 hover:border-white/40'
                  }
                  ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
                `}
                style={{ transitionDelay: `${item.delay}ms` }}
              >
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 transition-all duration-300 rounded-xl ${
                  currentPage === item.page
                    ? 'bg-gradient-to-r from-yellow-300/20 to-orange-300/20 opacity-100'
                    : 'bg-gradient-to-r from-blue-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100'
                }`}></div>
                
                {/* Content */}
                <div className="flex items-center space-x-2 relative z-10">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                  <span>{item.text}</span>
                </div>
                
                {/* Active indicator */}
                <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 rounded-full transition-all duration-300 ${
                  currentPage === item.page 
                    ? 'w-3/4 bg-white shadow-lg' 
                    : 'w-0 bg-yellow-300 group-hover:w-1/2'
                }`}></div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 -top-2 -bottom-2 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 group-hover:animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar