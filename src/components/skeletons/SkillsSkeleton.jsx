import React from 'react';

export const SkillsSkeleton = () => {
  return (
    <div className="mb-10 animate-pulse w-full">
      <div className="mb-8">
         <div className="h-8 w-64 bg-border-dark/30 rounded"></div>
      </div>

      <div className="bg-bg-terminal border border-border-dark p-[clamp(1rem,3vw,1.5rem)] rounded-md grid grid-cols-1 sm:grid-cols-[100px_1fr] md:grid-cols-[120px_1fr] gap-x-[clamp(1rem,3vw,2rem)] gap-y-[clamp(1rem,3vw,1.5rem)]">
        
        {/* Build */}
        <div className="h-5 w-16 bg-border-dark/30 rounded mt-1"></div>
        <div className="space-y-3">
          <div className="h-4 w-3/4 bg-border-dark/30 rounded"></div>
          <div className="h-4 w-1/2 bg-border-dark/30 rounded"></div>
        </div>

        {/* Store */}
        <div className="h-5 w-16 bg-border-dark/30 rounded mt-1 pt-2 sm:pt-0"></div>
        <div className="h-4 w-4/5 bg-border-dark/30 rounded mt-1"></div>

        {/* Ship */}
        <div className="h-5 w-16 bg-border-dark/30 rounded mt-1 pt-2 sm:pt-0"></div>
        <div className="h-4 w-3/4 bg-border-dark/30 rounded mt-1"></div>

        {/* AI */}
        <div className="h-5 w-16 bg-border-dark/30 rounded mt-1 pt-2 sm:pt-0"></div>
        <div className="space-y-3">
          <div className="h-4 w-11/12 bg-border-dark/30 rounded"></div>
          <div className="h-4 w-1/3 bg-border-dark/30 rounded"></div>
        </div>
      </div>
      
      {/* Visual Glitched Cloud Demo Skeleton */}
      <div className="mt-[clamp(1.5rem,4vw,2rem)] flex flex-wrap gap-[clamp(0.5rem,2vw,1rem)]">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="h-8 w-24 bg-border-dark/30 rounded-full"></div>
        ))}
      </div>
    </div>
  );
};
