'use client';

import React from 'react';
import { terminalBootLines, terminalBootLinesCompact, themeData } from '../../data/portfolioData';

export const AsciiHeader = ({ currentTheme }) => {
  const activeTheme = themeData.find((t) => t.id === currentTheme) || themeData[0];
  const accentColor = activeTheme.colors?.[2] || '#39FF14';

  const monoFontFamily = 'ui-monospace, "SF Mono", Monaco, Menlo, Consolas, "Liberation Mono", "Courier New", monospace';

  return (
    <div 
      className="flex flex-col items-center justify-center overflow-x-hidden pt-2 pb-4 border-b border-border-dark/30 select-none w-full transition-all duration-300"
      style={{
        filter: `drop-shadow(0 0 16px ${accentColor}4D)`,
      }}
    >
      {/* Desktop ASCII Banner */}
      <pre 
        style={{
          color: accentColor,
          fontFamily: monoFontFamily,
          fontVariantEastAsian: 'normal',
          letterSpacing: '0px',
          lineHeight: '1.18',
        }}
        className="hidden md:block text-[8px] lg:text-[10px] xl:text-[11px] whitespace-pre select-none text-center transition-colors duration-300"
      >
        {terminalBootLines.join('\n')}
      </pre>

      {/* Mobile / Compact ASCII Banner */}
      <pre 
        style={{
          color: accentColor,
          fontFamily: monoFontFamily,
          fontVariantEastAsian: 'normal',
          letterSpacing: '0px',
          lineHeight: '1.15',
        }}
        className="block md:hidden text-[6.5px] xs:text-[7.5px] sm:text-[8.5px] whitespace-pre select-none text-center transition-colors duration-300"
      >
        {terminalBootLinesCompact.join('\n')}
      </pre>
    </div>
  );
};
