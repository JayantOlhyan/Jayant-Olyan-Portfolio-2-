import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CommandPrompt } from '../components/ui/CommandPrompt';
import { Wallpaper } from '../components/ui/Wallpaper';
import { MatrixRain } from '../components/ui/MatrixRain';
import { ConfettiCanvas } from '../components/ui/ConfettiCanvas';
import { CloseOverlay } from '../components/ui/CloseOverlay';

export const MainLayout = ({ 
  children, 
  onCommand, 
  hideInput, 
  onHistoryUp, 
  onHistoryDown, 
  currentTheme,
  matrixActive,
  setMatrixActive,
  confettiActive,
  setConfettiActive,
  closeOverlayActive,
  setCloseOverlayActive
}) => {
  const scrollRef = useRef(null);
  const [isMaximized, setIsMaximized] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const prevChildrenLength = useRef(0);
  const autoScrollRef = useRef(true);
  const prevScrollHeight = useRef(0);

  const handleInteraction = () => {
    if (autoScrollRef.current) {
      autoScrollRef.current = false;
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      const childrenArray = React.Children.toArray(children);
      const currentChildrenCount = childrenArray.length;

      if (currentChildrenCount > prevChildrenLength.current) {
        scrollRef.current.scrollTop = prevScrollHeight.current - 20;
        autoScrollRef.current = false;
      }

      prevChildrenLength.current = currentChildrenCount;
      prevScrollHeight.current = scrollRef.current.scrollHeight;
    }
  }, [children]);

  return (
    <div 
      className="relative h-[100dvh] w-screen bg-[#0a0a0c] font-mono text-text-primary flex items-center justify-center p-[clamp(0.5rem,2vw,2rem)] transition-colors duration-300 overflow-hidden select-none"
      onWheel={handleInteraction}
      onTouchStart={handleInteraction}
    >
      {/* Real AI Wallpaper & Atmospheric Background Layer */}
      <Wallpaper currentTheme={currentTheme} />

      {/* Terminal Canvas Overlays & Modals */}
      <MatrixRain active={matrixActive} onClose={() => setMatrixActive(false)} />
      <ConfettiCanvas active={confettiActive} onClose={() => setConfettiActive(false)} />
      <CloseOverlay isOpen={closeOverlayActive} onClose={() => setCloseOverlayActive(false)} />

      {/* Smooth Framer Motion Animated Terminal Container */}
      <motion.div 
        layout
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className={`relative w-full z-20 flex flex-col bg-bg-primary/95 sm:rounded-lg overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.8)] border border-border-dark/40 terminal-window-glass ${
          isMaximized 
            ? 'max-w-full h-full sm:h-full sm:rounded-none' 
            : isMinimized 
              ? 'max-w-[clamp(100%,1200px,100%)] h-[52px]' 
              : 'max-w-[clamp(100%,1200px,100%)] h-full sm:h-[clamp(500px,90dvh,1400px)]'
        }`}
      >
        {/* CRT/Scanlines overlay */}
        <div className="absolute inset-0 scanlines pointer-events-none opacity-[0.2] md:opacity-30 z-50 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-black/10 pointer-events-none z-40" />

        {/* macOS Style Traffic Light Header */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#1a1a1a] border-b border-white/5 select-none z-[100]">
          <div className="flex items-center space-x-2.5">
            <button 
              onClick={() => setCloseOverlayActive(true)}
              title="Close window (kill process)"
              className="w-3 h-3 rounded-full bg-[#ff5f56] hover:brightness-125 transition-all cursor-pointer border border-black/20"
            />
            <button 
              onClick={() => setIsMinimized(!isMinimized)}
              title="Minimize window"
              className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:brightness-125 transition-all cursor-pointer border border-black/20"
            />
            <button 
              onClick={() => setIsMaximized(!isMaximized)}
              title="Maximize window"
              className="w-3 h-3 rounded-full bg-[#27c93f] hover:brightness-125 transition-all cursor-pointer border border-black/20"
            />
          </div>

          <div className="text-fluid-xs text-text-secondary tracking-[0.2em] font-semibold opacity-80 uppercase truncate px-2">
            jayant@olhyan ~ /portfolio {isMinimized && '(minimized)'}
          </div>

          <div className="text-[10px] text-text-secondary/60 hidden sm:block font-bold">
            CLI v2.0
          </div>
        </div>

        {/* Scrollable Output Viewport */}
        <AnimatePresence>
          {!isMinimized && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              ref={scrollRef}
              style={{ touchAction: 'pan-y' }}
              className="flex-1 overflow-y-auto px-[clamp(0.5rem,3vw,2rem)] py-[clamp(1rem,4vw,1.5rem)] pb-24 scroll-smooth relative z-20 custom-scrollbar overflow-x-hidden content-glow"
              onScroll={(e) => {
                const target = e.target;
                const distanceFromBottom = target.scrollHeight - target.scrollTop - target.clientHeight;
                if (distanceFromBottom > 50) {
                  autoScrollRef.current = false;
                } else {
                  autoScrollRef.current = true;
                }
              }}
            >
              {/* SEO Headings */}
              <h1 className="sr-only">Jayant Olhyan — Data Science & AI Student at IIT Guwahati</h1>
              <h2 className="sr-only">Full Stack AI Developer Portfolio inspired by vladburca.com</h2>

              {children}

              {/* Persistent Prompt Line */}
              {!hideInput && (
                <div className="mt-8 opacity-90 transition-all duration-500">
                  <CommandPrompt 
                    onCommand={onCommand} 
                    onHistoryUp={onHistoryUp}
                    onHistoryDown={onHistoryDown}
                  />
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Noise Grain */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-[110] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
      </motion.div>
    </div>
  );
};
