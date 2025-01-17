import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, ChevronRight, Briefcase, Users, Target } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
      {/* Enhanced Grid Background with Animated Gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#232323_1px,transparent_1px),linear-gradient(to_bottom,#232323_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 animate-gradient" />
      </div>

      {/* Dynamic Mouse-following Aura */}
      <div 
        className="fixed w-[800px] h-[800px] rounded-full pointer-events-none mix-blend-screen opacity-30 blur-[100px] transition-transform duration-300"
        style={{
          background: 'radial-gradient(circle, rgba(147,51,234,0.5) 0%, rgba(126,34,206,0.3) 50%, transparent 70%)',
          transform: `translate(${mousePosition.x - 400}px, ${mousePosition.y - 400}px)`,
        }}
      />

      {/* Enhanced Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-900/80 backdrop-blur-xl border-b border-purple-500/20 py-2' 
          : 'bg-transparent py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0 relative group">
              <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent relative z-10">
                Seraune
              </span>
              <div className="absolute inset-0 bg-purple-500/20 blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                {['Services', 'About Us', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="relative group"
                  >
                    <span className="text-gray-300 hover:text-purple-400 transition-colors">
                      {item}
                    </span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-fuchsia-500 group-hover:w-full transition-all duration-300" />
                  </a>
                ))}
                <button className="relative group">
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-lg blur group-hover:blur-md transition-all duration-300" />
                  <span className="relative block bg-slate-900 text-white px-6 py-2 rounded-lg group-hover:bg-slate-800/90 transition-colors">
                    Get Started
                  </span>
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative z-50 text-gray-400 hover:text-white transition-colors duration-200"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div className={`
          fixed inset-0 bg-slate-900/98 backdrop-blur-xl transform transition-transform duration-300 ease-in-out md:hidden
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}>
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {['Services', 'About Us', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-2xl text-gray-300 hover:text-purple-400 transition-colors relative group"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>{item}</span>
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-fuchsia-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <button className="mt-8 relative group">
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-lg blur group-hover:blur-md transition-all duration-300" />
              <span className="relative block bg-slate-900 text-white px-8 py-3 rounded-lg group-hover:bg-slate-800/90 transition-colors">
                Get Started
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <main className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <div className="relative">
            {/* Animated Circles Background */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full mix-blend-screen animate-pulse"
                  style={{
                    width: `${300 + i * 100}px`,
                    height: `${300 + i * 100}px`,
                    background: `radial-gradient(circle, rgba(147,51,234,${0.1 - i * 0.02}) 0%, transparent 70%)`,
                    top: `${50 + i * 20}%`,
                    left: `${50 + i * 10}%`,
                    transform: 'translate(-50%, -50%)',
                    animationDelay: `${i * 0.5}s`,
                  }}
                />
              ))}
            </div>

            <div className="relative text-center">
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 relative">
                <span className="relative inline-block">
                  Transform
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500 to-fuchsia-500 opacity-20 blur-2xl -z-10" />
                </span>
                {' '}
                <span className="relative inline-block">
                  Your
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-fuchsia-500 to-purple-500 opacity-20 blur-2xl -z-10" />
                </span>
                {' '}
                <span className="block mt-2 bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent">
                  Digital Presence
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                We craft digital experiences that captivate, engage, and deliver results for forward-thinking businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="group relative">
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-lg blur group-hover:blur-md transition-all duration-300" />
                  <span className="relative flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-lg group-hover:bg-slate-800/90 transition-colors">
                    Get Started <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button className="relative group">
                  <span className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative block border border-purple-500 text-purple-400 px-8 py-4 rounded-lg group-hover:text-white transition-colors">
                    Learn More
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section - Kept as is */}
        <section id="services" className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Briefcase className="text-purple-400" size={32} />,
                  title: "Digital Strategy",
                  description: "Comprehensive digital solutions tailored to your business goals"
                },
                {
                  icon: <Target className="text-purple-400" size={32} />,
                  title: "Brand Development",
                  description: "Create a compelling brand identity that resonates with your audience"
                },
                {
                  icon: <Users className="text-purple-400" size={32} />,
                  title: "Marketing Solutions",
                  description: "Data-driven marketing strategies to grow your business"
                }
              ].map((service, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-colors">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Contact Section */}
        <section id="contact" className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900/10 to-slate-900 opacity-50" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Get in Touch</h2>
            <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
              <a href="tel:+1234567890" className="group flex items-center gap-3 bg-slate-800/50 backdrop-blur-sm px-6 py-4 rounded-lg border border-slate-700 hover:border-purple-500/50 transition-all">
                <div className="relative">
                  <Phone size={24} className="text-purple-400 group-hover:scale-110 transition-transform" />
                  <div className="absolute inset-0 bg-purple-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">+1 (234) 567-890</span>
              </a>
              <a href="mailto:contact@seraune.com" className="group flex items-center gap-3 bg-slate-800/50 backdrop-blur-sm px-6 py-4 rounded-lg border border-slate-700 hover:border-purple-500/50 transition-all">
                <div className="relative">
                  <Mail size={24} className="text-purple-400 group-hover:scale-110 transition-transform" />
                  <div className="absolute inset-0 bg-purple-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">contact@seraune.com</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;