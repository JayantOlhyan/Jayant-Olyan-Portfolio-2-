import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wifi, BatteryCharging, Search, SlidersHorizontal, Info, Settings, Palette, RefreshCw, Lock } from 'lucide-react';

export const MacMenuBar = ({ onCommand, onOpenSettings, setCloseOverlayActive }) => {
  const [timeStr, setTimeStr] = useState('');
  const [dateStr, setDateStr] = useState('');
  const [isAppleMenuOpen, setIsAppleMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format time e.g., 4:23 AM
      setTimeStr(
        now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
      );
      // Format date e.g., Mon Aug 10
      setDateStr(
        now.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Close dropdown menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsAppleMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-7.5 z-[900] bg-[#141416]/80 backdrop-blur-2xl border-b border-white/10 px-3 flex items-center justify-between text-xs font-sans text-gray-200 select-none">
      {/* Left Navigation Menu Items */}
      <div className="flex items-center space-x-1 text-[12.5px]">
        {/* Apple  Dropdown Trigger */}
        <div ref={menuRef} className="relative">
          <button 
            onClick={() => setIsAppleMenuOpen(!isAppleMenuOpen)} 
            className={`px-2 py-0.5 rounded text-white text-sm font-semibold transition-colors cursor-pointer ${
              isAppleMenuOpen ? 'bg-white/20' : 'hover:bg-white/10'
            }`}
            title="Jayant OS Apple Menu"
          >
            
          </button>

          {/* Apple () Dropdown Menu */}
          <AnimatePresence>
            {isAppleMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, y: 5, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 5, scale: 0.98 }}
                transition={{ duration: 0.12 }}
                className="absolute left-0 top-full mt-1 w-56 bg-[#1e1e20]/95 backdrop-blur-2xl border border-white/15 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.7)] p-1.5 z-[999] text-xs font-sans text-white/90 space-y-0.5"
              >
                <button
                  onClick={() => {
                    onCommand('/neofetch');
                    setIsAppleMenuOpen(false);
                  }}
                  className="w-full flex items-center space-x-2.5 px-2.5 py-1.5 rounded-lg hover:bg-emerald-500/20 hover:text-emerald-400 transition-colors text-left cursor-pointer group"
                >
                  <Info className="w-3.5 h-3.5 text-white/60 group-hover:text-emerald-400" />
                  <span>About Jayant OS...</span>
                </button>

                <button
                  onClick={() => {
                    onOpenSettings && onOpenSettings();
                    setIsAppleMenuOpen(false);
                  }}
                  className="w-full flex items-center space-x-2.5 px-2.5 py-1.5 rounded-lg hover:bg-emerald-500/20 hover:text-emerald-400 transition-colors text-left cursor-pointer group"
                >
                  <Settings className="w-3.5 h-3.5 text-white/60 group-hover:text-emerald-400" />
                  <span>System Settings...</span>
                </button>

                <button
                  onClick={() => {
                    onCommand('/themes');
                    setIsAppleMenuOpen(false);
                  }}
                  className="w-full flex items-center space-x-2.5 px-2.5 py-1.5 rounded-lg hover:bg-emerald-500/20 hover:text-emerald-400 transition-colors text-left cursor-pointer group"
                >
                  <Palette className="w-3.5 h-3.5 text-white/60 group-hover:text-emerald-400" />
                  <span>Appearance & Themes...</span>
                </button>

                <div className="border-b border-white/10 my-1" />

                <button
                  onClick={() => {
                    onCommand('/clear');
                    setIsAppleMenuOpen(false);
                  }}
                  className="w-full flex items-center space-x-2.5 px-2.5 py-1.5 rounded-lg hover:bg-emerald-500/20 hover:text-emerald-400 transition-colors text-left cursor-pointer group"
                >
                  <RefreshCw className="w-3.5 h-3.5 text-white/60 group-hover:text-emerald-400" />
                  <span>Clear Terminal Buffer</span>
                </button>

                <button
                  onClick={() => {
                    setCloseOverlayActive && setCloseOverlayActive(true);
                    setIsAppleMenuOpen(false);
                  }}
                  className="w-full flex items-center space-x-2.5 px-2.5 py-1.5 rounded-lg hover:bg-red-500/20 hover:text-red-400 transition-colors text-left cursor-pointer group"
                >
                  <Lock className="w-3.5 h-3.5 text-white/60 group-hover:text-red-400" />
                  <span>Lock Screen / Session...</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Active Application Name */}
        <span className="font-bold text-white tracking-wide px-2 py-0.5">
          Jayant's Portfolio
        </span>

        {/* Navigation Section Buttons */}
        <button 
          onClick={() => onCommand('/about')}
          className="px-2 py-0.5 rounded hover:bg-white/10 transition-colors text-white/80 hover:text-white cursor-pointer hidden sm:inline"
        >
          About
        </button>
        <button 
          onClick={() => onCommand('/work')}
          className="px-2 py-0.5 rounded hover:bg-white/10 transition-colors text-white/80 hover:text-white cursor-pointer hidden sm:inline"
        >
          Projects
        </button>
        <button 
          onClick={() => onCommand('/skills')}
          className="px-2 py-0.5 rounded hover:bg-white/10 transition-colors text-white/80 hover:text-white cursor-pointer hidden sm:inline"
        >
          Skills
        </button>
        <button 
          onClick={() => onCommand('/hackathons')}
          className="px-2 py-0.5 rounded hover:bg-white/10 transition-colors text-white/80 hover:text-white cursor-pointer hidden md:inline"
        >
          Hackathons
        </button>
        <button 
          onClick={() => onCommand('/social')}
          className="px-2 py-0.5 rounded hover:bg-white/10 transition-colors text-white/80 hover:text-white cursor-pointer hidden sm:inline"
        >
          Social
        </button>
        <button 
          onClick={() => onCommand('/themes')}
          className="px-2 py-0.5 rounded hover:bg-white/10 transition-colors text-white/80 hover:text-white cursor-pointer hidden sm:inline"
        >
          Themes
        </button>
        <button 
          onClick={() => onCommand('/contact')}
          className="px-2 py-0.5 rounded hover:bg-white/10 transition-colors text-white/80 hover:text-white cursor-pointer hidden sm:inline"
        >
          Contact
        </button>
      </div>

      {/* Right System Status & Control Center Indicators */}
      <div className="flex items-center space-x-3 text-[11px] font-mono text-gray-300">
        {/* Status Pill */}
        <span className="hidden lg:inline-flex items-center space-x-1 bg-white/10 px-2 py-0.5 rounded text-[10px] text-emerald-400 font-semibold border border-white/10">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping mr-1" />
          <span>STATUS: ONLINE</span>
        </span>

        {/* Spotlight Search Icon */}
        <button 
          onClick={() => onCommand('/help')}
          className="p-1 rounded hover:bg-white/10 transition-colors text-white/80 hover:text-emerald-400 cursor-pointer"
          title="Spotlight Search / Help"
        >
          <Search className="w-3.5 h-3.5" />
        </button>

        {/* Control Center Settings Shortcut */}
        <button
          onClick={() => onOpenSettings && onOpenSettings()}
          className="p-1 rounded hover:bg-white/10 transition-colors text-white/80 hover:text-emerald-400 cursor-pointer"
          title="macOS Control Center / System Settings"
        >
          <SlidersHorizontal className="w-3.5 h-3.5" />
        </button>

        {/* Network & Battery */}
        <Wifi className="w-3.5 h-3.5 text-emerald-400" />
        <div className="flex items-center space-x-1 text-white/80">
          <BatteryCharging className="w-4 h-4 text-emerald-400" />
          <span className="text-[10px] hidden sm:inline font-sans">100%</span>
        </div>

        {/* Formatted macOS Date & Time */}
        <div className="flex items-center space-x-1.5 font-sans font-semibold text-white tracking-wide">
          <span className="hidden sm:inline text-white/70">{dateStr}</span>
          <span>{timeStr}</span>
        </div>
      </div>
    </div>
  );
};
