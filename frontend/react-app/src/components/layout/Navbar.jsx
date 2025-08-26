import React, { useEffect, useState } from 'react'

const Navbar = ({ onToggleSidebar, isSidebarOpen }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger entrance animation setelah component mount
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  return (
    <nav className={`bg-blue-600 shadow-lg backdrop-blur-sm bg-opacity-95 transition-all duration-700 transform ${
      isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo & Brand */}
          <div className="flex items-center">
            {/* Transform Hamburger Button */}
            <button 
              onClick={onToggleSidebar}
              className={`text-white hover:text-yellow-300 focus:outline-none focus:text-yellow-300 mr-4 p-2 rounded-lg hover:bg-blue-700 transition-all duration-500 transform hover:scale-110 ${
                isSidebarOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
              }`}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
                <span className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out`}></span>
                <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ease-in-out`}></span>
                <span className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out`}></span>
              </div>
            </button>
            
            <div className={`flex-shrink-0 transition-all duration-500 delay-200 ${
              isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
            }`}>
              <h1 className="text-white text-xl font-bold hover:text-yellow-300 transition-colors duration-200 cursor-pointer">
                Kos<span className="text-yellow-300">Price</span>
              </h1>
            </div>
          </div>

          {/* Navigation Links with staggered animation */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { href: "#home", text: "Beranda", delay: "delay-300" },
              { href: "#predict", text: "Prediksi", delay: "delay-400" },
              { href: "#history", text: "Riwayat", delay: "delay-500" },
              { href: "#about", text: "Tentang", delay: "delay-600" }
            ].map((item, index) => (
              <a 
                key={index}
                href={item.href} 
                className={`text-white hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium transition-all duration-500 hover:bg-blue-700 transform hover:-translate-y-0.5 ${item.delay} ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
              >
                {item.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar