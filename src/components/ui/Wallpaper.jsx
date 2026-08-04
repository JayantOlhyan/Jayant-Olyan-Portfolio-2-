import React from 'react';

export const Wallpaper = ({ currentTheme }) => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Dynamic ambient gradients based on current theme */}
      {currentTheme === 'dark' && (
        <>
          <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-emerald-900/15 rounded-full blur-[140px] animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-blue-900/15 rounded-full blur-[140px] animate-pulse" />
          <div className="absolute top-[30%] right-[20%] w-[40vw] h-[40vw] bg-amber-900/10 rounded-full blur-[160px]" />
        </>
      )}

      {currentTheme === 'retro' && (
        <>
          <div className="absolute inset-0 bg-[#080d05]" />
          <div className="absolute top-[20%] left-[20%] w-[50vw] h-[50vw] bg-amber-500/10 rounded-full blur-[160px]" />
        </>
      )}

      {currentTheme === 'light' && (
        <>
          <div className="absolute inset-0 bg-slate-50" />
          <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-100/40 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-amber-100/40 rounded-full blur-[120px]" />
        </>
      )}

      {currentTheme === 'glass' && (
        <>
          <div className="absolute inset-0 bg-[#0d131f]" />
          <div className="absolute top-[-10%] left-[10%] w-[55vw] h-[55vw] bg-indigo-600/20 rounded-full blur-[150px]" />
          <div className="absolute bottom-[-10%] right-[10%] w-[55vw] h-[55vw] bg-sky-500/20 rounded-full blur-[150px]" />
        </>
      )}
    </div>
  );
};
