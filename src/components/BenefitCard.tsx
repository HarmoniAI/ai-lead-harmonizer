
import React from 'react';

interface BenefitCardProps {
  icon: string;
  title: string;
  description: string;
  delay?: number;
}

const BenefitCard = ({ icon, title, description, delay = 0 }: BenefitCardProps) => {
  return (
    <div 
      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up border border-gray-100"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-gradient-to-br from-harmoni-blue to-harmoni-blue-dark rounded-lg flex items-center justify-center text-white text-xl">
            {icon}
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BenefitCard;
