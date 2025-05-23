
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-harmoni-blue to-harmoni-blue-dark text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in">
          Transforme sua prospecção com{' '}
          <span className="text-harmoni-blue-light">inteligência artificial</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto animate-slide-up">
          Nós encontramos os leads certos, no lugar certo, para você fechar mais negócios
        </p>

        <Button
          onClick={scrollToForm}
          className="bg-harmoni-blue-light hover:bg-white hover:text-harmoni-blue text-white font-semibold py-4 px-8 text-lg rounded-full transition-all duration-300 animate-fade-in"
          style={{ animationDelay: '400ms' }}
        >
          Quero começar agora
        </Button>
      </div>
    </section>
  );
};

export default Hero;
