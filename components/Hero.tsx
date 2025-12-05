import React from 'react';
import { Sparkles, Clock, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white pt-10 pb-20 lg:pt-20 lg:pb-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-sm font-semibold mb-6 animate-pulse">
              <Sparkles size={16} />
              <span>Oferta por Tiempo Limitado</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-stone-900 leading-tight mb-6">
              <span className="text-brand-600">MEGA PACK:</span> Souvenirs Rentables en Crochet y Trapillo
            </h1>
            
            <p className="text-lg sm:text-xl text-stone-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Aprende a crear souvenirs hermosos, modernos y listos para vender — incluso si eres principiante total. 
              <span className="block mt-2 font-semibold text-stone-800">
                ¡Tu primer pedido listo en menos de 24 horas!
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={scrollToPricing}
                className="bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transform transition hover:-translate-y-1 hover:shadow-xl text-lg flex items-center justify-center gap-2"
              >
                ¡Quiero el Descuento Hoy!
                <span className="bg-white/20 px-2 py-0.5 rounded text-sm line-through opacity-80">$49</span>
                <span className="text-white font-extrabold">$9.99</span>
              </button>
            </div>

            <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-stone-500">
              <div className="flex items-center gap-1">
                <Clock size={16} className="text-brand-500" />
                <span>Acceso Inmediato</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle2 size={16} className="text-brand-500" />
                <span>Garantía de Satisfacción</span>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="flex-1 relative w-full max-w-lg lg:max-w-xl">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-brand-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-accent-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            
            <div className="relative rounded-2xl shadow-2xl overflow-hidden border-4 border-white rotate-2 transform hover:rotate-0 transition duration-500">
              {/* NOTE: You can replace this src with your specific heart souvenirs image */}
              <img 
                src="https://images.unsplash.com/photo-1615486511484-92e5462f9ed2?q=80&w=1000&auto=format&fit=crop" 
                alt="Hermosos souvenirs de crochet" 
                loading="lazy"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                <p className="font-bold text-lg">Diseños modernos y vendibles</p>
                <p className="text-sm opacity-90">Corazones, llaveros, estrellitas y más.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;