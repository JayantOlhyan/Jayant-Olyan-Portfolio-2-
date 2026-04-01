import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../../data/portfolioData';

export const Skills = () => {
  return (
    <div className="mb-10 animate-fade-in">
      <div className="mb-8">
         <h2 className="text-3xl font-bold font-sans text-text-primary hover-glitch transition-colors">
            /skills --capabilities
         </h2>
      </div>

      <div className="bg-bg-terminal border items-start border-border-dark p-6 rounded-md font-mono text-sm md:text-base grid grid-cols-1 md:grid-cols-[100px_1fr] gap-x-4 gap-y-6">
        
        {/* Build */}
        <div className="text-text-secondary w-20">Build</div>
        <div className="text-text-primary">
          <ul className="list-none space-y-1">
            <li className="text-accent-green">{skills.Build.slice(0, 4).join(', ')}</li>
            <li>{skills.Build.slice(4).join(', ')}</li>
          </ul>
        </div>

        {/* Store */}
        <div className="text-text-secondary w-20 mt-4 md:mt-0">Store</div>
        <div className="text-text-primary mt-4 md:mt-0">
          {skills.Store.join(', ')}
        </div>

        {/* Ship */}
        <div className="text-text-secondary w-20 mt-4 md:mt-0">Ship</div>
        <div className="text-text-primary mt-4 md:mt-0">
          {skills.Ship.join(', ')}
        </div>

        {/* AI */}
        <div className="text-text-secondary w-20 mt-4 md:mt-0">AI</div>
        <div className="text-text-primary mt-4 md:mt-0">
          <ul className="list-none space-y-1">
             <li className="text-accent-bright">{skills.AI.slice(0, -1).join(', ')}</li>
             <li className="text-text-secondary">{skills.AI.slice(-1)[0]}</li>
          </ul>
        </div>
      </div>
      
      {/* Visual Glitched Cloud Demo */}
      <div className="mt-8 flex flex-wrap gap-3">
        {skills.Build.map(tag => (
          <span key={tag} className="text-xs bg-bg-secondary text-text-secondary border border-border-dark px-3 py-1.5 rounded-full hover:border-accent-green hover:text-accent-bright transition-all cursor-default box-glow hover:box-glow-strong">
            {tag}
          </span>
        ))}
        {skills.AI.map(tag => (
           <span key={tag} className="text-xs bg-bg-secondary text-accent-green border border-border-dark px-3 py-1.5 rounded-full hover:border-accent-bright transition-all cursor-default box-glow-strong">
             {tag}
           </span>
        ))}
      </div>
    </div>
  );
};
