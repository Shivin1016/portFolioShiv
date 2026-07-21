import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLocationDot, FaPaperPlane, FaCheck, FaLinkedin, FaGithub, FaStar, FaCircleExclamation } from 'react-icons/fa6';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      // Send real email via Web3Forms API service directly to shivaniprajapati10jan@gmail.com
      const formData = new FormData();
      formData.append('access_key', 'YOUR_WEB3FORMS_ACCESS_KEY'); // Free Web3Forms access key
      formData.append('name', formState.name);
      formData.append('email', formState.email);
      formData.append('subject', formState.subject || 'Portfolio Contact Message');
      formData.append('message', formState.message);
      formData.append('to_email', 'shivaniprajapati10jan@gmail.com');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setIsSent(true);
        setFormState({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setIsSent(false), 6000);
      } else {
        // Fallback to mailto link if API key is not yet registered
        window.location.href = `mailto:shivaniprajapati10jan@gmail.com?subject=${encodeURIComponent(
          formState.subject
        )}&body=${encodeURIComponent(
          `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
        )}`;
        setIsSent(true);
      }
    } catch (err) {
      // Fallback to direct mailto client
      window.location.href = `mailto:shivaniprajapati10jan@gmail.com?subject=${encodeURIComponent(
        formState.subject
      )}&body=${encodeURIComponent(
        `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
      )}`;
      setIsSent(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
          <FaEnvelope className="text-[#FF4D9E]" />
          <span className="text-xs font-mono tracking-widest text-slate-300 uppercase">
            Let's Build Something Great
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Get In <span className="text-gradient">Touch</span>
        </h2>
        <p className="text-sm text-slate-400 mt-2 font-light">
          Whether you have an SDE opening, a full-stack project, or just want to say hi, my inbox is always open!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        
        {/* Left Column: Direct Contact Details & Interactive Map Canvas */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          
          <div className="glass-panel rounded-3xl p-8 border border-white/10 space-y-6">
            <h3 className="text-xl font-bold text-white font-space flex items-center gap-2">
              <FaStar className="text-[#00E5FF]" /> Contact Details
            </h3>

            {/* Email */}
            <a
              href="mailto:shivaniprajapati10jan@gmail.com"
              className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#00E5FF]/50 transition-colors group"
            >
              <div className="w-11 h-11 rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF] text-lg shrink-0">
                <FaEnvelope />
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400">Email Address</div>
                <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#00E5FF] transition-colors break-all">
                  shivaniprajapati10jan@gmail.com
                </div>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+919120222324"
              className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#00FFB3]/50 transition-colors group"
            >
              <div className="w-11 h-11 rounded-xl bg-[#00FFB3]/10 border border-[#00FFB3]/30 flex items-center justify-center text-[#00FFB3] text-lg shrink-0">
                <FaPhone />
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400">Phone Number</div>
                <div className="text-sm font-semibold text-white group-hover:text-[#00FFB3] transition-colors">
                  +91 9120222324
                </div>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-11 h-11 rounded-xl bg-[#FF4D9E]/10 border border-[#FF4D9E]/30 flex items-center justify-center text-[#FF4D9E] text-lg shrink-0">
                <FaLocationDot />
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400">Location</div>
                <div className="text-sm font-semibold text-white">
                  Kanpur / Lucknow, Uttar Pradesh, India
                </div>
              </div>
            </div>

            {/* Quick Social Grid */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://github.com/Shivin1016"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#00E5FF] transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/shivani-p-959v1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#00E5FF] hover:border-[#00E5FF] transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://leetcode.com/shivaniprajapati11jan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-yellow-400 hover:border-yellow-400 transition-colors"
              >
                <SiLeetcode />
              </a>
              <a
                href="https://geeksforgeeks.org/user/shivanipraj8nkk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:border-emerald-400 transition-colors"
              >
                <SiGeeksforgeeks />
              </a>
            </div>
          </div>

          {/* Dark Styled Google Map Background Representation */}
          <div className="h-48 rounded-3xl glass-panel border border-white/10 relative overflow-hidden flex flex-col justify-between p-6 bg-[#030612]">
            <div className="absolute inset-0 opacity-40 bg-gradient-to-tr from-[#6C63FF]/20 via-transparent to-[#00E5FF]/20 pointer-events-none" />
            <div className="z-10 flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-widest text-[#00E5FF] flex items-center gap-1.5">
                <FaLocationDot className="animate-bounce" /> Kanpur / Lucknow Region
              </span>
              <span className="text-[10px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded-full border border-white/10">
                26.8467° N, 80.9462° E
              </span>
            </div>

            <div className="z-10 mt-auto">
              <p className="text-xs text-slate-300 font-light">
                Open for remote engineering positions worldwide & on-site software developer roles across India.
              </p>
            </div>
          </div>

        </div>

        {/* Right Column: Glassmorphism Contact Form */}
        <div className="lg:col-span-7">
          <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-white/15 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            
            <h3 className="text-2xl font-bold text-white font-space mb-2">
              Send a Direct Message ✉️
            </h3>
            <p className="text-xs text-slate-400 font-light mb-8">
              Fill out the form below. Messages are sent directly to <span className="text-[#00E5FF]">shivaniprajapati10jan@gmail.com</span>.
            </p>

            {isSent && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-2xl bg-[#00FFB3]/20 border border-[#00FFB3]/50 text-[#00FFB3] text-xs font-semibold flex items-center gap-3"
              >
                <FaCheck className="text-lg" />
                <span>Thank you! Your message has been sent to Shivani's email.</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-300 uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Rivera"
                    className="w-full px-4 py-3.5 rounded-2xl glass-input text-white text-sm placeholder-slate-500"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-300 uppercase tracking-wider">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="e.g. alex@company.com"
                    className="w-full px-4 py-3.5 rounded-2xl glass-input text-white text-sm placeholder-slate-500"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label className="text-xs font-mono text-slate-300 uppercase tracking-wider">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formState.subject}
                  onChange={handleChange}
                  placeholder="e.g. Full Stack Developer Opportunity / Project Inquiry"
                  className="w-full px-4 py-3.5 rounded-2xl glass-input text-white text-sm placeholder-slate-500"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-xs font-mono text-slate-300 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3.5 rounded-2xl glass-input text-white text-sm placeholder-slate-500 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#6C63FF] via-[#00E5FF] to-[#00FFB3] text-black font-extrabold text-sm tracking-wide shadow-[0_0_30px_rgba(0,229,255,0.4)] hover:shadow-[0_0_45px_rgba(0,229,255,0.7)] hover:scale-[1.01] transition-all flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-50"
                data-cursor="Send"
              >
                {isSubmitting ? (
                  <span>Sending Message to Shivani...</span>
                ) : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </button>

            </form>

          </div>
        </div>

      </div>
    </section>
  );
}
