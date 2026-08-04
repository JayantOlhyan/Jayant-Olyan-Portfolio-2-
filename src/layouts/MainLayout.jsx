import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CommandPrompt } from '../components/ui/CommandPrompt';
import { Wallpaper } from '../components/ui/Wallpaper';
import { MatrixRain } from '../components/ui/MatrixRain';
import { ConfettiCanvas } from '../components/ui/ConfettiCanvas';
import { CloseOverlay } from '../components/ui/CloseOverlay';
import { MacMenuBar } from '../components/ui/MacMenuBar';
import { MacDock } from '../components/ui/MacDock';

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

  // Handle green dot (maximize toggle)
  const handleMaximizeToggle = () => {
    if (isMinimized) {
      setIsMinimized(false);
    }
    setIsMaximized(!isMaximized);
  };

  // Handle yellow dot (minimize toggle)
  const handleMinimizeToggle = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div 
      className="relative h-[100dvh] w-screen bg-[#0a0a0c] font-mono text-text-primary flex flex-col items-center justify-between pt-9 pb-16 px-[clamp(0.5rem,2vw,2rem)] transition-colors duration-300 overflow-hidden select-none"
      onWheel={handleInteraction}
      onTouchStart={handleInteraction}
    >
      {/* Top macOS Menu Bar */}
      <MacMenuBar 
        currentTheme={currentTheme} 
        onCommand={onCommand} 
      />

      {/* AI & Reference Wallpaper Background Layer */}
      <Wallpaper currentTheme={currentTheme} />

      {/* Terminal Canvas Overlays & Modals */}
      <MatrixRain active={matrixActive} onClose={() => setMatrixActive(false)} />
      <ConfettiCanvas active={confettiActive} onClose={() => setConfettiActive(false)} />
      <CloseOverlay isOpen={closeOverlayActive} onClose={() => setCloseOverlayActive(false)} />

      {/* Smooth Animated Terminal Window Container */}
      <AnimatePresence>
        {!isMinimized && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.2, y: 300, transition: { duration: 0.25 } }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            className={`relative w-full z-20 flex flex-col bg-bg-primary/95 sm:rounded-xl overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.85)] border border-white/10 terminal-window-glass my-auto ${
              isMaximized 
                ? 'max-w-full h-full sm:h-full sm:rounded-none my-0' 
                : 'max-w-[clamp(100%,1200px,100%)] h-full sm:h-[clamp(480px,82dvh,1200px)]'
            }`}
          >
            {/* CRT/Scanlines overlay */}
            <div className="absolute inset-0 scanlines pointer-events-none opacity-[0.18] md:opacity-30 z-50 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-black/10 pointer-events-none z-40" />

            {/* macOS Style Traffic Light Window Titlebar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#1a1a1b] border-b border-white/10 select-none z-[100]">
              <div className="flex items-center space-x-2.5">
                <button 
                  onClick={() => setCloseOverlayActive(true)}
                  title="Close window (kill process)"
                  className="w-3 h-3 rounded-full bg-[#ff5f56] hover:brightness-125 transition-all cursor-pointer border border-black/30 shadow-sm"
                />
                <button 
                  onClick={handleMinimizeToggle}
                  title="Minimize window"
                  className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:brightness-125 transition-all cursor-pointer border border-black/30 shadow-sm"
                />
                <button 
                  onClick={handleMaximizeToggle}
                  title="Maximize window"
                  className="w-3 h-3 rounded-full bg-[#27c93f] hover:brightness-125 transition-all cursor-pointer border border-black/30 shadow-sm"
                />
              </div>

              <div className="text-fluid-xs text-text-secondary tracking-[0.2em] font-semibold opacity-80 uppercase truncate px-2">
                jayant@macbook-pro ~ /portfolio
              </div>

              <div className="text-[10px] text-text-secondary/60 hidden sm:block font-bold">
                zsh +
              </div>
            </div>

            {/* Scrollable Output Viewport */}
            <div 
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
              <h2 className="sr-only">Full Stack AI Developer macOS Portfolio inspired by vladburca.com</h2>

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
            </div>

            {/* Noise Grain */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-[110] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating macOS Dock at Bottom */}
      <MacDock 
        onCommand={onCommand} 
        isMinimized={isMinimized} 
        setIsMinimized={setIsMinimized} 
        setCloseOverlayActive={setCloseOverlayActive}
        currentTheme={currentTheme}
      />
    </div>
  );
};
