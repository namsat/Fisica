import React from 'react';

interface LogoProps {
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ width = 200, height = 200 }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 200 200">
      <circle cx="100" cy="100" r="90" fill="#3d5a80" />
      <text x="100" y="145" fontFamily="Arial, sans-serif" fontSize="60" fontWeight="bold" textAnchor="middle" fill="#fff3b0">ED</text>
      
      {/* Pendolo */}
      <line x1="100" y1="30" x2="100" y2="50" stroke="#ee6c4d" strokeWidth="4" />
      <circle cx="100" cy="30" r="5" fill="#ee6c4d" />
      <path d="M70 50 Q100 90 130 50" stroke="#ee6c4d" strokeWidth="4" fill="none" />
      <circle cx="130" cy="50" r="10" fill="#fff3b0" />
    </svg>
  );
};

export default Logo;