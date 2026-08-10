import React from 'react';

export const Wallpaper = ({ currentTheme }) => {
  const getWallpaperSrc = () => {
    switch (currentTheme) {
      case 'retro':
        return '/assets/wallpapers/retro-wallpaper.png';
      case 'dark':
        return '/assets/wallpapers/dark-wallpaper.png';
      case 'space':
        return '/assets/wallpapers/space-wallpaper.jpg';
      case 'glass':
        return '/assets/wallpapers/glass-wallpaper.png';
      case 'main':
      default:
        return '/assets/wallpapers/main-wallpaper.png';
    }
  };

  const bgImage = getWallpaperSrc();

  return (
    <div className="fixed inset-0 z-0 overflow-hidden select-none bg-[#09090b]">
      {/* High Performance Preloaded Wallpaper Image */}
      {bgImage && (
        <div 
          key={bgImage}
          className="absolute inset-0 bg-cover bg-center transition-all duration-700 opacity-90 scale-100 filter brightness-95 contrast-105 animate-fade-in"
          style={{ backgroundImage: `url('${bgImage}')` }}
        />
      )}

      {/* Subtle Ambient Vignette Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-radial-vignette opacity-30" />
    </div>
  );
};
