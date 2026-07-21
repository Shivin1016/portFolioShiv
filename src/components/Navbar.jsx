import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaDownload, FaBars, FaXmark, FaVolumeHigh, FaVolumeXmark, FaCode } from 'react-icons/fa6';

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPlayingSound, setIsPlayingSound] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['home', 'skills', 'projects', 'timeline', 'about', 'services', 'contact'];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 250 && rect.bottom >= 250;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  const toggleSound = () => {
    setIsPlayingSound(!isPlayingSound);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          className={`flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300 ${
            isScrolled
              ? 'glass-panel shadow-[0_10px_30px_rgba(0,0,0,0.5)] border-white/10'
              : 'bg-white/5 backdrop-blur-md border border-white/10'
          }`}
        >
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 group cursor-pointer"
            data-cursor="Shivani"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#6C63FF] via-[#00E5FF] to-[#FF4D9E] p-[1.5px] transition-transform group-hover:scale-105">
              <div className="w-full h-full bg-[#050816] rounded-[10px] flex items-center justify-center">
                <FaCode className="text-[#00E5FF] text-lg group-hover:rotate-12 transition-transform" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-space font-bold text-lg tracking-tight text-white group-hover:text-[#00E5FF] transition-colors">
                Shivani<span className="text-[#FF4D9E]">.dev</span>
              </span>
              <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase -mt-1">
                Software Dev
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-[#6C63FF]/80 to-[#00E5FF]/80 rounded-full -z-10 shadow-[0_0_15px_rgba(0,229,255,0.4)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Action Controls */}
          <div className="hidden md:flex items-center gap-3">
            {/* Ambient Audio Toggle */}
            <button
              onClick={toggleSound}
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-[#00E5FF] hover:border-[#00E5FF]/40 transition-all cursor-pointer"
              title={isPlayingSound ? 'Mute ambient sound' : 'Play ambient futuristic sound'}
            >
              {isPlayingSound ? (
                <FaVolumeHigh className="text-sm text-[#00E5FF] animate-pulse" />
              ) : (
                <FaVolumeXmark className="text-sm" />
              )}
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none cursor-pointer"
              data-cursor="Resume"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#6C63FF] via-[#00E5FF] to-[#FF4D9E] rounded-full animate-spin-slow group-hover:opacity-100 transition-opacity" />
              <div className="relative px-4 py-2 bg-[#050816] rounded-full flex items-center gap-2 text-xs font-semibold text-white transition-all group-hover:bg-opacity-90">
                <FaDownload className="text-[#00E5FF] group-hover:translate-y-0.5 transition-transform" />
                <span>Resume</span>
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-200"
            >
              {mobileMenuOpen ? <FaXmark className="text-lg" /> : <FaBars className="text-lg" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden px-4 pt-3 pb-6"
          >
            <div className="glass-panel rounded-2xl p-5 flex flex-col gap-3 border border-white/10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:text-white hover:bg-white/10 transition-all flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-[#00E5FF] font-mono">0{navLinks.indexOf(link) + 1}</span>
                </a>
              ))}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => {
                    onOpenResume();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#6C63FF] to-[#00E5FF] text-white text-xs font-semibold flex items-center justify-center gap-2"
                >
                  <FaDownload /> Download Resume
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
