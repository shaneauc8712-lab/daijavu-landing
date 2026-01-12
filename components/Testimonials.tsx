
import React from 'react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Marcus Aurelius",
      role: "CEO, Stoic Media",
      text: "We were operating on gut feelings. DAIJAVU gave us hard numbers. Our gross margin jumped from 18% to 42% in four months.",
      stat: "+24% Margin"
    },
    {
      name: "Sarah Chen",
      role: "Founder, Bloom Creative",
      text: "The automation DAIJAVU built replaced 2 full-time ops roles. The team is happier because the grunt work is gone.",
      stat: "$160k Saved/yr"
    }
  ];

  return (
    <section id="testimonials" className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((r, idx) => (
            <div key={idx} className="glass-card p-12 rounded-[8px] glossy-border relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                 <span className="text-[10px] font-black tracking-widest text-[#CF00C7] bg-[#CF00C7]/10 px-3 py-1 rounded-full uppercase">verified outcome</span>
              </div>
              
              <div className="mb-8">
                <span className="text-4xl font-bold text-white tracking-tighter">{r.stat}</span>
              </div>
              
              <p className="text-[#C4C4C4] text-lg leading-relaxed mb-10">"{r.text}"</p>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#909292] to-black border border-white/10" />
                <div>
                  <div className="text-white font-bold text-sm">{r.name}</div>
                  <div className="text-[#909292] text-xs uppercase tracking-widest">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
