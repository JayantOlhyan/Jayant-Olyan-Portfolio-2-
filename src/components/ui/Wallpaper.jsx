import React from 'react';

export const Wallpaper = ({ currentTheme }) => {
  const getWallpaperSrc = () => {
    switch (currentTheme) {
      case 'retro':
        return '/assets/wallpapers/retro-wallpaper.jpg';
      case 'dark':
        return '/assets/wallpapers/dark-wallpaper.png';
      case 'space':
        return '/assets/wallpapers/space-wallpaper.jpg';
      case 'glass':
        return '/assets/wallpapers/glass-wallpaper.png';
      case 'main':
      default:
        return '/assets/wallpapers/main-wallpaper.jpg';
    }
  };

  const bgImage = getWallpaperSrc();

  return (
    <div className="fixed inset-0 z-0 overflow-hidden select-none bg-black">
      {/* Render User Uploaded Exact Wallpapers */}
      {bgImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-700 opacity-95 scale-100 filter blur-0"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
      )}

      {/* Subtle Vignette Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-vignette opacity-40" />
    </div>
  );
};
