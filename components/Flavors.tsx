import React from 'react';
import { ChevronRight } from 'lucide-react';

const classics = [
  "Pavlova de Frutas Vermelhas",
  "Torta de Maçã com Especiarias",
  "Banoffee Premium",
  "Cheesecake de Frutas Vermelhas",
  "Brownie de Chocolate Belga",
  "Mousse de Maracujá",
  "Mini Éclairs Sortidos"
];

const Flavors: React.FC = () => {
  return (
    <section className="py-24 bg-[#FFE4CB]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#522B00] mb-4">
            Sabores Clássicos e Exclusivos
          </h2>
          <p className="text-[#522B00]/70">Despertar desejo através dos produtos</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Left Column: Classics List */}
          <div className="bg-[#FEFEFE] p-8 md:p-12 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-bold text-[#522B00] mb-8 border-b border-[#FFE4CB] pb-4">
              Nossos Clássicos Atemporais
            </h3>
            <ul className="space-y-4">
              {classics.map((item, index) => (
                <li key={index} className="flex items-center group cursor-default">
                  <div className="w-10 h-10 rounded-full bg-[#FFE4CB] flex items-center justify-center mr-4 group-hover:bg-[#FDAE9C] transition-colors overflow-hidden">
                    <img src={`https://picsum.photos/seed/${index}/100/100`} alt="Doce" className="w-full h-full object-cover opacity-80 group-hover:opacity-100" />
                  </div>
                  <span className="text-lg text-[#522B00] font-medium group-hover:translate-x-2 transition-transform duration-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Persuasive Text */}
          <div className="space-y-8">
            <h3 className="text-3xl font-serif font-bold text-[#522B00]">
              Criações Personalizadas
            </h3>
            <div className="prose text-[#522B00]/80 text-lg leading-relaxed">
              <p className="border-l-4 border-[#FDAE9C] pl-6 italic">
                "Além dos nossos clássicos premiados, desenvolvemos sabores exclusivos baseados nas suas preferências. 
                Gosta de doce de leite? Adora frutas cítricas? Prefere chocolate amargo? 
                Transformamos suas ideias e gostos pessoais em sobremesas únicas que contam a sua história."
              </p>
            </div>
            
            <a 
              href="https://wa.me/5561999999999" 
              className="group inline-flex items-center gap-3 bg-[#522B00] text-[#FEFEFE] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#3d2000] transition-all shadow-lg"
            >
              Criar Meus Sabores Exclusivos
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="grid grid-cols-2 gap-4 mt-8">
               <img src="https://picsum.photos/id/102/300/200" alt="Detail 1" className="rounded-xl shadow-md transform hover:scale-105 transition-transform" />
               <img src="https://picsum.photos/id/488/300/200" alt="Detail 2" className="rounded-xl shadow-md transform hover:scale-105 transition-transform mt-8" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Flavors;