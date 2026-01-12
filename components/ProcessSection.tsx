
import React from 'react';

const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Deep Audit",
      desc: "We analyze your tech stack, team efficiency, and historical profit data to find your specific leaks."
    },
    {
      num: "02",
      title: "System Build",
      desc: "We deploy custom AI-powered dashboards and automated workflows tailored to your agency's DNA."
    },
    {
      num: "03",
      title: "Active Optimize",
      desc: "30 days of direct system stress-testing and team onboarding to ensure adoption is 100%."
    }
  ];

  return (
    <section id="process" className="py-32 border-t border-white/5">
      <div className="container mx-auto px-6">
        <h2 className="text-sm font-black uppercase tracking-[0.3em] text-[#CF00C7] mb-12 text-center">The DAIJAVU Protocol</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-20 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />
          
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full glass-card glossy-border flex items-center justify-center mb-8 group-hover:border-[#CF00C7]/50 transition-all duration-500">
                <span className="text-[#CF00C7] font-black text-xl">{step.num}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{step.title}</h3>
              <p className="text-[#909292] leading-relaxed max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 max-w-2xl mx-auto glass-card p-10 rounded-[8px] glossy-border">
          <h4 className="text-white font-bold text-xl mb-4">What makes us different?</h4>
          <p className="text-[#909292]">We aren't just 'integrators'. We are agency veterans and AI engineers. We build systems that focus on <span className="text-[#C4C4C4] font-semibold">Margin Retention</span>, not just 'saving time'. We care about the bottom line.</p>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
