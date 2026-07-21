import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaAward, FaTrophy, FaUserGroup, FaCalendarDays, FaLocationDot, FaArrowUpRightFromSquare, FaLaptopCode, FaGithub } from 'react-icons/fa6';

const timelineEvents = [
  {
    id: 'aktu',
    title: 'Dr. A. P. J. Abdul Kalam Technical University (AKTU)',
    subtitle: 'B.Tech in Information Technology • CGPA: 8.2',
    date: '2022 – 2026',
    location: 'Kanpur, Uttar Pradesh, India',
    category: 'Education',
    icon: <FaGraduationCap className="text-[#00E5FF]" />,
    description: 'Pursuing Bachelor of Technology in Information Technology. Core coursework in Data Structures, OOPs, Operating Systems, Computer Networks, DBMS, and Software Engineering.'
  },
  {
    id: 'gssoc',
    title: 'GirlScript Summer of Code (GSSoC’25)',
    subtitle: 'Rank 19th Nationwide • 83 PRs Merged',
    date: '2025',
    location: 'Remote, India',
    category: 'Achievements',
    icon: <FaTrophy className="text-[#FFB703]" />,
    description: 'Recognized open-source contributor ranked 19th overall among thousands of participants. Merged 83 pull requests across production frontend & backend repos. Awarded Letter of Recommendation (LOR) & Certificate.',
    links: [
      { label: 'View Certificate 📜', href: 'https://drive.google.com/file/d/1k9PfiFVG9dXkCWR5X2D-l0pIEZe-2-6F/view?usp=drive_link' },
      { label: 'View LOR 📄', href: 'https://drive.google.com/file/d/1MJqSOx6Z38elf-ZHfaoOnU7Zwz2IZSt2/view?usp=drive_link' }
    ]
  },
  {
    id: 'coding-contest',
    title: 'Coding Contest — 2nd Position',
    subtitle: 'Competitive Programming Excellence',
    date: '2025',
    location: 'Campus / Virtual Contest',
    category: 'Achievements',
    icon: <FaTrophy className="text-[#00FFB3]" />,
    description: 'Secured 2nd Position (Runner-Up) in competitive coding championship, solving complex algorithmic & data structure problems under timed constraints.',
    links: [
      { label: 'View Certificate 📜', href: 'https://drive.google.com/file/d/1r3yX0cOVL-GAAXP9UHD7Vvv517OKZTa4/view?usp=drive_link' }
    ]
  },
  {
    id: 'hacktoberfest',
    title: 'Hacktoberfest & Winter of Code Social',
    subtitle: 'Open Source Contributor & Holopin Badges',
    date: '2025',
    location: 'Global Open Source',
    category: 'Achievements',
    icon: <FaGithub className="text-[#FF4D9E]" />,
    description: 'Contributed to open source web applications and developer tooling during Hacktoberfest. Earned official Holopin open source achievement badges.',
    links: [
      { label: 'View Holopin Badges 🏅', href: 'https://www.holopin.io/@its_shivin#badges' }
    ]
  },
  {
    id: 'build-framework-hackathon',
    title: 'Build with Framework Hackathon',
    subtitle: 'Hackathon Contributor & Full-Stack Developer',
    date: '2025',
    location: 'Virtual Hackathon',
    category: 'Achievements',
    icon: <FaLaptopCode className="text-[#FF4D9E]" />,
    description: 'Participated and successfully shipped application features in Build with Framework Hackathon. Awarded official Certificate of Participation.',
    links: [
      { label: 'View Certificate 📜', href: 'https://drive.google.com/file/d/1Uo4fHS9IFDTBMLinVS02v04LVQb71u4M/view?usp=drive_link' }
    ]
  },
  {
    id: 'ieee-osw',
    title: 'IEEE Open Source Week',
    subtitle: 'IEEE Open Source Initiative Contributor',
    date: '2025',
    location: 'IEEE Community',
    category: 'Certificates',
    icon: <FaAward className="text-[#00E5FF]" />,
    description: 'Participated and contributed to open source repositories during IEEE Open Source Week initiative. Awarded official Certificate of Completion.',
    links: [
      { label: 'View Certificate 📜', href: 'https://drive.google.com/file/d/10WlFfGNx1DtYYGq3lvLZrDHDv93YGO1G/view?usp=drive_link' }
    ]
  },
  {
    id: 'accenture',
    title: 'Accenture UK Technology Apprenticeship',
    subtitle: 'Forage Technology Simulation',
    date: 'July 2025',
    location: 'Virtual Apprenticeship',
    category: 'Experience',
    icon: <FaBriefcase className="text-[#00FFB3]" />,
    description: 'Completed enterprise technology apprenticeship simulation covering software architecture, cloud infrastructure, debugging, and client requirement analysis.'
  },
  {
    id: 'mentoring',
    title: 'Peer Technical Mentor & Coding Group Leader',
    subtitle: 'Leadership & Academic Mentoring',
    date: '2023 – Present',
    location: 'AKTU Campus',
    category: 'Experience',
    icon: <FaUserGroup className="text-[#8A2BE2]" />,
    description: 'Guided 50+ fellow students in Java, Data Structures & Algorithms, DBMS, and Web Development. Conducted collaborative problem-solving workshops and mentored team projects.'
  },
  {
    id: 'jnv-12',
    title: 'Jawahar Navodaya Vidyalaya (Intermediate)',
    subtitle: 'Class XII Senior Secondary • 84%',
    date: '2020 – 2021',
    location: 'Anugi, Kannauj, India',
    category: 'Education',
    icon: <FaGraduationCap className="text-[#6C63FF]" />,
    description: 'Completed Higher Secondary Education in Physics, Chemistry, and Mathematics (PCM) with 84% marks.'
  },
  {
    id: 'jnv-10',
    title: 'Jawahar Navodaya Vidyalaya (High School)',
    subtitle: 'Class X Secondary Education • 88%',
    date: '2018 – 2019',
    location: 'Anugi, Kannauj, India',
    category: 'Education',
    icon: <FaGraduationCap className="text-[#00E5FF]" />,
    description: 'Completed High School Secondary Education with 88% distinction.'
  }
];

