import React from 'react';

const KittyBowIcon = ({ className, size = 40 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 100 80" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Left loop */}
    <path d="M50 40 C30 10, 5 15, 15 40 C5 65, 30 70, 50 40Z" fill="var(--color-primary)" />
    {/* Right loop */}
    <path d="M50 40 C70 10, 95 15, 85 40 C95 65, 70 70, 50 40Z" fill="var(--color-primary)" />
    {/* Center knot */}
    <circle cx="50" cy="40" r="8" fill="var(--color-primary-hover)" />
  </svg>
);

export default KittyBowIcon;
