import React from 'react';

export const Wallpaper = ({ currentTheme }) => {
  const getWallpaperSrc = () => {
    switch (currentTheme) {
      case 'glass':
        return '/assets/wallpapers/glass-wallpaper.png';
      case 'retro':
        return null;
      case 'light':
        return null;
      case 'dark':
      default:
        return '/assets/wallpapers/dark-wallpaper.png';
    }
  };

  const bgImage = getWallpaperSrc();

  return (
    <div className="fixed inset-0 z-0 overflow-hidden select-none bg-[#0a0a0c]">
      {/* Real AI Generated High-Res Desktop Wallpaper Background */}
      {bgImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-700 opacity-90 scale-105 filter blur-[2px]"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
      )}

      {/* Dark theme ambient overlays */}
      {currentTheme === 'dark' && (
        <>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
          <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-emerald-500/10 rounded-full blur-[140px] animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-blue-500/10 rounded-full blur-[140px] animate-pulse" />
        </>
      )}

      {/* Retro theme CRT glow background */}
      {currentTheme === 'retro' && (
        <div className="absolute inset-0 bg-[#080d05]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,230,0,0.08)_0%,transparent_70%)]" />
        </div>
      )}

      {/* Light theme */}
      {currentTheme === 'light' && (
        <div className="absolute inset-0 bg-[#f4f6f9]">
          <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-200/30 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-amber-200/30 rounded-full blur-[120px]" />
        </div>
      )}

      {/* Glass theme */}
      {currentTheme === 'glass' && (
        <>
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
          <div className="absolute top-[-10%] left-[10%] w-[55vw] h-[55vw] bg-indigo-600/20 rounded-full blur-[150px]" />
          <div className="absolute bottom-[-10%] right-[10%] w-[55vw] h-[55vw] bg-sky-500/20 rounded-full blur-[150px]" />
        </>
      )}

      {/* Vignette border framing */}
      <div className="absolute inset-0 pointer-events-none bg-vignette opacity-70" />
    </div>
  );
};
