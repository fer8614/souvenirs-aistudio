import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Bonuses from './components/Bonuses';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';

export default function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Hero />
      <Features />
      <Gallery />
      <Bonuses />
      <Testimonials />
      <Pricing />
      <Footer />
      <StickyCTA />
    </div>
  );
}