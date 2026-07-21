import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaArrowDown, FaBriefcase, FaGraduationCap, FaStar } from 'react-icons/fa6';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';

const roles = [
  'Java Developer',
  'Spring Boot Developer',
  'Full Stack Developer',
  'Backend Developer',
];

export default function HeroSection({ onOpenResume }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter Effect logic
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer;

    if (!isDeleting && displayText === currentRole) {
      // Hold before deleting
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      // Move to next role
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      // Typing or deleting character
      const speed = isDeleting ? 40 : 80;
      timer = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/Shivin1016', icon: <FaGithub />, color: 'hover:text-purple-400 hover:border-purple-400/50' },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/shivani-p-959v1', icon: <FaLinkedin />, color: 'hover:text-[#00E5FF] hover:border-[#00E5FF]/50' },
    { name: 'LeetCode', href: 'https://leetcode.com/shivaniprajapati11jan', icon: <SiLeetcode />, color: 'hover:text-yellow-400 hover:border-yellow-400/50' },
    { name: 'GeeksforGeeks', href: 'https://geeksforgeeks.org/user/shivanipraj8nkk', icon: <SiGeeksforgeeks />, color: 'hover:text-emerald-400 hover:border-emerald-400/50' },
    { name: 'Email', href: 'mailto:shivaniprajapati10jan@gmail.com', icon: <FaEnvelope />, color: 'hover:text-[#FF4D9E] hover:border-[#FF4D9E]/50' },
  ];

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background Decorative Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-white/5 pointer-events-none animate-spin-slow opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-dashed border-[#00E5FF]/10 pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border border-[#00E5FF]/30 mb-6"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FFB3] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00FFB3]"></span>
              </span>
              <span className="text-xs font-mono tracking-wide text-slate-200">
                Available for Entry-Level SDE & Full-Stack Roles
              </span>
            </motion.div>

            {/* Greeting & Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-xl sm:text-2xl font-medium text-[#00E5FF] tracking-wide mb-2">
                Hello 👋 I'm
              </h2>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4">
                Shivani <span className="text-gradient">Prajapati</span>
              </h1>
            </motion.div>

            {/* Animated Typewriter Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-16 sm:h-20 flex items-center mb-6"
            >
              <span className="text-2xl sm:text-4xl font-bold font-space text-slate-200">
                A Passionate{' '}
                <span className="text-[#00E5FF] drop-shadow-[0_0_20px_rgba(0,229,255,0.6)]">
                  {displayText}
                </span>
                <span className="animate-pulse text-[#FF4D9E]">|</span>
              </span>
            </motion.div>

            {/* Bio Summary */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8 font-light"
            >
              B.Tech IT Graduate & Full Stack Engineer specializing in <span className="text-white font-medium">Java, Spring Boot, React, and Cloud Architectures</span>. Recognized open-source contributor (<span className="text-[#00FFB3] font-semibold">GSSoC'25 Rank 19</span>) with <span className="text-[#FFD166] font-semibold">800+ solved DSA problems</span>.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10"
            >
              {/* View Projects */}
              <a
                href="#projects"
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#6C63FF] via-[#00E5FF] to-[#00FFB3] text-black font-extrabold text-sm tracking-wide shadow-[0_0_30px_rgba(0,229,255,0.4)] hover:shadow-[0_0_45px_rgba(0,229,255,0.7)] hover:scale-105 transition-all text-center cursor-pointer"
                data-cursor="Projects"
              >
                View Projects 🚀
              </a>

              {/* Download Resume */}
              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl glass-panel border border-white/20 text-white font-semibold text-sm hover:border-[#00E5FF]/60 hover:bg-white/10 hover:scale-105 transition-all flex items-center justify-center gap-2 cursor-pointer"
                data-cursor="Download"
              >
                Download Resume 📄
              </button>

              {/* Hire Me */}
              <a
                href="#contact"
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl glass-panel border border-[#FF4D9E]/40 text-[#FF4D9E] font-semibold text-sm hover:bg-[#FF4D9E]/10 hover:border-[#FF4D9E] hover:scale-105 transition-all text-center cursor-pointer"
                data-cursor="Hire Me"
              >
                Hire Me ⚡
              </a>
            </motion.div>

            {/* Floating Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-3"
            >
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400 mr-2">
                Connect:
              </span>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-xl glass-panel flex items-center justify-center text-slate-300 border border-white/10 ${social.color} hover:scale-110 transition-all shadow-md`}
                  title={social.name}
                  data-cursor={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Hero Graphic Showcase */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-md aspect-square rounded-3xl p-1 bg-gradient-to-tr from-[#6C63FF] via-[#00E5FF] to-[#FF4D9E] shadow-[0_0_60px_rgba(108,99,255,0.4)]"
            >
              <div className="w-full h-full bg-[#080d26] rounded-[22px] p-6 flex flex-col justify-between overflow-hidden relative border border-white/10">
                
                {/* Code Window Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-xs font-mono text-slate-400">DeveloperProfile.java</span>
                </div>

                {/* Animated Simulated Code Snippet */}
                <div className="py-4 font-mono text-xs text-slate-300 leading-relaxed space-y-2 overflow-hidden">
                  <p><span className="text-[#FF4D9E]">public class</span> <span className="text-[#00E5FF]">ShivaniPrajapati</span> {'{'}</p>
                  <p className="pl-4"><span className="text-purple-400">String</span> role = <span className="text-emerald-300">"SDE / Full-Stack Engineer"</span>;</p>
                  <p className="pl-4"><span className="text-purple-400">String[]</span> coreTech = {'{'}<span className="text-emerald-300">"Java 21"</span>, <span className="text-emerald-300">"Spring Boot 3.3"</span>, <span className="text-emerald-300">"React 19"</span>{'}'};</p>
                  <p className="pl-4"><span className="text-purple-400">int</span> dsaProblemsSolved = <span className="text-yellow-400">800</span>;</p>
                  <p className="pl-4"><span className="text-purple-400">int</span> gssocRank = <span className="text-yellow-400">19</span>;</p>
                  <p className="pl-4"><span className="text-[#FF4D9E]">public void</span> <span className="text-[#00E5FF]">buildEnterpriseSystems</span>() {'{'}</p>
                  <p className="pl-8 text-slate-400">// CareerPulse ATS & Food Fiesta REST APIs</p>
                  <p className="pl-8 text-[#00FFB3]">System.out.println(<span className="text-emerald-300">"Code shipped successfully!"</span>);</p>
                  <p className="pl-4">{'}'}</p>
                  <p>{'}'}</p>
                </div>

                {/* Floating Glass Badges */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                    <FaGraduationCap className="text-2xl text-[#00E5FF]" />
                    <div>
                      <div className="text-xs font-bold text-white">B.Tech IT</div>
                      <div className="text-[10px] text-slate-400">AKTU • 8.2 CGPA</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                    <FaStar className="text-2xl text-[#FF4D9E]" />
                    <div>
                      <div className="text-xs font-bold text-white">GSSoC'25</div>
                      <div className="text-[10px] text-slate-400">Rank 19 • 83 PRs</div>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex justify-center">
          <a
            href="#skills"
            className="flex flex-col items-center gap-2 text-slate-400 hover:text-[#00E5FF] transition-colors group"
          >
            <span className="text-xs font-mono uppercase tracking-widest">Scroll Down</span>
            <div className="w-8 h-12 rounded-full border-2 border-white/20 p-1 flex justify-center group-hover:border-[#00E5FF]">
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-3 bg-[#00E5FF] rounded-full"
              />
            </div>
          </a>
        </div>

      </div>
    </section>
  );
}
