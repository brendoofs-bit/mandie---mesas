import React, { useState } from 'react';
import { Calendar, MessageCircle, Check, Clock, Shield } from 'lucide-react';
import ContactForm from './ContactForm';

const FinalCTA: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <section className="relative py-32 overflow-hidden flex items-center justify-center">
        {/* Background */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=2136&auto=format&fit=crop")',
          }}
        />
        <div className="absolute inset-0 bg-[#522B00] opacity-80 backdrop-blur-[2px]"></div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#FEFEFE] mb-6 leading-tight max-w-4xl mx-auto">
            Vamos Criar Juntos uma Mesa que seus Convidados <span className="text-[#FDAE9C]">Nunca Esquecerão?</span>
          </h2>
          
          <p className="text-xl text-[#FEFEFE]/80 mb-10 max-w-2xl mx-auto">
            Entre em contato agora e receba uma proposta personalizada em até 24 horas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a 
              href="https://wa.me/5561999999999" 
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#FDAE9C] text-[#522B00] hover:bg-[#fc9c85] px-8 py-5 rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-xl animate-pulse"
            >
              <MessageCircle size={20} />
              Solicitar Orçamento Personalizado
            </a>
            <button 
              onClick={() => setIsFormOpen(true)}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent border-2 border-[#FEFEFE] text-[#FEFEFE] hover:bg-[#FEFEFE] hover:text-[#522B00] px-8 py-5 rounded-full font-bold text-lg transition-all"
            >
              <Calendar size={20} />
              Agendar Degustação
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-[#FEFEFE]/70 text-sm font-medium">
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-[#FDAE9C]" />
              Resposta em até 24h
            </div>
            <div className="flex items-center gap-2">
              <Shield size={16} className="text-[#FDAE9C]" />
              Orçamento sem compromisso
            </div>
            <div className="flex items-center gap-2">
              <Check size={16} className="text-[#FDAE9C]" />
              Satisfação garantida
            </div>
          </div>
        </div>
      </section>

      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
};

export default FinalCTA;