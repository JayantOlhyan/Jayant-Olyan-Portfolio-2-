import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal, 
  User, 
  Briefcase, 
  Code, 
  Mail, 
  Palette, 
  Sparkles, 
  Trash2,
  Share2,
  BookOpen
} from 'lucide-react';

export const MacDock = ({ 
  onCommand, 
  isMinimized, 
  setIsMinimized, 
  setCloseOverlayActive 
}) => {
  const [hoveredApp, setHoveredApp] = useState(null);

  const dockApps = [
    {
      id: 'terminal',
      name: 'Terminal CLI',
      icon: Terminal,
      color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40',
      action: () => {
        if (isMinimized) {
          setIsMinimized(false);
        } else {
          onCommand('/help');
        }
      },
      active: !isMinimized,
    },
    {
      id: 'about',
      name: 'About Me',
      icon: User,
      color: 'bg-blue-500/20 text-blue-400 border-blue-500/40',
      action: () => {
        setIsMinimized(false);
        onCommand('/about');
      },
      active: true,
    },
    {
      id: 'projects',
      name: 'Projects',
      icon: Briefcase,
      color: 'bg-amber-500/20 text-amber-400 border-amber-500/40',
      action: () => {
        setIsMinimized(false);
        onCommand('/work');
      },
      active: true,
    },
    {
      id: 'skills',
      name: 'Tech Skills',
      icon: Code,
      color: 'bg-purple-500/20 text-purple-400 border-purple-500/40',
      action: () => {
        setIsMinimized(false);
        onCommand('/skills');
      },
      active: true,
    },
    {
      id: 'contact',
      name: 'Contact',
      icon: Mail,
      color: 'bg-rose-500/20 text-rose-400 border-rose-500/40',
      action: () => {
        setIsMinimized(false);
        onCommand('/contact');
      },
      active: true,
    },
    {
      id: 'social',
      name: 'Social Links',
      icon: Share2,
      color: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/40',
      action: () => {
        setIsMinimized(false);
        onCommand('/social');
      },
      active: true,
    },
    {
      id: 'themes',
      name: 'Appearance',
      icon: Palette,
      color: 'bg-pink-500/20 text-pink-400 border-pink-500/40',
      action: () => {
        setIsMinimized(false);
        onCommand('/themes');
      },
      active: true,
    },
    {
      id: 'matrix',
      name: 'Matrix Rain',
      icon: BookOpen,
      color: 'bg-green-500/20 text-green-400 border-green-500/40',
      action: () => onCommand('/matrix'),
      active: false,
    },
    {
      id: 'confetti',
      name: 'Celebration',
      icon: Sparkles,
      color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/40',
      action: () => onCommand('/confetti'),
      active: false,
    },
    {
      id: 'exit',
      name: 'Terminate (Trash)',
      icon: Trash2,
      color: 'bg-red-500/20 text-red-400 border-red-500/40',
      action: () => setCloseOverlayActive(true),
      active: false,
    },
  ];

  return (
    <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-[800] select-none">
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="flex items-center space-x-2 px-3 py-2 bg-black/40 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
      >
        {dockApps.map((app) => {
          const Icon = app.icon;
          const isHovered = hoveredApp === app.id;

          return (
            <div key={app.id} className="relative group flex flex-col items-center">
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    animate={{ opacity: 1, y: -45, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-0 px-2.5 py-1 bg-black/80 backdrop-blur-md border border-white/20 rounded-md text-[11px] font-mono text-white whitespace-nowrap shadow-lg z-50 pointer-events-none"
                  >
                    {app.name}
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button
                whileHover={{ scale: 1.35, y: -8 }}
                whileTap={{ scale: 0.9 }}
                onHoverStart={() => setHoveredApp(app.id)}
                onHoverEnd={() => setHoveredApp(null)}
                onClick={app.action}
                className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center border shadow-md transition-colors cursor-pointer ${app.color}`}
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.button>

              {app.active && (
                <span className="w-1 h-1 rounded-full bg-white/80 mt-1 shadow-[0_0_6px_rgba(255,255,255,0.8)]" />
              )}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};
