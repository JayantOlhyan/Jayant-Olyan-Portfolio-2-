import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../../data/portfolioData';

export const Testimonials = () => {
  return (
    <div className="mb-10 animate-fade-in">
      <div className="mb-12 border-b border-border-dark pb-4 flex items-center justify-between">
         <h2 className="text-3xl font-bold font-sans text-text-primary hover-glitch transition-colors">
            /testimonials --peer_review
         </h2>
      </div>

      <div className="space-y-12">
        {testimonials.map((test, idx) => (
           <div key={idx} className="relative pl-6 md:pl-8 border-l-2 border-border-dark hover:border-accent-green transition-colors duration-500 group">
             <div className="absolute top-0 -left-3.5 bg-bg-primary group-hover:bg-accent-green border-2 border-border-dark group-hover:border-accent-bright w-6 h-6 rounded-sm rotate-45 transition-colors duration-500 flex items-center justify-center shadow-[0_0_10px_rgba(0,176,80,0)] group-hover:shadow-[0_0_10px_rgba(0,176,80,0.6)]">
               <span className="block w-2 text-[10px] text-bg-primary font-bold -rotate-45 leading-none translate-y-[1px] -translate-x-[1px]">{'>'}</span>
             </div>
             
             <blockquote className="font-mono text-text-primary leading-loose sm:leading-relaxed text-sm md:text-[15px] mb-4 
             italic opacity-90 group-hover:opacity-100 transition-opacity whitespace-pre-line tracking-tight">
               "{test.quote}"
             </blockquote>
             
             <div className="flex flex-col">
               <span className="font-sans font-bold text-accent-green tracking-wide">
                 — {test.name}
               </span>
               <span className="font-mono text-text-secondary text-xs uppercase tracking-widest mt-1">
                 {test.role}
               </span>
             </div>
           </div>
        ))}
      </div>
    </div>
  );
};
