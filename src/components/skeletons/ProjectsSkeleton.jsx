import React from 'react';
import { TerminalCard } from '../ui/TerminalCard';

export const ProjectsSkeleton = () => {
  return (
    <div className="mb-10 animate-pulse w-full">
      <div className="mb-8">
         <div className="h-4 w-32 bg-border-dark/30 rounded mb-2"></div>
         <div className="h-8 w-48 bg-border-dark/30 rounded"></div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-[clamp(1rem,3vw,1.5rem)]">
        {[1, 2, 3, 4].map((i) => (
          <TerminalCard key={i} className="flex flex-col h-[280px]">
            <div className="flex justify-between items-start mb-2">
              <div className="h-6 w-3/4 bg-border-dark/30 rounded"></div>
              <div className="h-4 w-12 bg-border-dark/30 rounded"></div>
            </div>
            
            <div className="h-5 w-24 bg-border-dark/20 rounded mb-4"></div>

            <div className="space-y-2 mb-4">
              <div className="h-4 w-full bg-border-dark/30 rounded"></div>
              <div className="h-4 w-full bg-border-dark/30 rounded"></div>
              <div className="h-4 w-2/3 bg-border-dark/30 rounded"></div>
            </div>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2 mb-4 mt-auto">
              <div className="h-6 w-16 bg-border-dark/30 rounded"></div>
              <div className="h-6 w-20 bg-border-dark/30 rounded"></div>
              <div className="h-6 w-14 bg-border-dark/30 rounded"></div>
            </div>

            {/* Footer Links */}
            <div className="flex justify-between items-center mt-4">
               <div className="flex gap-4">
                 <div className="h-5 w-16 bg-border-dark/30 rounded"></div>
                 <div className="h-5 w-16 bg-border-dark/30 rounded"></div>
               </div>
               <div className="h-5 w-16 bg-border-dark/30 rounded"></div>
            </div>
          </TerminalCard>
        ))}
      </div>
    </div>
  );
};
