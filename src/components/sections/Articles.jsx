import React from 'react';
import { motion } from 'framer-motion';
import { articles } from '../../data/portfolioData';
import { ExternalLink } from 'lucide-react';
import { TerminalCard } from '../ui/TerminalCard';

export const Articles = () => {
  return (
    <div className="mb-10 animate-fade-in">
      <div className="mb-8 border-b border-border-dark pb-4 flex items-center justify-between">
         <h2 className="text-3xl font-bold font-sans text-text-primary hover-glitch transition-colors">
            /articles --latest
         </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((art, idx) => (
           <TerminalCard key={idx} className="flex flex-col h-full group pb-6">
             <div className="text-xs text-text-secondary font-mono mb-2">{art.date}</div>
             <h3 className="text-lg font-bold font-sans text-text-primary mb-3 group-hover:text-accent-bright transition-colors">
               {art.title}
             </h3>
             <p className="text-sm text-text-secondary leading-relaxed mb-6 flex-grow">
               "{art.excerpt}"
             </p>
             <a href={art.link} target="_blank" rel="noreferrer" className="text-accent-green text-sm flex items-center gap-1 font-mono uppercase tracking-wider hover:text-accent-bright mt-auto w-fit">
               Read on LinkedIn <ExternalLink size={14} />
             </a>
           </TerminalCard>
        ))}
      </div>
    </div>
  );
};
