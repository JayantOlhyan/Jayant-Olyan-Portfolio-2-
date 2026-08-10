import React from 'react';
import retroWallpaper from '../../assets/wallpapers/retro-wallpaper.png';
import darkWallpaper from '../../assets/wallpapers/dark-wallpaper.png';
import spaceWallpaper from '../../assets/wallpapers/space-wallpaper.jpg';
import glassWallpaper from '../../assets/wallpapers/glass-wallpaper.png';
import mainWallpaper from '../../assets/wallpapers/main-wallpaper.png';

export const Wallpaper = ({ currentTheme }) => {
  const getWallpaperSrc = () => {
    switch (currentTheme) {
      case 'retro':
        return retroWallpaper;
      case 'dark':
        return darkWallpaper;
      case 'space':
        return spaceWallpaper;
      case 'glass':
        return glassWallpaper;
      case 'main':
      default:
        return mainWallpaper;
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
