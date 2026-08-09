import React from 'react';

/**
 * A highly optimized, premium reusable Icon component that references SVG symbols from the public sprite sheet.
 * Features built-in micro-animations and custom size/color configurations.
 */
export const Icon = ({ name, className = '', size = 24, ...props }) => {
  // Normalize icon identifier
  const iconId = name.endsWith('-icon') ? name : `${name}-icon`;

  return (
    <svg
      width={size}
      height={size}
      className={`inline-block transition-all duration-300 ease-out hover:scale-115 hover:filter hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.4)] active:scale-95 select-none ${className}`}
      style={{
        verticalAlign: 'middle',
      }}
      {...props}
    >
      <use href={`/icons.svg#${iconId}`} />
    </svg>
  );
};
