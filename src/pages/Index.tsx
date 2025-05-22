
import React from 'react';
import Logo from '@/components/Logo';
import BenefitCard from '@/components/BenefitCard';
import ContactForm from '@/components/ContactForm';

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
    },
    {
      icon: "🕒",
      title: "Mais tempo, mais negócios",
      description: "Ganhe tempo eliminando a prospecção manual e foque no que realmente importa: fechar mais negócios e crescer sua empresa."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-harmoni-gray via-white to-harmoni-gray-light">
      {/* Header */}
      <header className="container mx-auto px-6 pt-8 pb-4">
        <Logo className="animate-fade-in" />
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <div className="max-w-4xl mx-auto animate-slide-up">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Transforme sua prospecção com{' '}
            <span className="text-gradient">inteligência artificial</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
            Nós encontramos os leads certos, no lugar certo, para você fechar mais negócios
          </p>

          <div className="flex justify-center mb-16">
            <div className="animate-float">
              <div className="w-32 h-32 bg-gradient-to-br from-harmoni-blue-light to-harmoni-blue rounded-full flex items-center justify-center shadow-2xl">
                <div className="text-4xl">🤖</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Por que escolher a Harmoni I.A.?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nossa plataforma de automação com IA revoluciona a forma como você encontra e conecta com seus clientes ideais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              delay={index * 200}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-harmoni-blue via-harmoni-blue-light to-harmoni-blue-dark py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold text-white mb-6">
              Pronto para multiplicar suas vendas?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Junte-se às empresas que já transformaram sua prospecção com nossa inteligência artificial
            </p>
            <div className="flex justify-center space-x-8 text-blue-100">
              <div className="text-center">
                <div className="text-3xl font-bold">95%</div>
                <div className="text-sm">Leads qualificados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">10x</div>
                <div className="text-sm">Mais eficiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm">Automação ativa</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Logo className="mb-4" />
              <p className="text-gray-400 leading-relaxed">
                Transformando a prospecção de leads através da inteligência artificial. 
                Soluções automatizadas para empresas que querem crescer de forma inteligente.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <div className="space-y-2 text-gray-400">
                <p>📧 contato@harmoniai.com.br</p>
                <p>📱 (11) 99999-9999</p>
                <p>🌐 www.harmoniai.com.br</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
              <div className="space-y-2 text-gray-400">
                <p>🔗 LinkedIn: /harmoni-ia</p>
                <p>📘 Facebook: /harmoniai</p>
                <p>📸 Instagram: @harmoni.ia</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Harmoni I.A. - Todos os direitos reservados.</p>
            <p className="mt-2 text-sm">Inteligência artificial para o seu sucesso comercial.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
