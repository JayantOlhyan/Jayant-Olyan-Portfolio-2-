import { useState, useCallback, useEffect } from 'react';

export const useTerminal = () => {
  const [isLocked, setIsLocked] = useState(true);
  const [history, setHistory] = useState([
    { id: 'lock', type: 'component', content: 'unlock' }
  ]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isBooting, setIsBooting] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('dark');

  const setTheme = useCallback((themeId) => {
    setCurrentTheme(themeId);
    document.documentElement.className = themeId;
    localStorage.setItem('portfolio-theme', themeId);
  }, []);

  // Initialize theme from localStorage or default
  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    setTheme(savedTheme);
  }, [setTheme]);

  const unlock = useCallback(() => {
    setIsLocked(false);
    setIsBooting(false); // No boot sequence, skip directly to ready state
    setHistory([{ id: 'init', type: 'component', content: 'dashboard' }]);
  }, []);

  const completeBoot = useCallback(() => {
    setIsBooting(false);
    setHistory([{ id: 'init', type: 'component', content: 'dashboard' }]);
  }, []);

  const executeCommand = useCallback((cmdRaw) => {
    const cmd = cmdRaw.trim().toLowerCase();
    if (!cmd) return;

    // Add to command history
    setCommandHistory(prev => [cmdRaw, ...prev]);
    setHistoryIndex(-1);

    // Add input to display history
    const inputId = Date.now();
    setHistory(prev => [...prev, { id: inputId, type: 'input', content: cmdRaw }]);

    let response = null;
    let component = null;

    // Theme switching logic
    if (['/dark', '/light', '/retro', '/glass'].includes(cmd)) {
      const themeId = cmd.substring(1);
      setTheme(themeId);
      response = `System theme updated to: [${themeId.toUpperCase()}]`;
    } else {
      switch (cmd) {
        case '/help':
        case 'help':
          response = `Available commands:
    /about       - Professional bio and expertise
    /work        - Featured projects and case studies
    /skills      - Technical stack and tools
    /contact     - Contact information
    /clear       - Clear terminal history
    /themes      - List available color themes
    /secrets     - ???`;
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
        case '/projects':
        case 'projects':
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
        case '/clear':
        case 'clear':
          setHistory([{ id: 'init-' + Date.now(), type: 'component', content: 'dashboard' }]);
          return;
        case '/secrets':
        case 'secrets':
          response = `ACCESS GRANTED. Experimental features found:
    /matrix   - Wake up, Neo...
    /coffee   - Check system energy levels
    /konami   - ???`;
          break;
        case '/matrix':
          response = "Establishing secure connection... Done. Welcome to the Matrix.";
          break;
        default:
          response = `Command not found: ${cmd}. Type "/help" for assistance.`;
      }
    }

    const resId = Date.now() + 1;
    if (response) {
      setHistory(prev => [...prev, { id: resId, type: 'output', content: response }]);
    } else if (component) {
      setHistory(prev => [...prev, { id: resId, type: 'component', content: component }]);
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
    setTheme
  };
};
