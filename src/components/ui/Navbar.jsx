import React, { useState, useEffect } from 'react';
import { siteMetadata } from '../../data/portfolioData';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 w-full z-40 transition-colors duration-300 ${isScrolled ? 'bg-bg-terminal/95 backdrop-blur-sm border-b border-border-dark' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="font-mono text-accent-green font-bold tracking-tight select-none">
          jayant@dev ~
        </div>
        
        <nav className="hidden md:flex space-x-6 text-sm font-mono text-text-secondary">
          {['About', 'Work', 'Hackathons', 'Skills', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => handleNavClick(e, item.toLowerCase())}
              className="hover:text-accent-bright transition-colors duration-200"
            >
              /{item.toLowerCase()}
            </a>
          ))}
        </nav>
        
        {/* Mobile Nav could be an icon or just simple text to save space */}
        <div className="md:hidden text-accent-green text-sm flex gap-3">
           <a href="#work" onClick={(e) => handleNavClick(e, 'work')}>/work</a>
           <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>/about</a>
        </div>
      </div>
    </header>
  );
};
