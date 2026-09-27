'use client';

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { siteMetadata } from '../data/portfolioData';
import { routesSeo } from '../data/seoConfig';

const TerminalContext = createContext(null);

export function TerminalProvider({ children, initialRoute = '/' }) {
  const [isLocked, setIsLocked] = useState(false);
  const [isBooting, setIsBooting] = useState(false);

  // Initialize history based on route
  const [history, setHistory] = useState(() => {
    const initial = [{ id: 'dashboard-init', type: 'component', content: 'dashboard' }];
    const cleanRoute = initialRoute.replace(/\/$/, '').toLowerCase();
    const validCommands = [
      '/about', '/work', '/skills', '/hackathons', '/ecosystem',
      '/social', '/philosophy', '/testimonials', '/articles', '/contact', '/neofetch'
    ];
    if (validCommands.includes(cleanRoute)) {
      initial.push({ id: 'url-input', type: 'input', content: cleanRoute });
      initial.push({ id: 'url-component', type: 'component', content: cleanRoute.substring(1) });
    }
    return initial;
  });

  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [currentTheme, setCurrentTheme] = useState('main');
  const [matrixActive, setMatrixActive] = useState(false);
  const [confettiActive, setConfettiActive] = useState(false);
  const [closeOverlayActive, setCloseOverlayActive] = useState(false);
  const [pageTitle, setPageTitle] = useState('Jayant Olhyan | Data Science & AI Portfolio | IIT Guwahati & MSIT');

  // Hydrate theme from localStorage after mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) {
      setCurrentTheme(savedTheme);
      document.documentElement.className = savedTheme;
    }
  }, []);

  const ensureRouteSection = useCallback((section) => {
    if (!section) return;
    const cleanSection = section.replace(/^\//, '').toLowerCase();
    setHistory(prev => {
      const alreadyHas = prev.some(item => item.type === 'component' && item.content === cleanSection);
      if (alreadyHas) return prev;
      return [
        ...prev,
        { id: 'route-in-' + Date.now(), type: 'input', content: `/${cleanSection}` },
        { id: 'route-out-' + (Date.now() + 1), type: 'component', content: cleanSection }
      ];
    });
  }, []);

  const setTheme = useCallback((themeId) => {
    setCurrentTheme(themeId);
    document.documentElement.className = themeId;
    try {
      localStorage.setItem('portfolio-theme', themeId);
    } catch (e) {
      // storage quota or restricted
    }
  }, []);

  const unlock = useCallback(() => {
    setIsLocked(false);
    setIsBooting(false);
    setHistory([
      { id: 'dashboard-init', type: 'component', content: 'dashboard' }
    ]);
  }, []);

  const completeBoot = useCallback(() => {
    setIsBooting(false);
    setHistory([
      { id: 'dashboard-init', type: 'component', content: 'dashboard' }
    ]);
  }, []);

  const executeCommand = useCallback((cmdRaw) => {
    let cmd = cmdRaw.trim().toLowerCase();
    if (!cmd) return;

    const ALIASES = {
      '/portfolio': '/work',
      '/projects': '/work',
      '/me': '/about',
      '/who': '/about',
      '/info': '/about',
      '/expertise': '/skills',
      '/writing': '/articles',
      '/blog': '/articles',
      '/reviews': '/testimonials',
      '/recommendations': '/testimonials',
      '/kill': '/exit',
      '/close': '/exit',
      '/specs': '/neofetch',
      '/system': '/neofetch',
    };

    if (ALIASES[cmd]) {
      cmd = ALIASES[cmd];
    }

    setCommandHistory(prev => [cmdRaw, ...prev]);
    setHistoryIndex(-1);

    const inputId = Date.now();
    setHistory(prev => [...prev, { id: inputId, type: 'input', content: cmdRaw }]);

    let response = null;
    let component = null;
    let newPath = null;

    if (['/main', '/dark', '/retro', '/space', '/glass'].includes(cmd)) {
      const themeId = cmd.substring(1);
      setTheme(themeId);
      response = `System theme updated to user wallpaper: [${themeId.toUpperCase()}]`;
    } else {
      switch (cmd) {
        case 'neofetch':
        case '/neofetch':
          component = 'neofetch';
          newPath = '/neofetch';
          break;

        case '/help':
        case 'help':
          response = `Available commands:
    /about        - Jayant Olhyan bio, background & education
    /work         - Featured projects, deep learning & full-stack apps
    /skills       - Technical stack, frameworks & AI models
    /hackathons   - 25x Hackathon track record & conference papers
    /social       - Social profiles & external connections
    /contact      - Email, phone, location & direct hire
    /ecosystem    - Institutional & hackathon partners
    /philosophy   - Engineering & design principles
    neofetch      - Render macOS system specs & Apple ASCII
    /testimonials - What peers and mentors say
    /articles     - Writing & technical insights
    /themes       - List & switch user wallpapers (/main, /dark, /retro, /space, /glass)
    /matrix       - Digital rain easter egg
    /confetti     - Celebration particle explosion
    /clear        - Clear terminal screen buffer
    /exit         - Terminate terminal session`;
          break;

        case '/themes':
        case 'themes':
          component = 'themes';
          break;
        case '/about':
        case 'about':
          component = 'about';
          newPath = '/about';
          break;
        case '/work':
        case 'work':
          component = 'work';
          newPath = '/work';
          break;
        case '/hackathons':
        case 'hackathons':
          component = 'hackathons';
          newPath = '/hackathons';
          break;
        case '/ecosystem':
        case 'ecosystem':
          component = 'ecosystem';
          newPath = '/ecosystem';
          break;
        case '/skills':
        case 'skills':
          component = 'skills';
          newPath = '/skills';
          break;
        case '/contact':
        case 'contact':
          component = 'contact';
          newPath = '/contact';
          break;
        case '/social':
        case 'social':
          component = 'social';
          newPath = '/social';
          break;
        case '/philosophy':
        case 'philosophy':
          component = 'philosophy';
          newPath = '/philosophy';
          break;
        case '/testimonials':
        case 'testimonials':
          component = 'testimonials';
          newPath = '/testimonials';
          break;
        case '/articles':
        case 'articles':
          component = 'articles';
          newPath = '/articles';
          break;
        case '/clear':
        case 'clear':
          setHistory([{ id: 'init-' + Date.now(), type: 'component', content: 'dashboard' }]);
          if (typeof window !== 'undefined' && window.location.pathname !== '/') {
            window.history.pushState(null, '', '/');
          }
          return;

        case '/matrix':
          setMatrixActive(true);
          response = 'Initializing Matrix digital rain protocol...';
          break;

        case '/confetti':
          setConfettiActive(true);
          response = 'Triggering celebration confetti!';
          break;

        case '/exit':
        case 'exit':
          setCloseOverlayActive(true);
          response = 'Process termination requested. Invoking /exit...';
          break;

        case '/secrets':
        case 'secrets':
          response = `ACCESS GRANTED. Secret commands available:
    neofetch  - System specs
    /matrix   - Digital green rain canvas
    /confetti - Celebration particles
    /exit     - Kill terminal session`;
          break;

        default:
          response = `Command not recognized: "${cmdRaw}". Type "/help" for all commands.`;
      }
    }

    const resId = Date.now() + 1;
    if (response) {
      setHistory(prev => [...prev, { id: resId, type: 'output', content: response }]);
    }
    if (component) {
      setHistory(prev => [...prev, { id: resId + 1, type: 'component', content: component }]);
    }

    // Synchronize browser URL without page reload
    if (newPath && typeof window !== 'undefined') {
      window.history.pushState(null, '', newPath);
    }
  }, [setTheme]);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.replace(/\/$/, '') || '/';
      const key = path === '/' ? 'home' : path.replace('/', '');
      if (routesSeo[key]) {
        executeCommand(path === '/' ? '/clear' : path);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [executeCommand]);

  // Update page title and meta attributes when terminal history changes
  useEffect(() => {
    const lastItem = history[history.length - 1];
    if (lastItem && (lastItem.type === 'component' || lastItem.type === 'input')) {
      const content = lastItem.content.replace(/^\//, '').toLowerCase();
      const seoEntry = routesSeo[content] || (content === 'dashboard' ? routesSeo.home : null);
      if (seoEntry) {
        document.title = seoEntry.title;
        setPageTitle(seoEntry.title);
      }
    }
  }, [history]);

  const handleHistoryUp = useCallback(() => {
    if (commandHistory.length === 0) return '';
    const newIndex = Math.min(historyIndex + 1, commandHistory.length - 1);
    setHistoryIndex(newIndex);
    return commandHistory[newIndex];
  }, [commandHistory, historyIndex]);

  const handleHistoryDown = useCallback(() => {
    if (historyIndex <= 0) {
      setHistoryIndex(-1);
      return '';
    }
    const newIndex = historyIndex - 1;
    setHistoryIndex(newIndex);
    return commandHistory[newIndex];
  }, [commandHistory, historyIndex]);

  const value = {
    history,
    isLocked,
    unlock,
    isBooting,
    completeBoot,
    executeCommand,
    commandHistory,
    historyIndex,
    setHistoryIndex,
    handleHistoryUp,
    handleHistoryDown,
    currentTheme,
    setTheme,
    matrixActive,
    setMatrixActive,
    confettiActive,
    setConfettiActive,
    closeOverlayActive,
    setCloseOverlayActive,
    ensureRouteSection,
    pageTitle,
  };

  return (
    <TerminalContext.Provider value={value}>
      {children}
    </TerminalContext.Provider>
  );
}

export function useTerminal() {
  const context = useContext(TerminalContext);
  if (!context) {
    throw new Error('useTerminal must be used within a TerminalProvider');
  }
  return context;
}
