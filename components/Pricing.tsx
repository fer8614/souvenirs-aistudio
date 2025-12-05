import React, { useState, useEffect } from 'react';
import { Check, ShieldCheck, ArrowRight, Timer } from 'lucide-react';

const Pricing: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds === 0) {
          if (prev.minutes === 0) return prev;
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return { ...prev, seconds: prev.seconds - 1 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-stone-50 to-brand-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-brand-100">
          
          {/* Header */}
          <div className="bg-brand-900 text-white p-6 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-400 via-brand-500 to-accent-400"></div>
            <h3 className="text-2xl font-bold uppercase tracking-wider mb-2">Oferta Relámpago</h3>
            <div className="flex justify-center items-center gap-2 text-accent-400 font-mono font-bold">
              <Timer size={20} />
              <span>
                La oferta expira en {timeLeft.minutes}:{timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}
              </span>
            </div>
          </div>

          <div className="p-8 sm:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-6">
              <div>
                <h2 className="text-4xl font-serif font-bold text-stone-900 mb-2 animate-[pulse_2s_ease-in-out_infinite] origin-left">
                  Mega Pack Souvenirs
                </h2>
                <p className="text-stone-500">Acceso de por vida + Actualizaciones</p>
              </div>
              <div className="text-right">
                <div className="text-stone-400 line-through text-xl font-semibold">$49 USD</div>
                <div className="text-6xl font-bold text-brand-600">$9.99</div>
                <div className="text-green-600 font-bold text-sm bg-green-100 px-2 py-1 rounded inline-block mt-1">
                  Ahorras 80%
                </div>
              </div>
            </div>

            <hr className="border-stone-100 mb-8" />

            <div className="space-y-4 mb-10">
              {[
                "Curso completo paso a paso",
                "30+ Diseños de alta demanda",
                "6 Bonos exclusivos incluidos",
                "Sin costos de envío (Digital)",
                "Acceso inmediato a la plataforma",
                "Guía de precios y ventas"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="bg-brand-100 text-brand-600 p-1 rounded-full">
                    <Check size={16} strokeWidth={3} />
                  </div>
                  <span className="text-stone-700 font-medium text-lg">{item}</span>
                </div>
              ))}
            </div>

            <button className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-5 px-8 rounded-xl text-xl shadow-lg transform transition hover:-translate-y-1 hover:shadow-2xl flex items-center justify-center gap-3 group">
              <span>Descargar Todo Ahora</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="mt-6 text-center">
              <div className="flex items-center justify-center gap-2 text-sm text-stone-500 mb-2">
                <ShieldCheck size={16} className="text-green-600" />
                <span>Pago 100% Seguro y Encriptado</span>
              </div>
              <img 
                src="https://picsum.photos/300/40?grayscale&blur=2" 
                alt="Payment Methods" 
                className="h-8 mx-auto opacity-50 grayscale" 
              />
              <p className="text-xs text-stone-400 mt-2">
                *El precio está en dólares pero pagarás en tu moneda local.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;