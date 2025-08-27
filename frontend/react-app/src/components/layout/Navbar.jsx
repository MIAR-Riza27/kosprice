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
            {/* Enhanced Hamburger Button */}
            <button 
              onClick={onToggleSidebar}
              className={`
                text-white hover:text-yellow-300 focus:outline-none mr-4 p-3 rounded-xl
                bg-gradient-to-r from-blue-500/80 to-indigo-500/80 hover:from-blue-400/90 hover:to-indigo-400/90
                shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-110
                border border-white/20 backdrop-blur-sm
                ${isSidebarOpen ? 'scale-110 bg-yellow-500/90' : 'scale-100'}
                relative overflow-hidden
              `}
            >
              {/* Button background glow */}
              <div className={`absolute inset-0 bg-gradient-to-r from-yellow-300/20 to-orange-300/20 rounded-xl transition-opacity duration-300 ${
                isSidebarOpen ? 'opacity-100' : 'opacity-0'
              }`}></div>
              
              <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1 relative z-10">
                <span className={`block h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                  isSidebarOpen 
                    ? 'w-6 rotate-45 translate-y-1.5' 
                    : 'w-6 rotate-0 translate-y-0'
                }`}></span>
                <span className={`block h-0.5 bg-current transition-all duration-200 ease-in-out ${
                  isSidebarOpen 
                    ? 'w-0 opacity-0 scale-0' 
                    : 'w-6 opacity-100 scale-100'
                }`}></span>
                <span className={`block h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                  isSidebarOpen 
                    ? 'w-6 -rotate-45 -translate-y-1.5' 
                    : 'w-6 rotate-0 translate-y-0'
                }`}></span>
              </div>
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
          <div className="hidden md:flex items-center space-x-2">
            {[
              { page: "home", text: "Beranda", delay: 200 },
              { page: "predict", text: "Prediksi", delay: 250 },
              { page: "history", text: "Riwayat", delay: 300 },
              { page: "about", text: "Tentang", delay: 350 }
            ].map((item, index) => (
              <button 
                key={index}
                onClick={() => navigateTo(item.page)}
                className={`
                  group relative text-white hover:text-yellow-300 px-4 py-2 rounded-xl text-sm font-medium 
                  transition-all duration-300 transform hover:-translate-y-1 hover:scale-105
                  bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-yellow-300/50
                  shadow-lg hover:shadow-xl overflow-hidden
                  ${currentPage === item.page ? 'bg-white/20 text-yellow-300' : ''}
                  ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
                `}
                style={{ transitionDelay: `${item.delay}ms` }}
              >
                <span className="flex items-center space-x-2 relative z-10">
                  <span>{item.text}</span>
                </span>
                
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300/10 to-orange-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-1/2 w-0 h-1 bg-gradient-to-r from-yellow-300 to-orange-400 group-hover:w-full group-hover:left-0 transition-all duration-300 rounded-full"></div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar