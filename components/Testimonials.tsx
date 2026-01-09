import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../constants';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  return (
    <section className="py-24 bg-[#FEFEFE]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-[#522B00] text-center mb-16">
          Depoimentos de Clientes
        </h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden p-4">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {TESTIMONIALS.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-[#FFF4E7] rounded-3xl p-8 md:p-12 text-center relative shadow-sm">
                    <Quote className="absolute top-6 left-6 text-[#FDAE9C] opacity-40 w-12 h-12" />
                    
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#FEFEFE] shadow-md">
                      <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                    </div>
                    
                    <div className="flex justify-center mb-6 gap-1">
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-[#FDAE9C] fill-current" />
                      ))}
                    </div>

                    <p className="text-xl md:text-2xl text-[#522B00] italic mb-6 font-serif">
                      "{testimonial.text}"
                    </p>

                    <div>
                      <h4 className="font-bold text-[#522B00] text-lg">{testimonial.name}</h4>
                      <p className="text-[#522B00]/60 text-sm uppercase tracking-wider">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={prevSlide}
            className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 bg-[#522B00] text-white p-3 rounded-full hover:bg-[#FDAE9C] transition-colors shadow-lg z-10"
            aria-label="Anterior"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 bg-[#522B00] text-white p-3 rounded-full hover:bg-[#FDAE9C] transition-colors shadow-lg z-10"
            aria-label="Próximo"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center mt-8 gap-2">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-[#522B00] w-6' : 'bg-[#D4BFA5]'
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;