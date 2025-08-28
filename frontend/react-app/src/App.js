import React, { useState, useEffect, useRef } from "react";
import { useToast } from "./utils/useToast";
import { ToastContainer } from "./components/feedback/Toast";
import ErrorBoundary from "./components/utilities/ErrorBoundary";
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
import SidebarToggle from "./components/utilities/SidebarToggle";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAppLoaded, setIsAppLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const backgroundRef = useRef(null);
  const cloudRef = useRef(null);
  
  const { toasts } = useToast();

  useEffect(() => {
    setTimeout(() => setIsAppLoaded(true), 150);

    // OPTIMIZED: Direct CSS transform tanpa state updates
    const handleMouseMove = (e) => {
      if (cloudRef.current) {
        const x = e.clientX - 192; // Half of cloud width (384px / 2)
        const y = e.clientY - 192; // Half of cloud height (384px / 2)
        
        // Smooth following dengan CSS transform langsung
        cloudRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
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
        return (
          <ErrorBoundary>
            <PredictPage isAppLoaded={isAppLoaded} />
          </ErrorBoundary>
        );
      case 'history':
        return (
          <ErrorBoundary>
            <HistoryPage isAppLoaded={isAppLoaded} />
          </ErrorBoundary>
        );
      case 'about':
        return (
          <ErrorBoundary>
            <AboutPage isAppLoaded={isAppLoaded} />
          </ErrorBoundary>
        );
      default:
        return (
          <ErrorBoundary>
            <HomePage navigateTo={navigateTo} isAppLoaded={isAppLoaded} />
          </ErrorBoundary>
        );
    }
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen flex flex-col relative overflow-hidden transition-colors duration-500">
        {/* ENHANCED: High-performance animated background */}
        <div ref={backgroundRef} className="fixed inset-0 z-0 pointer-events-none">
          {/* Base gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-background-secondary via-primary-50 to-accent-100 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950 transition-colors duration-700"></div>
          
          {/* OPTIMIZED: Smooth following cloud effect */}
          <div 
            ref={cloudRef}
            className="absolute w-96 h-96 bg-gradient-to-r from-primary-400/30 to-accent-400/30 dark:from-primary-500/40 dark:to-accent-500/40 rounded-full blur-3xl will-change-transform"
            style={{
              transform: 'translate3d(calc(50vw - 192px), calc(50vh - 192px), 0)',
              transition: 'transform 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }}
          ></div>
          
          {/* Floating decorative elements */}
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className={`absolute transition-all duration-700 ${
                  isAppLoaded ? 'opacity-20 dark:opacity-15' : 'opacity-0'
                }`}
                style={{
                  left: `${15 + (i % 3) * 30}%`,
                  top: `${15 + Math.floor(i / 3) * 25}%`,
                  animationDelay: `${i * 0.4}s`,
                  transform: `rotate(${i * 45}deg)`
                }}
              >
                <div 
                  className={`
                    w-${3 + (i % 2) * 2} h-${3 + (i % 2) * 2} 
                    ${i % 3 === 0 ? 'bg-primary-300/20 dark:bg-primary-400/25' : 
                      i % 3 === 1 ? 'bg-accent-300/20 dark:bg-accent-400/25' : 
                      'bg-success-300/20 dark:bg-success-400/25'}
                    ${i % 2 === 0 ? 'rounded-full' : 'rounded-lg'}
                    animate-float will-change-transform
                  `}
                  style={{
                    animationDuration: `${4 + (i % 3)}s`,
                    animationDelay: `${i * 0.2}s`
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>

        <ErrorBoundary>
          <Navbar 
            onToggleSidebar={toggleSidebar} 
            isSidebarOpen={isSidebarOpen}
            navigateTo={navigateTo}
            currentPage={currentPage}
          />
        </ErrorBoundary>
        
        <ErrorBoundary>
          <Sidebar 
            isOpen={isSidebarOpen} 
            onClose={() => setIsSidebarOpen(false)} 
            navigateTo={navigateTo}
          />
        </ErrorBoundary>
        
        <ErrorBoundary>
          <DarkModeToggle />
        </ErrorBoundary>
        
        <ErrorBoundary>
          <SidebarToggle 
            onToggleSidebar={toggleSidebar} 
            isSidebarOpen={isSidebarOpen} 
          />
        </ErrorBoundary>
        
        <ToastContainer toasts={toasts} />
        
        <div className={`flex flex-col flex-1 relative z-10 transition-all duration-500 ${
          isSidebarOpen ? 'blur-sm scale-95 brightness-75' : 'blur-0 scale-100 brightness-100'
        }`}>
          <div className="pt-20">
            <div className="max-w-7xl mx-auto">
              <ErrorBoundary>
                <Breadcrumbs currentPage={currentPage} />
              </ErrorBoundary>
            </div>
          </div>
          
          {renderCurrentPage()}
          
          <ErrorBoundary>
            <Footer />
          </ErrorBoundary>
        </div>
        
        <ErrorBoundary>
          <BackToTop />
        </ErrorBoundary>
      </div>
    </ErrorBoundary>
  );
}

export default App;
