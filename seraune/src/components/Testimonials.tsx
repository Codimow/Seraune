import React from 'react';
import { Quote, Star } from 'lucide-react';

export const Testimonials = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-fuchsia-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 relative inline-block">
            Client Success Stories
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full" />
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover how we've helped businesses transform their digital presence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Johnson",
              role: "CEO, TechVision",
              image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200",
              quote: "Seraune transformed our online presence completely. Their attention to detail and innovative approach exceeded our expectations.",
              rating: 5
            },
            {
              name: "Michael Chen",
              role: "Founder, InnovateLab",
              image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200",
              quote: "Working with Seraune was a game-changer for our business. They delivered exceptional results with remarkable efficiency.",
              rating: 5
            },
            {
              name: "Emma Davis",
              role: "Marketing Director, GrowthX",
              image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&h=200",
              quote: "The team's creativity and technical expertise helped us achieve our digital goals far beyond what we imagined possible.",
              rating: 5
            }
          ].map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-slate-800/30 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-purple-500/50 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
              
              <div className="relative">
                <div className="absolute -top-4 -left-2 text-purple-500/20">
                  <Quote size={48} className="group-hover:text-purple-500/30 transition-colors duration-500" />
                </div>

                <div className="relative z-10">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-purple-400 text-purple-400 group-hover:fill-purple-500 group-hover:text-purple-500 transition-colors duration-500"
                      />
                    ))}
                  </div>

                  <blockquote className="text-gray-400 group-hover:text-gray-300 transition-colors duration-500 mb-6">
                    "{testimonial.quote}"
                  </blockquote>

                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-purple-500/20 group-hover:ring-purple-500/40 transition-all duration-500">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute inset-0 bg-purple-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <div>
                      <div className="font-semibold text-white group-hover:text-purple-400 transition-colors duration-500">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-500">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};