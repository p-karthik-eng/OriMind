'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.25,
        duration: 0.9,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#F9FAFB] text-center px-6 py-20">
      {/* ===== Animated Grid Background ===== */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px)] [background-size:40px_40px] animate-gridMove" />
      
      {/* ===== Radial Glow Overlay ===== */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/90 to-white/100 pointer-events-none" />
      <div className="absolute -top-56 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-radial from-[#c7d2fe]/40 via-[#e0e7ff]/20 to-transparent blur-3xl opacity-70" />

      {/* ===== Content ===== */}
      <motion.div
        className="relative z-10 max-w-3xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Top Label */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-5 py-2 text-sm font-medium text-gray-600 bg-white/70 border border-gray-200 rounded-full shadow-sm backdrop-blur-md mb-8"
        >
          <span className="w-2 h-2 bg-black rounded-full" />
          The World’s First End to End Execution
        </motion.div>

        {/* Logo */}
        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-7xl font-bold text-black tracking-tight mb-4"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-700">
            OriMind
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-500 font-medium mb-10"
        >
          One Mind. Infinite Intelligence.
        </motion.p>

        {/* Main Heading */}
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug"
        >
          Where Ideas Execute Themselves with <br />
          <span className="text-black">Autonomous AI</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          OriMind is building the world’s first AI Execution Ecosystem — autonomous agents that research,
          design, code, and deploy automatically. One command replaces human work. Total automation.
        </motion.p>

        {/* Button */}
        <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }}>
          <button className="px-8 py-4 bg-black text-white font-semibold text-lg rounded-full shadow-lg hover:bg-gray-800 transition-all duration-300 flex items-center justify-center mx-auto gap-2">
            ⚙️ Join the Waitlist
          </button>
        </motion.div>
      </motion.div>

      {/* ===== Floating Motion Elements ===== */}
      {mounted && (
        <>
          <motion.div
            className="absolute top-[25%] left-[15%] w-4 h-4 bg-blue-400 rounded-full opacity-50 blur-md"
            animate={{ y: [0, -30, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-[20%] right-[20%] w-6 h-6 bg-indigo-400 rounded-full opacity-40 blur-lg"
            animate={{ y: [0, 40, 0], opacity: [0.2, 0.7, 0.2] }}
            transition={{ duration: 7, repeat: Infinity }}
          />
        </>
      )}
    </section>
  );
}
