import React from 'react';
import { motion } from 'framer-motion';
import { FaServer, FaCode, FaCloud, FaShieldHalved, FaMobileScreen, FaGears, FaAws } from 'react-icons/fa6';
import { SiSpringboot, SiReact, SiDocker } from 'react-icons/si';

const services = [
  {
    id: 'backend',
    title: 'Backend Engineering',
    subtitle: 'Java 21 & Spring Boot 3.3',
    description: 'Designing high-concurrency, enterprise-grade backend systems with clean architecture, Spring Security, JPA Hibernate, and transaction management.',
    icon: <SiSpringboot className="text-[#00FFB3]" />,
    tags: ['Java 21', 'Spring Boot', 'Hibernate', 'PostgreSQL', 'MySQL'],
    color: '#00FFB3'
  },
  {
    id: 'restapi',
    title: 'REST APIs & Microservices',
    subtitle: 'Scalable & Documented Endpoints',
    description: 'Building stateless RESTful APIs secured with JWT tokens, Axios interceptors, Swagger OpenAPI documentation, and role-based access control.',
    icon: <FaServer className="text-[#00E5FF]" />,
    tags: ['RESTful API', 'Swagger', 'JWT Security', 'Spring Security'],
    color: '#00E5FF'
  },
  {
    id: 'fullstack',
    title: 'Full Stack Web Apps',
    subtitle: 'React 19 & Modern Web',
    description: 'Crafting responsive, high-performance web applications combining React 19, Tailwind CSS, Framer Motion, and GSAP animations with backend APIs.',
    icon: <SiReact className="text-[#6C63FF]" />,
    tags: ['React 19', 'Tailwind CSS', 'GSAP', 'Framer Motion', 'Vite'],
    color: '#6C63FF'
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps Solutions',
    subtitle: 'AWS & Docker Containerization',
    description: 'Containerizing application services using Docker and deploying cloud infrastructures on AWS EC2, S3, RDS, Lambda, and CloudWatch.',
    icon: <FaAws className="text-[#FFB703]" />,
    tags: ['AWS EC2', 'AWS S3', 'Docker', 'CI/CD Pipelines', 'Linux'],
    color: '#FFB703'
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
          <FaGears className="text-[#00E5FF]" />
          <span className="text-xs font-mono tracking-widest text-slate-300 uppercase">
            Specialized Capabilities
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Services & <span className="text-gradient">Solutions</span>
        </h2>
        <p className="text-sm text-slate-400 mt-2 font-light">
          End-to-end software development capabilities tailored for production reliability and seamless UX.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -6 }}
            className="glass-card rounded-3xl p-8 border border-white/10 relative overflow-hidden group hover:border-[#00E5FF]/40 transition-all"
            data-cursor="Service"
          >
            {/* Top Accent Light Bar */}
            <div
              className="absolute top-0 left-0 right-0 h-1 opacity-80 group-hover:opacity-100 transition-opacity"
              style={{ background: service.color }}
            />

            <div className="flex items-start justify-between mb-6">
              <div
                className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform"
                style={{ color: service.color }}
              >
                {service.icon}
              </div>
              <span className="text-xs font-mono text-slate-400 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                0{index + 1}
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white group-hover:text-[#00E5FF] transition-colors mb-1">
              {service.title}
            </h3>
            <p className="text-xs font-semibold text-[#00FFB3] mb-4">
              {service.subtitle}
            </p>
            <p className="text-xs text-slate-300 leading-relaxed font-light mb-6">
              {service.description}
            </p>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-mono px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
