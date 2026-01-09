import React from 'react';
import { X } from 'lucide-react';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Obrigado! Entraremos em contato em breve.");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-[#522B00]/60 backdrop-blur-sm">
      <div className="bg-[#FEFEFE] rounded-2xl shadow-2xl w-full max-w-lg relative overflow-hidden animate-fade-in-up">
        <div className="bg-[#FFF4E7] p-6 border-b border-[#FFE4CB] flex justify-between items-center">
          <h3 className="text-2xl font-bold text-[#522B00]">Solicitar Proposta</h3>
          <button onClick={onClose} className="text-[#522B00] hover:text-[#FDAE9C]">
            <X size={24} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-8 space-y-4">
          <div>
            <label className="block text-sm font-bold text-[#522B00] mb-1">Nome Completo*</label>
            <input required type="text" className="w-full border border-[#D4BFA5] rounded-lg p-3 focus:outline-none focus:border-[#FDAE9C] focus:ring-1 focus:ring-[#FDAE9C]" placeholder="Seu nome" />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
             <div>
                <label className="block text-sm font-bold text-[#522B00] mb-1">WhatsApp*</label>
                <input required type="tel" className="w-full border border-[#D4BFA5] rounded-lg p-3 focus:outline-none focus:border-[#FDAE9C]" placeholder="(61) 99999-9999" />
             </div>
             <div>
                <label className="block text-sm font-bold text-[#522B00] mb-1">Data do Evento*</label>
                <input required type="date" className="w-full border border-[#D4BFA5] rounded-lg p-3 focus:outline-none focus:border-[#FDAE9C]" />
             </div>
          </div>

          <div>
             <label className="block text-sm font-bold text-[#522B00] mb-1">Tipo de Evento</label>
             <select className="w-full border border-[#D4BFA5] rounded-lg p-3 focus:outline-none focus:border-[#FDAE9C] bg-white">
                <option>Casamento</option>
                <option>Aniversário</option>
                <option>Corporativo</option>
                <option>Outro</option>
             </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-[#522B00] mb-1">Mensagem (Opcional)</label>
            <textarea className="w-full border border-[#D4BFA5] rounded-lg p-3 focus:outline-none focus:border-[#FDAE9C] h-24" placeholder="Conte mais detalhes sobre seu sonho..."></textarea>
          </div>

          <button type="submit" className="w-full bg-[#522B00] text-[#FEFEFE] font-bold py-4 rounded-lg hover:bg-[#3d2000] transition-colors mt-2">
            Receber Proposta Personalizada
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;