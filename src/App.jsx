import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home';
import { useTerminal } from './hooks/useTerminal';

function App() {
  const { 
    history, 
    executeCommand, 
    isBooting, 
    isLocked,
    completeBoot,
    unlock,
    commandHistory,
    historyIndex,
    setHistoryIndex 
  } = useTerminal();

  const handleHistoryUp = () => {
    if (commandHistory.length === 0) return;
    const newIndex = Math.min(historyIndex + 1, commandHistory.length - 1);
    setHistoryIndex(newIndex);
    return commandHistory[newIndex];
  };

  const handleHistoryDown = () => {
    if (historyIndex <= 0) {
      setHistoryIndex(-1);
      return '';
    }
    const newIndex = historyIndex - 1;
    setHistoryIndex(newIndex);
    return commandHistory[newIndex];
  };

  return (
    <BrowserRouter>
      <MainLayout 
        onCommand={executeCommand} 
        hideInput={isBooting || isLocked}
        onHistoryUp={handleHistoryUp}
        onHistoryDown={handleHistoryDown}
      >
         <Routes>
           <Route path="/" element={<Home history={history} onBootComplete={completeBoot} onUnlock={unlock} />} />
         </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
