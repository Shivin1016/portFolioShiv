import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaCode, FaGithub, FaAward, FaArrowUpRightFromSquare, FaGlobe, FaLaptopCode } from 'react-icons/fa6';
import { SiLeetcode, SiGeeksforgeeks, SiHackerrank, SiIeee } from 'react-icons/si';

const achievements = [
  {
    title: 'GSSoC’25 Rank 19th',
    subtitle: 'GirlScript Summer of Code',
    metric: 'Rank 19',
    detail: '83 Merged PRs • Official LOR & Certificate Awarded',
    icon: <FaTrophy className="text-[#FFB703]" />,
    gradient: 'from-[#FFB703] to-[#FF4D9E]',
    links: [
      { label: 'View Certificate 📜', href: 'https://drive.google.com/file/d/1k9PfiFVG9dXkCWR5X2D-l0pIEZe-2-6F/view?usp=drive_link' },
      { label: 'View LOR 📄', href: 'https://drive.google.com/file/d/1MJqSOx6Z38elf-ZHfaoOnU7Zwz2IZSt2/view?usp=drive_link' }
    ]
  },
  {
    title: 'Coding Contest 2nd Position',
    subtitle: 'Competitive Programming',
    metric: '2nd Place 🥈',
    detail: 'Secured 2nd Position in Algorithmic Coding Championship',
    icon: <FaMedal className="text-[#00FFB3]" />,
    gradient: 'from-[#00FFB3] to-[#00E5FF]',
    links: [
      { label: 'View Certificate 📜', href: 'https://drive.google.com/file/d/1r3yX0cOVL-GAAXP9UHD7Vvv517OKZTa4/view?usp=drive_link' }
    ]
  },
  {
    title: 'Hacktoberfest Contributor',
    subtitle: 'Global Open Source Event',
    metric: 'Holopin Badges 🏅',
    detail: 'Super Contributor in Hacktoberfest & Open Source Ecosystem',
    icon: <FaGithub className="text-[#FF4D9E]" />,
    gradient: 'from-[#FF4D9E] to-[#8A2BE2]',
    links: [
      { label: 'View Holopin Badges 🏅', href: 'https://www.holopin.io/@its_shivin#badges' }
    ]
  },
  {
    title: 'Build with Framework Hackathon',
    subtitle: 'Hackathon Contributor & Developer',
    metric: 'Hackathon 🚀',
    detail: 'Participated & Built Production Web App in Build with Framework Hackathon',
    icon: <FaLaptopCode className="text-[#FF4D9E]" />,
    gradient: 'from-[#FF4D9E] to-[#FFB703]',
    links: [
      { label: 'View Certificate 📜', href: 'https://drive.google.com/file/d/1Uo4fHS9IFDTBMLinVS02v04LVQb71u4M/view?usp=drive_link' }
    ]
  },
  {
    title: 'IEEE Open Source Week',
    subtitle: 'IEEE Open Source Initiative',
    metric: 'IEEE Contributor',
    detail: 'Active Contribution & Certificate of Completion in IEEE Open Source Week',
    icon: <FaAward className="text-[#00E5FF]" />,
    gradient: 'from-[#00E5FF] to-[#6C63FF]',
    links: [
      { label: 'View Certificate 📜', href: 'https://drive.google.com/file/d/10WlFfGNx1DtYYGq3lvLZrDHDv93YGO1G/view?usp=drive_link' }
    ]
  },
  {
    title: '800+ Solved DSA Problems',
    subtitle: 'LeetCode & GeeksforGeeks',
    metric: '800+',
    detail: 'Data Structures & Algorithms Expertise',
    icon: <FaCode className="text-[#FFD166]" />,
    gradient: 'from-[#FFD166] to-[#00FFB3]'
  },
  {
    title: 'Accenture Tech Apprenticeship',
    subtitle: 'Software Engineering Simulation',
    metric: 'Certified',
    detail: 'Architecture, Cloud & Agile Delivery',
    icon: <FaMedal className="text-[#00FFB3]" />,
    gradient: 'from-[#00FFB3] to-[#8A2BE2]'
  }
];

const codingProfiles = [
  {
    name: 'LeetCode',
    handle: 'shivaniprajapati11jan',
    href: 'https://leetcode.com/shivaniprajapati11jan',
    icon: <SiLeetcode className="text-yellow-400" />,
    badge: '800+ Solved'
  },
  {
    name: 'GeeksforGeeks',
    handle: 'shivanipraj8nkk',
    href: 'https://geeksforgeeks.org/user/shivanipraj8nkk',
    icon: <SiGeeksforgeeks className="text-emerald-400" />,
    badge: 'Ranked Solver'
  },
  {
    name: 'HackerRank',
    handle: 'shivaniprajapa12',
    href: 'https://hackerrank.com/shivaniprajapa12',
    icon: <SiHackerrank className="text-[#00E5FF]" />,
    badge: 'Problem Solving'
  },
  {
    name: 'GitHub',
    handle: 'Shivin1016',
    href: 'https://github.com/Shivin1016',
    icon: <FaGithub className="text-purple-400" />,
    badge: '83+ Merged PRs'
  }
];

export default function AchievementsSection() {
  return (
    <section className="py-24 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
          <FaTrophy className="text-[#FFB703]" />
          <span className="text-xs font-mono tracking-widest text-slate-300 uppercase">
            Recognitions & Coding Profiles
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Key <span className="text-gradient">Achievements</span>
        </h2>
        <p className="text-sm text-slate-400 mt-2 font-light">
          Competitive programming milestones, open source rankings, hackathons, and verified certificates.
        </p>
      </div>

      {/* Achievement Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {achievements.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="glass-card rounded-3xl p-6 border border-white/10 relative overflow-hidden flex flex-col justify-between group"
          >
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient}`} />

            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl">
                  {item.icon}
                </div>
                <span className="text-xs font-bold font-space text-white px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  {item.metric}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white group-hover:text-[#00E5FF] transition-colors mb-1">
                {item.title}
              </h3>
              <p className="text-xs text-[#00FFB3] font-medium mb-3">
                {item.subtitle}
              </p>
              <p className="text-[11px] text-slate-300 font-mono leading-relaxed mb-4">
                {item.detail}
              </p>
            </div>

            {/* Action Certificate / Badge Links if available */}
            {item.links && (
              <div className="pt-3 border-t border-white/10 flex flex-wrap gap-2">
                {item.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-mono px-3 py-1.5 rounded-xl bg-white/10 hover:bg-[#00E5FF]/20 hover:border-[#00E5FF]/50 border border-white/10 text-white font-semibold flex items-center gap-1.5 transition-all"
                  >
                    <span>{link.label}</span>
                    <FaArrowUpRightFromSquare className="text-[8px] opacity-70" />
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Coding Profiles Bar */}
      <div className="glass-panel rounded-3xl p-8 border border-white/10">
        <h3 className="text-lg font-bold text-white font-space mb-6 text-center">
          Verified Coding Profiles & Platforms
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {codingProfiles.map((profile) => (
            <a
              key={profile.name}
              href={profile.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#00E5FF]/50 hover:bg-white/10 transition-all flex items-center justify-between group"
              data-cursor={profile.name}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{profile.icon}</span>
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-[#00E5FF] transition-colors flex items-center gap-1">
                    {profile.name} <FaArrowUpRightFromSquare className="text-[9px] opacity-70" />
                  </div>
                  <div className="text-[10px] font-mono text-slate-400">
                    @{profile.handle}
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-mono text-[#00FFB3] bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                {profile.badge}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
