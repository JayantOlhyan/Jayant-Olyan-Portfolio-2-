import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sliders, 
  Palette, 
  Sparkles, 
  Terminal, 
  X, 
  Check, 
  RefreshCw, 
  ChevronRight, 
  ChevronLeft,
  Search,
  Settings as SettingsIcon,
  Monitor,
  Bell,
  Lock,
  User,
  Zap,
  Info,
  ExternalLink,
  Shield,
  Layers
} from 'lucide-react';
import { themeData, siteMetadata } from '../../data/portfolioData';

export const SettingsModal = ({ 
  isOpen, 
  onClose, 
  currentTheme, 
  onThemeChange, 
  matrixActive, 
  setMatrixActive, 
  confettiActive, 
  setConfettiActive,
  onCommand
}) => {
  const [activeTab, setActiveTab] = useState('general');
  const [searchQuery, setSearchQuery] = useState('');

  if (!isOpen) return null;

  const sidebarCategories = [
    { id: 'general', label: 'General', icon: SettingsIcon, color: 'bg-zinc-600' },
    { id: 'appearance', label: 'Appearance & Wallpaper', icon: Palette, color: 'bg-indigo-500' },
    { id: 'desktop', label: 'Desktop & Dock (FX)', icon: Monitor, color: 'bg-blue-500' },
    { id: 'notifications', label: 'Notifications & Status', icon: Bell, color: 'bg-red-500' },
    { id: 'security', label: 'Account & Socials', icon: Lock, color: 'bg-amber-500' },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/65 backdrop-blur-md select-none font-sans">
        {/* Backdrop click listener */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose} 
          className="absolute inset-0"
        />

        {/* macOS Sequoia System Settings Window */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.94, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 12 }}
          transition={{ type: 'spring', stiffness: 380, damping: 28 }}
          className="relative z-10 w-full max-w-[860px] h-[590px] bg-[#1e1e20]/95 border border-white/15 rounded-2xl shadow-[0_35px_100px_rgba(0,0,0,0.85)] overflow-hidden text-white flex"
        >
          {/* LEFT SIDEBAR (~260px) */}
          <div className="w-[260px] bg-[#18181a]/95 border-r border-white/10 flex flex-col p-3 space-y-3">
            {/* macOS Window Controls */}
            <div className="flex items-center space-x-2 px-1 pt-1 pb-1">
              <button 
                onClick={onClose}
                className="w-3 h-3 rounded-full bg-[#ff5f56] hover:bg-red-600 transition-colors flex items-center justify-center group cursor-pointer shadow-sm"
              >
                <X className="w-2 h-2 text-black opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-sm" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-sm" />
            </div>

            {/* Search Input */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-white/40" />
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#262629] border border-white/10 rounded-lg pl-8 pr-3 py-1 text-xs text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-all font-mono"
              />
            </div>

            {/* Apple Account Profile Card */}
            <div className="flex items-center space-x-3 p-2 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center font-bold text-black text-sm shadow-md">
                JO
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold text-white truncate">{siteMetadata.name}</div>
                <div className="text-[10px] text-white/50 truncate">Apple Account • Developer</div>
              </div>
            </div>

            {/* Sidebar Items List */}
            <div className="flex-1 overflow-y-auto space-y-0.5 pr-0.5 custom-scrollbar">
              {sidebarCategories
                .filter(cat => cat.label.toLowerCase().includes(searchQuery.toLowerCase()))
                .map((category) => {
                  const IconComp = category.icon;
                  const isActive = activeTab === category.id;

                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveTab(category.id)}
                      className={`w-full flex items-center space-x-2.5 px-2.5 py-1.5 rounded-lg text-xs transition-all cursor-pointer ${
                        isActive 
                          ? 'bg-[#3a3a3c] text-white font-semibold shadow-sm' 
                          : 'text-white/80 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-md ${category.color} flex items-center justify-center text-white shadow-xs`}>
                        <IconComp className="w-3 h-3" />
                      </div>
                      <span className="truncate">{category.label}</span>
                    </button>
                  );
                })}
            </div>
          </div>

          {/* RIGHT MAIN PANEL */}
          <div className="flex-1 bg-[#1e1e20]/95 flex flex-col overflow-hidden">
            {/* Top Navigation Bar with < > */}
            <div className="h-10 px-4 border-b border-white/10 flex items-center justify-between text-white/60 bg-white/[0.02]">
              <div className="flex items-center space-x-1">
                <button className="p-1 rounded-md hover:bg-white/10 text-white/40 cursor-not-allowed">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button className="p-1 rounded-md hover:bg-white/10 text-white/40 cursor-not-allowed">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              <div className="text-[11px] font-mono text-white/40 uppercase tracking-widest">
                System Settings
              </div>
              <div className="w-10" />
            </div>

            {/* Main Content Area */}
            <div className="flex-1 p-6 overflow-y-auto space-y-6 custom-scrollbar">
              {/* TAB 1: GENERAL */}
              {activeTab === 'general' && (
                <div className="space-y-6 animate-fade-in">
                  {/* Category Header */}
                  <div className="flex flex-col items-center text-center space-y-2 py-2">
                    <div className="w-16 h-16 rounded-2xl bg-zinc-700/80 border border-white/20 flex items-center justify-center text-white shadow-xl">
                      <SettingsIcon className="w-9 h-9 text-zinc-200" />
                    </div>
                    <h2 className="text-xl font-bold text-white tracking-tight">General</h2>
                    <p className="text-xs text-white/60 max-w-md">
                      Manage your overall setup and preferences for Jayant OS, such as software info, CLI maintenance, and storage.
                    </p>
                  </div>

                  {/* Grouped Settings Cards */}
                  <div className="bg-[#28282b] rounded-xl border border-white/10 divide-y divide-white/5 overflow-hidden shadow-lg">
                    {/* Item 1: About OS */}
                    <div 
                      onClick={() => {
                        onCommand('/neofetch');
                        onClose();
                      }}
                      className="flex items-center justify-between p-3.5 hover:bg-white/5 transition-colors cursor-pointer group"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-7 h-7 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
                          <Info className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white group-hover:text-emerald-400 transition-colors">About Jayant OS</div>
                          <div className="text-[11px] text-white/50">Run /neofetch to render macOS specs and hardware environment</div>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-white/30 group-hover:text-white transition-colors" />
                    </div>

                    {/* Item 2: Clear Terminal */}
                    <div 
                      onClick={() => {
                        onCommand('/clear');
                        onClose();
                      }}
                      className="flex items-center justify-between p-3.5 hover:bg-white/5 transition-colors cursor-pointer group"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                          <RefreshCw className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white group-hover:text-emerald-400 transition-colors">Storage & Clear Terminal</div>
                          <div className="text-[11px] text-white/50">Reset history logs and reload terminal screen (/clear)</div>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-white/30 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: APPEARANCE & WALLPAPER */}
              {activeTab === 'appearance' && (
                <div className="space-y-6 animate-fade-in">
                  <div className="flex flex-col items-center text-center space-y-2 py-2">
                    <div className="w-16 h-16 rounded-2xl bg-indigo-600/80 border border-white/20 flex items-center justify-center text-white shadow-xl">
                      <Palette className="w-9 h-9 text-indigo-100" />
                    </div>
                    <h2 className="text-xl font-bold text-white tracking-tight">Appearance & Wallpaper</h2>
                    <p className="text-xs text-white/60 max-w-md">
                      Customize desktop wallpapers, backdrop presets, and color palettes.
                    </p>
                  </div>

                  {/* Themes List */}
                  <div className="bg-[#28282b] rounded-xl border border-white/10 divide-y divide-white/5 overflow-hidden shadow-lg">
                    {themeData.map((theme) => {
                      const isActive = currentTheme === theme.id;
                      return (
                        <div
                          key={theme.id}
                          onClick={() => onThemeChange(theme.id)}
                          className={`flex items-center justify-between p-3.5 transition-colors cursor-pointer ${
                            isActive ? 'bg-white/10' : 'hover:bg-white/5'
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <div className="flex -space-x-1">
                              {theme.colors.map((c, i) => (
                                <div 
                                  key={i} 
                                  className="w-3.5 h-3.5 rounded-full border border-black/40" 
                                  style={{ backgroundColor: c }}
                                />
                              ))}
                            </div>
                            <div>
                              <div className="text-xs font-bold text-white flex items-center space-x-2">
                                <span>{theme.name}</span>
                                <span className="text-[10px] text-emerald-400 font-mono">({theme.command})</span>
                              </div>
                              <div className="text-[11px] text-white/50">{theme.description}</div>
                            </div>
                          </div>

                          {isActive ? (
                            <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center text-black shadow-sm">
                              <Check className="w-3.5 h-3.5 stroke-[3]" />
                            </div>
                          ) : (
                            <ChevronRight className="w-4 h-4 text-white/30" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* TAB 3: DESKTOP & DOCK (FX) */}
              {activeTab === 'desktop' && (
                <div className="space-y-6 animate-fade-in">
                  <div className="flex flex-col items-center text-center space-y-2 py-2">
                    <div className="w-16 h-16 rounded-2xl bg-blue-600/80 border border-white/20 flex items-center justify-center text-white shadow-xl">
                      <Monitor className="w-9 h-9 text-blue-100" />
                    </div>
                    <h2 className="text-xl font-bold text-white tracking-tight">Desktop & Dock</h2>
                    <p className="text-xs text-white/60 max-w-md">
                      Configure desktop interactive particle canvas overlays and animations.
                    </p>
                  </div>

                  <div className="bg-[#28282b] rounded-xl border border-white/10 divide-y divide-white/5 overflow-hidden shadow-lg">
                    {/* Matrix Rain */}
                    <div className="flex items-center justify-between p-3.5">
                      <div className="flex items-center space-x-3">
                        <div className="w-7 h-7 rounded-lg bg-green-500/20 text-green-400 flex items-center justify-center">
                          <Zap className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white">Matrix Digital Rain</div>
                          <div className="text-[11px] text-white/50">Green digital code stream canvas over background</div>
                        </div>
                      </div>
                      <button
                        onClick={() => setMatrixActive(!matrixActive)}
                        className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${
                          matrixActive ? 'bg-emerald-500' : 'bg-white/20'
                        }`}
                      >
                        <div className={`w-5 h-5 rounded-full bg-white absolute top-0.5 transition-transform ${
                          matrixActive ? 'left-5.5' : 'left-0.5'
                        }`} />
                      </button>
                    </div>

                    {/* Confetti Celebration */}
                    <div className="flex items-center justify-between p-3.5">
                      <div className="flex items-center space-x-3">
                        <div className="w-7 h-7 rounded-lg bg-yellow-500/20 text-yellow-400 flex items-center justify-center">
                          <Sparkles className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white">Confetti Celebration Stream</div>
                          <div className="text-[11px] text-white/50">Burst of colorful celebration particles</div>
                        </div>
                      </div>
                      <button
                        onClick={() => setConfettiActive(!confettiActive)}
                        className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${
                          confettiActive ? 'bg-emerald-500' : 'bg-white/20'
                        }`}
                      >
                        <div className={`w-5 h-5 rounded-full bg-white absolute top-0.5 transition-transform ${
                          confettiActive ? 'left-5.5' : 'left-0.5'
                        }`} />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 4: NOTIFICATIONS & STATUS */}
              {activeTab === 'notifications' && (
                <div className="space-y-6 animate-fade-in">
                  <div className="flex flex-col items-center text-center space-y-2 py-2">
                    <div className="w-16 h-16 rounded-2xl bg-red-600/80 border border-white/20 flex items-center justify-center text-white shadow-xl">
                      <Bell className="w-9 h-9 text-red-100" />
                    </div>
                    <h2 className="text-xl font-bold text-white tracking-tight">Notifications & System Status</h2>
                    <p className="text-xs text-white/60 max-w-md">
                      System status indicators and live network updates.
                    </p>
                  </div>

                  <div className="bg-[#28282b] rounded-xl border border-white/10 p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-white/80 font-mono">Network Status</span>
                      <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded">ONLINE</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-white/80 font-mono">Location</span>
                      <span className="text-xs text-white/60 font-mono">{siteMetadata.location}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-white/80 font-mono">System Host</span>
                      <span className="text-xs text-white/60 font-mono">jayant-olhyan-portfolio-2.netlify.app</span>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 5: ACCOUNT & SOCIALS */}
              {activeTab === 'security' && (
                <div className="space-y-6 animate-fade-in">
                  <div className="flex flex-col items-center text-center space-y-2 py-2">
                    <div className="w-16 h-16 rounded-2xl bg-amber-600/80 border border-white/20 flex items-center justify-center text-white shadow-xl">
                      <Lock className="w-9 h-9 text-amber-100" />
                    </div>
                    <h2 className="text-xl font-bold text-white tracking-tight">Account & External Connections</h2>
                    <p className="text-xs text-white/60 max-w-md">
                      Verified developer profiles and direct contacts.
                    </p>
                  </div>

                  <div className="bg-[#28282b] rounded-xl border border-white/10 divide-y divide-white/5 overflow-hidden shadow-lg">
                    <a 
                      href={siteMetadata.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3.5 hover:bg-white/5 transition-colors group"
                    >
                      <div className="text-xs font-semibold text-white group-hover:text-emerald-400 transition-colors">GitHub Profile</div>
                      <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
                    </a>

                    <a 
                      href={siteMetadata.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3.5 hover:bg-white/5 transition-colors group"
                    >
                      <div className="text-xs font-semibold text-white group-hover:text-emerald-400 transition-colors">LinkedIn Network</div>
                      <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
