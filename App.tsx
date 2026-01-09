import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Flavors from './components/Flavors';
import FAQ from './components/FAQ';
import Stats from './components/Stats';
import Comparison from './components/Comparison';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FFF4E7] overflow-x-hidden">
      <Hero />
      <Features />
      <Gallery />
      <Process />
      <Testimonials />
      <Flavors />
      <FAQ />
      <Stats />
      <Comparison />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;