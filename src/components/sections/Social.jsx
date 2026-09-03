import React, { useState } from 'react';
import { siteMetadata } from '../../data/portfolioData';
import { Icon } from '../ui/Icon';
import { ExternalLink, Copy, Check } from 'lucide-react';
import { motion } from 'framer-motion';

export const Social = () => {
  const [copiedKey, setCopiedKey] = useState(null);

  const handleCopy = (e, key, text) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      slug: 'linkedin',
      url: siteMetadata.linkedin, 
      desc: 'Connect for career, research & AI discussions',
      color: 'hover:border-blue-500/50 hover:bg-blue-500/10 text-blue-400',
      iconColor: 'text-blue-400'
    },
    { 
      name: 'GitHub', 
      slug: 'github',
      url: siteMetadata.github, 
      desc: 'Open-source repositories & hackathon source code',
      color: 'hover:border-emerald-500/50 hover:bg-emerald-500/10 text-emerald-400',
      iconColor: 'text-white'
    },
    { 
      name: 'Email', 
      slug: 'email',
      url: `mailto:${siteMetadata.email}`, 
      desc: siteMetadata.email,
      copyText: siteMetadata.email,
      color: 'hover:border-rose-500/50 hover:bg-rose-500/10 text-rose-400',
      iconColor: 'text-rose-400'
    },
    { 
      name: 'Phone', 
      slug: 'phone',
      url: `tel:${siteMetadata.phone}`, 
      desc: `+91 ${siteMetadata.phone}`,
      copyText: `+91${siteMetadata.phone}`,
      color: 'hover:border-amber-500/50 hover:bg-amber-500/10 text-amber-400',
      iconColor: 'text-amber-400'
    },
    {
      name: 'Discord',
      slug: 'discord',
      url: 'https://discord.com',
      desc: 'Direct developer messaging & tech communities',
      color: 'hover:border-indigo-500/50 hover:bg-indigo-500/10 text-indigo-400',
      iconColor: 'text-indigo-400'
    },
    {
      name: 'X (Twitter)',
      slug: 'x',
      url: 'https://x.com',
      desc: 'Tech announcements, AI research & updates',
      color: 'hover:border-sky-500/50 hover:bg-sky-500/10 text-sky-400',
      iconColor: 'text-sky-400'
    }
  ];

  return (
    <div className="mb-10 animate-fade-in space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-border-dark pb-4 gap-2">
        <div>
          <span className="text-accent-green font-mono tracking-widest text-xs uppercase block mb-1">
            // NETWORK & SOCIAL CHANNELS
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-sans text-text-primary">
            /social --profiles
          </h2>
        </div>
        <div className="text-xs text-text-secondary font-mono">
          Available for Internships, Hackathons & Tech Consulting
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {socialLinks.map((s) => {
          const isCopied = copiedKey === s.name;
          return (
            <motion.div
              key={s.name}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-start justify-between p-4 bg-white/5 border border-white/10 rounded-xl transition-all duration-200 group ${s.color}`}
            >
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-3.5 min-w-0 flex-1"
              >
                <div className="p-2.5 rounded-lg bg-black/40 border border-white/10 shrink-0 group-hover:border-white/20 transition-colors">
                  <Icon name={s.slug} size={22} className={s.iconColor} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-bold text-text-primary group-hover:text-white flex items-center gap-1.5 truncate">
                    <span>{s.name}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="text-[11px] text-text-secondary/70 group-hover:text-text-secondary transition-colors truncate mt-0.5 font-mono">
                    {s.desc}
                  </div>
                </div>
              </a>

              {s.copyText && (
                <button
                  type="button"
                  onClick={(e) => handleCopy(e, s.name, s.copyText)}
                  title={`Copy ${s.name}`}
                  className="p-1.5 rounded-md hover:bg-white/10 text-white/50 hover:text-white transition-colors shrink-0 ml-2 cursor-pointer"
                >
                  {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

