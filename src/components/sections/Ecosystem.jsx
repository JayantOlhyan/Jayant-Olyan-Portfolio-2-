import React from 'react';
import { motion } from 'framer-motion';

const ecosystems = [
  "MSIT (home institution)",
  "MRIIRS",
  "IIT Ropar",
  "NSUT",
  "Economic Times",
  "Elite Hack",
  "Hack Paradox",
  "Google (Gemini API)"
];

export const Ecosystem = () => {
  return (
    <div className="mb-10 animate-fade-in">
      <div className="mb-8 border-b border-border-dark pb-4 flex items-center justify-between">
         <h2 className="text-3xl font-bold font-sans text-text-primary hover-glitch transition-colors">
            /ecosystem --network
         </h2>
      </div>

      <div className="flex flex-wrap gap-4">
        {ecosystems.map((eco, idx) => (
           <div 
             key={idx} 
             className="border border-border-dark bg-bg-terminal text-text-secondary px-4 py-2 hover:border-accent-green hover:text-accent-bright hover:box-glow transition-all duration-300 font-mono text-sm shadow-sm"
           >
              {eco}
           </div>
        ))}
      </div>
      
    </div>
  );
};
