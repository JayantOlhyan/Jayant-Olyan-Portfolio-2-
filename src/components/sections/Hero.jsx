import React, { useState, useEffect, useRef } from 'react';
import { terminalBootLines, bootSequence } from '../../data/portfolioData';
import { BlinkingCursor } from '../ui/BlinkingCursor';
import { motion, AnimatePresence } from 'framer-motion';

export const Hero = ({ onComplete }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [visibleMessages, setVisibleMessages] = useState([]);
  const [progressCount, setProgressCount] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const containerRef = useRef(null);

  const PROGRESS_BAR_WIDTH = 30;

  // Handle step-by-step sequence
  useEffect(() => {
    if (activeStepIndex >= bootSequence.length) return;

    const step = bootSequence[activeStepIndex];

    const timer = setTimeout(() => {
      if (step.type === 'progress') {
        let currentFill = 0;
        const interval = setInterval(() => {
          currentFill++;
          setProgressCount(currentFill);
          if (currentFill >= PROGRESS_BAR_WIDTH) {
            clearInterval(interval);
            setActiveStepIndex(prev => prev + 1);
          }
        }, step.duration / PROGRESS_BAR_WIDTH);
      } else if (step.type === 'prompt') {
        setIsDone(true);
      } else if (step.type === 'status') {
        setVisibleMessages(prev => {
          const newMsgs = [...prev];
          if (newMsgs.length > 0) {
             newMsgs[newMsgs.length - 1] = { 
               ...newMsgs[newMsgs.length - 1], 
               status: step.text,
               statusColor: step.color
             };
          }
          return newMsgs;
        });
        setActiveStepIndex(prev => prev + 1);
      } else {
        setVisibleMessages(prev => [...prev, { text: step.text, color: step.color }]);
        setActiveStepIndex(prev => prev + 1);
      }
    }, step.delay || 0);

    return () => clearTimeout(timer);
  }, [activeStepIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Enter' && isDone) {
        onComplete?.();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isDone, onComplete]);

  return (
    <div ref={containerRef} className="flex flex-col font-mono text-fluid-xs sm:text-fluid-sm leading-[1.8] min-h-[clamp(250px,50vh,400px)] select-none cursor-default py-[clamp(1.5rem,5vw,3rem)] px-[clamp(1rem,5vw,5rem)] max-w-5xl mx-auto overflow-hidden">
      {/* Boot Messages */}
      <div className="flex flex-col">
        {visibleMessages.map((msg, i) => (
          <div key={i} className="flex items-start sm:items-center gap-1 sm:gap-2 min-h-[1.8em] flex-wrap break-all sm:break-normal">
            {msg.text && (
              <span className={msg.color || 'text-text-secondary opacity-80'}>
                {msg.text}
              </span>
            )}
            {msg.status && (
              <span className={msg.statusColor || 'text-accent-green'}>[{msg.status}]</span>
            )}
          </div>
        ))}
        
        {/* Progress Bar Step */}
        {bootSequence[activeStepIndex]?.type === 'progress' && (
          <div className="flex items-center gap-2 mt-1">
            <span className="text-text-secondary opacity-60">[</span>
            <span className="text-[#8B949E] tracking-tighter">
              {'█'.repeat(progressCount)}
              {' '.repeat(PROGRESS_BAR_WIDTH - progressCount)}
            </span>
            <span className="text-text-secondary opacity-60">]</span>
          </div>
        )}
      </div>

      {/* Press Enter Prompt - Pulsing Caret Style */}
      {isDone && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-[clamp(1.5rem,5vw,3rem)] flex flex-col items-start gap-4 w-full"
        >
          <div className="flex items-center gap-2 text-text-secondary bg-white/5 px-[clamp(0.5rem,2vw,1rem)] py-[clamp(0.25rem,1.5vw,0.5rem)] rounded-sm border border-white/10 shadow-lg min-h-[48px] max-w-full">
             <span className="animate-pulse text-fluid-sm">_</span>
             <span className="text-fluid-sm font-medium tracking-tight whitespace-normal break-words">System ready. Press Enter to unlock console.</span>
          </div>
        </motion.div>
      )}
    </div>
  );
};
