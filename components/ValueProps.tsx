
import React from 'react';
import { Eye, ShieldCheck, Umbrella } from 'lucide-react';

const ValueProps: React.FC = () => {
  const props = [
    {
      title: "Real-time Profitability",
      description: "Stop guessing. See your exact margin on every project, in real-time. No more month-end accounting surprises.",
      icon: <Eye className="w-6 h-6 text-[#CF00C7]" />
    },
    {
      title: "Self-Enforcing Systems",
      description: "Systems that don't need nagging. Automated workflows that enforce standards so you don't have to.",
      icon: <ShieldCheck className="w-6 h-6 text-[#CF00C7]" />
    },
    {
      title: "True Founder Freedom",
      description: "Step away from the Slack notifications. Our operating systems ensure your agency runs better without you than with you.",
      icon: <Umbrella className="w-6 h-6 text-[#CF00C7]" />
    }
  ];

  return (
    <section id="features" className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {props.map((prop, idx) => (
            <div key={idx} className="glass-card p-10 rounded-[8px] glossy-border group hover:bg-[#CF00C7]/5 transition-all duration-500">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {prop.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{prop.title}</h3>
              <p className="text-[#909292] leading-relaxed">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
