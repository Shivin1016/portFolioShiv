import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaCode, FaCheck, FaXmark, FaLock, FaLayerGroup, FaServer, FaShieldHalved } from 'react-icons/fa6';
import { SiSpringboot, SiReact, SiPostgresql, SiMysql, SiPython, SiDocker, SiTailwindcss } from 'react-icons/si';

const projects = [
  {
    id: 'careerpulse',
    title: 'CareerPulse ATS',
    subtitle: 'Full-Stack Job Portal & Applicant Tracking System',
    description:
      'Enterprise-grade job discovery & applicant tracking platform serving Job Seekers, Recruiters, and Admins. Built with Spring Boot 3.3 and React 19 featuring stateless JWT security and real-time recruitment pipeline analytics.',
    tags: ['Java 21', 'Spring Boot 3.3', 'React 19', 'JWT', 'Tailwind CSS', 'MySQL', 'TanStack Query', 'Recharts'],
    github: 'https://github.com/Shivin1016/CareerPulse_SpringBoot_project',
    demo: 'https://github.com/Shivin1016/CareerPulse_SpringBoot_project',
    category: 'Full Stack',
    icon: <SiSpringboot className="text-[#00E5FF]" />,
    gradient: 'from-[#6C63FF] via-[#00E5FF] to-[#00FFB3]',
    highlights: [
      'Stateless JWT Authorization securing 15+ REST endpoints with Axios interceptors',
      'Candidate hiring status workflow: PENDING → REVIEWING → SHORTLISTED → ACCEPTED → REJECTED',
      'Role-based access control (RBAC) for 3 distinct user portals',
      'Interactive recruitment analytics charts with Recharts'
    ],
    codeSnippet: `// CareerPulse Candidate Pipeline Controller
@RestController
@RequestMapping("/api/v1/applications")
public class ApplicationController {

    @PreAuthorize("hasRole('RECRUITER')")
    @PutMapping("/{id}/status")
    public ResponseEntity<ApplicationDTO> updateStatus(
            @PathVariable Long id, 
            @RequestParam ApplicationStatus status) {
        return ResponseEntity.ok(applicationService.updateCandidateStatus(id, status));
    }
}`
  },
  {
    id: 'foodfiesta',
    title: 'Food Fiesta',
    subtitle: 'Food Ordering & Restaurant Management Platform',
    description:
      'Robust full-stack food ordering ecosystem built with Java 21 and Spring Boot. Features OAuth2 authentication, admin back-office controls, Spring Data JPA persistence with PostgreSQL, and Swagger OpenAPI documentation.',
    tags: ['Java 21', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'Thymeleaf', 'Swagger OpenAPI', 'JPA'],
    github: 'https://github.com/Shivin1016/SpringBoot-Project',
    demo: 'https://github.com/Shivin1016/SpringBoot-Project',
    category: 'Backend / Full Stack',
    icon: <FaServer className="text-[#FF4D9E]" />,
    gradient: 'from-[#FF4D9E] via-[#FFB703] to-[#6C63FF]',
    highlights: [
      'Spring Security & OAuth2 authentication integration',
      'Structured back-office administrative controls for orders, products & users',
      'Data persistence engineered with Spring Data JPA & PostgreSQL',
      'Fully documented REST endpoints via Swagger OpenAPI 3.0'
    ],
    codeSnippet: `// Food Fiesta Order Processing Service
@Service
@Transactional
public class OrderService {

    public OrderResponse placeOrder(OrderRequest request, User user) {
        Cart cart = cartRepository.findByUser(user);
        Order order = Order.builder()
            .items(cart.getItems())
            .totalAmount(cart.calculateTotal())
            .status(OrderStatus.CONFIRMED)
            .build();
        return orderMapper.toDTO(orderRepository.save(order));
    }
}`
  },
  {
    id: 'aescryptography',
    title: 'AES Cryptography Tool',
    subtitle: 'Secure File & Text Encryption System',
    description:
      'High-security cryptographic application implementing the Advanced Encryption Standard (AES) in Python 3. Supports key-based symmetric encryption and decryption for sensitive documents and raw text with exception handling.',
    tags: ['Python 3', 'AES-256', 'Symmetric Encryption', 'Cryptography', 'File I/O', 'Key Derivation'],
    github: 'https://github.com/Shivin1016/AES-Cryptographic-Tool',
    demo: 'https://github.com/Shivin1016/AES-Cryptographic-Tool',
    category: 'Security & Python',
    icon: <FaShieldHalved className="text-[#00FFB3]" />,
    gradient: 'from-[#00FFB3] via-[#00E5FF] to-[#8A2BE2]',
    highlights: [
      'AES-256 CBC mode encryption with PBKDF2 key derivation',
      'Secure file chunking for large document encryption without memory leaks',
      'User secret key verification and integrity checking',
      'Robust exception handling for corrupted files or incorrect passphrases'
    ],
    codeSnippet: `# AES Encryption Core Workflow
from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes
from cryptography.hazmat.primitives import padding

def encrypt_data(data: bytes, key: bytes, iv: bytes) -> bytes:
    padder = padding.PKCS7(128).padder()
    padded_data = padder.update(data) + padder.finalize()
    cipher = Cipher(algorithms.AES(key), modes.CBC(iv))
    encryptor = cipher.encryptor()
    return encryptor.update(padded_data) + encryptor.finalize()`
  }
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState('All');

  // Prevent background page scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  const categories = ['All', 'Full Stack', 'Backend / Full Stack', 'Security & Python'];

  const filteredProjects = activeTab === 'All'
    ? projects
    : projects.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="py-24 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
          <FaLayerGroup className="text-[#00E5FF]" />
          <span className="text-xs font-mono tracking-widest text-slate-300 uppercase">
            Featured Case Studies
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Production-Style <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-400 mt-3 font-light">
          Architected with modern software engineering principles, clean REST APIs, secure authentication, and robust data persistence.
        </p>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeTab === cat
                  ? 'bg-gradient-to-r from-[#6C63FF] to-[#00E5FF] text-white shadow-[0_0_20px_rgba(0,229,255,0.4)]'
                  : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ y: -8 }}
            className="glass-card rounded-3xl p-7 flex flex-col justify-between relative group overflow-hidden border border-white/10"
            data-cursor="View Details"
          >
            {/* Top Gradient Border Line */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} opacity-80 group-hover:opacity-100 transition-opacity`} />

            <div>
              {/* Header Badges */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  {project.icon}
                </div>
                <span className="text-[11px] font-mono font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                  {project.category}
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-2xl font-bold text-white group-hover:text-[#00E5FF] transition-colors mb-1">
                {project.title}
              </h3>
              <p className="text-xs font-medium text-[#00FFB3] mb-4">
                {project.subtitle}
              </p>

              {/* Description */}
              <p className="text-xs text-slate-300 leading-relaxed font-light mb-6 line-clamp-4">
                {project.description}
              </p>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tags.slice(0, 5).map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 5 && (
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[#00E5FF]">
                    +{project.tags.length - 5} more
                  </span>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <button
                onClick={() => setSelectedProject(project)}
                className="text-xs font-semibold text-[#00E5FF] hover:underline flex items-center gap-1.5 cursor-pointer"
              >
                <FaCode /> View Code & Details
              </button>

              <div className="flex items-center gap-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors"
                  title="GitHub Repository"
                >
                  <FaGithub className="text-base" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Detail Modal with Lenis Scroll Lock */}
      <AnimatePresence>
        {selectedProject && (
          <div
            data-lenis-prevent
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              data-lenis-prevent
              className="glass-panel max-w-3xl w-full max-h-[85vh] overflow-y-auto rounded-3xl p-6 sm:p-8 border border-white/20 relative shadow-[0_25px_60px_rgba(0,0,0,0.95)] bg-[#050816] text-slate-100"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              >
                <FaXmark className="text-lg" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl">
                  {selectedProject.icon}
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#00FFB3] font-medium">
                    {selectedProject.subtitle}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-300 leading-relaxed font-light mb-6">
                {selectedProject.description}
              </p>

              {/* Key Highlights */}
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#00E5FF] mb-3">
                  Key Technical Highlights:
                </h4>
                <ul className="space-y-2">
                  {selectedProject.highlights.map((hl, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <FaCheck className="text-[#00FFB3] mt-1 shrink-0" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Code Snippet Box */}
              <div className="mb-6">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2 px-1">
                  <span>Architecture Code Snippet</span>
                  <span>{selectedProject.tags[0]}</span>
                </div>
                <div className="p-4 rounded-2xl bg-[#030612] border border-white/10 font-mono text-xs text-slate-300 overflow-x-auto">
                  <pre>{selectedProject.codeSnippet}</pre>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-mono px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#6C63FF] to-[#00E5FF] text-white text-xs font-bold flex items-center gap-2 transition-all shadow-lg hover:scale-105"
                  >
                    <FaGithub /> View Repository
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
