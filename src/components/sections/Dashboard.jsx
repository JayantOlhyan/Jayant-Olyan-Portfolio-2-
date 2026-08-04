import React from 'react';
import { siteMetadata, terminalBootLines, terminalBootLinesCompact, themeData } from '../../data/portfolioData';
import { WelcomeBox } from './WelcomeBox';

export const Dashboard = ({ currentTheme, onCommand }) => {
  const activeTheme = themeData.find((t) => t.id === currentTheme) || themeData[0];

  return (
    <div className="flex flex-col w-full max-w-6xl mx-auto py-2 space-y-6 px-0 sm:px-2">
      {/* Header ASCII Logo */}
      <div className="flex justify-center text-accent-bright/90 drop-shadow-[0_0_20px_rgba(57,255,20,0.4)] overflow-x-hidden pt-2 pb-4 border-b border-border-dark/30 select-none">
        {/* Desktop ASCII */}
        <pre className="hidden md:block font-mono text-[9px] lg:text-[11px] leading-[1.15]">
          {terminalBootLines.join('\n')}
        </pre>
        {/* Mobile ASCII */}
        <pre className="block md:hidden font-mono text-[7px] xs:text-[8px] leading-[1.1] text-center">
          {terminalBootLinesCompact.join('\n')}
        </pre>
      </div>

      {/* Claude Code Style Welcome Box */}
      <WelcomeBox onCommand={onCommand} currentTheme={currentTheme} />

      {/* Quick Tips Footer */}
      <div className="pt-4 border-t border-border-dark flex flex-wrap justify-between items-center text-[11px] text-text-secondary font-mono opacity-80 gap-2">
        <div>[system] Type <span className="text-emerald-400 font-bold">/help</span> for all commands or click any badge above.</div>
        <div>Active Theme: <span className="text-amber-400 font-bold">[{activeTheme.id.toUpperCase()}]</span> (use /themes to change)</div>
      </div>
    </div>
  );
};
