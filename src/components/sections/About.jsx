import React from 'react';
import { TerminalCard } from '../ui/TerminalCard';
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <div className="mb-10 animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-fluid-3xl font-bold font-sans text-text-primary hover-glitch transition-colors">
          /about_whoami
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-[clamp(1rem,4vw,2rem)] items-start">
        <div className="md:col-span-3 space-y-[clamp(1rem,3vw,1.5rem)] text-text-secondary text-fluid-base">
          <p>
            <strong>Jayant Olhyan</strong> is an <strong>IIT Guwahati AI student</strong> (specializing in Data Science) and a <strong>BTech Computer Science MSIT</strong> student, active as an elite <strong>hackathon finalist developer</strong> and full-stack software engineer. Through this <strong>Jayant Olhyan Portfolio</strong>, he showcases rapid-prototype web and mobile systems that solve critical real-world challenges.
          </p>
          <p>
            As a <strong>25x hackathon finalist</strong>, he has presented peer-reviewed research at the MRIIRS International Conference (March 2026) on AI-driven clinical platforms, deployed dual-language tools for Indian farmers, and shipped advanced orbital risk engines at premier IIT competitions. Explore a comprehensive catalog of <strong>Jayant Olhyan projects</strong> as a leading <strong>Data Science Student India</strong> pushing the boundaries of intelligence and scale.
          </p>

          <div className="mt-8 border-l-2 border-accent-green pl-[clamp(0.5rem,2vw,1rem)] italic">
            <span className="text-accent-green font-bold block mb-2 font-mono uppercase text-fluid-xs tracking-widest">// Philosophy</span>
            <blockquote className="text-text-primary">
              "I build fast and ship faster. Whether it's an AI symptom checker or a space-debris risk engine, the question I always start with is: does this actually solve a real problem for a real person? Speed is deliberate. Complexity is fine. Confusion is the enemy."
            </blockquote>
          </div>
        </div>

        <div className="md:col-span-1 flex justify-center order-first md:order-last mb-8 md:mb-0">
          {/* Avatar glow styling */}
          <div className="relative group w-3/5 sm:w-1/2 md:w-full max-w-[250px]">
            <div className="absolute inset-0 rounded-full bg-accent-green opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
            <img 
              src="/jayant_professional_photo.png" 
              alt="Jayant Olhyan Profile Picture" 
              onError={(e) => { e.target.src = "https://ui-avatars.com/api/?name=Jayant+Olhyan&background=0D1117&color=00B050&size=256"; }}
              className="relative w-full h-auto aspect-square rounded-full border-2 border-border-dark group-hover:border-accent-green shadow-xl z-10 transition-colors duration-300 object-cover grayscale group-hover:grayscale-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
