import { useState, useCallback } from 'react';

export const useTerminal = () => {
  const [history, setHistory] = useState([
    { id: 'boot', type: 'component', content: 'hero' }
  ]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isBooting, setIsBooting] = useState(true);

  const completeBoot = useCallback(() => {
    setIsBooting(false);
    // On boot complete, we replace the hero with the dashboard 
    // or keep it and add dashboard. VladBurca replaces it.
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

    const resId = Date.now() + 1;
    if (response) {
      setHistory(prev => [...prev, { id: resId, type: 'output', content: response }]);
    } else if (component) {
      setHistory(prev => [...prev, { id: resId, type: 'component', content: component }]);
    }
  }, []);

  return { 
    history, 
    isBooting, 
    completeBoot, 
    executeCommand,
    commandHistory,
    historyIndex,
    setHistoryIndex
  };
};
