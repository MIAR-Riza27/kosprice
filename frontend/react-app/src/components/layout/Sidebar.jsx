import React, { useEffect, useState } from 'react'

const Sidebar = ({ isOpen, onClose }) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Delay untuk menunjukkan content setelah sidebar muncul
      setTimeout(() => setShowContent(true), 200);
    } else {
      setShowContent(false);
    }
  }, [isOpen]);

  return (
    <>
      {/* Animated Overlay */}
      <div 
        className={`fixed inset-0 bg-black transition-opacity duration-500 ease-in-out z-40 ${
          isOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      ></div>

      {/* Transform Sidebar - mulai dari posisi hamburger */}
      <div className={`
        fixed h-full w-64 bg-white shadow-2xl transform transition-all duration-500 ease-in-out z-50
        ${isOpen 
          ? 'top-0 left-0 translate-x-0 scale-100' 
          : 'top-4 left-4 translate-x-0 scale-0 origin-top-left'
        }
      `}>
        {/* Header with delayed animation */}
        <div className={`flex items-center justify-between p-4 border-b bg-gradient-to-r from-blue-50 to-indigo-50 transition-all duration-500 ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}>
          <h2 className={`text-lg font-semibold text-gray-800 transition-all duration-700 delay-100 ${
            showContent ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
          }`}>
            Menu
          </h2>
          <button 
            onClick={onClose}
            className={`text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 hover:rotate-90 ${
              showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            }`}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Animated Navigation with transform from hamburger lines */}
        <nav className="p-4">
          <ul className="space-y-2">
            {[
              { href: "#home", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6", text: "Beranda", delay: "delay-200" },
              { href: "#predict", icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z", text: "Prediksi Harga", delay: "delay-300" },
              { href: "#history", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "Riwayat", delay: "delay-400" },
              { href: "#about", icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z", text: "Tentang", delay: "delay-500" }
            ].map((item, index) => (
              <li key={index} className={`transition-all duration-700 ${item.delay} ${
                showContent ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-8 scale-75'
              }`}>
                <a 
                  href={item.href}
                  className="flex items-center p-3 text-gray-700 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-600 transition-all duration-300 transform hover:scale-105 hover:translate-x-2 group"
                  onClick={onClose}
                >
                  <svg className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                  <span className="group-hover:font-medium transition-all duration-200">{item.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Animated Bottom Section */}
        <div className={`absolute bottom-0 left-0 right-0 p-4 border-t bg-gradient-to-t from-gray-50 to-transparent transition-all duration-800 delay-600 ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="text-center">
            <p className="text-sm text-gray-500 font-medium">KosPrice v1.0</p>
            <p className="text-xs text-gray-400">ML-Powered App</p>
            <div className={`mt-2 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full transition-transform duration-500 delay-700 ${
              showContent ? 'scale-x-100' : 'scale-x-0'
            }`}></div>
          </div>
        </div>

        {/* Morphing Lines Animation - visual effect dari hamburger ke sidebar */}
        <div className={`absolute top-2 left-2 transition-all duration-500 ${
          isOpen ? 'opacity-0 scale-0' : 'opacity-0'
        }`}>
          <div className="space-y-1">
            <div className="h-0.5 w-6 bg-blue-600 rounded"></div>
            <div className="h-0.5 w-6 bg-blue-600 rounded"></div>
            <div className="h-0.5 w-6 bg-blue-600 rounded"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar