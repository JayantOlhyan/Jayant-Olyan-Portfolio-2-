import React from 'react';
import { themeData } from '../../data/portfolioData';

export const ThemeSelector = ({ currentTheme, onThemeChange }) => {
  return (
    <div className="flex flex-col space-y-3 w-full max-w-2xl mt-4">
      {themeData.map((theme) => {
        const isActive = currentTheme === theme.id;
        
        return (
          <div 
            key={theme.id}
            onClick={() => onThemeChange(theme.id)}
            className={`
              relative flex items-center justify-between p-3 rounded-md cursor-pointer transition-all duration-200
              border ${isActive ? 'border-[#ED8936] bg-[#ED8936]/5' : 'border-border-dark/30 hover:border-border-dark/60 bg-bg-terminal/30'}
            `}
          >
            <div className="flex items-center space-x-4">
              {/* Color Swatches */}
              <div className="flex -space-x-1">
                {theme.colors.map((color, idx) => (
                  <div 
                    key={idx}
                    className="w-4 h-4 rounded-sm border border-black/20"
                    style={{ backgroundColor: color, zIndex: 4 - idx }}
                  />
                ))}
              </div>
              
              {/* Command and Info */}
              <div className="flex items-baseline space-x-2 font-mono text-sm">
                <span className="text-text-primary font-bold">{theme.command}</span>
                <span className="text-text-primary/90">{theme.name}</span>
                {theme.description && (
                  <span className="text-text-secondary opacity-70">— {theme.description}</span>
                )}
              </div>
            </div>

            {/* Active Indicator */}
            {isActive && (
              <div className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-[#ED8936] font-bold">
                <div className="w-1.5 h-1.5 rounded-full bg-[#ED8936] animate-pulse" />
                <span>active</span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
