import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaJava, FaReact, FaGitAlt, FaGithub, FaDocker, FaAws, FaLinux,
  FaHtml5, FaCss3Alt, FaJs, FaBrain, FaPuzzlePiece, FaCube, FaServer, FaUnlock, FaCircleCheck, FaChevronLeft, FaChevronRight
} from 'react-icons/fa6';
import { SiSpringboot, SiHibernate, SiMysql, SiPostgresql, SiApachemaven, SiGradle } from 'react-icons/si';

gsap.registerPlugin(ScrollTrigger);

const skillsData = [
  { name: 'Java', icon: <FaJava />, level: 95, exp: '3+ Years', category: 'Backend', color: '#FFB703', desc: 'Core Java 21, Collections Framework, Multithreading & OOP Design' },
  { name: 'Spring Boot', icon: <SiSpringboot />, level: 90, exp: '2+ Years', category: 'Backend', color: '#00FFB3', desc: 'Spring Boot 3.3, Microservices Architecture, REST APIs & Security' },
  { name: 'Hibernate', icon: <SiHibernate />, level: 85, exp: '2+ Years', category: 'Backend', color: '#FF4D9E', desc: 'ORM Mapping, JPA Data Persistence & Transaction Management' },
  { name: 'MySQL', icon: <SiMysql />, level: 88, exp: '2.5 Years', category: 'Database', color: '#00E5FF', desc: 'Relational Database Schema Design, Indexing, Triggers & Complex Queries' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, level: 82, exp: '2 Years', category: 'Database', color: '#6C63FF', desc: 'Enterprise SQL Queries, Constraints, Joins & Performance Tuning' },
  { name: 'REST API', icon: <FaServer />, level: 92, exp: '2.5 Years', category: 'Backend', color: '#00FFB3', desc: 'Stateless API Design, Axios Interceptors, Swagger/OpenAPI 3.0 & JSON' },
  { name: 'HTML', icon: <FaHtml5 />, level: 95, exp: '3+ Years', category: 'Frontend', color: '#FF4D9E', desc: 'Semantic HTML5, Modern Web Standards & Accessibility' },
  { name: 'CSS', icon: <FaCss3Alt />, level: 90, exp: '3+ Years', category: 'Frontend', color: '#00E5FF', desc: 'Modern Flexbox, CSS Grid, Glassmorphism & Responsive Layouts' },
  { name: 'JavaScript', icon: <FaJs />, level: 88, exp: '2.5 Years', category: 'Frontend', color: '#FFB703', desc: 'ES6+ Modern JS, Async/Await, DOM Manipulation & Event Loop' },
  { name: 'React', icon: <FaReact />, level: 85, exp: '2 Years', category: 'Frontend', color: '#00E5FF', desc: 'React 19, Custom Hooks, Vite, State Management & Tailwind CSS' },
  { name: 'Git', icon: <FaGitAlt />, level: 92, exp: '3 Years', category: 'DevOps', color: '#FF4D9E', desc: 'Version Control, Feature Branching, Rebase & Interactive Conflict Resolution' },
  { name: 'GitHub', icon: <FaGithub />, level: 95, exp: '3 Years', category: 'DevOps', color: '#6C63FF', desc: 'Open Source Leadership (GSSoC Rank 19th, 83 PRs) & GitHub Actions' },
  { name: 'Docker', icon: <FaDocker />, level: 80, exp: '1.5 Years', category: 'DevOps', color: '#00E5FF', desc: 'Containerization, Multi-stage Dockerfiles & Microservices Orchestration' },
  { name: 'AWS', icon: <FaAws />, level: 78, exp: '1.5 Years', category: 'Cloud', color: '#FFB703', desc: 'Cloud Services (EC2, S3, RDS, IAM, Lambda, CloudWatch)' },
  { name: 'Linux', icon: <FaLinux />, level: 85, exp: '2 Years', category: 'DevOps', color: '#00FFB3', desc: 'Shell Scripting, Terminal Commands, Permissions & Server Administration' },
  { name: 'DSA', icon: <FaBrain />, level: 92, exp: '800+ Solved', category: 'Fundamentals', color: '#8A2BE2', desc: 'Trees, Graphs, Dynamic Programming, Heap & Algorithm Optimization' },
  { name: 'Problem Solving', icon: <FaPuzzlePiece />, level: 95, exp: '800+ Solved', category: 'Fundamentals', color: '#FF4D9E', desc: 'Analytical Problem Solving on LeetCode & GeeksforGeeks' },
  { name: 'OOP', icon: <FaCube />, level: 95, exp: '3+ Years', category: 'Fundamentals', color: '#6C63FF', desc: 'Encapsulation, Inheritance, Polymorphism, Abstraction & Design Patterns' },
  { name: 'Maven', icon: <SiApachemaven />, level: 88, exp: '2 Years', category: 'Tools', color: '#FFB703', desc: 'Java Dependency Management, POM Configurations & Build Lifecycle' },
  { name: 'Gradle', icon: <SiGradle />, level: 82, exp: '1.5 Years', category: 'Tools', color: '#00FFB3', desc: 'Build Automation, Groovy/Kotlin Scripts & Spring Boot Integration' },
];

