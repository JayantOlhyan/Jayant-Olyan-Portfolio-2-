import React from 'react';
import { siteMetadata, developerPortrait, themeData } from '../../data/portfolioData';

export const WelcomeBox = ({ onCommand, currentTheme }) => {
  const activeTheme = themeData.find((t) => t.id === currentTheme) || themeData[0];
  const portraitColor = activeTheme.portraitColor || '#00ff41';

  const menuItems = [
    { cmd: '/about', label: 'About Me', desc: 'Bio & timeline' },
    { cmd: '/work', label: 'Projects', desc: '8+ Case Studies' },
    { cmd: '/skills', label: 'Skills', desc: 'Tech stack & AI tools' },
    { cmd: '/contact', label: 'Contact', desc: 'Reach out directly' },
    { cmd: '/social', label: 'Socials', desc: 'GitHub, LinkedIn, Twitter' },
    { cmd: '/themes', label: 'Themes', desc: 'Switch color modes' },
    { cmd: '/matrix', label: 'Matrix', desc: 'Easter egg rain' },
    { cmd: '/help', label: 'Help', desc: 'List all commands' },
  ];

  return (
    <div className="w-full border border-dashed border-border-dark p-6 rounded-lg bg-bg-terminal/30 backdrop-blur-md font-mono space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Left Column: Portrait & Welcome message */}
        <div className="md:col-span-7 space-y-4">
          <div className="flex items-center space-x-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold">
              Status: Available for Internships & Projects
            </span>
          </div>

          <h2 className="text-2xl font-bold text-text-primary tracking-tight">
            Welcome, visitor.
          </h2>

          <p className="text-sm text-text-secondary leading-relaxed">
            I'm <strong className="text-text-primary">{siteMetadata.name}</strong> — a Data Science & AI student at <strong className="text-amber-400">IIT Guwahati</strong> and Computer Science student at <strong className="text-emerald-400">MSIT</strong>. 25x Hackathon Finalist and Full-Stack AI Engineer based in {siteMetadata.location}.
          </p>

          {/* ASCII Portrait render */}
          <div className="select-none overflow-hidden max-w-full py-2">
            <pre
              style={{
                color: portraitColor,
                textShadow: `0 0 6px ${portraitColor}`,
              }}
              className="font-mono text-[3px] sm:text-[4px] leading-[1.1] tracking-[0.2px] overflow-hidden opacity-90"
            >
              {developerPortrait.slice(0, 30).join('\n')}
            </pre>
          </div>
        </div>

        {/* Right Column: Quick Commands Shortcuts */}
        <div className="md:col-span-5 flex flex-col space-y-3 bg-black/20 p-4 rounded-md border border-white/5">
          <div className="text-xs uppercase tracking-wider text-text-secondary/70 font-semibold border-b border-white/5 pb-2">
            Interactive Navigation
          </div>
          <div className="grid grid-cols-1 gap-2">
            {menuItems.map((item) => (
              <button
                key={item.cmd}
                onClick={() => onCommand && onCommand(item.cmd)}
                className="flex items-center justify-between px-3 py-2 rounded bg-white/5 hover:bg-emerald-500/20 border border-white/10 hover:border-emerald-500/50 text-left transition-all group cursor-pointer"
              >
                <div className="flex items-center space-x-2">
                  <span className="text-emerald-400 font-bold group-hover:translate-x-0.5 transition-transform text-xs">
                    {item.cmd}
                  </span>
                  <span className="text-xs text-text-primary font-medium">
                    {item.label}
                  </span>
                </div>
                <span className="text-[10px] text-text-secondary/60 hidden sm:inline">
                  {item.desc}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
