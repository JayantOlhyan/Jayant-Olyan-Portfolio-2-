import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
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
  BookOpen,
  Sliders
} from 'lucide-react';

const DockItem = ({ app, mouseX, hoveredApp, setHoveredApp }) => {
  const ref = useRef(null);
  const Icon = app.icon;
  const isHovered = hoveredApp === app.id;

  // Calculate distance between mouse cursor and icon center using zero-reflow layout calculation
  const distance = useTransform(mouseX, (val) => {
    if (!ref.current) return 1000;
    const bounds = ref.current.getBoundingClientRect();
    return val - bounds.x - bounds.width / 2;
  });

  // Dynamic magnification mapping: distance range [-140, 0, 140] maps to sizes [44, 72, 44]
  const widthSync = useTransform(distance, [-140, 0, 140], [44, 72, 44]);
  // High stiffness, ultra-low mass spring for instant 120fps response time
  const width = useSpring(widthSync, { mass: 0.05, stiffness: 400, damping: 25 });

  return (
    <div className="relative flex flex-col items-center">
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: -52, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
            transition={{ duration: 0.1 }}
            className="absolute top-0 px-2.5 py-1 bg-black/85 backdrop-blur-md border border-white/20 rounded-md text-[11px] font-mono text-white whitespace-nowrap shadow-xl z-50 pointer-events-none"
          >
            {app.name}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        ref={ref}
        style={{ width, height: width, willChange: 'transform, width, height' }}
        whileTap={{ scale: 0.85 }}
        onHoverStart={() => setHoveredApp(app.id)}
        onHoverEnd={() => setHoveredApp(null)}
        onClick={app.action}
        className={`rounded-2xl relative overflow-hidden flex items-center justify-center border shadow-lg cursor-pointer backdrop-blur-md ${app.color}`}
      >
        {/* Top Glossy Glass Reflection Overlay */}
        <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-white/25 to-transparent pointer-events-none" />
        <Icon className="w-1/2 h-1/2 relative z-10 filter drop-shadow-md pointer-events-none" />
      </motion.button>

      {app.active && (
        <span className="w-1.5 h-1.5 rounded-full bg-white/90 mt-1 shadow-[0_0_8px_rgba(255,255,255,0.9)]" />
      )}
    </div>
  );
};

export const MacDock = ({ 
  onCommand, 
  isMinimized, 
  setIsMinimized, 
  setCloseOverlayActive,
  onOpenSettings
}) => {
  const [hoveredApp, setHoveredApp] = useState(null);
  const mouseX = useMotionValue(Infinity);

  const dockApps = [
    {
      id: 'terminal',
      name: 'Terminal CLI',
      icon: Terminal,
      color: 'bg-gradient-to-b from-[#143224] to-[#0a1f16] text-emerald-400 border-emerald-500/50 shadow-[0_4px_16px_rgba(16,185,129,0.35)] hover:border-emerald-400',
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
      color: 'bg-gradient-to-b from-[#162e4a] to-[#0a1a2c] text-blue-400 border-blue-500/50 shadow-[0_4px_16px_rgba(59,130,246,0.35)] hover:border-blue-400',
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
      color: 'bg-gradient-to-b from-[#3d2a10] to-[#241708] text-amber-400 border-amber-500/50 shadow-[0_4px_16px_rgba(245,158,11,0.35)] hover:border-amber-400',
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
      color: 'bg-gradient-to-b from-[#321a42] to-[#1c0d28] text-purple-400 border-purple-500/50 shadow-[0_4px_16px_rgba(168,85,247,0.35)] hover:border-purple-400',
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
      color: 'bg-gradient-to-b from-[#421724] to-[#260a13] text-rose-400 border-rose-500/50 shadow-[0_4px_16px_rgba(244,63,94,0.35)] hover:border-rose-400',
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
      color: 'bg-gradient-to-b from-[#10353d] to-[#081e24] text-cyan-400 border-cyan-500/50 shadow-[0_4px_16px_rgba(6,182,212,0.35)] hover:border-cyan-400',
      action: () => {
        setIsMinimized(false);
        onCommand('/social');
      },
      active: true,
    },
    {
      id: 'settings',
      name: 'System Settings',
      icon: Sliders,
      color: 'bg-gradient-to-b from-[#2e2e32] to-[#1a1a1c] text-emerald-400 border-emerald-500/50 shadow-[0_4px_16px_rgba(16,185,129,0.3)] hover:border-emerald-400',
      action: () => onOpenSettings && onOpenSettings(),
      active: true,
    },
    {
      id: 'themes',
      name: 'Appearance',
      icon: Palette,
      color: 'bg-gradient-to-b from-[#3d152c] to-[#240a1a] text-pink-400 border-pink-500/50 shadow-[0_4px_16px_rgba(236,72,153,0.35)] hover:border-pink-400',
      action: () => {
        setIsMinimized(false);
        onCommand('/themes');
      },
      active: false,
    },
    {
      id: 'matrix',
      name: 'Matrix Rain',
      icon: BookOpen,
      color: 'bg-gradient-to-b from-[#15381d] to-[#0a2110] text-green-400 border-green-500/50 shadow-[0_4px_16px_rgba(34,197,94,0.35)] hover:border-green-400',
      action: () => onCommand('/matrix'),
      active: false,
    },
    {
      id: 'confetti',
      name: 'Celebration',
      icon: Sparkles,
      color: 'bg-gradient-to-b from-[#3d3610] to-[#241f07] text-yellow-400 border-yellow-500/50 shadow-[0_4px_16px_rgba(234,179,8,0.35)] hover:border-yellow-400',
      action: () => onCommand('/confetti'),
      active: false,
    },
    {
      id: 'exit',
      name: 'Terminate (Trash)',
      icon: Trash2,
      color: 'bg-gradient-to-b from-[#3d1515] to-[#240a0a] text-red-400 border-red-500/50 shadow-[0_4px_16px_rgba(239,68,68,0.35)] hover:border-red-400',
      action: () => setCloseOverlayActive(true),
      active: false,
    },
  ];

  return (
    <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-[800] select-none">
      <motion.div 
        onMouseMove={(e) => mouseX.set(e.clientX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="flex items-end space-x-2.5 px-3.5 pb-2 pt-2 bg-black/45 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.7)] h-20"
      >
        {dockApps.map((app) => (
          <DockItem
            key={app.id}
            app={app}
            mouseX={mouseX}
            hoveredApp={hoveredApp}
            setHoveredApp={setHoveredApp}
          />
        ))}
      </motion.div>
    </div>
  );
};
