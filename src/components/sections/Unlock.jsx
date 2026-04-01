import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export const Unlock = ({ onUnlock }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        onUnlock();
      }
    };

    const handleClick = () => {
      onUnlock();
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('click', handleClick);
    };
  }, [onUnlock]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-8"
    >
      <div className="space-y-4">
        <h1 className="text-accent-bright font-bold text-2xl tracking-widest animate-pulse">
          SYSTEM READY
        </h1>
        <div className="h-[1px] w-32 bg-accent-green/30 mx-auto" />
      </div>

      <div className="text-text-secondary font-mono text-lg flex items-center justify-center space-x-3 bg-white/5 border border-white/10 px-6 py-4 rounded-lg shadow-2xl">
        <span className="opacity-80">Press Enter / click to unlock the console</span>
        <span className="w-2 h-5 bg-accent-green animate-cursor-blink shadow-[0_0_8px_rgba(0,176,80,0.8)]" />
      </div>

      <div className="pt-12 text-[10px] text-text-secondary/40 uppercase tracking-[0.2em] font-mono">
        Authorized access only • Kernel v2.0.4
      </div>
    </motion.div>
  );
};
