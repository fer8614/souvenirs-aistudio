import React from 'react';
import { BookOpen, ShoppingBag, Scissors, Lightbulb, Palette, LayoutTemplate } from 'lucide-react';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-md border border-stone-100 hover:shadow-lg transition-shadow duration-300">
    <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center text-brand-600 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-stone-900 mb-2">{title}</h3>
    <p className="text-stone-600">{description}</p>
  </div>
);

const Features: React.FC = () => {
  const features = [
    {
      icon: <BookOpen />,
      title: "Curso completo paso a paso",
      description: "Aprende desde cero. No necesitas experiencia previa para empezar a tejer maravillas."
    },
    {
      icon: <ShoppingBag />,
      title: "30+ Diseños listos para vender",
      description: "Patrones probados de alta demanda: Llaveros, corazones, coronas y mini decoraciones."
    },
    {
      icon: <Scissors />,
      title: "Acabados Profesionales",
      description: "Técnicas secretas para que tus creaciones luzcan impecables y de alta calidad."
    },
    {
      icon: <Lightbulb />,
      title: "Guía de Personalización",
      description: "Aprende a adaptar colores y detalles para cobrar más por productos personalizados."
    },
    {
      icon: <Palette />,
      title: "Explicaciones desde Cero",
      description: "Videos y guías detalladas que te llevan de la mano en cada puntada."
    },
    {
      icon: <LayoutTemplate />,
      title: "Plantillas y Tips",
      description: "Recursos listos para imprimir y aplicar en tu negocio de crochet inmediatamente."
    }
  ];

  return (
    <section className="py-20 bg-stone-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 mb-4">
            🧶 ¿Qué incluye este Mega Pack?
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Hemos recopilado todo lo que necesitas para iniciar tu emprendimiento de souvenirs sin complicaciones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        {/* Visual Transformation */}
        <div className="mt-20 bg-white rounded-2xl shadow-xl overflow-hidden border border-stone-200">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-brand-700 mb-4">🎯 Tu Transformación</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 opacity-50">
                  <div className="bg-stone-200 p-2 rounded-full">🚫</div>
                  <p>De no saber por dónde empezar ni qué materiales comprar.</p>
                </div>
                <div className="w-0.5 h-8 bg-brand-200 ml-5"></div>
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-2 rounded-full text-green-700">✅</div>
                  <p className="font-semibold text-lg">A tener diseños hermosos, terminados y listos para vender en tiendas, ferias o redes sociales.</p>
                </div>
              </div>
            </div>
            <div className="relative h-64 md:h-auto">
               <img 
                src="https://picsum.photos/800/600?random=2" 
                alt="Mujer tejiendo feliz" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;