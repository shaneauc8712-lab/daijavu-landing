
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 border-t border-white/5 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-gradient-to-br from-[#CF00C7] to-[#7F6FEA] flex items-center justify-center">
                <span className="text-black font-black text-[10px]">DJ</span>
              </div>
              <span className="text-white font-bold tracking-tighter text-lg uppercase">DAIJAVU</span>
            </div>
            <p className="text-xs text-[#909292] max-w-[200px]">Intelligence Colors as Signals, Not Decoration. Authority through Restraint.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
            <div className="flex flex-col gap-3">
              <h5 className="text-[10px] font-black uppercase tracking-widest text-[#C4C4C4]">Navigation</h5>
              <a href="#" className="text-xs text-[#909292] hover:text-white transition-colors">Case Studies</a>
              <a href="#" className="text-xs text-[#909292] hover:text-white transition-colors">OS Packages</a>
              <a href="#" className="text-xs text-[#909292] hover:text-white transition-colors">Philosophy</a>
            </div>
            <div className="flex flex-col gap-3">
              <h5 className="text-[10px] font-black uppercase tracking-widest text-[#C4C4C4]">Contact</h5>
              <a href="mailto:systems@daijavu.com" className="text-xs text-[#909292] hover:text-white transition-colors">systems@daijavu.com</a>
              <a href="#" className="text-xs text-[#909292] hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>

          <div className="text-[10px] text-[#909292] uppercase font-bold tracking-tighter text-center md:text-right">
            © 2024 DAIJAVU SYSTEMS LLC. <br />
            ALL RIGHTS RESERVED. OPERATING IN ABSOLUTE BLACK.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
