import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 transition-all duration-300">
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
              {['Services', 'Features', 'About Us', 'Contact'].map((item) => (
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

      {/* Mobile Navigation */}
      <div className={`
        fixed inset-0 bg-slate-900/98 backdrop-blur-xl transform transition-transform duration-300 ease-in-out md:hidden
        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {['Services', 'Features', 'About Us', 'Contact'].map((item) => (
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
  );
};