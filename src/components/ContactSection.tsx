
import React from 'react';
import ContactForm from '@/components/ContactForm';

const ContactSection = () => {
  return (
    <section id="contact-form" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Form Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Formulário de Interesse
                </h2>
                <p className="text-lg text-gray-600">
                  Preencha os dados abaixo e descubra como nossa IA pode revolucionar sua prospecção de leads.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-harmoni-blue rounded-full flex items-center justify-center text-white font-semibold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Análise do seu segmento</h3>
                    <p className="text-gray-600">Identificamos as melhores oportunidades na sua região</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-harmoni-blue rounded-full flex items-center justify-center text-white font-semibold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Captação automatizada</h3>
                    <p className="text-gray-600">Nossa IA trabalha 24/7 encontrando leads qualificados</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-harmoni-blue rounded-full flex items-center justify-center text-white font-semibold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Entrega organizada</h3>
                    <p className="text-gray-600">Receba os dados prontos para ação do seu time</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
