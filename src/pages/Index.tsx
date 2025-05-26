
import React from 'react';
import Header from '@/components/Header';
import ModernHero from '@/components/ModernHero';
import ModernBenefits from '@/components/ModernBenefits';
import ModernContact from '@/components/ModernContact';
import ModernFooter from '@/components/ModernFooter';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ModernHero />
      <ModernBenefits />
      <ModernContact />
      <ModernFooter />
    </div>
  );
};

export default Index;
