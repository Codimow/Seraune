import React from 'react';
import { ChevronRight } from 'lucide-react';

export const Hero = () => {
  return (
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
  );
};