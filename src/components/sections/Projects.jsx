import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TerminalCard } from '../ui/TerminalCard';
import { projects } from '../../data/portfolioData';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { GithubIcon as Github } from '../ui/Icons';

const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <TerminalCard className="flex flex-col h-full group">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-bold font-mono text-accent-green hover-glitch cursor-pointer">
          {project.title}
        </h3>
        <span className="text-xs text-text-secondary font-mono">{project.year}</span>
      </div>
      
      {project.hackathon && (
        <span className="text-xs text-accent-bright bg-highlight-dark px-2 py-1 rounded-sm w-fit mb-3 uppercase tracking-wider">
           {project.hackathon}
        </span>
      )}

      <p className="text-sm text-text-primary mb-4 leading-relaxed line-clamp-3">
        {project.problem}
      </p>

      {/* Tech Stack Tags */}
      <div className="flex flex-wrap gap-2 mb-4 mt-auto">
        {project.stack.map(tech => (
          <span key={tech} className="text-xs border border-border-dark px-2 py-1 text-text-secondary group-hover:border-accent-green/50 transition-colors">
            {tech}
          </span>
        ))}
      </div>

      {expanded && (
        <motion.div 
           initial={{ opacity: 0, height: 0 }}
           animate={{ opacity: 1, height: 'auto' }}
           className="mt-4 pt-4 border-t border-border-dark"
        >
           <p className="text-sm text-text-primary mb-4">
             <span className="text-accent-green font-bold">Solution: </span>
             {project.solution}
           </p>
           
           <p className="text-sm text-text-secondary italic mb-4">
             // Impact: {project.impact}
           </p>
        </motion.div>
      )}

      {/* Footer Links & Expand */}
      <div className="flex justify-between items-center mt-4">
         <div className="flex gap-4">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="text-text-secondary hover:text-accent-green flex items-center gap-1 text-sm font-mono transition-colors">
                <Github size={16} /> [repo]
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer" className="text-text-secondary hover:text-accent-green flex items-center gap-1 text-sm font-mono transition-colors">
                <ExternalLink size={16} /> [live]
              </a>
            )}
         </div>
         <button 
           onClick={() => setExpanded(!expanded)}
           className="text-text-secondary hover:text-accent-bright flex items-center gap-1 text-sm font-mono transition-colors focus:outline-none"
         >
           {expanded ? <><ChevronUp size={16} /> less</> : <><ChevronDown size={16} /> more</>}
         </button>
      </div>

    </TerminalCard>
  );
}

export const Projects = () => {
  return (
    <div className="mb-10 animate-fade-in">
      <div className="mb-8">
         <span className="text-text-secondary font-mono tracking-widest text-sm uppercase block mb-1">selected_work</span>
         <h2 className="text-3xl font-bold font-sans text-text-primary">
            /projects
         </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj) => (
           <ProjectCard key={proj.id} project={proj} />
        ))}
      </div>
    </div>
  );
};
