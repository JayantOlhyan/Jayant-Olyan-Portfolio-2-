'use client';

import React from 'react';
import { themeData } from '../../data/portfolioData';
import { WelcomeBox } from './WelcomeBox';
import { AsciiHeader } from '../ui/AsciiHeader';

export const Dashboard = ({ currentTheme, onCommand }) => {
  const activeTheme = themeData.find((t) => t.id === currentTheme) || themeData[0];

  return (
    <div className="flex flex-col w-full max-w-6xl mx-auto py-2 space-y-6 px-0 sm:px-2">
      {/* Header ASCII Logo */}
      <AsciiHeader currentTheme={currentTheme} />

      {/* Claude Code Style Welcome Box */}
      <WelcomeBox onCommand={onCommand} currentTheme={currentTheme} />

      {/* Quick Tips Footer */}
      <div className="pt-4 border-t border-border-dark flex flex-wrap justify-between items-center text-[11px] text-text-secondary font-mono opacity-80 gap-2">
        <div>
          [system] Type{' '}
          <button
            type="button"
            onClick={() => onCommand && onCommand('/help')}
            className="text-accent-bright font-bold hover:underline cursor-pointer transition-colors"
          >
            /help
          </button>{' '}
          for all commands or click any badge above.
        </div>
        <div>
          Active Theme:{' '}
          <button
            type="button"
            onClick={() => onCommand && onCommand('/themes')}
            className="text-amber-400 font-bold hover:underline cursor-pointer transition-colors"
          >
            [{activeTheme.id.toUpperCase()}]
          </button>{' '}
          (use{' '}
          <button
            type="button"
            onClick={() => onCommand && onCommand('/themes')}
            className="text-text-primary hover:text-accent-bright underline cursor-pointer"
          >
            /themes
          </button>{' '}
          to change)
        </div>
      </div>
    </div>
  );
};
