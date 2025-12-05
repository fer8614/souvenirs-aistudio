import React from 'react';
import { Gift, Home, Heart, TrendingUp, Calculator, Smartphone, Camera } from 'lucide-react';

const Bonuses: React.FC = () => {
  const bonuses = [
    {
      title: "Porta Macetas y Velas",
      description: "Aprende a hacer hermosos porta macetas y porta velas en crochet.",
      icon: <Home size={24} />,
      value: "$15 USD"
    },
    {
      title: "Tapete de Oso Gigante",
      description: "Aprende a hacer el espectacular tapete de oso gigante paso a paso.",
      icon: <Heart size={24} />,
      value: "$25 USD"
    },
    {
      title: "Valoriza tus Diseños",
      description: "Aprende a darle más valor a tus diseños para cobrar lo que realmente valen.",
      icon: <TrendingUp size={24} />,
      value: "$20 USD"
    },
    {
      title: "Calculadora de Precios",
      description: "Aprende a calcular los precios de tus diseños de forma correcta y rentable.",
      icon: <Calculator size={24} />,
      value: "$15 USD"
    },
    {
      title: "Redes Sociales Pro",
      description: "Aprende a manejar las redes sociales para convertirlas en máquinas de ventas.",
      icon: <Smartphone size={24} />,
      value: "$30 USD"
    },
    {
      title: "Pack Comunidad y Fotos",
      description: "Acceso al grupo de Telegram, comunidad privada y bono para aprender a hacer set de fotografías.",
      icon: <Camera size={24} />,
      value: "$40 USD"
    }
  ];

  return (
    <section className="py-20 bg-brand-900 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full border-4 border-white"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full border-8 border-white"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-500 text-white font-bold text-sm mb-6 uppercase tracking-wide">
            <Gift size={16} />
            Regalos Exclusivos
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
            6 BONOS Especiales GRATIS
          </h2>
          <p className="text-brand-100 text-lg max-w-2xl mx-auto">
            Herramientas adicionales para asegurar tu éxito, solo disponibles si adquieres el Mega Pack hoy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {bonuses.map((bonus, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl hover:bg-white/20 transition-colors flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-brand-700/50 p-2 rounded-lg text-accent-400">
                  {bonus.icon}
                </div>
                <h3 className="font-bold text-lg leading-tight">{bonus.title}</h3>
              </div>
              <p className="text-brand-50 text-sm flex-grow">
                {bonus.description}
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center text-xs">
                <span className="uppercase tracking-wider text-stone-300">Valor real: <span className="line-through">{bonus.value}</span></span>
                <span className="font-bold text-accent-400 bg-accent-400/10 px-2 py-1 rounded">GRATIS</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bonuses;