export default function TimelineSection() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Education', 'Experience', 'Achievements', 'Certificates'];

  const filteredEvents = activeFilter === 'All'
    ? timelineEvents
    : timelineEvents.filter(e => e.category === activeFilter);

  return (
    <section id="timeline" className="py-24 relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
          <FaCalendarDays className="text-[#00E5FF]" />
          <span className="text-xs font-mono tracking-widest text-slate-300 uppercase">
            Career Journey & Milestones
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Interactive <span className="text-gradient">Timeline</span>
        </h2>
        <p className="text-sm text-slate-400 mt-2 font-light">
          My academic foundation, open source contributions, and engineering milestones.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-[#6C63FF] to-[#00E5FF] text-white shadow-[0_0_15px_rgba(0,229,255,0.4)]'
                  : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Vertical Animated Timeline */}
      <div className="relative border-l-2 border-white/10 ml-4 sm:ml-32 pl-6 sm:pl-10 space-y-12">
        {filteredEvents.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group"
          >
            {/* Timeline Node Point Icon */}
            <div className="absolute -left-[37px] sm:-left-[53px] top-1.5 w-10 h-10 rounded-xl glass-panel border border-white/20 flex items-center justify-center text-base group-hover:scale-125 group-hover:border-[#00E5FF] transition-transform shadow-lg bg-[#050816]">
              {event.icon}
            </div>

            {/* Date Tag on Left for Desktop */}
            <div className="hidden sm:block absolute -left-36 top-3 text-right w-24 text-xs font-mono text-[#00E5FF] font-bold">
              {event.date}
            </div>

            {/* Content Glass Card */}
            <div className="glass-card rounded-2xl p-6 border border-white/10 relative overflow-hidden group-hover:border-[#00E5FF]/40 transition-all">
              
              {/* Category & Mobile Date Badge */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300">
                  {event.category}
                </span>
                <span className="sm:hidden text-xs font-mono text-[#00E5FF] font-bold">
                  {event.date}
                </span>
              </div>

              {/* Event Title & Subtitle */}
              <h3 className="text-xl font-bold text-white group-hover:text-[#00E5FF] transition-colors mb-1">
                {event.title}
              </h3>
              <p className="text-xs font-semibold text-[#00FFB3] mb-3">
                {event.subtitle}
              </p>

              {/* Description */}
              <p className="text-xs text-slate-300 leading-relaxed font-light mb-4">
                {event.description}
              </p>

              {/* Certificate / LOR Buttons if present */}
              {event.links && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {event.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-mono px-3 py-1.5 rounded-xl bg-white/10 hover:bg-[#00E5FF]/20 hover:border-[#00E5FF]/50 border border-white/10 text-white font-semibold flex items-center gap-1.5 transition-all"
                    >
                      <span>{link.label}</span>
                      <FaArrowUpRightFromSquare className="text-[9px] opacity-70" />
                    </a>
                  ))}
                </div>
              )}

              {/* Location Badge */}
              <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-mono">
                <FaLocationDot className="text-[#FF4D9E]" />
                <span>{event.location}</span>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
