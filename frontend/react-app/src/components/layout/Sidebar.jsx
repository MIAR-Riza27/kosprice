import React, { useState, useEffect } from 'react'; // 👈 Fix: Remove useRef

const Sidebar = ({ isOpen, onClose, navigateTo }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  const menuItems = [
    {
      name: 'Beranda',
      path: 'home',
      icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Prediksi Harga',
      path: 'predict',
      icon: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Riwayat Prediksi',
      path: 'history',
      icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Tentang Kami',
      path: 'about',
      icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const handleItemClick = (path) => {
    navigateTo(path);
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full w-80 bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg
        shadow-2xl z-[70] transform transition-all duration-300 ease-out
        border-r border-gray-200/50 dark:border-slate-700/50
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200/50 dark:border-slate-700/50">
          <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Menu Navigasi
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
          >
            <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <nav className="p-4 space-y-2">
          {menuItems.map((item, index) => (
            <button
              key={item.path}
              onClick={() => handleItemClick(item.path)}
              className={`
                group w-full flex items-center space-x-4 p-4 rounded-xl
                transition-all duration-300 hover:scale-105 hover:shadow-lg
                bg-gray-50/50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-700
                border border-gray-200/50 dark:border-slate-700/50
                hover:border-gray-300 dark:hover:border-slate-600
                ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}
              `}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${item.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                </svg>
              </div>
              <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                {item.name}
              </span>
              <svg className="w-5 h-5 text-gray-400 dark:text-gray-600 ml-auto group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ))}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200/50 dark:border-slate-700/50">
          <div className="text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              KosPrice v2.0.0
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
              AI-Powered Price Prediction
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;