import React, { useState } from 'react';
import { FAQS } from '../constants';
import { Plus, Minus, MessageCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-[#FEFEFE]">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-bold text-[#522B00] text-center mb-12">
          Perguntas Frequentes
        </h2>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className="border border-[#FFE4CB] rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#FDAE9C]"
            >
              <button
                className="w-full flex items-center justify-between p-6 bg-white text-left focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <span className="font-bold text-[#522B00] text-lg pr-4">{faq.question}</span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? 'bg-[#FDAE9C] text-[#522B00]' : 'bg-[#FFF4E7] text-[#522B00]'}`}>
                  {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-[#522B00]/80 border-t border-dashed border-[#FFE4CB] mt-2">
                  <p className="mb-4">{faq.answer}</p>
                  
                  {index === FAQS.length - 1 && (
                    <a href="https://wa.me/5561999999999" className="inline-flex items-center text-[#522B00] font-bold text-sm hover:text-[#FDAE9C]">
                      <MessageCircle size={16} className="mr-2" />
                      Falar no WhatsApp
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;