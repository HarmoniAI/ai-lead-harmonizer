
import React from 'react';

const ModernFooter = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo e Descrição */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 border-2 border-white rounded-sm"></div>
                </div>
                <span className="text-xl font-bold">Harmoni AI</span>
              </div>
              <p className="text-gray-400 max-w-sm">
                Transformando a prospecção de leads com inteligência artificial avançada.
              </p>
            </div>

            {/* Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Links</h3>
              <div className="space-y-2">
                <a href="#recursos" className="text-gray-400 hover:text-blue-400 transition-colors block">
                  Recursos
                </a>
                <a href="#contact-form" className="text-gray-400 hover:text-blue-400 transition-colors block">
                  Contato
                </a>
              </div>
            </div>

            {/* Contato */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contato</h3>
              <div className="text-gray-400 space-y-2">
                <p>harmoniaisystems@gmail.com</p>
                <p>+55 11 96577-7824</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Harmoni AI. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ModernFooter;
