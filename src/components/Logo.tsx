
import React from 'react';

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className="relative">
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-pulse-slow"
        >
          {/* Hexagon */}
          <path
            d="M24 4L37.8564 12V28L24 36L10.1436 28V12L24 4Z"
            fill="url(#gradient)"
            stroke="#3B82F6"
            strokeWidth="2"
          />
          
          {/* Circuit lines */}
          <path
            d="M18 16H30M18 20H26M22 24H30M18 28H24"
            stroke="#1E40AF"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          
          {/* Circuit nodes */}
          <circle cx="16" cy="16" r="1.5" fill="#3B82F6" />
          <circle cx="32" cy="16" r="1.5" fill="#3B82F6" />
          <circle cx="16" cy="20" r="1.5" fill="#3B82F6" />
          <circle cx="28" cy="20" r="1.5" fill="#3B82F6" />
          <circle cx="20" cy="24" r="1.5" fill="#3B82F6" />
          <circle cx="32" cy="24" r="1.5" fill="#3B82F6" />
          <circle cx="16" cy="28" r="1.5" fill="#3B82F6" />
          <circle cx="26" cy="28" r="1.5" fill="#3B82F6" />
          
          {/* Gradient definition */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold text-harmoni-blue-dark">Harmoni AI</h1>
        <p className="text-sm text-harmoni-gray-dark">Inteligência Artificial</p>
      </div>
    </div>
  );
};

export default Logo;
