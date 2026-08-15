import React, { useRef } from 'react';
import { cn } from '../../utils/cn';

export const TerminalCard = ({ children, className, glowing = true, spotlight = true, ...props }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!spotlight || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={cn(
        "relative overflow-hidden border border-border-dark bg-bg-secondary p-[clamp(1rem,3vw,2rem)] rounded-lg transition-all duration-300 group",
        glowing && "hover:border-accent-green/60 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5),0_0_20px_rgba(0,255,65,0.12)]",
        className
      )}
      {...props}
    >
      {/* Dynamic Cursor Spotlight Radial Overlay */}
      {spotlight && (
        <div 
          className="pointer-events-none absolute -inset-px rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0"
          style={{
            background: 'radial-gradient(500px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0, 255, 65, 0.08), transparent 80%)',
          }}
        />
      )}
      
      {/* Content wrapper with relative z-index */}
      <div className="relative z-10 flex flex-col h-full">
        {children}
      </div>
    </div>
  );
};

