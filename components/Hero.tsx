import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-[85vh] overflow-hidden flex items-center justify-center">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1587241321921-91a834d6d191?q=80&w=2070&auto=format&fit=crop")',
          transform: `translateY(${offset * 0.5}px)`,
        }}
      />
      
      {/* Overlay: #522B00 with 40% opacity */}
      <div className="absolute inset-0 bg-[#522B00] opacity-40"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in-up">
        <div className="inline-block mb-4 px-4 py-1 border border-[#FEFEFE]/30 rounded-full bg-[#FEFEFE]/10 backdrop-blur-sm text-[#FEFEFE] text-sm uppercase tracking-wider font-light">
          Assinatura da Chef Amanda
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#FEFEFE] mb-6 leading-tight drop-shadow-md">
          Mesas de Sobremesas que <br/> <span className="italic font-serif text-[#FDAE9C]">Roubam a Cena</span>
        </h1>
        
        <p className="text-lg md:text-xl text-[#FEFEFE]/90 max-w-2xl mx-auto mb-10 font-light">
          Cada detalhe pensado para transformar seu evento em uma experiência inesquecível de sabor e sofisticação.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="https://wa.me/5561999999999" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FDAE9C] text-[#522B00] hover:bg-[#fc9c85] px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-lg w-full sm:w-auto"
          >
            Criar Minha Mesa
          </a>
          <button 
            onClick={scrollToPortfolio}
            className="bg-transparent border-2 border-[#FEFEFE] text-[#FEFEFE] hover:bg-[#FEFEFE] hover:text-[#522B00] px-8 py-4 rounded-full font-semibold text-lg transition-all w-full sm:w-auto flex items-center justify-center gap-2"
          >
            Ver Portfólio <ArrowDown size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;