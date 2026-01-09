import React from 'react';
import { Instagram, MapPin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#522B00] text-[#FEFEFE] py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <div>
            <h4 className="text-2xl font-serif font-bold mb-2">Mandiê Doceria</h4>
            <p className="text-white/60 text-sm max-w-xs">
              Transformando açúcar em arte e momentos em memórias eternas.
            </p>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#FDAE9C] transition-colors"><Instagram /></a>
            <a href="#" className="hover:text-[#FDAE9C] transition-colors"><MapPin /></a>
            <a href="#" className="hover:text-[#FDAE9C] transition-colors"><Mail /></a>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/40">
          <p>© {new Date().getFullYear()} Mandiê Doceria. Todos os direitos reservados. Brasília - DF.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;