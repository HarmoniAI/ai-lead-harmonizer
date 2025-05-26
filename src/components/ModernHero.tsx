
import React from 'react';
import { Button } from '@/components/ui/button';

const ModernHero = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-24 pb-16 bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 animate-fade-in">
            Transforme sua prospecção
            <br />
            <span className="text-blue-400">com inteligência artificial</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto animate-slide-up">
            Nós encontramos os leads certos, no lugar certo,
            <br />
            para você fechar mais negócios
          </p>

          <Button
            onClick={scrollToForm}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 text-lg rounded-xl transition-all duration-300 transform hover:scale-105 animate-fade-in"
            style={{ animationDelay: '400ms' }}
          >
            Quero automatizar minha captação
          </Button>
        </div>

        {/* Benefits Preview in Hero */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mt-16">
          <div className="flex items-center space-x-3 animate-fade-in" style={{ animationDelay: '600ms' }}>
            <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center">
              <span className="text-2xl">🎯</span>
            </div>
            <div>
              <h3 className="font-semibold text-white">Leads qualificados</h3>
              <p className="text-blue-200 text-sm">com geolocalização</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 animate-fade-in" style={{ animationDelay: '700ms' }}>
            <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center">
              <span className="text-2xl">🏷️</span>
            </div>
            <div>
              <h3 className="font-semibold text-white">Segmentação por</h3>
              <p className="text-blue-200 text-sm">nicho</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 animate-fade-in" style={{ animationDelay: '800ms' }}>
            <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center">
              <span className="text-2xl">⚙️</span>
            </div>
            <div>
              <h3 className="font-semibold text-white">Fluxo 100%</h3>
              <p className="text-blue-200 text-sm">automatizado com IA</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 animate-fade-in" style={{ animationDelay: '900ms' }}>
            <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center">
              <span className="text-2xl">📊</span>
            </div>
            <div>
              <h3 className="font-semibold text-white">Agente virtual que</h3>
              <p className="text-blue-200 text-sm">responde em tempo real</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernHero;
