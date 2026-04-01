import React from 'react';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Projects } from '../components/sections/Projects';
import { Hackathons } from '../components/sections/Hackathons';
import { Skills } from '../components/sections/Skills';
import { Ecosystem } from '../components/sections/Ecosystem';
import { Articles } from '../components/sections/Articles';
import { Testimonials } from '../components/sections/Testimonials';
import { Contact } from '../components/sections/Contact';

import { Dashboard } from '../components/sections/Dashboard';
import { Unlock } from '../components/sections/Unlock';
import { ThemeSelector } from '../components/sections/ThemeSelector';

export const Home = ({ history, onBootComplete, onUnlock, currentTheme, onThemeChange }) => {
  const renderComponent = (block) => {
    switch(block) {
      case 'unlock': return <Unlock onUnlock={onUnlock} />;
      case 'dashboard': return <Dashboard />;
      case 'themes': return <ThemeSelector currentTheme={currentTheme} onThemeChange={onThemeChange} />;
      case 'hero': return <Hero onComplete={onBootComplete} />;
      case 'about': return <About />;
      case 'work': return <Projects />;
      case 'hackathons': return <Hackathons />;
      case 'skills': return <Skills />;
      case 'articles': return <Articles />;
      case 'contact': return <Contact />;
      case 'ecosystem': return <Ecosystem />;
      case 'testimonials': return <Testimonials />;
      default: return null;
    }
  };

  return (
    <div className="flex flex-col space-y-6">
      {history.map((log) => (
        <div key={log.id} className="animate-fade-in">
          {log.type === 'input' && (
            <div className="text-text-primary mb-2">
               {log.content}
            </div>
          )}
          {log.type === 'output' && (
            <div className="text-text-secondary whitespace-pre-wrap">
               {log.content}
            </div>
          )}
          {log.type === 'component' && (
            <div className="my-4">
              {renderComponent(log.content)}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

