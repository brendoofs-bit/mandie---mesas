import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../constants';
import { GalleryItem } from '../types';
import { X, ZoomIn } from 'lucide-react';

const categories = [
  { id: 'todos', label: 'Todas' },
  { id: 'casamentos', label: 'Casamentos' },
  { id: 'aniversarios', label: 'Aniversários' },
  { id: 'corporativo', label: 'Corporativos' },
  { id: 'bodas', label: 'Bodas' },
];

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('todos');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems = filter === 'todos' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-[#FEFEFE]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[#522B00] mb-4">
            Portfólio de Mesas Criadas
          </h2>
          <p className="text-[#522B00]/70 text-lg">Inspiradas em histórias reais, criadas com amor.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 text-sm md:text-base font-medium
                ${filter === cat.id 
                  ? 'bg-[#522B00] text-[#FEFEFE] shadow-lg scale-105' 
                  : 'bg-[#FFF4E7] text-[#522B00] hover:bg-[#FFE4CB]'}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry-ish Grid (using CSS columns for simplicity and effectiveness) */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="break-inside-avoid relative group overflow-hidden rounded-xl cursor-pointer shadow-md"
              onClick={() => setSelectedImage(item)}
            >
              <img 
                src={item.src} 
                alt={item.title} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#522B00]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
                <h3 className="text-[#FEFEFE] font-serif text-xl font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item.title}
                </h3>
                <p className="text-[#FDAE9C] text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {item.description}
                </p>
                <div className="mt-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  <ZoomIn size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://wa.me/5561999999999" 
            className="inline-block border-b-2 border-[#522B00] text-[#522B00] font-bold text-lg hover:text-[#FDAE9C] hover:border-[#FDAE9C] transition-colors pb-1"
          >
            Quero uma mesa assim no meu evento
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-[#522B00]/95 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-[#FDAE9C] transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={40} />
          </button>
          
          <div 
            className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage.src} 
              alt={selectedImage.title} 
              className="w-full max-h-[80vh] object-contain bg-black"
            />
            <div className="p-6 bg-[#FEFEFE] text-center">
              <h3 className="text-2xl font-serif font-bold text-[#522B00]">{selectedImage.title}</h3>
              <p className="text-[#522B00]/70">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;