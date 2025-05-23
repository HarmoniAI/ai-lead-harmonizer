
import React from 'react';
import BenefitCard from '@/components/BenefitCard';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: "🎯",
      title: "Captação de leads qualificados",
      description: "com base na sua região"
    },
    {
      icon: "🏷️",
      title: "Escolha o segmento ideal para prospectar",
      description: "(restaurantes, clínicas, imobiliárias, etc.)"
    },
    {
      icon: "📊",
      title: "Dados organizados e entregues",
      description: "diretamente ao seu time de vendas"
    },
    {
      icon: "⚙️",
      title: "Solução 100% automatizada",
      description: "com inteligência artificial"
    },
    {
      icon: "🕒",
      title: "Economize tempo",
      description: "aumente suas conversões"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
