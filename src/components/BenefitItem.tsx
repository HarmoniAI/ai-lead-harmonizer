
import React from 'react';

interface BenefitItemProps {
  icon: string;
  title: string;
  description: string;
  delay?: number;
}

const BenefitItem = ({ icon, title, description, delay = 0 }: BenefitItemProps) => {
  return (
    <div 
      className="flex items-start space-x-4 animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-harmoni-blue-light bg-opacity-10 rounded-full flex items-center justify-center text-2xl">
          {icon}
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default BenefitItem;
