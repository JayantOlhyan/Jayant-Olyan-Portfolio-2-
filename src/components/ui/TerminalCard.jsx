import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const TerminalCard = ({ children, className, glowing = true }) => {
  return (
    <div className={cn(
      "border border-border-dark bg-bg-secondary p-4 rounded-md transition-all duration-300",
      glowing && "hover:border-accent-green hover:box-glow",
      className
    )}>
      {children}
    </div>
  );
};
