import React from 'react';
import Hero from '../sections/Hero';
import Features from '../sections/Features';
import Statistics from '../sections/Statistics';
import HowItWorks from '../sections/HowItWorks';

const HomePage = ({ navigateTo, isAppLoaded }) => {
  return (
    <main className="flex-1 relative">
      <div className="h-16"></div>
      <div className={`w-full transition-all duration-600 delay-200 ${
        isAppLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}>
        <Hero navigateTo={navigateTo} isAppLoaded={isAppLoaded} />
        <Statistics isAppLoaded={isAppLoaded} />
        <Features isAppLoaded={isAppLoaded} />
        <HowItWorks isAppLoaded={isAppLoaded} />
      </div>
    </main>
  );
};

export default HomePage;