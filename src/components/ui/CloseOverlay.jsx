import React from 'react';
import { siteMetadata } from '../../data/portfolioData';

export const CloseOverlay = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 font-mono animate-fade-in">
      <div className="w-full max-w-lg bg-[#161616] border border-red-500/40 rounded-lg overflow-hidden shadow-[0_0_50px_rgba(239,68,68,0.3)]">
        {/* Titlebar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#1f1f1f] border-b border-red-500/20">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          <div className="text-xs text-red-400/80 font-bold uppercase tracking-wider">
            jayant@olhyan ~ /exit
          </div>
          <div className="w-12" />
        </div>

        {/* Close Window Body */}
        <div className="p-6 space-y-4 text-sm">
          <div className="text-red-400 font-bold">$ kill -9 portfolio</div>
          <div className="text-red-500">✗ Process terminated.</div>
          <div className="h-2" />
          <div className="text-gray-400 italic">
            But great code & innovation never really stop.
          </div>
          <div className="text-emerald-400 font-medium">
            Let's keep the conversation going.
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-3">
            <span className="text-emerald-400 font-bold">&gt;</span>
            <a
              href={siteMetadata.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/30 rounded text-xs transition-all"
            >
              LinkedIn
            </a>
            <a
              href={siteMetadata.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/30 rounded text-xs transition-all"
            >
              GitHub
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-zinc-800 border border-zinc-700 text-zinc-300 hover:bg-zinc-700 rounded text-xs transition-all cursor-pointer ml-auto"
            >
              Reopen terminal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
