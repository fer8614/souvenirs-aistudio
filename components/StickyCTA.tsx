import React, { useState, useEffect } from 'react';

const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-stone-200 p-4 shadow-2xl z-50 md:hidden animate-slide-up">
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col">
          <span className="text-xs text-stone-500 line-through">Antes $49</span>
          <span className="text-xl font-bold text-brand-600">$9.99</span>
        </div>
        <button 
          onClick={scrollToPricing}
          className="flex-1 bg-brand-600 text-white font-bold py-3 rounded-lg shadow-md active:scale-95 transition-transform"
        >
          ¡Comprar Ahora!
        </button>
      </div>
    </div>
  );
};

export default StickyCTA;