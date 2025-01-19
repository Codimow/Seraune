import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#232323_1px,transparent_1px),linear-gradient(to_bottom,#232323_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 animate-gradient" />
      </div>

      <div 
        className="fixed w-[800px] h-[800px] rounded-full pointer-events-none mix-blend-screen opacity-30 blur-[100px] transition-transform duration-300"
        style={{
          background: 'radial-gradient(circle, rgba(147,51,234,0.5) 0%, rgba(126,34,206,0.3) 50%, transparent 70%)',
          transform: `translate(${mousePosition.x - 400}px, ${mousePosition.y - 400}px)`,
        }}
      />

      <Navbar />
      
      <main className="relative">
        <Hero />
        <Services />
        <Features />
        <Testimonials />
        <CTA />
        <Footer />
      </main>
    </div>
  );
}

export default App;