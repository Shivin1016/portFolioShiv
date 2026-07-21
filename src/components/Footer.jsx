import React from 'react';
import { FaArrowUp, FaGithub, FaLinkedin, FaEnvelope, FaCode } from 'react-icons/fa6';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#030612]/90 backdrop-blur-md py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Brand */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#6C63FF] via-[#00E5FF] to-[#FF4D9E] p-[1px]">
            <div className="w-full h-full bg-[#050816] rounded-[11px] flex items-center justify-center">
              <FaCode className="text-[#00E5FF] text-sm" />
            </div>
          </div>
          <div>
            <span className="font-space font-bold text-white text-base">
              Shivani <span className="text-[#00E5FF]">Prajapati</span>
            </span>
            <p className="text-[10px] text-slate-400 font-mono">
              Software Developer • IT Fresher
            </p>
          </div>
        </div>

        {/* Center Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Shivin1016"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors text-lg"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/shivani-p-959v1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-[#00E5FF] transition-colors text-lg"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://leetcode.com/shivaniprajapati11jan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-yellow-400 transition-colors text-lg"
            title="LeetCode"
          >
            <SiLeetcode />
          </a>
          <a
            href="https://geeksforgeeks.org/user/shivanipraj8nkk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-emerald-400 transition-colors text-lg"
            title="GeeksforGeeks"
          >
            <SiGeeksforgeeks />
          </a>
          <a
            href="mailto:shivaniprajapati10jan@gmail.com"
            className="text-slate-400 hover:text-[#FF4D9E] transition-colors text-lg"
            title="Email"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Right Copy & Back to Top */}
        <div className="flex items-center gap-4 text-xs text-slate-400 font-mono">
          <span>© {new Date().getFullYear()} Shivani Prajapati</span>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-colors cursor-pointer"
            title="Back to Top"
          >
            <FaArrowUp />
          </button>
        </div>

      </div>
    </footer>
  );
}
