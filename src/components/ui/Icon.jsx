import React from 'react';

/**
 * Normalizes any tech, tool, or brand string to matching SVG symbol ID in public/icons.svg
 */
const normalizeIconName = (rawName = '') => {

  const clean = rawName.toLowerCase().trim().replace(/[-_.\s/]+/g, '');
  
  if (clean.includes('reactnative')) return 'react';
  if (clean.includes('react')) return 'react';
  if (clean.includes('next')) return 'nextjs';
  if (clean.includes('tailwind')) return 'tailwindcss';
  if (clean.includes('three')) return 'threejs';
  if (clean.includes('fastapi')) return 'fastapi';
  if (clean.includes('node') || clean.includes('express')) return 'nodejs';
  if (clean.includes('python')) return 'python';
  if (clean.includes('typescript') || clean === 'ts') return 'typescript';
  if (clean.includes('javascript') || clean === 'js') return 'javascript';
  if (clean === 'c') return 'c';
  if (clean.includes('mongo')) return 'mongodb';
  if (clean.includes('firebase')) return 'firebase';
  if (clean.includes('netlify')) return 'netlify';
  if (clean.includes('vercel')) return 'vercel';
  if (clean.includes('docker')) return 'docker';
  if (clean.includes('githubaction') || clean.includes('actions')) return 'githubactions';
  if (clean.includes('gemini')) return 'gemini';
  if (clean.includes('openai')) return 'openai';
  if (clean.includes('pytorch')) return 'pytorch';
  if (clean.includes('opencv')) return 'opencv';
  if (clean.includes('langchain') || clean.includes('rag')) return 'langchain';
  if (clean.includes('claude') || clean.includes('anthropic')) return 'claude';
  if (clean.includes('cursor')) return 'cursor';
  if (clean.includes('copilot')) return 'githubcopilot';
  if (clean.includes('nasa')) return 'nasa';
  if (clean.includes('esa')) return 'esa';
  if (clean.includes('iitguwahati') || clean.includes('iitg')) return 'iitguwahati';
  if (clean.includes('msit')) return 'msit';
  if (clean.includes('economictimes') || clean.includes('etgen')) return 'economictimes';
  if (clean.includes('linkedin')) return 'linkedin';
  if (clean.includes('github') || clean.includes('repo')) return 'github';
  if (clean.includes('twitter') || clean === 'x') return 'x';
  if (clean.includes('discord')) return 'discord';
  if (clean.includes('bluesky')) return 'bluesky';
  if (clean.includes('email') || clean.includes('mail')) return 'email';
  if (clean.includes('phone') || clean.includes('tel')) return 'phone';
  
  return rawName.toLowerCase().replace(/[^a-z0-9]/g, '');
};

/**
 * A highly optimized, premium reusable Icon component that references SVG symbols from the public sprite sheet.
 * Features built-in micro-animations and custom size/color configurations.
 */
export const Icon = ({ name, className = '', size = 20, fill = 'currentColor', ...props }) => {
  if (!name) return null;
  const slug = normalizeIconName(name);
  const iconId = slug.endsWith('-icon') ? slug : `${slug}-icon`;

  return (
    <svg
      width={size}
      height={size}
      fill={fill}
      className={`inline-block shrink-0 transition-all duration-300 ease-out select-none ${className}`}
      style={{
        verticalAlign: 'middle',
      }}
      aria-hidden="true"
      {...props}
    >
      <use href={`/icons.svg#${iconId}`} />
    </svg>
  );
};

