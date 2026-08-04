import React from 'react';
import { siteMetadata } from '../../data/portfolioData';

export const Social = () => {
  const socialLinks = [
    { name: 'LinkedIn', url: siteMetadata.linkedin, desc: 'Professional network & articles', icon: '💼' },
    { name: 'GitHub', url: siteMetadata.github, desc: 'Open source repositories & projects', icon: '💻' },
    { name: 'Email', url: `mailto:${siteMetadata.email}`, desc: siteMetadata.email, icon: '✉️' },
    { name: 'Phone', url: `tel:${siteMetadata.phone}`, desc: siteMetadata.phone, icon: '📞' },
  ];

  return (
    <div className="w-full border border-dashed border-border-dark p-6 rounded-lg bg-bg-terminal/30 font-mono space-y-4">
      <h3 className="text-sm font-bold uppercase tracking-widest text-emerald-400 border-b border-border-dark pb-2">
        Social Profiles & Links
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
        {socialLinks.map((s) => (
          <a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 p-4 bg-white/5 border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/10 rounded-md transition-all group"
          >
            <span className="text-2xl">{s.icon}</span>
            <div>
              <div className="text-sm font-bold text-text-primary group-hover:text-emerald-400">
                {s.name}
              </div>
              <div className="text-xs text-text-secondary/70">{s.desc}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
