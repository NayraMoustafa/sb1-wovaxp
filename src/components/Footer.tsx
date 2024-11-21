import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  { icon: Github, label: "GitHub", color: "text-amber-400" },
  { icon: Linkedin, label: "LinkedIn", color: "text-amber-400" },
  { icon: Mail, label: "Email", color: "text-amber-400" }
];

export function Footer() {
  return (
    <footer id="contact" className="container mx-auto px-6 relative z-10 mb-20">
      <div className="glass rounded-2xl p-8 relative overflow-hidden">
        <div className="highlight highlight-primary w-[400px] h-[400px]" style={{ bottom: '-50%', left: '25%' }} />
        <div className="flex flex-col md:flex-row justify-between items-center relative z-10">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2 text-white glow">Let's Create Together</h3>
            <p className="text-white/80">Open for collaborations and opportunities</p>
          </div>
          <div className="flex space-x-4">
            {socialLinks.map(({ icon: Icon, label, color }) => (
              <button key={label} className="glass-card p-3 rounded-full hover:scale-110 transition-transform duration-300">
                <Icon className={`w-5 h-5 ${color}`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}