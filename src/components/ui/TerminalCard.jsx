import React from 'react';
import { cn } from '../../utils/cn';

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
