import { useState, useCallback, useEffect } from 'react';

export const useTerminal = () => {
  const [isLocked, setIsLocked] = useState(false);
  const [isBooting, setIsBooting] = useState(false);
  const [history, setHistory] = useState([
    { id: 'dashboard-init', type: 'component', content: 'dashboard' }
  ]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const [currentTheme, setCurrentTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'main';
  });

  const [matrixActive, setMatrixActive] = useState(false);
  const [confettiActive, setConfettiActive] = useState(false);
  const [closeOverlayActive, setCloseOverlayActive] = useState(false);

  const setTheme = useCallback((themeId) => {
    setCurrentTheme(themeId);
    document.documentElement.className = themeId;
    localStorage.setItem('portfolio-theme', themeId);
  }, []);

  useEffect(() => {
    document.documentElement.className = currentTheme;
  }, [currentTheme]);

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

    if (['/main', '/dark', '/retro', '/space', '/glass'].includes(cmd)) {
      const themeId = cmd.substring(1);
      setTheme(themeId);
      response = `System theme updated to user wallpaper: [${themeId.toUpperCase()}]`;
    } else {
      switch (cmd) {
        case 'neofetch':
        case '/neofetch':
          component = 'neofetch';
          break;

        case '/help':
        case 'help':
          response = `Available commands:
    /about        - Jayant Olhyan bio & timeline
    /work         - Featured projects and case studies
    /skills       - Technical stack, frameworks & AI models
    /social       - Social profiles & external links
    /philosophy   - Engineering & design principles
    neofetch      - Render macOS system specs & Apple ASCII
    /testimonials - What peers and mentors say
    /articles     - Writing & technical insights
    /themes       - List & switch user wallpapers (/main, /dark, /retro, /space, /glass)
    /matrix       - Digital rain easter egg
    /confetti     - Celebration particle explosion
    /clear        - Clear terminal screen
    /exit         - Terminate terminal session`;
          break;

        case '/themes':
        case 'themes':
          component = 'themes';
          break;
        case '/about':
        case 'about':
          component = 'about';
          break;
        case '/work':
        case 'work':
          component = 'work';
          break;
        case '/skills':
        case 'skills':
          component = 'skills';
          break;
        case '/contact':
        case 'contact':
          component = 'contact';
          break;
        case '/social':
        case 'social':
          component = 'social';
          break;
        case '/philosophy':
        case 'philosophy':
          component = 'philosophy';
          break;
        case '/testimonials':
        case 'testimonials':
          component = 'testimonials';
          break;
        case '/articles':
        case 'articles':
          component = 'articles';
          break;
        case '/clear':
        case 'clear':
          setHistory([{ id: 'init-' + Date.now(), type: 'component', content: 'dashboard' }]);
          return;

        case '/matrix':
          setMatrixActive(true);
          response = "Initializing Matrix digital rain protocol...";
          break;

        case '/confetti':
          setConfettiActive(true);
          response = "Triggering celebration confetti!";
          break;

        case '/exit':
        case 'exit':
          setCloseOverlayActive(true);
          response = "Process termination requested. Invoking /exit...";
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
  }, [setTheme]);

  return { 
    history, 
    isLocked,
    unlock,
    isBooting, 
    completeBoot, 
    executeCommand,
    commandHistory,
    historyIndex,
    setHistoryIndex,
    currentTheme,
    setTheme,
    matrixActive,
    setMatrixActive,
    confettiActive,
    setConfettiActive,
    closeOverlayActive,
    setCloseOverlayActive,
  };
};
