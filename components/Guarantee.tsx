
import React from 'react';

const Guarantee: React.FC = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="border border-[#CF00C7]/30 bg-[#CF00C7]/5 rounded-[8px] p-12 text-center max-w-4xl mx-auto relative overflow-hidden">
           {/* Abstract shape */}
           <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#CF00C7]/20 blur-[100px]" />
           
           <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 italic">
            If we can't find $50k in hidden capacity, you don't pay.
           </h2>
           
           <p className="text-[#909292] text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            We are so confident in our audit protocol that we bear all the risk. We aren't here to bill hours; we are here to generate EBITDA.
           </p>
           
           <div className="text-[11px] text-[#909292] uppercase tracking-[0.2em] font-bold opacity-60">
             Harmless Admission: We only work with agencies doing $2M+ ARR.
           </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
