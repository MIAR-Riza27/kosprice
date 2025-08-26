import React, { useEffect, useState } from 'react'

const Sidebar = ({ isOpen, onClose }) => {
  const [showContent, setShowContent] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setShowContent(true), 300);
    } else {
      setShowContent(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Enhanced Overlay */}
      <div 
        className={`fixed inset-0 bg-gradient-to-br from-black/50 via-blue-900/30 to-black/50 backdrop-blur-sm transition-all duration-700 ease-in-out z-40 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      ></div>

      {/* Clean Modern Sidebar */}
      <div className={`
        fixed top-0 left-0 z-50
        transform transition-all duration-700 ease-in-out
        ${isOpen ? 'w-72 h-full' : 'w-6 h-6 top-4 left-4'}
      `}>
        {/* Sidebar header overlay (navbar gradient) */}
        {isOpen && (
          <div className="absolute top-0 left-0 w-full h-16 rounded-t-2xl bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 z-10 shadow-md"></div>
        )}
        <div className={`
          w-full h-full relative
          ${isOpen ? 'scale-100 opacity-100 rounded-2xl shadow-2xl pt-16' : 'scale-0 opacity-0 rounded-full'}
          overflow-hidden
        `}>
          
          {/* REMOVED: Floating particles */}
          {/* ADDED: Clean gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/80 to-indigo-100/90 backdrop-blur-lg"></div>
          
          {/* Clean geometric pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full" style={{
              backgroundImage: `
                linear-gradient(45deg, rgba(59, 130, 246, 0.1) 25%, transparent 25%),
                linear-gradient(-45deg, rgba(59, 130, 246, 0.1) 25%, transparent 25%),
                linear-gradient(45deg, transparent 75%, rgba(59, 130, 246, 0.1) 75%),
                linear-gradient(-45deg, transparent 75%, rgba(59, 130, 246, 0.1) 75%)
              `,
              backgroundSize: '20px 20px',
              backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
            }}></div>
          </div>

          {/* Modern border accent */}
          <div className={`absolute inset-0 rounded-2xl border-l-4 border-gradient-to-b from-blue-400 via-purple-500 to-blue-600 transition-all duration-500 ${
            isOpen ? 'opacity-60' : 'opacity-0'
          }`}></div>

          {/* Enhanced Header */}
          <div className={`flex items-center justify-between p-6 border-b border-blue-200/30 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 backdrop-blur-sm relative transition-all duration-700 delay-200 ${
            showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            
            <div className="flex items-center space-x-3">
              <div className={`w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white text-lg font-bold transition-all duration-700 delay-300 shadow-lg ${
                showContent ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 rotate-180'
              }`}>
                <span className="drop-shadow-sm">K</span>
              </div>
              <div className={`transition-all duration-700 delay-400 ${
                showContent ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              }`}>
                <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  KosPrice
                </h2>
                <p className="text-xs text-gray-500 font-medium">Menu Navigation</p>
              </div>
            </div>
            
            <button 
              onClick={onClose}
              className={`
                p-2.5 rounded-xl
                bg-gradient-to-r from-blue-500 to-indigo-500
                text-white hover:from-blue-400 hover:to-indigo-400
                transition-all duration-300 transform hover:scale-110 group shadow-lg
                ${showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}
              `}
            >
              <svg className="h-4 w-4 group-hover:rotate-90 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Enhanced Navigation */}
          <nav className="p-6 space-y-3">
            {[
              { href: "#home", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6", text: "Beranda", delay: "delay-300", color: "from-blue-500 to-cyan-500" },
              { href: "#predict", icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z", text: "Prediksi Harga", delay: "delay-400", color: "from-purple-500 to-pink-500" },
              { href: "#history", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "Riwayat", delay: "delay-500", color: "from-green-500 to-emerald-500" },
              { href: "#about", icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z", text: "Tentang", delay: "delay-600", color: "from-orange-500 to-red-500" }
            ].map((item, index) => (
              <div key={index} className={`transition-all duration-700 ${item.delay} ${
                showContent ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-8 scale-90'
              }`}>
                <a 
                  href={item.href}
                  className="flex items-center p-4 text-gray-700 rounded-xl hover:text-white transition-all duration-300 transform hover:scale-[1.02] hover:translate-x-1 group relative overflow-hidden border border-gray-200/50 hover:border-transparent"
                  onClick={onClose}
                >
                  {/* Clean background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl`}></div>
                  
                  {/* Icon container */}
                  <div className={`relative z-10 w-11 h-11 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform duration-200 shadow-md`}>
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                  </div>
                  
                  {/* Text content */}
                  <div className="relative z-10 flex-1">
                    <span className="font-semibold group-hover:font-bold transition-all duration-200 flex items-center text-sm">
                      {item.text}
                    </span>
                  </div>
                  
                  {/* Arrow indicator */}
                  <div className="relative z-10 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              </div>
            ))}
          </nav>

          {/* Enhanced Bottom Section */}
          <div className={`absolute bottom-0 left-0 right-0 p-6 border-t border-blue-200/30 bg-gradient-to-t from-blue-50/60 to-transparent backdrop-blur-sm transition-all duration-800 delay-700 ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            
            {/* Live clock */}
            <div className="text-center mb-4">
              <div className="text-lg font-bold text-blue-600 mb-1">
                {currentTime.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}
              </div>
              <div className="text-xs text-gray-500 font-medium">
                {currentTime.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'short' })}
              </div>
            </div>
            
            {/* Version info */}
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <p className="text-sm text-gray-600 font-semibold">KosPrice v2.0</p>
              </div>
              <p className="text-xs text-gray-400">AI-Powered Platform</p>
              
              {/* Clean progress indicator */}
              <div className="mt-3 w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
                <div className={`h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transition-all duration-1000 delay-800 ${
                  showContent ? 'w-full' : 'w-0'
                }`}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar