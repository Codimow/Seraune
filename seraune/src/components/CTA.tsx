import React from 'react';
import { ChevronRight } from 'lucide-react';

export const CTA = () => {
  const openCalendly = () => {
    // Open Calendly in a new tab as a fallback if the widget doesn't work
    window.open('https://calendly.com/codimo-dev', '_blank');
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-purple-500/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-fuchsia-500/10 rounded-full blur-[130px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-xl p-8 md:p-12 lg:p-16 rounded-2xl border border-purple-500/20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#232323_1px,transparent_1px),linear-gradient(to_bottom,#232323_1px,transparent_1px)] bg-[size:2rem_2rem]" />
          </div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-center">
              Ready to{' '}
              <span className="relative inline-block">
                Transform
                <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full blur-sm" />
              </span>
              {' '}Your Business?
            </h2>
            <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Join the ranks of successful businesses that have elevated their digital presence with our expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={openCalendly}
                className="group relative"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-lg blur group-hover:blur-md transition-all duration-300" />
                <span className="relative flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-lg group-hover:bg-slate-800/90 transition-colors text-lg">
                  Schedule a Call <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="group relative">
                <span className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative block border border-purple-500 text-purple-400 px-8 py-4 rounded-lg group-hover:text-white transition-colors text-lg">
                  Learn More
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};