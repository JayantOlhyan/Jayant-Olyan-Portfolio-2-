import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TerminalCard } from '../ui/TerminalCard';
import { projects } from '../../data/portfolioData';
import { ExternalLink, ChevronDown, ChevronUp, Star, Award, Check, Copy } from 'lucide-react';
import { Icon } from '../ui/Icon';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
};

const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyLink = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const url = project.live || project.github || window.location.href;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div variants={itemVariants} className="h-full">
      <TerminalCard className="flex flex-col h-full group/card" spotlight glowing>
        {/* Header Title and Year */}
        <div className="flex justify-between items-start mb-2 gap-2">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-fluid-lg sm:text-fluid-xl font-bold font-mono text-accent-green hover:text-accent-bright transition-colors cursor-pointer flex items-center gap-1.5">
              {project.title}
              {project.featured && (
                <span title="Featured Project" className="inline-flex items-center">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                </span>
              )}
            </h3>
          </div>
          <span className="text-fluid-xs text-text-secondary font-mono pt-1 shrink-0 bg-white/5 px-2 py-0.5 rounded border border-white/5">
            {project.year}
          </span>
        </div>
        
        {/* Hackathon Badge */}
        {project.hackathon && (
          <div className="flex items-center gap-1.5 text-[11px] text-accent-bright bg-highlight-dark/80 border border-accent-green/30 px-2.5 py-1 rounded w-fit mb-3 uppercase tracking-wider font-semibold shadow-xs">
            <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="truncate">{project.hackathon}</span>
          </div>
        )}

        {/* Problem Description */}
        <p className="text-fluid-sm text-text-primary/90 mb-4 leading-relaxed line-clamp-3">
          {project.problem}
        </p>

        {/* Tech Stack Tags with Live SVG Icons */}
        <div className="flex flex-wrap gap-1.5 mb-5 mt-auto pt-2">
          {project.stack.map(tech => (
            <span 
              key={tech} 
              className="inline-flex items-center gap-1.5 text-fluid-xs bg-white/5 border border-white/10 px-2 py-1 rounded text-text-secondary group-hover/card:border-accent-green/40 group-hover/card:text-text-primary transition-all group/tag hover:border-accent-green hover:text-accent-bright hover:bg-accent-green/10"
            >
              <Icon name={tech} size={13} className="text-text-secondary group-hover/tag:text-accent-bright transition-colors" />
              <span>{tech}</span>
            </span>
          ))}
        </div>

        {/* Expandable Solution and Impact Drawer */}
        {expanded && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="mt-3 pt-3 border-t border-border-dark space-y-3 font-mono text-fluid-xs"
          >
            <div className="text-text-primary bg-black/40 p-3 rounded border border-white/5">
              <span className="text-accent-green font-bold block mb-1 uppercase tracking-wider">// Solution:</span>
              <p className="leading-relaxed opacity-95">{project.solution}</p>
            </div>
            
            <div className="text-text-secondary italic bg-emerald-950/20 p-2.5 rounded border border-emerald-500/20 text-emerald-300">
              <span className="font-semibold text-emerald-400 not-italic uppercase tracking-wider block mb-0.5 text-[10px]">// Impact</span>
              {project.impact}
            </div>
          </motion.div>
        )}

        {/* Footer Links & Interactive Controls */}
        <div className="flex justify-between items-center mt-4 pt-3 border-t border-white/5">
          <div className="flex items-center gap-3">
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noreferrer" 
                className="text-text-secondary hover:text-accent-green flex items-center gap-1 text-fluid-xs font-mono transition-colors p-1.5 rounded hover:bg-white/5 min-h-[36px]"
                title="View GitHub Repository"
              >
                <Icon name="github" size={15} />
                <span>[repo]</span>
              </a>
            )}
            {project.live && (
              <a 
                href={project.live} 
                target="_blank" 
                rel="noreferrer" 
                className="text-accent-green hover:text-accent-bright font-bold flex items-center gap-1 text-fluid-xs font-mono transition-colors p-1.5 rounded hover:bg-accent-green/10 min-h-[36px]"
                title="Open Live Application"
              >
                <ExternalLink size={14} />
                <span>[live demo]</span>
              </a>
            )}
            <button
              onClick={handleCopyLink}
              title="Copy project link"
              className="text-text-secondary/70 hover:text-white flex items-center gap-1 text-fluid-xs font-mono transition-colors p-1.5 rounded hover:bg-white/5 min-h-[36px] cursor-pointer"
            >
              {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={13} />}
              <span className="hidden sm:inline">{copied ? 'copied' : 'share'}</span>
            </button>
          </div>

          <button 
            onClick={() => setExpanded(!expanded)}
            className="text-text-secondary hover:text-accent-bright flex items-center gap-1 text-fluid-xs font-mono transition-colors focus:outline-none p-1.5 rounded hover:bg-white/5 min-h-[36px] cursor-pointer"
            aria-expanded={expanded}
          >
            {expanded ? <><ChevronUp size={15} /> less</> : <><ChevronDown size={15} /> details</>}
          </button>
        </div>

      </TerminalCard>
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <div className="mb-10 animate-fade-in">
      <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between border-b border-border-dark pb-4 gap-2">
        <div>
          <span className="text-accent-green font-mono tracking-widest text-xs uppercase block mb-1">
            // SELECTED_WORK ({projects.length} PROJECTS)
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-sans text-text-primary">
            /projects --featured
          </h2>
        </div>
        <div className="text-xs text-text-secondary font-mono">
          Full-Stack • Deep Learning • Web3 & Space APIs
        </div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-[clamp(1rem,3vw,1.5rem)]"
      >
        {projects.map((proj) => (
          <ProjectCard key={proj.id} project={proj} />
        ))}
      </motion.div>
    </div>
  );
};

