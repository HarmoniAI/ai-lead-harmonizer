
import React from 'react';
import Logo from '@/components/Logo';
import BenefitItem from '@/components/BenefitItem';
import ContactForm from '@/components/ContactForm';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  const benefits = [
    {
      icon: "🎯",
      title: "Captação de leads qualificados",
      description: "Nossa IA encontra leads qualificados na região de atendimento da sua empresa, garantindo que você foque apenas em prospects com real potencial de conversão."
    },
    {
      icon: "🏷️",
      title: "Segmentação inteligente",
      description: "Você escolhe o segmento ideal para prospectar - restaurantes, clínicas, imobiliárias, etc. Nossa tecnologia adapta a busca às suas necessidades específicas."
    },
    {
      icon: "📊",
      title: "Entrega direta para vendas",
      description: "Receba os dados dos leads organizados e prontos para ação, direto para o seu time de vendas. Sem perda de tempo com filtros manuais."
    },
    {
      icon: "⚙️",
      title: "Automação completa",
      description: "Solução 100% automatizada com inteligência artificial. Configure uma vez e receba leads constantemente, sem intervenção manual."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="container mx-auto px-6 pt-8 pb-4">
        <Logo className="animate-fade-in" />
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Column - Content */}
          <div className="w-full lg:w-1/2 animate-slide-up">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Transforme sua prospecção com{' '}
              <span className="text-gradient">inteligência artificial</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed">
              Nós encontramos os leads certos, no lugar certo, para você fechar mais negócios
            </p>

            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <BenefitItem
                  key={index}
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                  delay={index * 200}
                />
              ))}
            </div>

            <div className="mt-10 flex items-center space-x-2 text-harmoni-blue">
              <p className="font-semibold">Descubra como funciona</p>
              <ArrowRight size={16} />
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="w-full lg:w-1/2">
            <ContactForm />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 py-8">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <Logo className="mx-auto mb-4" />
            <p className="text-gray-500">© 2024 Harmoni I.A. - Todos os direitos reservados.</p>
            <p className="text-gray-400 text-sm mt-2">Inteligência artificial para o seu sucesso comercial.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
