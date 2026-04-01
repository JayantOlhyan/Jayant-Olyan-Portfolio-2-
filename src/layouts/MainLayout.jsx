import React, { useEffect, useRef } from 'react';
import { CommandPrompt } from '../components/ui/CommandPrompt';

export const MainLayout = ({ children, onCommand, hideInput, onHistoryUp, onHistoryDown }) => {
  const scrollRef = useRef(null);

  const prevChildrenLength = useRef(0);
  const isInitialDashboardRef = useRef(true);

  useEffect(() => {
    if (scrollRef.current) {
      const childrenArray = React.Children.toArray(children);
      const currentChildrenCount = childrenArray.length;
      
      // Check if we just transitioned to the dashboard (check nested props if needed)
      const isDashboardRender = childrenArray.some(child => 
        child.props?.history?.some(h => h.content === 'dashboard') ||
        child.props?.currentSection === 'dashboard'
      );

      // 1. Handle Initial Dashboard Render (Scroll to Top)
      if (isDashboardRender && isInitialDashboardRef.current) {
        isInitialDashboardRef.current = false;
        scrollRef.current.scrollTop = 0;
        prevChildrenLength.current = currentChildrenCount;
        return;
      }

      // 2. Smart Scroll for Command Output
      // Only scroll to bottom if:
      // - New items were added (history increased)
      // - AND we are not locked
      // - AND the user is already near the bottom (respect manual scroll-up)
      if (currentChildrenCount > prevChildrenLength.current) {
        const distanceFromBottom = scrollRef.current.scrollHeight - scrollRef.current.scrollTop - scrollRef.current.clientHeight;
        
        // If user is reading something at the top, don't snap back
        // 150px threshold for "at the bottom"
        if (distanceFromBottom < 150) {
           scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
      }

      prevChildrenLength.current = currentChildrenCount;
    }
  }, [children]);

  return (
    <div className="relative min-h-screen bg-bg-secondary font-mono text-text-primary flex items-center justify-center p-0 sm:p-8 transition-colors duration-300">
      
      {/* Dynamic Background */}
      <div className="fixed inset-0 pointer-events-none os-background-layer" />
      
      {/* Terminal Container */}
      <div className="relative w-full max-w-6xl h-full sm:h-[90vh] md:h-[90dvh] flex flex-col bg-bg-primary sm:rounded-lg overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-border-dark/30 terminal-window-glass transition-all duration-300 z-20">
        
        {/* Internal CRT/Scanlines overlay */}
        <div className="absolute inset-0 scanlines pointer-events-none opacity-[0.2] md:opacity-40 z-50 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-black/10 pointer-events-none z-40" />

        {/* Header: macOS Style Title Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#1a1a1a] border-b border-white/5 select-none z-[100]">
          <div className="flex space-x-2 w-16 md:w-20">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
          </div>
          <div className="text-[9px] md:text-[10px] text-text-secondary tracking-[0.2em] font-semibold opacity-60 uppercase truncate px-2">
             jayant@os ~ /portfolio
          </div>
          <div className="w-16 md:w-20" /> {/* Spacer */}
        </div>

        {/* Scrollable Output Viewport */}
        <div 
          ref={scrollRef}
          style={{ touchAction: 'pan-y' }}
          className="flex-1 overflow-y-auto px-2 md:px-8 py-4 md:py-6 pb-24 scroll-smooth relative z-20 custom-scrollbar overflow-x-hidden content-glow"
        >
          {children}
          
          {/* Persistent Prompt Line at the Bottom (within scroll) */}
          {!hideInput && (
            <div className="mt-12 opacity-80 transition-all duration-500">
              <CommandPrompt 
                onCommand={onCommand} 
                onHistoryUp={onHistoryUp}
                onHistoryDown={onHistoryDown}
              />
            </div>
          )}
        </div>

        {/* CRT Grain and Flicker (Global) */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-[110] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
      </div>
    </div>
  );
};

