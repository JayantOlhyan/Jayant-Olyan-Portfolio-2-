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

      <div className="bg-bg-terminal border border-border-dark rounded-md p-[clamp(1rem,3vw,1.5rem)] text-fluid-sm md:text-fluid-base font-mono">
        {/* Desktop Table Header (hidden on mobile) */}
        <div className="hidden md:grid grid-cols-12 gap-4 border-b border-border-dark pb-2 mb-4 text-text-secondary uppercase tracking-wider text-fluid-xs font-bold">
          <div className="col-span-2 text-right">Year</div>
          <div className="col-span-4 text-accent-green">Hackathon</div>
          <div className="col-span-3">Project</div>
          <div className="col-span-2">Organizer</div>
          <div className="col-span-1 text-center">Status</div>
        </div>

        {/* List Body (Card on mobile, Row on desktop) */}
        <div className="space-y-6 md:space-y-4">
          {hackathons.map((h, idx) => (
            <div key={idx} className="flex flex-col md:grid md:grid-cols-12 gap-2 md:gap-4 hover:bg-highlight-dark/30 transition-colors py-3 px-2 -mx-2 md:py-2 md:px-0 md:mx-0 group border-b border-border-dark/30 md:border-0 last:border-0 rounded-sm">
              <div className="md:col-span-2 text-left md:text-right text-text-secondary group-hover:text-text-primary transition-colors text-fluid-xs md:text-fluid-base">
                <span className="md:hidden font-bold uppercase mr-2 opacity-50">Year:</span>{h.year}
              </div>
              <div className="md:col-span-4 text-accent-green font-bold group-hover:text-accent-bright transition-colors text-fluid-lg md:text-fluid-base">
                {h.name}
              </div>
              <div className="md:col-span-3 text-text-primary">
                <span className="md:hidden font-bold uppercase mr-2 opacity-50 text-fluid-xs text-text-secondary">Project:</span>{h.project}
              </div>
              <div className="md:col-span-2 text-text-secondary">
                <span className="md:hidden font-bold uppercase mr-2 opacity-50 text-fluid-xs">By:</span>{h.organizer}
              </div>
              <div className="md:col-span-1 flex items-start md:items-center justify-start md:justify-center mt-2 md:mt-0">
                <div className="border border-border-dark group-hover:border-accent-green text-fluid-xs flex items-center justify-center gap-1 rounded px-2 py-1 transition-colors">
                  {h.emoji} {h.status}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-text-secondary text-fluid-xs opacity-70 italic min-h-[48px] flex items-center">
          // Run /contact to initiate collaborations {'>'}
        </div>
      </div>
    </div>
  );
};
