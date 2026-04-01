import React from 'react';
import { TerminalCard } from '../ui/TerminalCard';
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <div className="mb-10 animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold font-sans text-text-primary hover-glitch transition-colors">
          /about_whoami
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
        <div className="md:col-span-3 space-y-6 text-text-secondary">
          <p>
            Jayant Olhyan is a full-stack developer and hackathon competitor currently pursuing B.Tech in Computer Science at Maharaja Surajmal Institute of Technology (MSIT), Janakpuri, New Delhi. He builds AI-powered web and mobile products fast — from concept to deployed URL — and competes at national-level hackathons under the team name Hack Homies.
          </p>
          <p>
            He's presented research at the MRIIRS International Conference (March 2026) on AI-powered health systems, built apps used by real farmers, and shipped a space-debris risk platform at an IIT hackathon — all while posting daily on LinkedIn and pushing commits daily to GitHub.
          </p>

          <div className="mt-8 border-l-2 border-accent-green pl-4 italic">
            <span className="text-accent-green font-bold block mb-2 font-mono uppercase text-sm tracking-widest">// Philosophy</span>
            <blockquote className="text-text-primary">
              "I build fast and ship faster. Whether it's an AI symptom checker or a space-debris risk engine, the question I always start with is: does this actually solve a real problem for a real person? Speed is deliberate. Complexity is fine. Confusion is the enemy."
            </blockquote>
          </div>
        </div>

        <div className="md:col-span-1 flex justify-center order-first md:order-last mb-8 md:mb-0">
          {/* Avatar glow styling */}
          <div className="relative group">
            <div className="absolute inset-0 rounded-full bg-accent-green opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
            <img 
              src="/jayant_professional_photo.png" 
              alt="Jayant Olhyan" 
              onError={(e) => { e.target.src = "https://ui-avatars.com/api/?name=Jayant+Olhyan&background=0D1117&color=00B050&size=256"; }}
              className="relative w-40 h-40 md:w-full md:h-auto aspect-square rounded-full border-2 border-border-dark group-hover:border-accent-green shadow-xl z-10 transition-colors duration-300 object-cover grayscale group-hover:grayscale-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
