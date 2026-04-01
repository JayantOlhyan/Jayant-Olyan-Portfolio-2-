import React from 'react';
import { motion } from 'framer-motion';
import { hackathons } from '../../data/portfolioData';

export const Hackathons = () => {
  return (
    <div className="mb-10 animate-fade-in">
      <div className="mb-8 border-b border-border-dark pb-4">
         <h2 className="text-3xl font-bold font-sans text-text-primary hover-glitch transition-colors">
            /history --hackathons
         </h2>
      </div>

      <div className="bg-bg-terminal border border-border-dark rounded-md p-4 md:p-6 overflow-x-auto text-sm md:text-base font-mono">
        {/* Table Header */}
        <div className="flex border-b border-border-dark pb-2 mb-4 text-text-secondary uppercase tracking-wider text-xs font-bold min-w-[600px]">
          <div className="w-1/6 text-right pr-4">Year</div>
          <div className="w-1/3 text-accent-green">Hackathon</div>
          <div className="w-1/4">Project</div>
          <div className="w-1/6">Organizer</div>
          <div className="w-[10%] text-center">Status</div>
        </div>

        {/* Table Body */}
        <div className="space-y-4 min-w-[600px]">
          {hackathons.map((h, idx) => (
            <div key={idx} className="flex hover:bg-highlight-dark/30 transition-colors py-2 group">
              <div className="w-1/6 text-right pr-4 text-text-secondary group-hover:text-text-primary transition-colors">{h.year}</div>
              <div className="w-1/3 text-accent-green font-bold group-hover:text-accent-bright transition-colors">{h.name}</div>
              <div className="w-1/4 text-text-primary">{h.project}</div>
              <div className="w-1/6 text-text-secondary">{h.organizer}</div>
              <div className="w-[10%] text-center border border-border-dark group-hover:border-accent-green text-xs flex items-center justify-center gap-1 rounded px-1 transition-colors">
                 {h.emoji} {h.status}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-text-secondary text-xs opacity-70 italic">
          // Run /contact to initiate collaborations {'>'}
        </div>
      </div>
    </div>
  );
};
