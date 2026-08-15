import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { siteMetadata } from '../../data/portfolioData';
import { Mail, MapPin, Phone, Copy, Check, Send, Sparkles } from 'lucide-react';
import { Icon } from '../ui/Icon';
import { TerminalCard } from '../ui/TerminalCard';

export const Contact = () => {
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (field, text) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="mb-10 animate-fade-in space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-border-dark pb-4 gap-2">
        <div>
          <span className="text-accent-green font-mono tracking-widest text-xs uppercase block mb-1">
            // GET_IN_TOUCH & HIRE
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-sans text-text-primary">
            /contact --collaborate
          </h2>
        </div>
        <div className="text-xs text-text-secondary font-mono flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-emerald-400 font-semibold">Inbox Open (Fast Response)</span>
        </div>
      </div>

      <TerminalCard className="font-mono text-fluid-sm bg-bg-terminal/90 shadow-2xl space-y-6" spotlight glowing>
        {/* Contact Grid Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Email Item */}
          <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all group">
            <div className="flex items-center space-x-3 min-w-0 flex-1">
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[11px] text-text-secondary uppercase tracking-wider font-bold">Email</div>
                <a href={`mailto:${siteMetadata.email}`} className="text-xs sm:text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors truncate block">
                  {siteMetadata.email}
                </a>
              </div>
            </div>
            <button
              onClick={() => handleCopy('email', siteMetadata.email)}
              title="Copy email to clipboard"
              className="p-1.5 rounded hover:bg-white/10 text-white/50 hover:text-white transition-colors shrink-0 ml-2 cursor-pointer"
            >
              {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Phone Item */}
          <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-amber-500/40 hover:bg-amber-500/5 transition-all group">
            <div className="flex items-center space-x-3 min-w-0 flex-1">
              <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[11px] text-text-secondary uppercase tracking-wider font-bold">Phone / WhatsApp</div>
                <a href={`tel:${siteMetadata.phone}`} className="text-xs sm:text-sm font-semibold text-text-primary hover:text-amber-400 transition-colors truncate block">
                  +91 {siteMetadata.phone}
                </a>
              </div>
            </div>
            <button
              onClick={() => handleCopy('phone', `+91${siteMetadata.phone}`)}
              title="Copy phone number"
              className="p-1.5 rounded hover:bg-white/10 text-white/50 hover:text-white transition-colors shrink-0 ml-2 cursor-pointer"
            >
              {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Location Item */}
          <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-sky-500/40 hover:bg-sky-500/5 transition-all">
            <div className="flex items-center space-x-3 min-w-0 flex-1">
              <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[11px] text-text-secondary uppercase tracking-wider font-bold">Location</div>
                <div className="text-xs sm:text-sm font-semibold text-text-primary truncate">
                  {siteMetadata.location}
                </div>
              </div>
            </div>
          </div>

          {/* GitHub Profile */}
          <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/40 hover:bg-purple-500/5 transition-all">
            <div className="flex items-center space-x-3 min-w-0 flex-1">
              <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 shrink-0">
                <Icon name="github" size={16} className="text-purple-400" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[11px] text-text-secondary uppercase tracking-wider font-bold">GitHub</div>
                <a href={siteMetadata.github} target="_blank" rel="noreferrer" className="text-xs sm:text-sm font-semibold text-text-primary hover:text-purple-300 transition-colors truncate block">
                  github.com/JayantOlhyan
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Open To Badges */}
        <div className="pt-2 border-t border-white/5">
          <div className="text-xs text-text-secondary uppercase tracking-wider font-bold mb-2.5 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Currently Open To Opportunities:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {siteMetadata.openTo.map((item) => (
              <span 
                key={item}
                className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold text-xs"
              >
                ✓ {item}
              </span>
            ))}
          </div>
        </div>

        {/* Action Prompt */}
        <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t border-white/5">
          <div className="flex items-center space-x-2 text-xs text-text-secondary">
            <span className="text-accent-green font-bold">&gt;</span>
            <span>Let's build something game-changing together.</span>
            <span className="animate-cursor-blink inline-block w-2 bg-accent-bright h-4 translate-y-0.5" />
          </div>

          <a 
            href={`mailto:${siteMetadata.email}?subject=Collaboration%20Inquiry%20via%20Portfolio`}
            className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-black font-bold flex items-center justify-center gap-2 rounded-lg uppercase tracking-wider text-xs shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.7)] transition-all cursor-pointer select-none"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Send Direct Email</span>
          </a>
        </div>
      </TerminalCard>
    </div>
  );
};

