'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteMetadata, developerPortraitClean, themeData } from '../../data/portfolioData';

export const WelcomeBox = ({ onCommand, currentTheme }) => {
  const [profileView, setProfileView] = useState('photo'); // 'photo' | 'ascii'

  const activeTheme = themeData.find((t) => t.id === currentTheme) || themeData[0];
  const accentColor = activeTheme.colors?.[2] || '#39FF14';
  const portraitColor = activeTheme.portraitColor || accentColor;

  const menuItems = [
    { cmd: '/about', label: 'About Me', desc: 'Bio & timeline' },
    { cmd: '/work', label: 'Projects', desc: '8+ Case Studies' },
    { cmd: '/skills', label: 'Skills', desc: 'Tech stack & AI models' },
    { cmd: '/hackathons', label: 'Hackathons', desc: '25x Finalist & Wins' },
    { cmd: '/contact', label: 'Contact', desc: 'Reach out directly' },
    { cmd: '/social', label: 'Socials', desc: 'GitHub, LinkedIn, X' },
    { cmd: '/ecosystem', label: 'Network', desc: 'Academic & Partners' },
    { cmd: '/articles', label: 'Articles', desc: 'Technical write-ups' },
    { cmd: '/themes', label: 'Themes', desc: 'Switch visual styles' },
    { cmd: '/neofetch', label: 'System Specs', desc: 'macOS neofetch info' },
    { cmd: '/matrix', label: 'Matrix', desc: 'Easter egg rain' },
    { cmd: '/help', label: 'Help', desc: 'List all commands' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="w-full border border-dashed border-border-dark p-4 sm:p-6 rounded-lg bg-bg-terminal/50 backdrop-blur-md font-mono space-y-6 shadow-xl"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Column: Bio & Interactive Profile Card */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            {/* Status Indicator */}
            <div className="flex items-center space-x-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold">
                Status: Available for Internships & Projects
              </span>
            </div>

            <h2 className="text-2xl font-bold text-text-primary tracking-tight">
              Welcome, visitor.
            </h2>

            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              I'm <strong className="text-text-primary font-bold">{siteMetadata.name}</strong>, pursuing a{' '}
              <strong className="text-accent-bright font-semibold">
                BSc (Hons) in Data Science & Artificial Intelligence at IIT Guwahati (Batch 25-29)
              </strong>{' '}
              and Computer Science at <strong className="text-text-primary font-semibold">MSIT</strong>.{' '}
              <span className="text-accent-green font-semibold">25x Hackathon Finalist</span> and Full-Stack Developer based in {siteMetadata.location}.
            </p>
          </div>

          {/* Interactive Developer Profile Section with Dual View Toggle */}
          <div className="space-y-2 pt-2">
            <div className="flex items-center justify-between px-1">
              <div className="text-[11px] text-text-secondary/80 font-semibold uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
                <span>Developer Profile</span>
              </div>
              
              <div className="flex items-center space-x-1 bg-white/5 p-0.5 rounded border border-white/10 text-[10px]">
                <button
                  type="button"
                  onClick={() => setProfileView('photo')}
                  className={`px-2.5 py-0.5 rounded transition-all cursor-pointer font-medium ${
                    profileView === 'photo'
                      ? 'bg-white/15 text-white font-bold shadow-sm'
                      : 'text-text-secondary hover:text-white'
                  }`}
                  style={profileView === 'photo' ? { borderColor: accentColor, color: accentColor } : {}}
                >
                  Photo
                </button>
                <button
                  type="button"
                  onClick={() => setProfileView('ascii')}
                  className={`px-2.5 py-0.5 rounded transition-all cursor-pointer font-medium ${
                    profileView === 'ascii'
                      ? 'bg-white/15 text-white font-bold shadow-sm'
                      : 'text-text-secondary hover:text-white'
                  }`}
                  style={profileView === 'ascii' ? { borderColor: accentColor, color: accentColor } : {}}
                >
                  ASCII
                </button>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {profileView === 'photo' ? (
                <motion.div
                  key="photo-card"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-lg bg-black/40 border border-white/10 p-3.5 flex flex-col sm:flex-row items-center gap-4 shadow-inner"
                >
                  {/* Photo with Cyber Glow Frame */}
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 shrink-0 rounded-xl overflow-hidden border-2 border-white/15 shadow-md bg-black/60 group">
                    <img
                      src="/jayant_professional_photo.png"
                      alt={siteMetadata.name}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256' width='256' height='256'%3E%3Crect width='256' height='256' fill='%230D1117'/%3E%3Ctext x='50%25' y='54%25' dominant-baseline='middle' text-anchor='middle' font-family='monospace' font-size='84' font-weight='bold' fill='%2300B050'%3EJO%3C/text%3E%3C/svg%3E";
                      }}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-1.5 inset-x-1.5 text-center text-[9px] font-mono py-0.5 bg-black/80 backdrop-blur-sm rounded text-white/90 border border-white/10 flex items-center justify-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>Active</span>
                    </div>
                  </div>

                  {/* Profile Credentials */}
                  <div className="flex-1 space-y-2 text-left w-full">
                    <div>
                      <h3 className="text-sm font-bold text-text-primary flex items-center gap-1.5">
                        {siteMetadata.name}
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                          Verified
                        </span>
                      </h3>
                      <p className="text-[11px] text-text-secondary font-mono">
                        Data Science & AI • Full-Stack Engineer
                      </p>
                    </div>

                    <div className="space-y-1 text-[11px] font-mono text-text-secondary">
                      <div className="flex items-center gap-1.5">
                        <span className="text-accent-bright font-bold">›</span>
                        <span>IIT Guwahati <span className="text-text-primary font-medium">(BSc AI & DS '29)</span></span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-accent-bright font-bold">›</span>
                        <span>MSIT <span className="text-text-primary font-medium">(Computer Science)</span></span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-accent-bright font-bold">›</span>
                        <span>25x Hackathon Finalist & Winner</span>
                      </div>
                    </div>

                    <div className="pt-1 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => onCommand && onCommand('/about')}
                        className="text-[10px] px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 text-accent-bright border border-white/10 hover:border-white/20 transition-all cursor-pointer font-mono font-medium"
                      >
                        Bio & Timeline →
                      </button>
                      <button
                        type="button"
                        onClick={() => onCommand && onCommand('/contact')}
                        className="text-[10px] px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 text-text-secondary hover:text-white border border-white/10 transition-all cursor-pointer font-mono"
                      >
                        Get in Touch
                      </button>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="ascii-card"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="select-none overflow-x-auto rounded-lg bg-black/60 border border-white/10 p-3 flex justify-center items-center shadow-inner"
                >
                  <pre
                    style={{
                      color: portraitColor,
                      textShadow: `0 0 6px ${portraitColor}`,
                      fontFamily: 'ui-monospace, "SF Mono", Monaco, Menlo, Consolas, monospace',
                    }}
                    className="text-[5px] xs:text-[6px] sm:text-[7.2px] leading-[1.08] tracking-[0.2px] whitespace-pre select-none font-bold transition-all duration-300"
                  >
                    {developerPortraitClean.join('\n')}
                  </pre>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right Column: Interactive Navigation Menu (2-column balanced grid) */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-3 bg-black/35 p-4 sm:p-5 rounded-lg border border-white/10 shadow-lg">
          <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
            <div className="text-xs uppercase tracking-wider text-text-secondary font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
              <span>Interactive Navigation</span>
            </div>
            <span className="text-[10px] text-text-secondary/60 hidden sm:inline font-mono">
              Click or type command
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 flex-1">
            {menuItems.map((item) => (
              <motion.button
                key={item.cmd}
                whileHover={{ scale: 1.02, x: 2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onCommand && onCommand(item.cmd)}
                className="flex flex-col justify-between p-2.5 rounded bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-left transition-all group cursor-pointer"
                style={{
                  transition: 'border-color 0.2s, background-color 0.2s',
                }}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="text-accent-bright font-bold text-xs group-hover:translate-x-0.5 transition-transform font-mono">
                    {item.cmd}
                  </span>
                  <span className="text-[9px] text-text-secondary/50 group-hover:text-text-secondary font-mono">
                    ↵
                  </span>
                </div>
                <div className="mt-1">
                  <div className="text-xs text-text-primary font-medium truncate">
                    {item.label}
                  </div>
                  <div className="text-[10px] text-text-secondary/70 truncate">
                    {item.desc}
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
