import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { siteMetadata } from '../../data/portfolioData';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = ['About', 'Work', 'Hackathons', 'Skills', 'Contact'];

  return (
    <header className={`fixed top-0 w-full z-50 transition-colors duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-bg-terminal/95 backdrop-blur-md border-b border-border-dark' : 'bg-transparent'}`}>
      <div className="max-w-[clamp(100%,1200px,100%)] mx-auto px-[clamp(1rem,3vw,2rem)] h-16 flex items-center justify-between">
        <div className="font-mono text-accent-green font-bold text-fluid-base tracking-tight select-none z-50 relative">
          jayant@dev ~
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 lg:space-x-8 text-fluid-sm font-mono text-text-secondary">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => handleNavClick(e, item.toLowerCase())}
              className="hover:text-accent-bright transition-colors duration-200 min-h-[48px] min-w-[48px] flex items-center justify-center"
            >
              /{item.toLowerCase()}
            </a>
          ))}
        </nav>
        
        {/* Mobile Hamburger Toggle */}
        <button 
          className="md:hidden text-accent-green z-50 relative min-h-[48px] min-w-[48px] flex items-center justify-end"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Slide-out Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 left-0 w-full bg-bg-terminal/95 backdrop-blur-lg border-b border-border-dark shadow-2xl md:hidden overflow-hidden"
          >
            <nav className="flex flex-col px-4 py-4 space-y-2 font-mono text-text-secondary h-[calc(100vh-4rem)] max-h-[400px] overflow-y-auto custom-scrollbar">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => handleNavClick(e, item.toLowerCase())}
                  className="hover:text-accent-bright hover:bg-white/5 px-4 rounded-md transition-colors duration-200 min-h-[48px] flex items-center text-fluid-lg"
                >
                  /{item.toLowerCase()}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

