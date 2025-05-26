
import React from 'react';
import ModernContactForm from '@/components/ModernContactForm';

const ModernContact = () => {
  return (
    <section id="contact-form" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Começar Agora
            </h2>
            <p className="text-xl text-gray-600">
              Preencha os dados abaixo e transforme sua estratégia de captação
            </p>
          </div>

          <ModernContactForm />
        </div>
      </div>
    </section>
  );
};

export default ModernContact;
