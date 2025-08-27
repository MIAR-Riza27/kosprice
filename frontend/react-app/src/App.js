import React, { useState, useEffect, useRef } from "react";
import { useToast } from "./utils/useToast";
import { ToastContainer } from "./components/feedback/Toast";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Sidebar from "./components/layout/Sidebar";
import HomePage from "./components/pages/HomePage";
import PredictPage from "./components/pages/PredictPage";
import HistoryPage from "./components/pages/HistoryPage";
import AboutPage from "./components/pages/AboutPage";
import Breadcrumbs from "./components/utilities/Breadcrumbs";
import BackToTop from "./components/utilities/BackToTop";
import DarkModeToggle from "./components/utilities/DarkModeToggle";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAppLoaded, setIsAppLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const mousePosRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [, setMouseTick] = useState(0);
  const { toasts, success, error, warning, info } = useToast();

  useEffect(() => {
    setTimeout(() => setIsAppLoaded(true), 150);

    let ticking = false;
    const handleMouseMove = (e) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setMouseTick(tick => tick + 1);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navigateTo = (page) => {
    setCurrentPage(page);
    setIsSidebarOpen(false);
  };

  const renderCurrentPage = () => {
    switch(currentPage) {
      case 'predict':
        return <PredictPage />;
      case 'history':
        return <HistoryPage />;
      case 'about':
        return <AboutPage />;
      default:
        return <HomePage navigateTo={navigateTo} isAppLoaded={isAppLoaded} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden transition-colors duration-500">
      {/* Enhanced Animated Background with Dark Mode */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950 transition-colors duration-700"></div>
        
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 dark:from-blue-500/30 dark:to-purple-500/30 rounded-full blur-3xl transition-all duration-500"
          style={{
            left: mousePosRef.current.x - 192,
            top: mousePosRef.current.y - 192,
            transform: `translate3d(0, 0, 0)`
          }}
        ></div>
        
        {/* Animated shapes with dark mode */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={`absolute transition-all duration-700 ${
                isAppLoaded ? 'opacity-30 dark:opacity-20' : 'opacity-0'
              }`}
              style={{
                left: `${10 + (i % 4) * 25}%`,
                top: `${10 + Math.floor(i / 4) * 30}%`,
                animationDelay: `${i * 0.3}s`,
                transform: `rotate(${i * 30}deg)`
              }}
            >
              <div 
                className={`
                  w-${4 + (i % 3) * 2} h-${4 + (i % 3) * 2} 
                  ${i % 3 === 0 ? 'bg-blue-300/20 dark:bg-blue-400/30' : 
                    i % 3 === 1 ? 'bg-purple-300/20 dark:bg-purple-400/30' : 
                    'bg-indigo-300/20 dark:bg-indigo-400/30'}
                  ${i % 2 === 0 ? 'rounded-full' : 'rounded-lg'}
                  animate-float
                `}
                style={{
                  animationDuration: `${3 + (i % 3)}s`,
                  animationDelay: `${i * 0.15}s`
                }}
              ></div>
            </div>
          ))}
        </div>
        
        {/* Grid pattern with dark mode */}
        <div className="absolute inset-0 opacity-10 dark:opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        {/* Bottom wave with dark mode */}
        <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-100/50 dark:from-slate-800/50 to-transparent"></div>
          <svg className="absolute bottom-0 w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                  fill="rgba(59, 130, 246, 0.1)"
                  className="dark:fill-slate-700/20">
              <animateTransform attributeName="transform" type="translate" values="0 0;-100 0;0 0" dur="8s" repeatCount="indefinite"/>
            </path>
          </svg>
        </div>
      </div>

      <Navbar 
        onToggleSidebar={toggleSidebar} 
        isSidebarOpen={isSidebarOpen}
        navigateTo={navigateTo}
        currentPage={currentPage}
      />
      
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
        navigateTo={navigateTo}
      />
      
      <DarkModeToggle />
      
      {/* Toast Container */}
      <ToastContainer toasts={toasts} />
      
      <div className={`flex flex-col flex-1 relative z-10 transition-all duration-500 ${
        isSidebarOpen ? 'blur-sm scale-95 brightness-75' : 'blur-0 scale-100 brightness-100'
      }`}>
        {/* Breadcrumbs with dark mode */}
        <div className="pt-20">
          <div className="max-w-7xl mx-auto">
            <Breadcrumbs currentPage={currentPage} />
          </div>
        </div>
        
        {renderCurrentPage()}
        <Footer />
      </div>
      
      {/* Back to Top Button */}
      <BackToTop />
    </div>
  );
}

export default App;
