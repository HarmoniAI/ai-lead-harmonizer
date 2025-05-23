
import React from 'react';
import ContactForm from '@/components/ContactForm';

const ContactSection = () => {
  return (
    <section id="contact-form" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Form Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Formulário de Interesse
                </h2>
                
                <div className="space-y-4 text-gray-700">
                  <div>Nome</div>
                  <div>E-mail</div>
                  <div>WhatsApp</div>
                  <div>Nome da empresa</div>
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
