
import React from 'react';
import Logo from '@/components/Logo';
import Hero from '@/components/Hero';
import BenefitsSection from '@/components/BenefitsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="container mx-auto px-6 pt-8 pb-4">
        <Logo className="animate-fade-in" />
      </header>

      {/* Hero Section */}
      <Hero />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
