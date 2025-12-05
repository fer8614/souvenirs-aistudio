import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const reviews = [
    {
      name: "Maria González",
      role: "Principiante",
      text: "Nunca había agarrado una aguja de crochet. Con este pack hice 50 llaveros para el bautizo de mi sobrina en un fin de semana. ¡Todos quedaron encantados!",
      img: "https://picsum.photos/100/100?random=20"
    },
    {
      name: "Sofia R.",
      role: "Emprendedora",
      text: "La guía de precios me abrió los ojos. Estaba cobrando muy poco. Ahora vendo mis souvenirs al doble y mis clientes están felices por la calidad.",
      img: "https://picsum.photos/100/100?random=21"
    },
    {
      name: "Carmen L.",
      role: "Ama de casa",
      text: "Lo mejor es que son proyectos rápidos. En 20 minutos termino un corazón. Es perfecto para vender por cantidad sin cansarme tanto.",
      img: "https://picsum.photos/100/100?random=22"
    },
    {
      name: "Patricia Duran",
      role: "Tejedora Hobby",
      text: "El tapete de oso gigante es espectacular. Seguí el paso a paso y me quedó idéntico. Ya tengo 3 encargos para habitaciones de bebé.",
      img: "https://picsum.photos/100/100?random=23"
    },
    {
      name: "Laura Mendez",
      role: "Dueña de Tienda",
      text: "Los bonos de redes sociales valen oro. Apliqué los consejos y vendí todo mi stock de porta macetas en Instagram en solo 2 días.",
      img: "https://picsum.photos/100/100?random=24"
    }
  ];

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % reviews.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000); // Auto-advance every 6 seconds
    return () => clearInterval(interval);
  }, [activeIndex]); // Re-run effect when index changes to reset timer

  return (
    <section className="py-24 bg-stone-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl text-center font-serif font-bold text-stone-900 mb-4">
          Lo que dicen nuestras alumnas
        </h2>
        <p className="text-center text-stone-600 mb-12 max-w-xl mx-auto">
          Únete a cientos de mujeres que ya están generando ingresos con sus manos.
        </p>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Main Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-stone-100 p-8 sm:p-12 relative min-h-[300px] flex flex-col justify-center transition-all duration-500 transform">
            <div className="absolute top-6 left-8 text-brand-100 opacity-50">
              <Quote size={64} fill="currentColor" />
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12 animate-fade-in">
              {/* Image */}
              <div className="shrink-0">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-brand-50 p-1 shadow-inner">
                  <img 
                    src={reviews[activeIndex].img} 
                    alt={reviews[activeIndex].name} 
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={20} className="text-accent-400 fill-accent-400" />
                  ))}
                </div>
                
                <p className="text-xl sm:text-2xl text-stone-700 italic font-serif leading-relaxed mb-6">
                  "{reviews[activeIndex].text}"
                </p>
                
                <div>
                  <h4 className="font-bold text-xl text-stone-900">{reviews[activeIndex].name}</h4>
                  <span className="text-brand-600 font-medium text-sm uppercase tracking-wide">
                    {reviews[activeIndex].role}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 bg-white hover:bg-brand-50 text-stone-800 hover:text-brand-600 p-3 rounded-full shadow-lg border border-stone-200 transition-all z-20 group"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 bg-white hover:bg-brand-50 text-stone-800 hover:text-brand-600 p-3 rounded-full shadow-lg border border-stone-200 transition-all z-20 group"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === activeIndex 
                    ? 'bg-brand-600 w-8' 
                    : 'bg-stone-300 hover:bg-stone-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;