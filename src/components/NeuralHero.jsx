'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import NeuralNetwork from './NeuralNetwork';
import FloatingParticles from './FloatingParticles';

// eslint-disable-next-line react-hooks/rules-of-hooks
export default function NeuralHero() {
  const [mounted, setMounted] = useState(false);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 1.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
    },
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Neural Network Background */}
      {mounted && (
        <>
          <NeuralNetwork
            nodeCount={70}
            connectionDistance={180}
            className="absolute inset-0 w-full h-full"
            animated={true}
            mouseEffects={true}
          />
          <FloatingParticles count={25} />
        </>
      )}

      {/* Overlay gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40 pointer-events-none" />

      {/* Content */}
      <motion.div
        className="relative z-10 h-full flex flex-col items-center justify-center px-6 py-20"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold text-white text-center max-w-4xl mb-6 leading-tight"
        >
          Autonomous Intelligence, <span className="block">Awakening</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-white/70 text-center max-w-2xl mb-12"
        >
          End-to-end AI execution. No human intervention. The future of work is autonomous.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300"
        >
          Join the Waitlist
        </motion.button>

        {/* Below CTA Text */}
        <motion.p
          variants={itemVariants}
          className="text-sm text-white/50 mt-6"
        >
          Join 10,000+ innovators building the autonomous future
        </motion.p>
      </motion.div>
    </section>
  );
}
