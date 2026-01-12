
import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const BookingSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="audit" className="py-32 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          <div>
            <h2 className="text-5xl font-bold text-white tracking-tighter mb-8 leading-tight">
              Ready to stop <br />
              bleeding margin?
            </h2>
            <p className="text-xl text-[#909292] mb-12 leading-relaxed">
              Schedule your 25-minute Bottleneck Audit. We'll show you exactly where the leaks are. No hard pitch, just data.
            </p>
            
            <ul className="space-y-6">
              {[
                "Custom Margin Map of your agency",
                "Identification of top 3 automation wins",
                "Full project roadmap in 30 days"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-[#CF00C7] shrink-0 mt-1" />
                  <span className="text-[#C4C4C4] font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card p-10 rounded-[8px] glossy-border relative">
            {submitted ? (
              <div className="py-20 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#CF00C7]/10 flex items-center justify-center mx-auto mb-6">
                   <CheckCircle2 className="w-8 h-8 text-[#CF00C7]" />
                </div>
                <h3 className="text-2xl font-bold text-white">Application Received</h3>
                <p className="text-[#909292]">Our system is analyzing your profile. <br /> Expect a calendar link within 2 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-[#909292] uppercase tracking-widest">Full Name</label>
                  <input 
                    required 
                    type="text" 
                    placeholder="Marcus Aurelius"
                    className="w-full bg-white/5 border border-white/10 rounded-[4px] px-4 py-3 text-white focus:border-[#CF00C7]/50 focus:outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-[#909292] uppercase tracking-widest">Agency Email</label>
                  <input 
                    required 
                    type="email" 
                    placeholder="ceo@agency.com"
                    className="w-full bg-white/5 border border-white/10 rounded-[4px] px-4 py-3 text-white focus:border-[#CF00C7]/50 focus:outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-[#909292] uppercase tracking-widest">Current Annual Revenue</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-[4px] px-4 py-3 text-white focus:border-[#CF00C7]/50 focus:outline-none transition-colors">
                    <option className="bg-black">$2M - $5M</option>
                    <option className="bg-black">$5M - $15M</option>
                    <option className="bg-black">$15M+</option>
                  </select>
                </div>
                
                <button 
                  type="submit"
                  className="w-full py-4 rounded-[4px] cta-gradient text-white font-bold flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-95 magenta-glow"
                >
                  Confirm Application <ArrowRight className="w-4 h-4" />
                </button>
                
                <p className="text-[10px] text-center text-[#909292] uppercase font-bold tracking-tighter">
                  Secure Data Encryption Enabled
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default BookingSection;
