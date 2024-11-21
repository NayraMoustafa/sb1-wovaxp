import React from 'react';
import { Palette } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="fixed w-full z-50 top-0 glass">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Palette className="w-6 h-6 text-amber-400" />
            <span className="text-xl text-white font-semibold">SARAH.STUDIO</span>
          </div>
          <div className="hidden md:flex space-x-4">
            {['work', 'about', 'contact'].map((item) => (
              <button
                key={item}
                className="nav-link"
                onClick={() => document.getElementById(item)?.scrollIntoView({ behavior: 'smooth' })}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}