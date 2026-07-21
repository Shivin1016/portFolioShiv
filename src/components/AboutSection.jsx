import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaLaptopCode, FaCheck, FaHeart, FaTrophy } from 'react-icons/fa6';

export default function AboutSection() {
  const stats = [
    { label: 'DSA Problems Solved', value: '800+', note: 'LeetCode & GFG', color: 'text-[#FFD166]' },
    { label: 'GSSoC Rank', value: '19th', note: '83 PRs Merged', color: 'text-[#00FFB3]' },
    { label: 'Tech Stack Skills', value: '20+', note: 'Java, Spring Boot, React', color: 'text-[#00E5FF]' },
    { label: 'Enterprise Projects', value: '3+', note: 'Full-Stack Systems', color: 'text-[#FF4D9E]' },
  ];

  return (
    <section id="about" className="py-24 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Real Profile Photo Visual with Animated Ring */}
        <div className="lg:col-span-5 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-72 h-80 sm:w-80 sm:h-96"
          >
            {/* Outer Rotating Glowing Border */}
            <div className="absolute inset-0 rounded-3xl border-2 border-dashed border-[#00E5FF]/40 animate-spin-slow" />
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#6C63FF] via-[#00E5FF] to-[#FF4D9E] opacity-25 blur-xl animate-pulse-slow" />

            {/* Inner Glass Frame containing Shivani's Photo */}
            <div className="w-full h-full rounded-3xl glass-panel p-2.5 border border-white/20 relative flex items-center justify-center shadow-[0_0_50px_rgba(0,229,255,0.3)] bg-[#050816]">
              <div className="w-full h-full rounded-2xl relative overflow-hidden group border border-white/10">
                
                <img
                  src="/shivani_profile.jpg"
                  alt="Shivani Prajapati"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />

                {/* Glass Badge Overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-[#050816] via-[#050816]/80 to-transparent backdrop-blur-sm flex flex-col items-center text-center">
                  <h3 className="text-lg font-bold text-white font-space">
                    Shivani Prajapati
                  </h3>
                  <p className="text-xs text-[#00FFB3] font-mono">
                    Software Developer • IT Fresher
                  </p>
                  <p className="text-[10px] text-slate-300 font-mono mt-0.5 uppercase tracking-widest">
                    Kanpur / Lucknow, India
                  </p>
                </div>

                {/* Floating Badges */}
                <div className="absolute top-3 left-3 p-2 rounded-xl bg-black/60 border border-white/20 backdrop-blur-md text-[#00E5FF] text-xs animate-float">
                  <FaCode />
                </div>
                <div className="absolute top-3 right-3 p-2 rounded-xl bg-black/60 border border-white/20 backdrop-blur-md text-[#FFB703] text-xs animate-pulse">
                  <FaTrophy />
                </div>

              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Bio & Core Statistics */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
              <FaGraduationCap className="text-[#00E5FF]" />
              <span className="text-xs font-mono tracking-widest text-slate-300 uppercase">
                About Me & Background
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
              Engineering with <span className="text-gradient">Precision & Passion</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light mb-4">
              I am a <span className="text-white font-medium">B.Tech Information Technology</span> graduate with hands-on experience architecting and shipping production-style full-stack systems using <span className="text-[#00E5FF]">Java 21, Spring Boot, React, PostgreSQL, and AWS</span>.
            </p>

            <p className="text-sm text-slate-300 leading-relaxed font-light mb-8">
              Recognized as a top open-source contributor (<span className="text-[#00FFB3] font-semibold">Rank 19, GSSoC'25</span> with 83 merged PRs), <span className="text-[#00E5FF] font-semibold">IEEE Open Source Week Contributor</span>, and <span className="text-[#FFB703] font-semibold">2nd Position Coding Contest Winner</span>, backed by over <span className="text-[#FFD166] font-semibold">800+ solved Data Structures & Algorithms problems</span>. I actively mentor peers in Java, DBMS, and Web Development.
            </p>

            {/* Live Statistics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="glass-card rounded-2xl p-4 border border-white/10 text-center hover:border-[#00E5FF]/40 transition-colors"
                >
                  <div className={`text-2xl sm:text-3xl font-extrabold font-space ${stat.color} mb-1`}>
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-white mb-0.5">
                    {stat.label}
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono">
                    {stat.note}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Mentoring Bulletins */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#00FFB3]/10 border border-[#00FFB3]/30 flex items-center justify-center text-[#00FFB3]">
                  <FaHeart />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Peer Mentorship & Leadership</div>
                  <div className="text-[11px] text-slate-400">Guided 50+ students in Java, DSA, DBMS & Full Stack concepts.</div>
                </div>
              </div>
              <a
                href="#contact"
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#6C63FF] to-[#00E5FF] text-white text-xs font-bold shrink-0 hover:scale-105 transition-transform"
              >
                Let's Connect
              </a>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
