import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../../data/portfolioData';

export const Skills = () => {
  return (
    <div className="mb-10 animate-fade-in">
      <div className="mb-8">
         <h2 className="text-fluid-3xl font-bold font-sans text-text-primary hover-glitch transition-colors">
            /skills --capabilities
         </h2>
      </div>

      <div className="bg-bg-terminal border items-start border-border-dark p-[clamp(1rem,3vw,1.5rem)] rounded-md font-mono text-fluid-sm md:text-fluid-base grid grid-cols-1 sm:grid-cols-[100px_1fr] md:grid-cols-[120px_1fr] gap-x-[clamp(1rem,3vw,2rem)] gap-y-[clamp(1rem,3vw,1.5rem)]">
        
        {/* Build */}
        <div className="text-text-secondary font-bold">Build</div>
        <div className="text-text-primary">
          <ul className="list-none space-y-1">
            <li className="text-accent-green">{skills.Build.slice(0, 4).join(', ')}</li>
            <li>{skills.Build.slice(4).join(', ')}</li>
          </ul>
        </div>

        {/* Store */}
        <div className="text-text-secondary font-bold pt-2 sm:pt-0">Store</div>
        <div className="text-text-primary">
          {skills.Store.join(', ')}
        </div>

        {/* Ship */}
        <div className="text-text-secondary font-bold pt-2 sm:pt-0">Ship</div>
        <div className="text-text-primary">
          {skills.Ship.join(', ')}
        </div>

        {/* AI */}
        <div className="text-text-secondary font-bold pt-2 sm:pt-0">AI</div>
        <div className="text-text-primary">
          <ul className="list-none space-y-1">
             <li className="text-accent-bright">{skills.AI.slice(0, -1).join(', ')}</li>
             <li className="text-text-secondary">{skills.AI.slice(-1)[0]}</li>
          </ul>
        </div>
      </div>
      
      {/* Visual Glitched Cloud Demo */}
      <div className="mt-[clamp(1.5rem,4vw,2rem)] flex flex-wrap gap-[clamp(0.5rem,2vw,1rem)]">
        {skills.Build.map(tag => (
          <span key={tag} className="text-fluid-xs bg-bg-secondary text-text-secondary border border-border-dark px-[clamp(0.5rem,2vw,1rem)] py-[clamp(0.25rem,1.5vw,0.5rem)] rounded-full hover:border-accent-green hover:text-accent-bright transition-all cursor-default box-glow hover:box-glow-strong">
            {tag}
          </span>
        ))}
        {skills.AI.map(tag => (
           <span key={tag} className="text-fluid-xs bg-bg-secondary text-accent-green border border-border-dark px-[clamp(0.5rem,2vw,1rem)] py-[clamp(0.25rem,1.5vw,0.5rem)] rounded-full hover:border-accent-bright transition-all cursor-default box-glow-strong">
             {tag}
           </span>
        ))}
      </div>
    </div>
  );
};
