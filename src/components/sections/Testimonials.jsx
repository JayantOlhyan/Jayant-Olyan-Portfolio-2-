import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../../data/portfolioData';
import { TerminalCard } from '../ui/TerminalCard';
import { MessageSquareQuote, Star, CheckCircle2 } from 'lucide-react';

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

export const Testimonials = () => {
  return (
    <div className="mb-10 animate-fade-in space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-border-dark pb-4 gap-2">
        <div>
          <span className="text-accent-green font-mono tracking-widest text-xs uppercase block mb-1">
            // ENDORSEMENTS & PEER REVIEWS
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-sans text-text-primary">
            /testimonials --peer_review
          </h2>
        </div>
        <div className="text-xs text-text-secondary font-mono flex items-center gap-1">
          <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
          <span>Teammates • Mentors • Peer Reviewers</span>
        </div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-4"
      >
        {testimonials.map((test, idx) => (
          <motion.div key={idx} variants={itemVariants}>
            <TerminalCard className="bg-bg-terminal/80 border-l-4 border-l-emerald-500 p-5 space-y-3" spotlight glowing>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-400/20 to-sky-400/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-xs font-mono shrink-0">
                    {test.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-text-primary font-sans flex items-center gap-1.5">
                      <span>{test.name}</span>
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    </div>
                    <div className="text-[11px] text-accent-green font-mono">
                      {test.role}
                    </div>
                  </div>
                </div>

                <MessageSquareQuote className="w-6 h-6 text-white/10 shrink-0" />
              </div>

              <blockquote className="font-mono text-text-secondary group-hover:text-text-primary/90 transition-colors text-xs sm:text-fluid-sm leading-relaxed italic pl-2 border-l border-white/10">
                "{test.quote}"
              </blockquote>
            </TerminalCard>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

