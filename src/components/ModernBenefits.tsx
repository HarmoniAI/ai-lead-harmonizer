
import React from 'react';

const ModernBenefits = () => {
  const benefits = [
    {
      icon: "✓",
      title: "Leads qualificados",
      subtitle: "com geolocalização",
      description: "Encontramos prospects ideais na sua região com precisão geográfica"
    },
    {
      icon: "📊",
      title: "Segmentação por",
      subtitle: "nicho",
      description: "Direcionamento específico por segmento de mercado"
    },
    {
      icon: "⚙️",
      title: "Fluxo 100%",
      subtitle: "automatizado com IA",
      description: "Sistema completo rodando 24/7 sem intervenção manual"
    },
    {
      icon: "📈",
      title: "Dashboard com",
      subtitle: "métricas de conversão",
      description: "Acompanhe resultados em tempo real com dados precisos"
    }
  ];

  return (
    <section id="recursos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Como funciona nossa automação
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tecnologia de ponta para revolucionar sua estratégia de captação
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {benefit.title}
                    </h3>
                    <h4 className="text-lg font-semibold text-blue-600 mb-3">
                      {benefit.subtitle}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernBenefits;
