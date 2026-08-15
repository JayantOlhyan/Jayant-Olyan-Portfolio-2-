import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '../ui/Icon';
import { Globe, Building2, Sparkles } from 'lucide-react';

const ecosystems = [
  { name: 'IIT Guwahati', slug: 'iitguwahati', role: 'Data Science & AI Specialization', badge: 'Premier Institute' },
  { name: 'MSIT (GGSIPU)', slug: 'msit', role: 'B.Tech Computer Science', badge: 'Home Institution' },
  { name: 'Economic Times', slug: 'economictimes', role: 'ET Gen AI Hackathon', badge: 'AI Finalist' },
  { name: 'NASA Open APIs', slug: 'nasa', role: 'Space Data Visualization', badge: 'GRAVITAS API' },
  { name: 'European Space Agency', slug: 'esa', role: 'Orbital Ephemeris Data', badge: 'Telemetry' },
  { name: 'Google (Gemini API)', slug: 'gemini', role: 'Multimodal AI & Speech Pipelines', badge: 'FarmIQ & Sentinel' },
  { name: 'IIT Ropar', slug: 'c', role: 'Advitiya \'26 Cyber Forge', badge: 'Finalist' },
  { name: 'MRIIRS Conference', slug: 'python', role: 'Peer-Reviewed AI Health Research', badge: 'Presented 2026' },
  { name: 'NSUT', slug: 'react', role: 'Hackathon Collaboration', badge: 'Engineering Team' },
  { name: 'Hack Paradox', slug: 'fastapi', role: 'Cybersecurity Scam Detection', badge: 'Sentinel AI' },
];

export const Ecosystem = () => {
  return (
    <div className="mb-10 animate-fade-in space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-border-dark pb-4 gap-2">
        <div>
          <span className="text-accent-green font-mono tracking-widest text-xs uppercase block mb-1">
            // INSTITUTIONAL & HACKATHON NETWORK
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-sans text-text-primary">
            /ecosystem --network
          </h2>
        </div>
        <div className="text-xs text-text-secondary font-mono flex items-center gap-1">
          <Globe className="w-3.5 h-3.5 text-emerald-400" />
          <span>Academia • Hackathons • Research</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {ecosystems.map((eco, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.02, y: -2 }}
            className="flex items-center space-x-3 p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all group select-none"
          >
            <div className="p-2.5 rounded-lg bg-black/40 border border-white/10 text-emerald-400 group-hover:border-emerald-500/30 group-hover:text-emerald-300 transition-colors shrink-0">
              <Icon name={eco.slug} size={20} />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-1">
                <div className="text-xs sm:text-sm font-bold text-text-primary group-hover:text-white truncate">
                  {eco.name}
                </div>
                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-text-secondary group-hover:text-emerald-400 group-hover:border-emerald-500/30 transition-colors shrink-0">
                  {eco.badge}
                </span>
              </div>
              <div className="text-[11px] text-text-secondary/70 group-hover:text-text-secondary truncate mt-0.5 font-mono">
                {eco.role}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
