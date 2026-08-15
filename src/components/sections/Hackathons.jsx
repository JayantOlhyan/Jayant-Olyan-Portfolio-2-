import React from 'react';
import { motion } from 'framer-motion';
import { hackathons } from '../../data/portfolioData';
import { Trophy, Award, Sparkles, ExternalLink } from 'lucide-react';
import { TerminalCard } from '../ui/TerminalCard';

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
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: 'easeOut' } },
};

export const Hackathons = () => {
  return (
    <div className="mb-10 animate-fade-in space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-border-dark pb-4 gap-2">
        <div>
          <span className="text-accent-green font-mono tracking-widest text-xs uppercase block mb-1">
            // COMPETITIVE TRACK RECORD (25X FINALIST)
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-sans text-text-primary">
            /history --hackathons
          </h2>
        </div>
        <div className="text-xs text-text-secondary font-mono flex items-center gap-1">
          <Trophy className="w-3.5 h-3.5 text-amber-400" />
          <span>IITs • National Conferences • GenAI</span>
        </div>
      </div>

      <TerminalCard className="bg-bg-terminal/80 border border-border-dark p-0 overflow-hidden" spotlight glowing>
        {/* Desktop Table Header */}
        <div className="hidden md:grid grid-cols-12 gap-4 border-b border-white/10 px-6 py-3 bg-white/[0.02] text-text-secondary uppercase tracking-wider text-[11px] font-mono font-bold">
          <div className="col-span-2">Year</div>
          <div className="col-span-4 text-accent-green">Hackathon & Event</div>
          <div className="col-span-3">Project Built</div>
          <div className="col-span-2">Organizing Body</div>
          <div className="col-span-1 text-center">Status</div>
        </div>

        {/* Rows with Staggered Motion */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="divide-y divide-white/5"
        >
          {hackathons.map((h, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="flex flex-col md:grid md:grid-cols-12 gap-2 md:gap-4 hover:bg-white/5 transition-colors px-6 py-4 md:py-3.5 font-mono text-fluid-xs sm:text-fluid-sm items-start md:items-center group select-none"
            >
              {/* Year */}
              <div className="md:col-span-2 text-text-secondary group-hover:text-white transition-colors text-xs font-semibold">
                <span className="md:hidden text-[10px] text-text-secondary/60 uppercase mr-2 font-bold">Year:</span>
                {h.year}
              </div>

              {/* Hackathon Name */}
              <div className="md:col-span-4 text-accent-green font-bold group-hover:text-accent-bright transition-colors flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="truncate">{h.name}</span>
              </div>

              {/* Project */}
              <div className="md:col-span-3 text-text-primary group-hover:text-white transition-colors">
                <span className="md:hidden text-[10px] text-text-secondary/60 uppercase mr-2 font-bold">Project:</span>
                <span className="font-semibold text-emerald-300 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  {h.project}
                </span>
              </div>

              {/* Organizer */}
              <div className="md:col-span-2 text-text-secondary group-hover:text-text-primary text-xs truncate">
                <span className="md:hidden text-[10px] text-text-secondary/60 uppercase mr-2 font-bold">By:</span>
                {h.organizer}
              </div>

              {/* Status Badge */}
              <div className="md:col-span-1 flex items-center justify-start md:justify-center mt-2 md:mt-0">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 group-hover:border-emerald-500/40 text-xs font-bold text-emerald-400 shadow-xs">
                  <span>{h.emoji}</span>
                  <span className="text-[10px] uppercase tracking-wider">{h.status}</span>
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Collaboration Callout */}
        <div className="px-6 py-3 bg-white/[0.01] border-t border-white/5 flex flex-wrap justify-between items-center text-xs text-text-secondary font-mono">
          <div>// Total Hackathon Podiums: <span className="text-emerald-400 font-bold">25x Finalist & Winner</span></div>
          <div className="text-emerald-400 hover:text-emerald-300 font-semibold cursor-pointer">Run /contact to team up &gt;</div>
        </div>
      </TerminalCard>
    </div>
  );
};

