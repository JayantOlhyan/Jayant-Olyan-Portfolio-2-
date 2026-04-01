import React from 'react';
import { motion } from 'framer-motion';
import { siteMetadata } from '../../data/portfolioData';
import { Mail, MapPin, Phone } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from '../ui/Icons';

export const Contact = () => {
  return (
    <div className="mb-10 animate-fade-in">
      <div className="mb-8 border-b border-border-dark pb-4">
         <h2 className="text-3xl font-bold font-sans text-text-primary hover-glitch transition-colors">
            /contact
         </h2>
      </div>

      <div className="font-mono text-sm md:text-base bg-bg-terminal border border-border-dark p-6 rounded-md shadow-lg">
        <div className="grid grid-cols-[80px_1fr] md:grid-cols-[100px_1fr] gap-y-4 items-center">
          
          <div className="text-text-secondary flex items-center gap-2"><Mail size={16} /> Email:</div>
          <div>
            <a href={`mailto:${siteMetadata.email}`} className="text-accent-green hover:text-accent-bright transition-colors">
              {siteMetadata.email}
            </a>
          </div>

          <div className="text-text-secondary flex items-center gap-2"><Phone size={16} /> Phone:</div>
          <div className="text-text-primary">{siteMetadata.phone}</div>

          <div className="text-text-secondary flex items-center gap-2"><MapPin size={16} /> Location:</div>
          <div className="text-text-primary">{siteMetadata.location}</div>

          <div className="text-text-secondary flex items-center gap-2"><Github size={16} /> GitHub:</div>
          <div>
            <a href={siteMetadata.github} target="_blank" rel="noreferrer" className="text-accent-green hover:underline">
              {siteMetadata.github.replace('https://', '')}
            </a>
          </div>

          <div className="text-text-secondary flex items-center gap-2"><Linkedin size={16} /> LinkedIn:</div>
          <div>
            <a href={siteMetadata.linkedin} target="_blank" rel="noreferrer" className="text-accent-green hover:underline">
              {siteMetadata.linkedin.replace('https://', '')}
            </a>
          </div>

          <div className="col-span-2 my-4 border-t border-border-dark"></div>

          <div className="text-text-secondary">Open to:</div>
          <div className="text-text-primary font-bold tracking-wide">
            {siteMetadata.openTo.join('  |  ')}
          </div>
        </div>

        <div className="mt-12 mb-4">
           <span className="text-accent-green">{'>'} </span>
           <span className="text-text-secondary">Let's build something. Drop a message. <span className="animate-cursor-blink inline-block w-2 bg-accent-bright h-4 translate-y-1"></span></span>
        </div>
        
        <div className="mt-8 flex gap-4">
           <a 
             href={`mailto:${siteMetadata.email}`} 
             className="px-6 py-3 bg-highlight-dark border border-accent-green text-accent-green font-bold flex items-center gap-2 hover:bg-accent-green hover:text-bg-primary hover:box-glow transition-all duration-300 rounded uppercase tracking-widest text-sm"
           >
             Let's Collaborate
           </a>
        </div>
      </div>
    </div>
  );
};
