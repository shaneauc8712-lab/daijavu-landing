
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import ValueProps from './components/ValueProps';
import ProblemSection from './components/ProblemSection';
import ProcessSection from './components/ProcessSection';
import Testimonials from './components/Testimonials';
import Guarantee from './components/Guarantee';
import BookingSection from './components/BookingSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#C4C4C4] selection:bg-[#CF00C7] selection:text-white">
      {/* Visual background layers */}
      <div className="fixed inset-0 grid-bg pointer-events-none opacity-40 z-0" />
      <div className="fixed inset-0 bg-radial-gradient from-transparent via-[#000] to-[#000] pointer-events-none z-0" />
      
      <div className="relative z-10 flex flex-col">
        <Header />
        
        <main>
          <Hero />
          <SocialProof />
          <ValueProps />
          <ProblemSection />
          <ProcessSection />
          <Testimonials />
          <Guarantee />
          <BookingSection />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
