import React, { useState, useEffect } from 'react';
import { Wifi, BatteryCharging, Search, Command } from 'lucide-react';
import { siteMetadata } from '../../data/portfolioData';

export const MacMenuBar = ({ currentTheme, onCommand, activeSection }) => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-7 z-[900] bg-black/40 backdrop-blur-md border-b border-white/10 px-3 flex items-center justify-between text-xs font-sans text-gray-200 select-none">
      {/* Left Menu Items */}
      <div className="flex items-center space-x-3 text-[12px] font-medium">
        <span 
          onClick={() => onCommand('/help')} 
          className="text-white hover:opacity-70 cursor-pointer text-sm font-semibold pr-1"
          title="Jayant OS Menu"
        >
          
        </span>
        <span className="font-bold text-white tracking-wide">
          Jayant's Portfolio
        </span>
        <span 
          onClick={() => onCommand('/about')}
          className="hover:text-emerald-400 cursor-pointer hidden sm:inline"
        >
          About
        </span>
        <span 
          onClick={() => onCommand('/work')}
          className="hover:text-emerald-400 cursor-pointer hidden sm:inline"
        >
          Projects
        </span>
        <span 
          onClick={() => onCommand('/skills')}
          className="hover:text-emerald-400 cursor-pointer hidden sm:inline"
        >
          Skills
        </span>
        <span 
          onClick={() => onCommand('/themes')}
          className="hover:text-emerald-400 cursor-pointer hidden sm:inline"
        >
          Themes
        </span>
        <span 
          onClick={() => onCommand('/contact')}
          className="hover:text-emerald-400 cursor-pointer hidden sm:inline"
        >
          Contact
        </span>
      </div>

      {/* Right System Indicators */}
      <div className="flex items-center space-x-3 text-[11px] font-mono text-gray-300">
        <span className="hidden md:inline-flex items-center space-x-1 bg-white/10 px-2 py-0.5 rounded text-[10px] text-emerald-400 font-semibold border border-white/10">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping mr-1" />
          <span>STATUS: ONLINE</span>
        </span>
        <button 
          onClick={() => onCommand('/help')}
          className="hover:text-emerald-400 transition-colors cursor-pointer"
          title="Search / Spotlight"
        >
          <Search className="w-3.5 h-3.5" />
        </button>
        <Wifi className="w-3.5 h-3.5 text-emerald-400" />
        <BatteryCharging className="w-4 h-4 text-emerald-400" />
        <span className="font-semibold text-white tracking-wider">{time}</span>
      </div>
    </div>
  );
};
