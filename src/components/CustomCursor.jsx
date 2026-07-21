import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check mobile device
    const checkMobile = () => {
      if (window.innerWidth < 768 || 'ontouchstart' in window) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const onMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });

      // Check if mouse is hovering over clickable elements
      const target = e.target;
      const isClickable = target.closest('a, button, [role="button"], input, textarea, select, .interactive-hover');
      if (isClickable) {
        setIsHovered(true);
        const customLabel = target.getAttribute('data-cursor');
        setCursorText(customLabel || '');
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      {/* Outer Glowing Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-[#00E5FF]/60 bg-[#00E5FF]/5 backdrop-blur-[2px]"
        animate={{
          x: cursorPos.x - (isHovered ? 24 : 16),
          y: cursorPos.y - (isHovered ? 24 : 16),
          width: isHovered ? 48 : 32,
          height: isHovered ? 48 : 32,
          borderColor: isHovered ? '#FF4D9E' : 'rgba(0, 229, 255, 0.7)',
          scale: isHovered ? 1.25 : 1,
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 28, mass: 0.2 }}
        style={{
          boxShadow: isHovered
            ? '0 0 25px rgba(255, 77, 158, 0.6)'
            : '0 0 15px rgba(0, 229, 255, 0.4)',
        }}
      >
        {cursorText && (
          <span className="absolute inset-0 flex items-center justify-center text-[9px] font-bold tracking-widest uppercase text-white">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Follower Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 w-2 h-2 rounded-full bg-[#00FFB3]"
        animate={{
          x: cursorPos.x - 4,
          y: cursorPos.y - 4,
          scale: isHovered ? 0 : 1,
        }}
        transition={{ type: 'spring', stiffness: 800, damping: 35 }}
        style={{
          boxShadow: '0 0 10px #00FFB3',
        }}
      />
    </>
  );
}
