import React from 'react';
import { Zap, Shield, Sparkles } from 'lucide-react';

export const Features = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-fuchsia-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 relative inline-block">
            Why Choose Us
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full" />
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experience the difference with our cutting-edge solutions and dedicated team
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Zap className="text-purple-400" size={32} />,
              title: "Lightning Fast",
              description: "Optimized performance ensuring your digital presence loads in milliseconds"
            },
            {
              icon: <Shield className="text-purple-400" size={32} />,
              title: "Secure by Design",
              description: "Built-in security measures to protect your digital assets"
            },
            {
              icon: <Sparkles className="text-purple-400" size={32} />,
              title: "Modern UI/UX",
              description: "Beautiful, intuitive interfaces that delight your users"
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="group relative bg-slate-800/30 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-purple-500/50 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
              
              <div className="relative">
                <div className="mb-6 relative">
                  <div className="relative z-10">
                    {feature.icon}
                  </div>
                  <div className="absolute inset-0 bg-purple-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-400 transition-colors duration-500">
                  {feature.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-500">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};