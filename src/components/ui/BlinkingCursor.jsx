import React from 'react';

export const BlinkingCursor = ({ className = "" }) => {
  return (
    <span className={`inline-block w-2 bg-accent-bright animate-cursor-blink ml-[2px] ${className}`}>
      &nbsp;
    </span>
  );
};
