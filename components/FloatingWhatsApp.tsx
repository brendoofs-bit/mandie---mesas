import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href="https://wa.me/5561999999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20as%20mesas%20de%20sobremesas."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#20b85c] text-white px-5 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 group"
      aria-label="Falar no WhatsApp"
    >
      <span className="font-semibold hidden sm:inline text-sm">Criar Minha Mesa</span>
      <div className="relative">
        <MessageCircle className="w-6 h-6 animate-bounce" />
        <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
      </div>
    </a>
  );
};

export default FloatingWhatsApp;