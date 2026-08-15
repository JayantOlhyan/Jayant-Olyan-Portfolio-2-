import React from 'react';
import { TerminalCard } from '../ui/TerminalCard';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Layers, BrainCircuit, Sparkles } from 'lucide-react';

const principles = [
  {
    icon: ShieldCheck,
    color: 'text-emerald-400',
    title: '1. Ship Real Utility First',
    desc: 'Code should solve concrete human problems. Whether it is deepfake verification or fraud prevention, real impact beats vanity metrics.',
  },
  {
    icon: Zap,
    color: 'text-amber-400',
    title: '2. Performant & Lightweight by Default',
    desc: 'Rely on native browser features, efficient algorithms, clean modular code, and tight data pipelines instead of unnecessary bloat.',
  },
  {
    icon: Layers,
    color: 'text-sky-400',
    title: '3. Full-Stack Clarity Under Pressure',
    desc: 'Hackathons and fast-paced environments demand clear separation between API contracts, data stores, models, and responsive frontend design.',
  },
  {
    icon: BrainCircuit,
    color: 'text-purple-400',
    title: '4. Continuous Learning & AI Synergy',
    desc: 'Combine fundamental computer science, statistical AI models, and modern toolchains to multiply developer productivity.',
  },
];

export const Philosophy = () => {
  return (
    <div className="mb-10 animate-fade-in space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-border-dark pb-4 gap-2">
        <div>
          <span className="text-accent-green font-mono tracking-widest text-xs uppercase block mb-1">
            // CORE_PRINCIPLES & ARCHITECTURE
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-sans text-text-primary">
            /philosophy --principles
          </h2>
        </div>
        <div className="text-xs text-text-secondary font-mono flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Speed • Simplicity • Impact</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {principles.map((p) => {
          const IconComp = p.icon;
          return (
            <TerminalCard key={p.title} className="p-5 space-y-3 bg-bg-terminal/70" spotlight glowing>
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-white shrink-0">
                  <IconComp className={`w-4 h-4 ${p.color}`} />
                </div>
                <h3 className={`text-sm font-bold font-mono ${p.color}`}>
                  {p.title}
                </h3>
              </div>
              <p className="text-xs sm:text-fluid-sm text-text-secondary leading-relaxed font-mono">
                {p.desc}
              </p>
            </TerminalCard>
          );
        })}
      </div>
    </div>
  );
};

