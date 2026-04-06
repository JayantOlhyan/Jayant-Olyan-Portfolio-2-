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
    <div ref={containerRef} className="flex flex-col font-mono text-[12px] md:text-[13px] leading-[1.8] min-h-[400px] select-none cursor-default py-10 px-4 md:px-10 lg:px-20 max-w-5xl mx-auto">
      {/* Boot Messages */}
      <div className="flex flex-col">
        {visibleMessages.map((msg, i) => (
          <div key={i} className="flex items-center gap-2 min-h-[1.8em]">
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
          className="mt-12 flex flex-col items-start gap-4"
        >
          <div className="flex items-center gap-2 text-text-secondary bg-white/5 px-4 py-2 rounded-sm border border-white/10 shadow-lg">
             <span className="animate-pulse">_</span>
             <span className="text-sm font-medium tracking-tight">System ready. Press Enter to unlock console.</span>
          </div>
        </motion.div>
      )}
    </div>
  );
};
