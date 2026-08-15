import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../../data/portfolioData';
import { TerminalCard } from '../ui/TerminalCard';
import { Icon } from '../ui/Icon';
import { Code, Cpu, Database, Rocket, Sparkles } from 'lucide-react';

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

const skillCategories = [
  {
    id: 'build',
    title: 'Full-Stack & Languages',
    subtitle: 'Core Languages, Frameworks & Web Platforms',
    icon: Code,
    color: 'text-emerald-400',
    borderColor: 'border-emerald-500/30',
    tags: [
      { name: 'Python', role: 'Core Backend / AI' },
      { name: 'JavaScript', role: 'ES6+ / Web' },
      { name: 'TypeScript', role: 'Type-Safe App Dev' },
      { name: 'C', role: 'Systems / Algorithms' },
      { name: 'React', role: 'UI Components' },
      { name: 'Next.js', role: 'SSR & Full-Stack' },
      { name: 'FastAPI', role: 'High-Perf Python APIs' },
      { name: 'Node.js', role: 'Express & Microservices' },
      { name: 'Tailwind CSS', role: 'Utility-First Styling' },
      { name: 'Three.js', role: '3D Orbital Visualizations' },
    ],
  },
  {
    id: 'ai',
    title: 'AI, LLMs & Computer Vision',
    subtitle: 'Generative AI, RAG & Neural Networks',
    icon: Cpu,
    color: 'text-sky-400',
    borderColor: 'border-sky-500/30',
    tags: [
      { name: 'Google Gemini', role: 'Multimodal Inference' },
      { name: 'OpenAI', role: 'GPT-4o & Embeddings' },
      { name: 'LangChain', role: 'RAG & Vector Pipelines' },
      { name: 'PyTorch', role: 'Deep Learning & Tensors' },
      { name: 'OpenCV', role: 'Frame Analysis & CV' },
      { name: 'Claude', role: 'Anthropic LLMs' },
      { name: 'Cursor', role: 'AI-Native IDE' },
      { name: 'GitHub Copilot', role: 'Pair Programming' },
    ],
  },
  {
    id: 'store',
    title: 'Databases & State',
    subtitle: 'Relational, Document & Real-time Stores',
    icon: Database,
    color: 'text-amber-400',
    borderColor: 'border-amber-500/30',
    tags: [
      { name: 'MongoDB', role: 'NoSQL Document Store' },
      { name: 'Firebase', role: 'Firestore & Auth' },
    ],
  },
  {
    id: 'ship',
    title: 'DevOps & Deployments',
    subtitle: 'CI/CD Pipelines, Containers & Edge Cloud',
    icon: Rocket,
    color: 'text-purple-400',
    borderColor: 'border-purple-500/30',
    tags: [
      { name: 'Netlify', role: 'Continuous Deployments' },
      { name: 'Vercel', role: 'Next.js Edge Runtime' },
      { name: 'Docker', role: 'Containerization' },
      { name: 'GitHub Actions', role: 'Automated CI/CD' },
    ],
  },
];

export const Skills = () => {
  return (
    <div className="mb-10 animate-fade-in">
      <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between border-b border-border-dark pb-4 gap-2">
        <div>
          <span className="text-accent-green font-mono tracking-widest text-xs uppercase block mb-1">
            // CAPABILITIES & TECH STACK
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-sans text-text-primary">
            /skills --capabilities
          </h2>
        </div>
        <div className="text-xs text-text-secondary font-mono flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Interactive Brand Icons</span>
        </div>
      </div>

      {/* Main Categories Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(1rem,3vw,1.5rem)]"
      >
        {skillCategories.map((cat) => {
          const CategoryIcon = cat.icon;
          return (
            <motion.div key={cat.id} variants={itemVariants} className="h-full">
              <TerminalCard className="flex flex-col h-full bg-bg-terminal/70" spotlight glowing>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/5">
                  <div className={`p-2 rounded-lg bg-white/5 border ${cat.borderColor} ${cat.color}`}>
                    <CategoryIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-fluid-base font-bold font-sans text-text-primary">
                      {cat.title}
                    </h3>
                    <p className="text-[11px] text-text-secondary font-mono">
                      {cat.subtitle}
                    </p>
                  </div>
                </div>

                {/* Tech Pills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 mt-auto">
                  {cat.tags.map((item) => (
                    <div
                      key={item.name}
                      className="group/pill flex items-center space-x-2.5 p-2 rounded-lg bg-white/5 border border-white/5 hover:border-emerald-500/40 hover:bg-emerald-500/10 transition-all cursor-default select-none"
                    >
                      <Icon 
                        name={item.name} 
                        size={18} 
                        className="text-text-secondary group-hover/pill:text-emerald-400 group-hover/pill:scale-115 transition-all" 
                      />
                      <div className="min-w-0 flex-1">
                        <div className="text-fluid-xs font-semibold text-text-primary group-hover/pill:text-emerald-300 truncate">
                          {item.name}
                        </div>
                        <div className="text-[10px] text-text-secondary/70 truncate font-mono">
                          {item.role}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TerminalCard>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

