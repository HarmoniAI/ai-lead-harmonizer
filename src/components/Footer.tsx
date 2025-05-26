
import React from 'react';
import Logo from '@/components/Logo';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-6">
            <Logo className="mx-auto" />
          </div>
          <p className="text-gray-400 mb-4">
            © 2024 Harmoni AI - Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-sm">
            Inteligência artificial para o seu sucesso comercial.
          </p>
          
          {/* Placeholder for future links */}
          <div className="mt-8 space-x-6">
            <span className="text-gray-500 text-sm">Site • LinkedIn • Instagram</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
