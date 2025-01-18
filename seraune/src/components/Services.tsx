import React from 'react';
import { Briefcase, Target, Users } from 'lucide-react';

export const Services = () => {
  return (
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
  );
};