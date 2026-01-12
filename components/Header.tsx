
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full glass-card border-b border-white/5 py-4">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-gradient-to-br from-[#CF00C7] to-[#7F6FEA] flex items-center justify-center">
            <span className="text-black font-black text-xs">DJ</span>
          </div>
          <span className="text-white font-bold tracking-tighter text-xl">DAIJAVU</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-[#909292] hover:text-[#C4C4C4] transition-colors">Solutions</a>
          <a href="#process" className="text-sm text-[#909292] hover:text-[#C4C4C4] transition-colors">Process</a>
          <a href="#testimonials" className="text-sm text-[#909292] hover:text-[#C4C4C4] transition-colors">Results</a>
        </nav>

        <a 
          href="#audit" 
          className="px-4 py-2 rounded-[4px] cta-gradient text-white text-sm font-semibold transition-all hover:scale-105 active:scale-95 magenta-glow"
        >
          Book Audit
        </a>
      </div>
    </header>
  );
};

export default Header;
