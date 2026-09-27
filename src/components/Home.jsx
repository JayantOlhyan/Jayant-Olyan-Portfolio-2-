'use client';

import React, { useEffect, useRef } from 'react';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { Hackathons } from './sections/Hackathons';
import { Skills } from './sections/Skills';
import { Ecosystem } from './sections/Ecosystem';
import { Articles } from './sections/Articles';
import { Testimonials } from './sections/Testimonials';
import { Contact } from './sections/Contact';
import { Social } from './sections/Social';
import { Philosophy } from './sections/Philosophy';
import { NeofetchView } from './sections/NeofetchView';

import { Dashboard } from './sections/Dashboard';
import { Unlock } from './sections/Unlock';
import { ThemeSelector } from './sections/ThemeSelector';
import { SectionLoader } from './ui/SectionLoader';
import { useTerminal } from '../context/TerminalContext';

export const Home = (props) => {
  const terminal = useTerminal();
  const history = props.history ?? terminal.history;
  const onBootComplete = props.onBootComplete ?? terminal.completeBoot;
  const onUnlock = props.onUnlock ?? terminal.unlock;
  const currentTheme = props.currentTheme ?? terminal.currentTheme;
  const onThemeChange = props.onThemeChange ?? terminal.setTheme;
  const onCommand = props.onCommand ?? terminal.executeCommand;

  const initialSection = props.initialSection;

  useEffect(() => {
    if (initialSection) {
      terminal.ensureRouteSection(initialSection);
    }
  }, [initialSection, terminal]);

  // For SSR prerender output: if history has only dashboard, but initialSection is set, render both
  const displayHistory = React.useMemo(() => {
    if (initialSection && history.length === 1 && history[0].content === 'dashboard') {
      return [
        ...history,
        { id: 'ssr-input', type: 'input', content: `/${initialSection}` },
        { id: 'ssr-comp', type: 'component', content: initialSection }
      ];
    }
    return history;
  }, [history, initialSection]);

  const lastItemRef = useRef(null);

  useEffect(() => {
    if (lastItemRef.current && displayHistory.length > 1) {
      // Smoothly scroll the new section right to the top of the terminal viewport
      lastItemRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [displayHistory.length]);

  const renderComponent = (block) => {
    switch (block) {
      case 'neofetch': return <NeofetchView />;
      case 'unlock': return <Unlock onUnlock={onUnlock} />;
      case 'dashboard': return <Dashboard currentTheme={currentTheme} onCommand={onCommand} />;
      case 'themes': return <ThemeSelector currentTheme={currentTheme} onThemeChange={onThemeChange} />;
      case 'hero': return <Hero onComplete={onBootComplete} />;
      case 'about': return <About />;
      case 'work': return <Projects />;
      case 'hackathons': return <Hackathons onCommand={onCommand} />;
      case 'skills': return <Skills />;
      case 'social': return <Social />;
      case 'philosophy': return <Philosophy />;
      case 'articles': return <Articles />;
      case 'contact': return <Contact />;
      case 'ecosystem': return <Ecosystem />;
      case 'testimonials': return <Testimonials />;
      default: return null;
    }
  };

  return (
    <div className="flex flex-col space-y-6">
      {displayHistory.map((log, index) => {
        const isLast = index === displayHistory.length - 1;
        return (
          <div 
            key={log.id} 
            ref={isLast ? lastItemRef : null}
            className="animate-fade-in scroll-mt-4"
          >
            {log.type === 'input' && (
              <div className="text-emerald-400 font-mono font-bold mb-2 flex items-center space-x-2 pt-2">
                <span className="text-text-secondary/60">&gt;</span>
                <span>{log.content}</span>
              </div>
            )}
            {log.type === 'output' && (
              <div className="text-text-secondary font-mono whitespace-pre-wrap leading-relaxed">
                {log.content}
              </div>
            )}
            {log.type === 'component' && (
              <div className="my-4">
                <SectionLoader 
                  componentName={log.content} 
                  renderComponent={renderComponent} 
                  currentTheme={currentTheme} 
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
