import React, { useState, useRef, useEffect } from 'react';

export const CommandPrompt = ({ onCommand, onHistoryUp, onHistoryDown }) => {
  const [input, setInput] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    const handleClick = () => {
      inputRef.current?.focus();
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onCommand(input);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prevCmd = onHistoryUp();
      if (prevCmd !== undefined) setInput(prevCmd);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextCmd = onHistoryDown();
      if (nextCmd !== undefined) setInput(nextCmd);
    }
  };

  return (
    <div className="flex items-center gap-2.5 font-mono text-sm md:text-base group">
      <span className="text-[#00B050] font-bold select-none opacity-80 group-focus-within:opacity-100 transition-opacity">{'>'}</span>
      <form onSubmit={handleSubmit} className="flex-1">
        <input
          ref={inputRef}
          type="text"
          value={input}
          placeholder='Type a command... try "/help"'
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full bg-transparent border-none outline-none text-text-primary placeholder:text-text-secondary/30 caret-[#00B050] font-mono h-full focus:ring-0 py-0"
          autoComplete="off"
          autoCorrect="off"
          spellCheck="false"
          autoFocus
        />
      </form>
    </div>
  );
};
