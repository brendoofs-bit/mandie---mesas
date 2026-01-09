import React from 'react';
import { PROCESS_STEPS } from '../constants';

const Process: React.FC = () => {
  return (
    <section className="py-24 bg-[#FFF4E7]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-[#522B00] mb-4">
            Como Funciona o Processo
          </h2>
          <p className="text-lg text-[#522B00]/70">Transparência e redução de fricção na decisão</p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line for Desktop/Mobile */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-[#D4BFA5] md:-ml-0.5"></div>

          <div className="space-y-12">
            {PROCESS_STEPS.map((step, index) => (
              <div key={step.id} className={`relative flex items-center md:justify-between ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                
                {/* Icon Circle */}
                <div className="absolute left-8 md:left-1/2 -ml-4 md:-ml-8 w-16 h-16 rounded-full bg-[#FEFEFE] border-4 border-[#FDAE9C] flex items-center justify-center z-10 shadow-lg">
                  <step.icon className="w-6 h-6 md:w-8 md:h-8 text-[#522B00]" />
                </div>

                {/* Content */}
                <div className={`ml-20 md:ml-0 md:w-[45%] p-6 bg-[#FEFEFE] rounded-2xl shadow-md border-l-4 border-[#FDAE9C] hover:shadow-xl transition-shadow duration-300 ${index % 2 === 0 ? 'md:text-right md:border-l-0 md:border-r-4' : ''}`}>
                  <div className="text-[#FDAE9C] font-bold text-6xl opacity-20 absolute top-2 right-4 leading-none select-none">
                    {step.id}
                  </div>
                  <h3 className="text-xl font-bold text-[#522B00] mb-2 relative z-10">{step.title}</h3>
                  <p className="text-[#522B00]/80 relative z-10">{step.description}</p>
                </div>
                
                {/* Spacer for desktop layout balance */}
                <div className="hidden md:block md:w-[45%]"></div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <a 
              href="https://wa.me/5561999999999" 
              className="inline-flex items-center justify-center bg-[#522B00] text-[#FEFEFE] hover:bg-[#3d2000] px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl"
            >
              Iniciar Conversa Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;