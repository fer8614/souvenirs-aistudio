import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    {
      // Christmas Wreath / Ornaments
      src: "https://images.unsplash.com/photo-1544979590-2c00329a25b2?q=80&w=800&auto=format&fit=crop", 
      title: "Llaveros Navideños",
      description: "Coronas y adornos temáticos que se venden solos en temporada alta."
    },
    {
      // Hearts
      src: "https://images.unsplash.com/photo-1605218427368-35b0e021c322?q=80&w=800&auto=format&fit=crop",
      title: "Corazones Rentables",
      description: "El souvenir perfecto para bodas, bautizos y San Valentín."
    },
    {
      // Flowers
      src: "https://images.unsplash.com/photo-1621257497228-20da5d32626e?q=80&w=800&auto=format&fit=crop",
      title: "Flores Decorativas",
      description: "Diseños versátiles en trapillo que encantan a todos."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 mb-4">
            Mira lo que podrás crear
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Estos son solo algunos de los diseños incluidos en el pack. Proyectos rápidos, hermosos y con alta demanda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((img, index) => (
            <div key={index} className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={img.src} 
                  alt={img.title}
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold mb-1">{img.title}</h3>
                <p className="text-sm text-stone-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {img.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;