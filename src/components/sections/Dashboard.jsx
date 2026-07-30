import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteMetadata, terminalBootLines, terminalBootLinesCompact, developerPortrait, themeData } from '../../data/portfolioData';

export const Dashboard = ({ currentTheme }) => {
  const activeTheme = themeData.find(t => t.id === currentTheme) || themeData[0];
  const portraitColor = activeTheme.portraitColor || '#00ff41';
  return (
    <div className="flex flex-col w-full max-w-6xl mx-auto py-4 space-y-8 md:space-y-10 px-0 sm:px-4 md:px-8">
      
      {/* Header ASCII Logo */}
      <div className="flex justify-center text-accent-bright/90 drop-shadow-[0_0_20px_rgba(57,255,20,0.4)] overflow-x-hidden pt-4 pb-6 md:py-8 border-b border-border-dark/30 mb-2 md:mb-4">
        {/* Desktop View */}
        <pre className="hidden md:block font-mono text-[10px] lg:text-[12px] leading-[1.2] select-none">
          {terminalBootLines.join('\n')}
        </pre>
        {/* Mobile View */}
        <pre className="block md:hidden font-mono text-[7px] xs:text-[8px] leading-[1.1] select-none text-center">
          {terminalBootLinesCompact.join('\n')}
        </pre>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-[clamp(1rem,3vw,2rem)] px-4 md:px-0">
        
        {/* Left Column: Portrait & Intro */}
        <div className="flex flex-col space-y-[clamp(1rem,3vw,1.5rem)] border border-dashed border-border-dark p-[clamp(1rem,3vw,1.5rem)] rounded-sm bg-bg-terminal/20 backdrop-blur-sm">
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-text-primary font-bold text-center w-full border-b border-border-dark pb-2 tracking-widest uppercase text-fluid-xs opacity-70">
              Personal Identifier
            </h3>
            
            {/* ASCII Portrait - Fluid Scaling */}
            <div className="select-none overflow-hidden w-full flex justify-center max-w-full">
              <pre 
                style={{ color: portraitColor, textShadow: `0 0 8px ${portraitColor}, 0 0 2px ${portraitColor}` }}
                className="font-mono text-[clamp(2px,1.2vw,4px)] leading-[1.12] tracking-[0.4px] overflow-hidden"
              >
                {developerPortrait.join('\n')}
              </pre>
            </div>
            
            <div className="text-center space-y-2 pt-2">
              <p className="text-fluid-sm font-medium text-text-primary tracking-tight">
                {siteMetadata.title}
              </p>
              <p className="text-fluid-xs text-text-secondary">
                {siteMetadata.location}
              </p>
              <a 
                href={`mailto:${siteMetadata.email}`} 
                className="text-fluid-xs text-accent-green hover:underline opacity-80 block min-h-[48px] flex items-center justify-center"
              >
                {siteMetadata.email}
              </a>
              <a 
                href={`tel:${siteMetadata.phone}`} 
                className="text-fluid-xs text-accent-green hover:underline opacity-80 block min-h-[48px] flex items-center justify-center -mt-4"
              >
                {siteMetadata.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Capabilities & Navigation */}
        <div className="flex flex-col space-y-[clamp(1rem,3vw,2rem)]">
          
          {/* Capabilities */}
          <div className="flex flex-col space-y-[clamp(0.5rem,2vw,1rem)] border border-dashed border-border-dark p-[clamp(1rem,3vw,1.5rem)] rounded-sm bg-bg-terminal/30 backdrop-blur-sm">
            <h3 className="text-text-primary font-bold border-b border-border-dark pb-2 tracking-widest uppercase text-fluid-xs opacity-70">
              Capabilities
            </h3>
            <div className="space-y-2 font-mono">
              {siteMetadata.capabilities.map((cap, i) => (
                <div key={i} className="flex flex-wrap sm:flex-nowrap items-baseline text-fluid-sm gap-1 sm:gap-2">
                  <span className="w-full sm:w-[clamp(5rem,15vw,6rem)] font-bold text-accent-green/90 flex-shrink-0">{cap.area}</span>
                  <span className="text-text-primary/90 leading-relaxed">
                    {cap.skills}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Guide */}
          <div className="flex flex-col space-y-[clamp(0.5rem,2vw,1rem)] border border-dashed border-border-dark p-[clamp(1rem,3vw,1.5rem)] rounded-sm bg-bg-terminal/30 backdrop-blur-sm">
            <h3 className="text-text-primary font-bold border-b border-border-dark pb-2 tracking-widest uppercase text-fluid-xs opacity-70">
              Navigation
            </h3>
            <div className="space-y-1 font-mono text-fluid-sm">
              <div className="flex items-center gap-4 min-h-[32px]">
                <span className="text-accent-green w-[clamp(4rem,15vw,6rem)] flex-shrink-0">/about</span>
                <span className="text-text-secondary/80">Bio & Timeline</span>
              </div>
              <div className="flex items-center gap-4 min-h-[32px]">
                <span className="text-accent-green w-[clamp(4rem,15vw,6rem)] flex-shrink-0">/work</span>
                <span className="text-text-secondary/80">Project Gallery</span>
              </div>
              <div className="flex items-center gap-4 min-h-[32px]">
                <span className="text-accent-green w-[clamp(4rem,15vw,6rem)] flex-shrink-0">/clients</span>
                <span className="text-text-secondary/80">Collaborations</span>
              </div>
              <div className="flex items-center gap-4 min-h-[32px]">
                <span className="text-accent-green w-[clamp(4rem,15vw,6rem)] flex-shrink-0">/skills</span>
                <span className="text-text-secondary/80">Tech Stack</span>
              </div>
              
              <div className="pt-3 text-text-secondary/70 italic text-fluid-xs">
                ... /help for all commands
              </div>
              <div className="text-text-secondary/70 italic text-fluid-xs">
                Try /themes to change the vibe
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer System Message */}
      <div className="pt-8 border-t border-border-dark space-y-1">
        <p className="text-[11px] text-text-secondary leading-relaxed font-mono italic opacity-80">
          [system] Bored of the dark? Try /themes – there are 4 looks to choose from.
        </p>
        <p className="text-[11px] text-text-secondary leading-relaxed font-mono italic opacity-80">
          Type /secrets if you like finding hidden things.
        </p>
      </div>
    </div>
  );
};
