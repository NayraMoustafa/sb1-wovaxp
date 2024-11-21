import React from 'react';
import { Camera, Film, Award } from 'lucide-react';

const stats = [
  { icon: Camera, label: "Projects Completed", value: "150+", color: "text-amber-400" },
  { icon: Film, label: "Brand Campaigns", value: "75+", color: "text-amber-400" },
  { icon: Award, label: "Design Awards", value: "12", color: "text-amber-400" }
];

export function Stats() {
  return (
    <section id="about" className="container mx-auto px-6 mb-20 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map(({ icon: Icon, label, value, color }) => (
          <div key={label} className="glass-card rounded-2xl p-6 text-center relative overflow-hidden group">
            <div className="highlight opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                 style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
            <Icon className={`w-8 h-8 mx-auto mb-4 ${color}`} />
            <h3 className="text-white text-3xl font-bold mb-2">{value}</h3>
            <p className="text-white/70">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}