import React from 'react';

export const Philosophy = () => {
  const principles = [
    {
      title: '1. Ship Real Utility First',
      desc: 'Code should solve concrete human problems. Whether it is deepfake verification or fraud prevention, real impact beats vanity metrics.',
    },
    {
      title: '2. Performant & Lightweight by Default',
      desc: 'Rely on native browser features, efficient algorithms, clean modular code, and tight data pipelines instead of unnecessary bloat.',
    },
    {
      title: '3. Full-Stack Clarity Under Pressure',
      desc: 'Hackathons and fast-paced environments demand clear separation between API contracts, data stores, models, and responsive frontend design.',
    },
    {
      title: '4. Continuous Learning & AI Synergy',
      desc: 'Combine fundamental computer science, statistical AI models, and modern toolchains to multiply developer productivity.',
    },
  ];

  return (
    <div className="w-full border border-dashed border-border-dark p-6 rounded-lg bg-bg-terminal/30 font-mono space-y-6">
      <h3 className="text-sm font-bold uppercase tracking-widest text-emerald-400 border-b border-border-dark pb-2">
        Personal Engineering & Design Philosophy
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {principles.map((p) => (
          <div
            key={p.title}
            className="p-4 bg-white/5 border border-white/10 rounded-md space-y-2"
          >
            <div className="text-sm font-bold text-amber-400">{p.title}</div>
            <div className="text-xs text-text-secondary leading-relaxed">
              {p.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
