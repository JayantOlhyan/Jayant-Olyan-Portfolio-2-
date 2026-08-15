import React from 'react';
import { motion } from 'framer-motion';
import { articles } from '../../data/portfolioData';
import { ExternalLink, BookOpen, Clock } from 'lucide-react';
import { TerminalCard } from '../ui/TerminalCard';
import { Icon } from '../ui/Icon';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
};

export const Articles = () => {
  return (
    <div className="mb-10 animate-fade-in space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-border-dark pb-4 gap-2">
        <div>
          <span className="text-accent-green font-mono tracking-widest text-xs uppercase block mb-1">
            // TECHNICAL WRITING & INSIGHTS
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-sans text-text-primary">
            /articles --latest
          </h2>
        </div>
        <div className="text-xs text-text-secondary font-mono flex items-center gap-1">
          <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
          <span>Deep Learning • Hackathon Architecture</span>
        </div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-[clamp(1rem,3vw,1.5rem)]"
      >
        {articles.map((art, idx) => (
          <motion.div key={idx} variants={itemVariants} className="h-full">
            <TerminalCard className="flex flex-col h-full group/art bg-bg-terminal/70 p-6" spotlight glowing>
              <div className="flex items-center justify-between text-xs text-text-secondary font-mono mb-3">
                <span className="bg-white/5 px-2 py-0.5 rounded border border-white/5">{art.date}</span>
                <span className="flex items-center gap-1 text-[11px] text-text-secondary/70">
                  <Clock className="w-3 h-3" />
                  <span>3 min read</span>
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold font-sans text-text-primary mb-3 group-hover/art:text-accent-bright transition-colors leading-snug">
                {art.title}
              </h3>

              <p className="text-xs sm:text-fluid-sm text-text-secondary leading-relaxed mb-6 flex-grow">
                "{art.excerpt}"
              </p>

              <div className="mt-auto pt-3 border-t border-white/5 flex items-center justify-between">
                <a 
                  href={art.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-2 text-accent-green text-xs font-mono font-semibold uppercase tracking-wider hover:text-accent-bright transition-colors group-hover/art:translate-x-1 duration-200"
                >
                  <Icon name="linkedin" size={16} className="text-blue-400" />
                  <span>Read Article</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </TerminalCard>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
