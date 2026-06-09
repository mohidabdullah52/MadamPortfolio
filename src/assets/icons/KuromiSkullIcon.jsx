import React from 'react';

const KuromiSkullIcon = ({ className, size = 40 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 100 100" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Skull shape */}
    <ellipse cx="50" cy="45" rx="35" ry="38" fill="var(--color-primary)" />
    {/* Left eye */}
    <ellipse cx="38" cy="42" rx="8" ry="9" fill="var(--color-bg-main)" />
    {/* Right eye */}
    <ellipse cx="62" cy="42" rx="8" ry="9" fill="var(--color-bg-main)" />
    {/* Skull jaw/teeth part at bottom */}
    <rect x="42" y="75" width="16" height="12" rx="3" fill="var(--color-primary)" />
  </svg>
);

export default KuromiSkullIcon;
