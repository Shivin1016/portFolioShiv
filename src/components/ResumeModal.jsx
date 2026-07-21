import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaXmark as FaXmarkIcon, FaDownload as FaDownloadIcon, FaPrint as FaPrintIcon, FaEnvelope as FaEnvelopeIcon, FaPhone as FaPhoneIcon, FaLinkedin as FaLinkedinIcon, FaGithub as FaGithubIcon, FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { SiLeetcode, SiGeeksforgeeks, SiHackerrank } from 'react-icons/si';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div
        data-lenis-prevent
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-lg overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          data-lenis-prevent
          className="glass-panel max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-10 border border-white/20 relative shadow-[0_30px_70px_rgba(0,0,0,0.95)] bg-[#050816] text-slate-100"
        >
          {/* Header Controls */}
          <div className="sticky top-0 z-20 flex items-center justify-between pb-4 mb-6 border-b border-white/10 bg-[#050816]/95 backdrop-blur-md">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#00FFB3]" />
              <span className="text-xs font-mono tracking-wider text-slate-300 uppercase">
                Official Curriculum Vitae
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrint}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer"
              >
                <FaPrintIcon /> Print / Save PDF
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              >
                <FaXmarkIcon className="text-lg" />
              </button>
            </div>
          </div>

          {/* Resume Printable Sheet */}
          <div className="space-y-8 print:text-black print:bg-white font-outfit text-sm">
            
            {/* Header / Contact Banner */}
            <div className="flex flex-col sm:flex-row items-center justify-between pb-6 border-b border-white/10 gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-space">
                  SHIVANI PRAJAPATI
                </h1>
                <p className="text-xs sm:text-sm font-semibold text-[#00E5FF] tracking-wide">
                  Aspiring Software Developer | IT Fresher
                </p>
                
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs text-slate-300 pt-2 font-mono">
                  <a href="tel:+919120222324" className="flex items-center gap-1.5 hover:text-[#00E5FF]">
                    <FaPhoneIcon className="text-[#00E5FF]" /> +91 9120222324
                  </a>
                  <span>•</span>
                  <a href="mailto:shivaniprajapati10jan@gmail.com" className="flex items-center gap-1.5 hover:text-[#00E5FF]">
                    <FaEnvelopeIcon className="text-[#FF4D9E]" /> shivaniprajapati10jan@gmail.com
                  </a>
                  <span>•</span>
                  <a href="https://linkedin.com/in/shivani-p-959v1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[#00E5FF]">
                    <FaLinkedinIcon className="text-[#00E5FF]" /> linkedin.com/in/shivani-p-959v1
                  </a>
                  <span>•</span>
                  <a href="https://github.com/Shivin1016" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[#00E5FF]">
                    <FaGithubIcon className="text-purple-400" /> github.com/Shivin1016
                  </a>
                </div>
              </div>

              {/* Profile Image Preview */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border border-white/20 shrink-0 shadow-lg">
                <img src="/shivani_profile.jpg" alt="Shivani Prajapati" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Professional Summary */}
            <div>
              <h2 className="text-sm font-bold font-mono text-[#00E5FF] uppercase tracking-wider mb-2 pb-1 border-b border-white/10">
                Summary
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                B.Tech (Information Technology) graduate and full-stack developer with hands-on experience designing and shipping production-style applications in Java, Spring Boot, React, and Node.js. Skilled at building secure REST APIs, cloud-deployed systems on AWS, and AI-integrated platforms, backed by 800+ solved DSA problems, Coding Contest 2nd Position, Hacktoberfest Holopin Badges, and recognized open-source contributions (Rank 19, GSSoC'25, 83 PRs merged). Strong problem-solver who enjoys mentoring peers and thrives in collaborative engineering teams, seeking an entry-level Software Development Engineer role.
              </p>
            </div>

            {/* Technical Skills */}
            <div>
              <h2 className="text-sm font-bold font-mono text-[#00E5FF] uppercase tracking-wider mb-3 pb-1 border-b border-white/10">
                Technical Skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div><span className="font-bold text-white">Languages:</span> <span className="text-slate-300">Java, Python, SQL, JavaScript, C++</span></div>
                <div><span className="font-bold text-white">Backend:</span> <span className="text-slate-300">Spring Boot, Spring Framework, RESTful APIs, Node.js, Express.js, Django</span></div>
                <div><span className="font-bold text-white">Security & Cryptography:</span> <span className="text-slate-300">AES (Advanced Encryption Standard), Cryptography</span></div>
                <div><span className="font-bold text-white">Cloud & DevOps:</span> <span className="text-slate-300">AWS (EC2, S3, RDS, IAM, Lambda, CloudWatch), Docker, CI/CD Pipelines</span></div>
                <div><span className="font-bold text-white">Databases:</span> <span className="text-slate-300">MySQL, MongoDB, PostgreSQL, NoSQL Databases</span></div>
                <div><span className="font-bold text-white">Frontend:</span> <span className="text-slate-300">React, Tailwind CSS, GSAP</span></div>
                <div><span className="font-bold text-white">CS Fundamentals:</span> <span className="text-slate-300">Data Structures & Algorithms, OOP</span></div>
                <div><span className="font-bold text-white">Tools & Build Systems:</span> <span className="text-slate-300">Git, GitHub, Postman, VS Code, Maven, Gradle, Linux</span></div>
              </div>
            </div>

            {/* Projects */}
            <div>
              <h2 className="text-sm font-bold font-mono text-[#00E5FF] uppercase tracking-wider mb-4 pb-1 border-b border-white/10">
                Projects
              </h2>

              <div className="space-y-4">
                {/* Food Fiesta */}
                <div>
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-sm font-bold text-white">
                      Food Fiesta — Full-Stack Food Ordering & Restaurant Management System
                    </h3>
                    <a
                      href="https://github.com/Shivin1016/SpringBoot-Project"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-[#00E5FF] hover:underline flex items-center gap-1"
                    >
                      <FaGithubIcon /> GitHub
                    </a>
                  </div>
                  <p className="text-[11px] font-mono text-slate-400 italic mb-1.5">
                    Java 21, Spring Boot, Spring Security, Spring Data JPA, PostgreSQL, Thymeleaf, Swagger OpenAPI
                  </p>
                  <ul className="list-disc list-inside text-xs text-slate-300 space-y-1 font-light">
                    <li>Developed a full-stack food ordering and restaurant management system using Java 21 and the Spring Boot ecosystem.</li>
                    <li>Built secure user authentication and OAuth2 integration using Spring Security, with structured CRUD back-office controls for admins to manage users, orders, and products.</li>
                    <li>Managed data persistence with Spring Data JPA and PostgreSQL, rendered dynamic responsive frontend templates with Thymeleaf, and documented endpoints via Swagger OpenAPI.</li>
                  </ul>
                </div>

                {/* AES Tool */}
                <div>
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-sm font-bold text-[#00E5FF]">
                      AES Cryptography Tool
                    </h3>
                    <a
                      href="https://github.com/Shivin1016/AES-Cryptographic-Tool"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-[#00E5FF] hover:underline flex items-center gap-1"
                    >
                      <FaGithubIcon /> GitHub
                    </a>
                  </div>
                  <p className="text-[11px] font-mono text-slate-400 italic mb-1.5">
                    Python 3, AES (Advanced Encryption Standard), Cryptography, File Encryption & Decryption, Symmetric Key Encryption
                  </p>
                  <ul className="list-disc list-inside text-xs text-slate-300 space-y-1 font-light">
                    <li>Developed a secure cryptographic application implementing the Advanced Encryption Standard (AES) algorithm for file and text encryption/decryption.</li>
                    <li>Built functionality to encrypt sensitive data using user-provided secret keys while ensuring confidentiality and data integrity.</li>
                    <li>Designed an intuitive interface for encrypting and decrypting files with minimal user interaction.</li>
                    <li>Implemented secure key-based encryption workflows and exception handling for invalid inputs and file operations.</li>
                  </ul>
                </div>

                {/* CareerPulse */}
                <div>
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-sm font-bold text-white">
                      CareerPulse — Full-Stack Job Portal Applicant Tracking System (ATS)
                    </h3>
                    <a
                      href="https://github.com/Shivin1016/CareerPulse_SpringBoot_project"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-[#00E5FF] hover:underline flex items-center gap-1"
                    >
                      <FaGithubIcon /> GitHub
                    </a>
                  </div>
                  <p className="text-[11px] font-mono text-slate-400 italic mb-1.5">
                    Java 21, Spring Boot 3.3, Spring Security, JWT, React 19, Vite, Tailwind CSS v4, TanStack Query v5, REST APIs, JPA / Hibernate, MySQL / H2, Maven
                  </p>
                  <ul className="list-disc list-inside text-xs text-slate-300 space-y-1 font-light">
                    <li>Architected an enterprise-grade job discovery and applicant tracking platform using Spring Boot 3.3 and React 19, serving 3 distinct user roles (Job Seeker, Recruiter, and Administrator) with role-based access control.</li>
                    <li>Stateless JWT Security Authorization: Implemented stateless JWT authentication with Spring Security method-level authorization, securing 15+ REST endpoints and managing session tokens via Axios interceptors.</li>
                    <li>Candidate Hiring Pipeline: Built a real-time recruiter command center featuring candidate application pipeline management (PENDING, REVIEWING, SHORTLISTED, ACCEPTED, REJECTED) and interactive recruitment analytics with Recharts.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Achievements & Verified Credentials */}
            <div>
              <h2 className="text-sm font-bold font-mono text-[#00E5FF] uppercase tracking-wider mb-2 pb-1 border-b border-white/10">
                Achievements & Verified Credentials
              </h2>
              <ul className="list-disc list-inside text-xs text-slate-300 space-y-1.5 font-light">
                <li>
                  <span className="font-bold text-[#FF4D9E]">Hacktoberfest Contributor:</span> Earned Official Holopin Badges —{' '}
                  <a href="https://www.holopin.io/@its_shivin#badges" target="_blank" rel="noopener noreferrer" className="text-[#00E5FF] hover:underline font-mono">
                    View Holopin Badges 🏅
                  </a>
                </li>
                <li>
                  <span className="font-bold text-white">Build with Framework Hackathon:</span> Awarded Certificate of Participation —{' '}
                  <a href="https://drive.google.com/file/d/1Uo4fHS9IFDTBMLinVS02v04LVQb71u4M/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="text-[#00E5FF] hover:underline font-mono">
                    View Hackathon Certificate 📜
                  </a>
                </li>
                <li>
                  <span className="font-bold text-white">Coding Contest 2nd Position:</span> Secured 2nd Place in Algorithmic Coding Championship —{' '}
                  <a href="https://drive.google.com/file/d/1r3yX0cOVL-GAAXP9UHD7Vvv517OKZTa4/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="text-[#00E5FF] hover:underline font-mono">
                    View Certificate 📜
                  </a>
                </li>
                <li>
                  <span className="font-bold text-white">IEEE Open Source Week:</span> Awarded Certificate of Completion —{' '}
                  <a href="https://drive.google.com/file/d/10WlFfGNx1DtYYGq3lvLZrDHDv93YGO1G/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="text-[#00E5FF] hover:underline font-mono">
                    View IEEE Certificate 📜
                  </a>
                </li>
                <li>
                  <span className="font-bold text-white">GirlScript Summer of Code (GSSoC'25):</span> Ranked 19th Nationwide with 83 PRs merged —{' '}
                  <a href="https://drive.google.com/file/d/1k9PfiFVG9dXkCWR5X2D-l0pIEZe-2-6F/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="text-[#00E5FF] hover:underline font-mono mr-2">
                    View Certificate 📜
                  </a>
                  |
                  <a href="https://drive.google.com/file/d/1MJqSOx6Z38elf-ZHfaoOnU7Zwz2IZSt2/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="text-[#00E5FF] hover:underline font-mono ml-2">
                    View Letter of Recommendation (LOR) 📄
                  </a>
                </li>
                <li>Solved 800+ DSA problems across LeetCode and GeeksforGeeks.</li>
                <li>Completed the Accenture UK Technology Apprenticeship (Forage), July 2025.</li>
              </ul>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-sm font-bold font-mono text-[#00E5FF] uppercase tracking-wider mb-3 pb-1 border-b border-white/10">
                Education
              </h2>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between items-baseline">
                  <div>
                    <span className="font-bold text-white">Dr. A. P. J. Abdul Kalam Technical University, Lucknow</span>
                    <div className="text-slate-300 italic">B.Tech in Information Technology — CGPA: 8.2</div>
                  </div>
                  <div className="text-right font-mono text-slate-400">
                    <div>2022 – 2026</div>
                    <div>Kanpur, India</div>
                  </div>
                </div>

                <div className="flex justify-between items-baseline pt-1">
                  <div>
                    <span className="font-bold text-white">Jawahar Navodaya Vidyalaya</span>
                    <div className="text-slate-300 italic">Intermediate — 84%</div>
                  </div>
                  <div className="text-right font-mono text-slate-400">
                    <div>2020 – 2021</div>
                    <div>Anugi, Kannauj, India</div>
                  </div>
                </div>

                <div className="flex justify-between items-baseline pt-1">
                  <div>
                    <span className="font-bold text-white">Jawahar Navodaya Vidyalaya</span>
                    <div className="text-slate-300 italic">High School — 88%</div>
                  </div>
                  <div className="text-right font-mono text-slate-400">
                    <div>2018 – 2019</div>
                    <div>Anugi, Kannauj, India</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Coding Profiles & Mentoring */}
            <div>
              <h2 className="text-sm font-bold font-mono text-[#00E5FF] uppercase tracking-wider mb-2 pb-1 border-b border-white/10">
                Coding Profiles & Leadership
              </h2>
              <div className="text-xs text-slate-300 space-y-1 font-mono">
                <p><span className="font-bold text-white font-sans">LeetCode:</span> leetcode.com/shivaniprajapati11jan | <span className="font-bold text-white font-sans">GeeksforGeeks:</span> geeksforgeeks.org/user/shivanipraj8nkk</p>
                <p><span className="font-bold text-white font-sans">Leadership & Mentoring:</span> Guided fellow students in Java, DSA, DBMS, and Web Development; conducted collaborative coding and problem-solving workshops.</p>
              </div>
            </div>

          </div>

          {/* Modal Footer */}
          <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
            <span>Official Curriculum Vitae</span>
            <button
              onClick={handlePrint}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#6C63FF] to-[#00E5FF] text-white font-bold flex items-center gap-2 cursor-pointer shadow-lg hover:scale-105 transition-transform"
            >
              <FaDownloadIcon /> Download PDF
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
