
import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, ResponsiveContainer, YAxis, Tooltip } from 'recharts';

const data = [
  { margin: 12 }, { margin: 15 }, { margin: 14 }, { margin: 18 }, { margin: 22 }, { margin: 21 }, { margin: 28 }, { margin: 32 }
];

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-32 overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-[#CF00C7]/20 bg-[#CF00C7]/5 text-[#CF00C7] text-xs font-semibold tracking-wider uppercase">
            Built for Scaled Agencies
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[1.1]">
            Stop bleeding margin. <br />
            <span className="text-[#909292]">Keep your best people.</span>
          </h1>
          
          <p className="text-xl text-[#909292] max-w-lg leading-relaxed">
            AI-powered operating systems that run themselves. We audit your bottlenecks and build custom automation in 30 days.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button className="px-8 py-4 rounded-[4px] cta-gradient text-white text-lg font-bold transition-all hover:scale-105 magenta-glow">
              Book Your Bottleneck Audit
            </button>
            <div className="flex items-center gap-3 px-4 py-4 rounded-[4px] border border-white/10 text-[#909292] text-sm">
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              Available for Q1 2024 Projects
            </div>
          </div>
        </motion.div>

        {/* Glossy Abstract UI Component */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-20 glass-card rounded-[8px] p-8 glossy-border w-full max-w-[500px] mx-auto overflow-hidden">
            <div className="flex items-center justify-between mb-8">
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500/40" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/40" />
                <div className="w-2 h-2 rounded-full bg-green-500/40" />
              </div>
              <span className="text-[10px] text-[#909292] uppercase tracking-widest font-bold">DAIJAVU SYSTEM v2.4</span>
            </div>

            <div className="space-y-6">
              <div className="flex justify-between items-end">
                <div>
                  <div className="text-[10px] text-[#909292] uppercase font-bold mb-1">Agency Profitability</div>
                  <div className="text-3xl font-bold text-white tracking-tighter">32.4% <span className="text-xs text-green-500">+12%</span></div>
                </div>
                <div className="text-[10px] text-[#CF00C7] font-bold">OPTIMIZED</div>
              </div>

              <div className="h-40 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <Line type="monotone" dataKey="margin" stroke="#CF00C7" strokeWidth={3} dot={false} />
                    <Tooltip content={() => null} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                <div className="p-3 bg-white/5 rounded-[4px]">
                  <div className="text-[9px] text-[#909292] uppercase font-bold">Resource Burn</div>
                  <div className="text-lg font-bold text-white">4.2%</div>
                </div>
                <div className="p-3 bg-white/5 rounded-[4px]">
                  <div className="text-[9px] text-[#909292] uppercase font-bold">System Latency</div>
                  <div className="text-lg font-bold text-white">0.0ms</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Background Glows */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#CF00C7]/10 blur-[100px] z-10" />
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#7F6FEA]/10 blur-[100px] z-10" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
