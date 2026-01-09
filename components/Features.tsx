import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-[#FFF4E7]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#522B00] mb-4">
            O Que Torna Nossas Mesas Únicas
          </h2>
          <div className="w-24 h-1 bg-[#FDAE9C] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature) => (
            <div 
              key={feature.id}
              className="bg-[#FEFEFE] p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group border border-transparent hover:border-[#FFE4CB]"
            >
              <div className="w-16 h-16 bg-[#FFE4CB] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#FDAE9C] transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-[#522B00]" />
              </div>
              <h3 className="text-2xl font-bold text-[#522B00] mb-4">
                {feature.title}
              </h3>
              <p className="text-[#522B00]/80 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;