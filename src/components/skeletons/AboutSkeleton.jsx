import React from 'react';

export const AboutSkeleton = () => {
  return (
    <div className="mb-10 animate-pulse w-full">
      <div className="flex justify-between items-center mb-6">
        <div className="h-8 w-48 bg-border-dark/30 rounded"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-[clamp(1rem,4vw,2rem)] items-start">
        <div className="md:col-span-3 space-y-6">
          <div className="space-y-3">
            <div className="h-4 w-full bg-border-dark/30 rounded"></div>
            <div className="h-4 w-full bg-border-dark/30 rounded"></div>
            <div className="h-4 w-11/12 bg-border-dark/30 rounded"></div>
            <div className="h-4 w-4/5 bg-border-dark/30 rounded"></div>
          </div>
          
          <div className="space-y-3">
            <div className="h-4 w-full bg-border-dark/30 rounded"></div>
            <div className="h-4 w-full bg-border-dark/30 rounded"></div>
            <div className="h-4 w-10/12 bg-border-dark/30 rounded"></div>
          </div>

          <div className="mt-8 border-l-2 border-border-dark/30 pl-[clamp(0.5rem,2vw,1rem)]">
            <div className="h-4 w-24 bg-border-dark/30 rounded mb-4"></div>
            <div className="space-y-3">
              <div className="h-4 w-full bg-border-dark/30 rounded"></div>
              <div className="h-4 w-11/12 bg-border-dark/30 rounded"></div>
              <div className="h-4 w-3/4 bg-border-dark/30 rounded"></div>
            </div>
          </div>
        </div>

        <div className="md:col-span-1 flex justify-center order-first md:order-last mb-8 md:mb-0">
          <div className="w-3/5 sm:w-1/2 md:w-full max-w-[250px] aspect-square rounded-full bg-border-dark/30"></div>
        </div>
      </div>
    </div>
  );
};
