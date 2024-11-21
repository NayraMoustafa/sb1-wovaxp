import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Gallery } from './components/Gallery';
import { Stats } from './components/Stats';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="parallax-wrapper">
      <div className="parallax-bg" />
      <div className="content">
        <Navigation />
        <Hero />
        <Gallery />
        <Stats />
        <Footer />
      </div>
    </div>
  );
}

export default App;