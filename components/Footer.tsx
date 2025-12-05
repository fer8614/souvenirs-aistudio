import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12 text-center text-sm">
      <div className="container mx-auto px-4">
        <p className="mb-4">
          Este sitio no es parte del sitio web de Facebook o Facebook Inc. Además, este sitio no está respaldado por Facebook de ninguna manera. FACEBOOK es una marca registrada de FACEBOOK, Inc.
        </p>
        <div className="flex justify-center gap-6 mb-8">
          <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
          <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
          <a href="#" className="hover:text-white transition-colors">Soporte</a>
        </div>
        <p>&copy; {new Date().getFullYear()} Mega Pack Crochet. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;