
import React from 'react';
import { motion } from 'framer-motion';

const ProblemSection: React.FC = () => {
  return (
    <section className="py-32 relative bg-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-16 text-center leading-tight">
            You're probably bleeding 20% margin <br />
            <span className="text-[#CF00C7]">and you can't even see it.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="border-l-2 border-red-500/30 pl-6 space-y-2">
                <h4 className="text-white font-bold">Phantom Over-servicing</h4>
                <p className="text-[#909292] text-sm">Teams working 15% more hours than billed due to lack of real-time visibility.</p>
              </div>
              <div className="border-l-2 border-red-500/30 pl-6 space-y-2">
                <h4 className="text-white font-bold">Talent Attrition</h4>
                <p className="text-[#909292] text-sm">Your best people leave when systems are chaotic. Replacing one senior hire costs $40k+.</p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="border-l-2 border-red-500/30 pl-6 space-y-2">
                <h4 className="text-white font-bold">Decision Paralysis</h4>
                <p className="text-[#909292] text-sm">Founders spending 40% of their time on operational fire-fighting instead of growth.</p>
              </div>
              <div className="border-l-2 border-red-500/30 pl-6 space-y-2">
                <h4 className="text-white font-bold">Scaling Friction</h4>
                <p className="text-[#909292] text-sm">Adding more clients results in more complexity, not more profit. The 'Growth Trap'.</p>
              </div>
            </div>
          </div>

          <div className="mt-20 p-8 rounded-[8px] bg-red-500/5 border border-red-500/20 text-center italic text-[#C4C4C4]">
            "Most agencies treat operations as an afterthought. For the top 1%, it is their primary competitive advantage."
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
