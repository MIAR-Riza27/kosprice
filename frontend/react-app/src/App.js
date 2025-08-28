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
  const mousePosRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [, setMouseTick] = useState(0);
  
  const { toasts } = useToast();

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
        return (
          <ErrorBoundary>
            <PredictPage />
          </ErrorBoundary>
        );
      case 'history':
        return (
          <ErrorBoundary>
            <HistoryPage />
          </ErrorBoundary>
        );
      case 'about':
        return (
          <ErrorBoundary>
            <AboutPage />
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
        {/* Enhanced Animated Background with Dark Mode */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-background-secondary via-primary-50 to-accent-100 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950 transition-colors duration-700"></div>
          
          <div 
            className="absolute w-96 h-96 bg-gradient-to-r from-primary-400/20 to-accent-400/20 dark:from-primary-500/30 dark:to-accent-500/30 rounded-full blur-3xl transition-all duration-500"
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
                    ${i % 3 === 0 ? 'bg-primary-300/20 dark:bg-primary-400/30' : 
                      i % 3 === 1 ? 'bg-accent-300/20 dark:bg-accent-400/30' : 
                      'bg-highlight-300/20 dark:bg-highlight-400/30'}
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