export default function SkillsSection() {
  const triggerRef = useRef(null);
  const pinRef = useRef(null);
  const pillTrackRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const pinElement = pinRef.current;
    const triggerElement = triggerRef.current;

    if (!pinElement || !triggerElement) return;

    // Pinning ScrollTrigger
    const scrollLength = skillsData.length * 200;

    const st = ScrollTrigger.create({
      trigger: triggerElement,
      pin: pinElement,
      start: 'top top',
      end: `+=${scrollLength}`,
      scrub: 0.6,
      onUpdate: (self) => {
        const progress = self.progress;
        const index = Math.min(
          Math.floor(progress * skillsData.length),
          skillsData.length - 1
        );
        setActiveIndex(index);

        if (progress >= 0.98) {
          setIsCompleted(true);
        } else {
          setIsCompleted(false);
        }
      },
    });

    return () => {
      st.kill();
    };
  }, []);

  // Scroll active skill pill into view on horizontal track
  useEffect(() => {
    if (pillTrackRef.current) {
      const activePill = pillTrackRef.current.children[activeIndex];
      if (activePill) {
        activePill.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center',
        });
      }
    }
  }, [activeIndex]);

  const currentSkill = skillsData[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => Math.min(skillsData.length - 1, prev + 1));
  };

  return (
    <section id="skills" ref={triggerRef} className="relative w-full">
      {/* Pinned Viewport Container */}
      <div
        ref={pinRef}
        className="h-screen w-full flex flex-col justify-between py-8 sm:py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#050816]/95 backdrop-blur-xl"
      >
        {/* Dynamic Glowing Spotlight behind active showcase card */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] sm:w-[700px] sm:h-[700px] rounded-full blur-[150px] opacity-30 pointer-events-none transition-colors duration-700"
          style={{ backgroundColor: currentSkill.color }}
        />

        {/* Header */}
        <div className="z-10 max-w-4xl mx-auto w-full text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#00FFB3] animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-slate-300 uppercase">
              Interactive Storytelling Experience
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Technical <span className="text-gradient">Skills & Expertise</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 font-light">
            Scroll down to sequentially reveal each core technology in Shivani's engineering stack.
          </p>
        </div>

        {/* Unified Central Showcase Container */}
        <div className="z-10 max-w-3xl w-full mx-auto my-auto flex flex-col gap-5">
          
          {/* Horizontal Active Skill Badge Tracker */}
          <div
            ref={pillTrackRef}
            className="flex items-center gap-2 overflow-x-auto py-2 px-2 no-scrollbar scroll-smooth glass-panel rounded-2xl border border-white/10"
          >
            {skillsData.map((skill, index) => {
              const isActive = index === activeIndex;
              const isPassed = index < activeIndex;

              return (
                <button
                  key={skill.name}
                  onClick={() => setActiveIndex(index)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-white/20 to-white/10 text-white border-2 scale-105 shadow-lg'
                      : isPassed
                      ? 'bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10'
                      : 'bg-white/5 text-slate-500 border border-transparent hover:text-slate-300'
                  }`}
                  style={{
                    borderColor: isActive ? skill.color : isPassed ? 'rgba(255,255,255,0.1)' : 'transparent',
                    boxShadow: isActive ? `0 0 15px ${skill.color}50` : 'none',
                  }}
                >
                  <span style={{ color: isActive ? skill.color : 'inherit' }}>
                    {skill.icon}
                  </span>
                  <span>{skill.name}</span>
                  {isPassed && <FaCircleCheck className="text-[10px] text-[#00FFB3]" />}
                </button>
              );
            })}
          </div>

          {/* Main Showcase Spotlight Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSkill.name}
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/20 relative overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.7)] bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-2xl"
              style={{
                boxShadow: `0 0 50px ${currentSkill.color}20`,
              }}
            >
              {/* Card Header Metadata */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <span
                    className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-white/10 border border-white/10"
                    style={{ color: currentSkill.color }}
                  >
                    {currentSkill.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                    Step {activeIndex + 1} of {skillsData.length}
                  </span>
                </div>

                <span className="text-xs font-mono font-bold text-slate-300 bg-white/10 px-3.5 py-1 rounded-full border border-white/10">
                  Exp: {currentSkill.exp}
                </span>
              </div>

              {/* Skill Icon & Title */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 mb-8">
                <div
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl flex items-center justify-center text-5xl p-2 bg-white/5 border border-white/15 shadow-2xl shrink-0"
                  style={{
                    color: currentSkill.color,
                    boxShadow: `0 0 35px ${currentSkill.color}35`,
                  }}
                >
                  {currentSkill.icon}
                </div>

                <div className="space-y-2">
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {currentSkill.name}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-light">
                    {currentSkill.desc}
                  </p>
                </div>
              </div>

              {/* Animated Mastery Progress Bar */}
              <div className="space-y-2.5 mb-6">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-slate-400">Mastery Level</span>
                  <span className="font-extrabold text-sm" style={{ color: currentSkill.color }}>
                    {currentSkill.level}%
                  </span>
                </div>
                <div className="w-full h-3.5 rounded-full bg-white/10 overflow-hidden p-[2px] border border-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${currentSkill.level}%` }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="h-full rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${currentSkill.color}99, ${currentSkill.color})`,
                      boxShadow: `0 0 20px ${currentSkill.color}`,
                    }}
                  />
                </div>
              </div>

              {/* Footer Status Badges */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>Production Ready & Tested</span>
                <span className="flex items-center gap-2 text-[#00FFB3] font-semibold">
                  <FaCircleCheck /> Verified Expertise
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>

        {/* Footer Progress & Quick Controls */}
        <div className="z-10 max-w-4xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-white/10">
          
          {/* Quick Step Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              disabled={activeIndex === 0}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 disabled:opacity-30 cursor-pointer transition-colors"
              title="Previous Skill"
            >
              <FaChevronLeft className="text-xs" />
            </button>
            <button
              onClick={handleNext}
              disabled={activeIndex === skillsData.length - 1}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 disabled:opacity-30 cursor-pointer transition-colors"
              title="Next Skill"
            >
              <FaChevronRight className="text-xs" />
            </button>

            <span className="text-xs font-mono text-slate-400 ml-2">
              Overall Progress: {Math.round(((activeIndex + 1) / skillsData.length) * 100)}%
            </span>
          </div>

          {/* Global Progress Bar */}
          <div className="w-full sm:w-48 h-2 rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#6C63FF] via-[#00E5FF] to-[#00FFB3] transition-all duration-300"
              style={{ width: `${((activeIndex + 1) / skillsData.length) * 100}%` }}
            />
          </div>

          {/* Scroll Release Notice / Skip */}
          <div>
            {isCompleted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="px-4 py-1 rounded-full bg-[#00FFB3]/20 border border-[#00FFB3]/50 text-[#00FFB3] text-xs font-bold flex items-center gap-2"
              >
                <FaCircleCheck /> Scroll Unlocked! Continue to Projects
              </motion.div>
            ) : (
              <a
                href="#projects"
                className="px-4 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 text-xs font-mono flex items-center gap-2 transition-all"
              >
                <FaUnlock className="text-[#00E5FF]" /> Skip to Projects
              </a>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
