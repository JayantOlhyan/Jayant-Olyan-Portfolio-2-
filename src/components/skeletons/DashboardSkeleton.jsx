import React from 'react';

export const DashboardSkeleton = () => {
  return (
    <div className="flex flex-col w-full max-w-6xl mx-auto py-4 space-y-8 md:space-y-10 px-0 sm:px-4 md:px-8 w-full animate-pulse">
      {/* Header ASCII Logo Skeleton */}
      <div className="flex justify-center pt-4 pb-6 md:py-8 border-b border-border-dark/30 mb-2 md:mb-4 w-full">
        <div className="h-[60px] md:h-[120px] w-full max-w-[800px] bg-border-dark/30 rounded-sm"></div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-[clamp(1rem,3vw,2rem)] px-4 md:px-0">
        
        {/* Left Column: Portrait & Intro */}
        <div className="flex flex-col space-y-[clamp(1rem,3vw,1.5rem)] border border-dashed border-border-dark p-[clamp(1rem,3vw,1.5rem)] rounded-sm bg-bg-terminal/20">
          <div className="flex flex-col items-center space-y-4">
            <div className="h-4 w-1/2 bg-border-dark/30 rounded"></div>
            
            {/* ASCII Portrait - Fluid Scaling Skeleton */}
            <div className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] bg-border-dark/30 rounded-md"></div>
            
            <div className="w-full flex flex-col items-center space-y-3 pt-2">
              <div className="h-5 w-3/4 bg-border-dark/30 rounded"></div>
              <div className="h-4 w-1/2 bg-border-dark/30 rounded"></div>
              <div className="h-4 w-2/3 bg-border-dark/30 rounded mt-2"></div>
              <div className="h-4 w-1/3 bg-border-dark/30 rounded"></div>
            </div>
          </div>
        </div>

        {/* Right Column: Capabilities & Navigation */}
        <div className="flex flex-col space-y-[clamp(1rem,3vw,2rem)]">
          
          {/* Capabilities */}
          <div className="flex flex-col space-y-[clamp(0.5rem,2vw,1rem)] border border-dashed border-border-dark p-[clamp(1rem,3vw,1.5rem)] rounded-sm bg-bg-terminal/30">
            <div className="h-4 w-1/3 bg-border-dark/30 rounded mb-2"></div>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex gap-4">
                  <div className="h-4 w-1/4 bg-border-dark/30 rounded"></div>
                  <div className="h-4 w-3/4 bg-border-dark/30 rounded"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Guide */}
          <div className="flex flex-col space-y-[clamp(0.5rem,2vw,1rem)] border border-dashed border-border-dark p-[clamp(1rem,3vw,1.5rem)] rounded-sm bg-bg-terminal/30">
            <div className="h-4 w-1/3 bg-border-dark/30 rounded mb-2"></div>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex gap-4">
                  <div className="h-4 w-1/4 bg-border-dark/30 rounded"></div>
                  <div className="h-4 w-1/2 bg-border-dark/30 rounded"></div>
                </div>
              ))}
              <div className="h-3 w-1/2 bg-border-dark/20 rounded mt-2"></div>
              <div className="h-3 w-1/3 bg-border-dark/20 rounded"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer System Message */}
      <div className="pt-8 border-t border-border-dark space-y-2">
        <div className="h-3 w-3/4 max-w-md bg-border-dark/20 rounded"></div>
        <div className="h-3 w-1/2 max-w-sm bg-border-dark/20 rounded"></div>
      </div>
    </div>
  );
};
