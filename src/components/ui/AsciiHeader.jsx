'use client';

import React, { useMemo } from 'react';
import { terminalBootLines, terminalBootLinesCompact, themeData } from '../../data/portfolioData';

export const AsciiHeader = ({ currentTheme }) => {
  const activeTheme = themeData.find((t) => t.id === currentTheme) || themeData[0];
  const accentColor = activeTheme.colors?.[2] || '#39FF14';

  const monoFont = 'ui-monospace, "SF Mono", Monaco, Menlo, Consolas, "Liberation Mono", monospace';

  // Precompute desktop glyph cells (cols: 131, rows: 6)
  const desktopCells = useMemo(() => {
    const cells = [];
    const cellW = 9.2;
    const cellH = 16;
    terminalBootLines.forEach((line, r) => {
      const y = (r + 0.5) * cellH;
      for (let c = 0; c < line.length; c++) {
        const ch = line[c];
        if (ch && ch !== ' ') {
          cells.push({ ch, x: (c + 0.5) * cellW, y });
        }
      }
    });
    const totalW = terminalBootLines[0].length * cellW;
    const totalH = terminalBootLines.length * cellH;
    return { cells, totalW, totalH };
  }, []);

  // Precompute mobile glyph cells (cols: 51, rows: 13)
  const mobileCells = useMemo(() => {
    const cells = [];
    const cellW = 9.2;
    const cellH = 16;
    terminalBootLinesCompact.forEach((line, r) => {
      const y = (r + 0.5) * cellH;
      for (let c = 0; c < line.length; c++) {
        const ch = line[c];
        if (ch && ch !== ' ') {
          cells.push({ ch, x: (c + 0.5) * cellW, y });
        }
      }
    });
    const totalW = terminalBootLinesCompact[0].length * cellW;
    const totalH = terminalBootLinesCompact.length * cellH;
    return { cells, totalW, totalH };
  }, []);

  return (
    <div 
      className="flex flex-col items-center justify-center pt-2 pb-4 border-b border-border-dark/30 select-none w-full transition-all duration-300"
      style={{
        filter: `drop-shadow(0 0 16px ${accentColor}4D)`,
      }}
    >
      <span className="sr-only">JAYANT OLHYAN</span>

      {/* Desktop Responsive SVG Banner (>= 640px) */}
      <div className="hidden sm:flex w-full items-center justify-center max-w-4xl px-2">
        <svg
          role="img"
          aria-label="Jayant Olhyan ASCII Header Banner"
          viewBox={`0 0 ${desktopCells.totalW.toFixed(1)} ${desktopCells.totalH.toFixed(1)}`}
          className="w-full h-auto max-h-[110px] select-none pointer-events-none transition-colors duration-300"
          style={{ overflow: 'visible' }}
        >
          <style>{`
            .ascii-glyph {
              font-family: ${monoFont};
              font-size: 14.5px;
              font-weight: 700;
              text-anchor: middle;
              dominant-baseline: central;
              fill: ${accentColor};
            }
          `}</style>
          {desktopCells.cells.map((cell, idx) => (
            <text
              key={idx}
              x={cell.x.toFixed(1)}
              y={cell.y.toFixed(1)}
              className="ascii-glyph"
            >
              {cell.ch}
            </text>
          ))}
        </svg>
      </div>

      {/* Mobile Stacked Responsive SVG Banner (< 640px) */}
      <div className="flex sm:hidden w-full items-center justify-center max-w-xs px-2">
        <svg
          role="img"
          aria-label="Jayant Olhyan ASCII Header Banner Mobile"
          viewBox={`0 0 ${mobileCells.totalW.toFixed(1)} ${mobileCells.totalH.toFixed(1)}`}
          className="w-full h-auto max-h-[150px] select-none pointer-events-none transition-colors duration-300"
          style={{ overflow: 'visible' }}
        >
          <style>{`
            .ascii-glyph-mobile {
              font-family: ${monoFont};
              font-size: 14.5px;
              font-weight: 700;
              text-anchor: middle;
              dominant-baseline: central;
              fill: ${accentColor};
            }
          `}</style>
          {mobileCells.cells.map((cell, idx) => (
            <text
              key={idx}
              x={cell.x.toFixed(1)}
              y={cell.y.toFixed(1)}
              className="ascii-glyph-mobile"
            >
              {cell.ch}
            </text>
          ))}
        </svg>
      </div>
    </div>
  );
};
