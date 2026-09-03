import React, { useEffect, useRef } from 'react';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Projects } from '../components/sections/Projects';
import { Hackathons } from '../components/sections/Hackathons';
import { Skills } from '../components/sections/Skills';
import { Ecosystem } from '../components/sections/Ecosystem';
import { Articles } from '../components/sections/Articles';
import { Testimonials } from '../components/sections/Testimonials';
import { Contact } from '../components/sections/Contact';
import { Social } from '../components/sections/Social';
import { Philosophy } from '../components/sections/Philosophy';
import { NeofetchView } from '../components/sections/NeofetchView';

import { Dashboard } from '../components/sections/Dashboard';
import { Unlock } from '../components/sections/Unlock';
import { ThemeSelector } from '../components/sections/ThemeSelector';
import { SectionLoader } from '../components/ui/SectionLoader';

export const Home = ({ history, onBootComplete, onUnlock, currentTheme, onThemeChange, onCommand }) => {
  const lastItemRef = useRef(null);

  useEffect(() => {
    if (lastItemRef.current && history.length > 1) {
      // Smoothly scroll the new section right to the top of the terminal viewport
      lastItemRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [history.length]);

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
      {history.map((log, index) => {
        const isLast = index === history.length - 1;
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
