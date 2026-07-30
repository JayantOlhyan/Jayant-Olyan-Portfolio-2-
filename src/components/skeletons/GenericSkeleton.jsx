import React from 'react';

export const GenericSkeleton = () => {
  return (
    <div className="mb-10 animate-pulse w-full max-w-2xl">
      <div className="mb-6">
         <div className="h-8 w-48 bg-border-dark/30 rounded"></div>
      </div>
      <div className="space-y-4">
        <div className="h-4 w-full bg-border-dark/30 rounded"></div>
        <div className="h-4 w-5/6 bg-border-dark/30 rounded"></div>
        <div className="h-4 w-4/5 bg-border-dark/30 rounded"></div>
        <div className="h-4 w-2/3 bg-border-dark/30 rounded"></div>
      </div>
    </div>
  );
};
