import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteMetadata, terminalBootLines, bootSequence, developerPortrait } from '../../data/portfolioData';

export const Dashboard = () => {
  return (
    <div className="flex flex-col w-full max-w-6xl mx-auto py-4 space-y-10 px-4 md:px-8">
      
      {/* Header ASCII Logo */}
      <div className="flex justify-center text-accent-bright/90 drop-shadow-[0_0_20px_rgba(57,255,20,0.4)] overflow-x-hidden py-8 border-b border-border-dark/50 mb-4">
        <pre className="font-mono text-[8px] sm:text-[10px] md:text-[12px] leading-[1.1] md:leading-[1.2] select-none">
          {terminalBootLines.join('\n')}
        </pre>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left Column: Portrait & Intro */}
        <div className="flex flex-col space-y-6 border border-dashed border-border-dark p-6 rounded-sm bg-bg-terminal/30 backdrop-blur-sm">
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-text-primary font-bold text-center w-full border-b border-border-dark pb-2 tracking-widest uppercase text-xs opacity-70">
              Welcome, visitor.
            </h3>
            
            {/* ASCII Portrait */}
            <div className="select-none overflow-x-auto w-full flex justify-center custom-scrollbar">
              <pre className="font-mono text-[2.5px] sm:text-[3.5px] md:text-[4px] lg:text-[4.5px] leading-[1.12] tracking-[0.4px] text-[#00ff41] [text-shadow:0_0_8px_#00ff41,0_0_2px_#00ff41]">
                {developerPortrait.join('\n')}
              </pre>
            </div>
            
            <div className="text-center space-y-2 pt-2">
              <p className="text-sm font-medium text-text-primary tracking-tight">
                {siteMetadata.title}
              </p>
              <p className="text-xs text-text-secondary">
                {siteMetadata.location}
              </p>
              <a 
                href={`mailto:${siteMetadata.email}`} 
                className="text-xs text-accent-green hover:underline opacity-80"
              >
                {siteMetadata.email}
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Capabilities & Navigation */}
        <div className="flex flex-col space-y-8">
          
          {/* Capabilities */}
          <div className="flex flex-col space-y-4 border border-dashed border-border-dark p-6 rounded-sm bg-bg-terminal/30 backdrop-blur-sm">
            <h3 className="text-text-primary font-bold border-b border-border-dark pb-2 tracking-widest uppercase text-xs opacity-70">
              Capabilities
            </h3>
            <div className="space-y-4">
              {siteMetadata.capabilities.map((cap, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-xs font-bold text-text-primary mb-1">{cap.area}</span>
                  <span className="text-[11px] text-text-secondary leading-relaxed">
                    {cap.skills}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Guide */}
          <div className="flex flex-col space-y-4 border border-dashed border-border-dark p-6 rounded-sm bg-bg-terminal/30 backdrop-blur-sm">
            <h3 className="text-text-primary font-bold border-b border-border-dark pb-2 tracking-widest uppercase text-xs opacity-70">
              Navigation
            </h3>
            <div className="space-y-2 font-mono text-[11px]">
              <div className="flex items-center gap-3">
                <span className="text-accent-green">/about</span>
                <span className="text-text-secondary">Learn more about my journey</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-accent-green">/work</span>
                <span className="text-text-secondary">View past and current projects</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-accent-green">/skills</span>
                <span className="text-text-secondary">Check my technical stack</span>
              </div>
              <div className="flex items-center mt-4">
                <span className="text-text-secondary italic">... /help for all commands</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer System Message */}
      <div className="pt-8 border-t border-border-dark">
        <p className="text-[11px] text-text-secondary leading-relaxed font-mono italic opacity-60">
          [system] This site uses analytics cookies (GA4) to understand traffic. <br/>
          Accept • Decline • /privacy for details
        </p>
      </div>
    </div>
  );
};
