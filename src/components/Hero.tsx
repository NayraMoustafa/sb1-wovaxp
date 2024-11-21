import React from 'react';
import { ChevronRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 relative z-10">
      <div className="container mx-auto">
        <div className="glass rounded-3xl p-8 md:p-12 max-w-4xl mx-auto relative overflow-hidden">
          <div className="highlight highlight-primary w-[400px] h-[400px]" style={{ top: '-50%', right: '-25%' }} />
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white glow">
            Sarah Anderson
            <br />
            Visual Storyteller
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-2xl">
            Award-winning Art Director specializing in brand identity, editorial design,
            and visual storytelling. Creating immersive experiences that connect and inspire.
          </p>
          <button className="glass-card px-8 py-4 rounded-full flex items-center space-x-2 relative z-10 group">
            <span>Explore Portfolio</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}