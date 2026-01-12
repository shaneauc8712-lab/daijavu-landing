
import React from 'react';

const SocialProof: React.FC = () => {
  return (
    <div className="border-y border-white/5 py-12 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-white font-bold text-4xl tracking-tighter">172</span>
            <span className="text-[#909292] text-sm font-bold uppercase tracking-widest">Global Agencies Optimized</span>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 opacity-40 grayscale">
             {/* Logo placeholders using recognizable brand-like initials or icons */}
             <div className="text-xl font-bold tracking-tighter">LUMINA</div>
             <div className="text-xl font-bold tracking-tighter">VECTOR</div>
             <div className="text-xl font-bold tracking-tighter">SYNTAX</div>
             <div className="text-xl font-bold tracking-tighter">VOID</div>
             <div className="text-xl font-bold tracking-tighter">ECHO</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
