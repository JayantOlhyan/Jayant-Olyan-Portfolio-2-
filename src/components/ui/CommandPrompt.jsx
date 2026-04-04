import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { commands } from '../../data/commands';

export const CommandPrompt = ({ onCommand, onHistoryUp, onHistoryDown }) => {
  const [input, setInput] = useState('');
  const [showMenu, setShowMenu] = useState(false);
  const [filteredCmds, setFilteredCmds] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
      inputRef.current?.focus();
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);

    // Show menu if input starts with /
    if (value.startsWith('/')) {
      const query = value.toLowerCase();
      const filtered = commands.filter(cmd => cmd.name.startsWith(query));
      setFilteredCmds(filtered);
      setSelectedIndex(0);
      setShowMenu(filtered.length > 0);
    } else {
      setShowMenu(false);
    }
  };

  const selectCommand = (cmd) => {
    setInput(cmd.name);
    setShowMenu(false);
    // Keep focus on input for immediate submission if needed
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    
    // If menu is open and a command is selected, we just fill the input
    // The user has to press enter again to submit, or we can submit directly.
    // Standard terminal behavior often just fills the input.
    if (showMenu && filteredCmds[selectedIndex]) {
      selectCommand(filteredCmds[selectedIndex]);
    } else {
      onCommand(input);
      setInput('');
      setShowMenu(false);
    }
  };

  const handleKeyDown = (e) => {
    if (showMenu) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % filteredCmds.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + filteredCmds.length) % filteredCmds.length);
      } else if (e.key === 'Tab') {
        e.preventDefault();
        if (filteredCmds[selectedIndex]) {
          selectCommand(filteredCmds[selectedIndex]);
        }
      } else if (e.key === 'Escape') {
        setShowMenu(false);
      } else if (e.key === 'Enter') {
        // Handled by handleSubmit
      }
    } else {
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        const prevCmd = onHistoryUp();
        if (prevCmd !== undefined) setInput(prevCmd);
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        const nextCmd = onHistoryDown();
        if (nextCmd !== undefined) setInput(nextCmd);
      }
    }
  };

  return (
    <div className="relative flex items-center gap-2.5 font-mono text-sm md:text-base group">
      {/* Autocomplete Menu */}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute bottom-full mb-4 left-0 w-full max-w-md bg-vlad-navy/90 backdrop-blur-xl border border-white/10 rounded-lg shadow-2xl overflow-hidden z-50 py-1"
          >
            <div className="max-h-60 overflow-y-auto custom-scrollbar">
              {filteredCmds.map((cmd, idx) => (
                <div
                  key={cmd.name}
                  onClick={() => selectCommand(cmd)}
                  className={`flex items-center gap-6 px-4 py-2.5 cursor-pointer transition-all duration-200 ${
                    idx === selectedIndex 
                    ? 'bg-white/10 translate-x-1' 
                    : 'hover:bg-white/5 opacity-70 hover:opacity-100'
                  }`}
                >
                  <span className={`text-vlad-orange font-bold min-w-[80px] transition-transform duration-200 ${idx === selectedIndex ? 'scale-105' : ''}`}>
                    {cmd.name}
                  </span>
                  <span className="text-vlad-slate text-sm truncate font-medium">
                    {cmd.desc}
                  </span>
                  {idx === selectedIndex && (
                    <motion.span 
                      layoutId="active-indicator"
                      className="ml-auto text-[10px] text-white/20 font-bold uppercase tracking-widest"
                    >
                      [ENTER]
                    </motion.span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <span className="text-[#00B050] font-bold select-none opacity-80 group-focus-within:opacity-100 transition-opacity">{'>'}</span>
      <form onSubmit={handleSubmit} className="flex-1">
        <input
          ref={inputRef}
          type="text"
          value={input}
          placeholder='Type a command... try "/help"'
          onChange={handleInputChange}
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

