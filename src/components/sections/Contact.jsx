import React from 'react';
import { motion } from 'framer-motion';
import { siteMetadata } from '../../data/portfolioData';
import { Mail, MapPin, Phone } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from '../ui/Icons';

export const Contact = () => {
  return (
    <div className="mb-10 animate-fade-in">
      <div className="mb-8 border-b border-border-dark pb-4">
         <h2 className="text-fluid-3xl font-bold font-sans text-text-primary hover-glitch transition-colors">
            /contact
         </h2>
      </div>

      <div className="font-mono text-fluid-sm md:text-fluid-base bg-bg-terminal border border-border-dark p-[clamp(1rem,3vw,1.5rem)] rounded-md shadow-lg">
        <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] md:grid-cols-[150px_1fr] gap-y-[clamp(0.5rem,2vw,1rem)] gap-x-[clamp(1rem,2vw,2rem)] items-center">
          
          <div className="text-text-secondary flex items-center gap-2 mt-2 sm:mt-0 font-bold sm:font-normal"><Mail size={16} className="flex-shrink-0" /> Email:</div>
          <div className="min-h-[48px] sm:min-h-0 flex items-center -mt-2 sm:mt-0">
            <a href={`mailto:${siteMetadata.email}`} className="text-accent-green hover:text-accent-bright transition-colors break-all">
              {siteMetadata.email}
            </a>
          </div>

          <div className="text-text-secondary flex items-center gap-2 mt-2 sm:mt-0 font-bold sm:font-normal"><Phone size={16} className="flex-shrink-0" /> Phone:</div>
          <div className="text-text-primary min-h-[48px] sm:min-h-0 flex items-center -mt-2 sm:mt-0">{siteMetadata.phone}</div>

          <div className="text-text-secondary flex items-center gap-2 mt-2 sm:mt-0 font-bold sm:font-normal"><MapPin size={16} className="flex-shrink-0" /> Location:</div>
          <div className="text-text-primary min-h-[48px] sm:min-h-0 flex items-center -mt-2 sm:mt-0">{siteMetadata.location}</div>

          <div className="text-text-secondary flex items-center gap-2 mt-2 sm:mt-0 font-bold sm:font-normal"><Github size={16} className="flex-shrink-0" /> GitHub:</div>
          <div className="min-h-[48px] sm:min-h-0 flex items-center -mt-2 sm:mt-0">
            <a href={siteMetadata.github} target="_blank" rel="noreferrer" className="text-accent-green hover:underline break-all">
              {siteMetadata.github.replace('https://', '')}
            </a>
          </div>

          <div className="text-text-secondary flex items-center gap-2 mt-2 sm:mt-0 font-bold sm:font-normal"><Linkedin size={16} className="flex-shrink-0" /> LinkedIn:</div>
          <div className="min-h-[48px] sm:min-h-0 flex items-center -mt-2 sm:mt-0">
            <a href={siteMetadata.linkedin} target="_blank" rel="noreferrer" className="text-accent-green hover:underline break-all">
              {siteMetadata.linkedin.replace('https://', '')}
            </a>
          </div>

          <div className="sm:col-span-2 my-4 border-t border-border-dark"></div>

          <div className="text-text-secondary mt-2 sm:mt-0 font-bold sm:font-normal">Open to:</div>
          <div className="text-text-primary font-bold tracking-wide -mt-2 sm:mt-0 leading-relaxed">
            {siteMetadata.openTo.join('  |  ')}
          </div>
        </div>

        <div className="mt-[clamp(2rem,5vw,3rem)] mb-4 flex flex-wrap gap-2">
           <span className="text-accent-green">{'>'} </span>
           <span className="text-text-secondary">Let's build something. Drop a message. <span className="animate-cursor-blink inline-block w-2 bg-accent-bright h-4 translate-y-1"></span></span>
        </div>
        
        <div className="mt-8 flex gap-4">
           <a 
             href={`mailto:${siteMetadata.email}`} 
             className="px-[clamp(1rem,4vw,1.5rem)] py-[clamp(0.5rem,3vw,0.75rem)] min-h-[48px] bg-highlight-dark border border-accent-green text-accent-green font-bold flex items-center justify-center gap-2 hover:bg-accent-green hover:text-bg-primary hover:box-glow transition-all duration-300 rounded uppercase tracking-widest text-fluid-xs sm:text-fluid-sm w-full sm:w-auto text-center"
           >
             Let's Collaborate
           </a>
        </div>
      </div>
    </div>
  );
};
