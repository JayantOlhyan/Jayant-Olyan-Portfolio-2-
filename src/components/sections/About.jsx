import React from 'react';
import { TerminalCard } from '../ui/TerminalCard';
import { motion } from 'framer-motion';
import { Icon } from '../ui/Icon';
import { GraduationCap, Trophy, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { siteMetadata } from '../../data/portfolioData';

export const About = () => {
  return (
    <div className="mb-10 animate-fade-in space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-border-dark pb-4 gap-2">
        <div>
          <span className="text-accent-green font-mono tracking-widest text-xs uppercase block mb-1">
            // DEVELOPER_PROFILE & BIO
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-sans text-text-primary">
            /about_whoami
          </h2>
        </div>
        <div className="text-xs text-text-secondary font-mono flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-emerald-400" />
          <span>New Delhi, India (UTC +05:30)</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* Left Bio Column (8 cols) */}
        <div className="md:col-span-8 space-y-4 text-text-secondary text-fluid-sm sm:text-fluid-base leading-relaxed">
          <p>
            <strong className="text-text-primary font-semibold">Jayant Olhyan</strong> is an <strong className="text-amber-400 font-semibold">IIT Guwahati</strong> Data Science & AI student and a <strong className="text-emerald-400 font-semibold">MSIT</strong> Computer Science engineer, active as an elite <strong className="text-sky-400 font-semibold">25x Hackathon Finalist</strong> and full-stack AI developer.
          </p>
          <p>
            He builds production-ready systems bridging multi-modal deep learning (computer vision, RAG fact-checking, speech recognition) with reactive full-stack interfaces (React 18, Next.js, FastAPI, Three.js). He has presented peer-reviewed research at the <strong className="text-text-primary">MRIIRS International Conference (2026)</strong> on encrypted healthcare decision engines and built tools deployed for Indian farmers and orbital space risk visualization.
          </p>

          {/* Educational & Hackathon Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:border-amber-400/40 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                <Icon name="iitguwahati" size={20} className="text-amber-400" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-bold text-white truncate">IIT Guwahati</div>
                <div className="text-[11px] text-text-secondary truncate">Data Science & AI</div>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:border-emerald-400/40 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <Icon name="msit" size={20} className="text-emerald-400" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-bold text-white truncate">MSIT (GGSIPU)</div>
                <div className="text-[11px] text-text-secondary truncate">B.Tech Computer Science</div>
              </div>
            </div>
          </div>

          {/* Philosophy Highlight Box */}
          <TerminalCard className="mt-6 bg-black/40 border-l-4 border-l-accent-green" spotlight={false}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-accent-green font-bold font-mono uppercase text-fluid-xs tracking-widest flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-accent-bright" />
                <span>// Engineering Philosophy</span>
              </span>
              <span className="text-[10px] text-text-secondary font-mono">EST. 2024-2026</span>
            </div>
            <blockquote className="text-text-primary/95 text-fluid-sm italic font-mono leading-relaxed">
              "I build fast and ship faster. Whether it's an AI symptom checker or a space-debris risk engine, the question I always start with is: does this actually solve a real problem for a real person? Speed is deliberate. Complexity is fine. Confusion is the enemy."
            </blockquote>
          </TerminalCard>
        </div>

        {/* Right Avatar Column (4 cols) */}
        <div className="md:col-span-4 flex flex-col items-center justify-center space-y-3 order-first md:order-last">
          {/* Avatar glow wrapper */}
          <div className="relative group w-44 h-44 sm:w-52 sm:h-52">
            {/* Ambient Animated Glow Ring */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-emerald-500 via-sky-500 to-amber-500 opacity-60 group-hover:opacity-100 transition-opacity duration-700 blur-md animate-pulse"></div>
            
            {/* Avatar Image Container */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-white/20 group-hover:border-emerald-400 transition-all duration-300 shadow-2xl bg-[#111]">
              <img 
                src="/jayant_professional_photo.png" 
                alt="Jayant Olhyan - Data Scientist & AI Engineer" 
                onError={(e) => { 
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256' width='256' height='256'%3E%3Crect width='256' height='256' fill='%230D1117'/%3E%3Ctext x='50%25' y='54%25' dominant-baseline='middle' text-anchor='middle' font-family='monospace' font-size='84' font-weight='bold' fill='%2300B050'%3EJO%3C/text%3E%3C/svg%3E"; 
                }}
                className="w-full h-full object-cover grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              />
              
              {/* Overlay Glass Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />

              {/* Status Pill Badge */}
              <div className="absolute bottom-2.5 inset-x-2.5 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 flex items-center justify-between text-[11px] font-mono text-white/90">
                <div className="flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-emerald-400 font-semibold">Active</span>
                </div>
                <span className="text-[10px] text-white/60">25x Finalist</span>
              </div>
            </div>
          </div>

          <div className="text-center space-y-0.5">
            <div className="text-xs font-bold text-white flex items-center justify-center gap-1">
              <span>{siteMetadata.name}</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 inline" />
            </div>
            <div className="text-[11px] text-text-secondary font-mono">
              IIT Guwahati • MSIT CSE
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

