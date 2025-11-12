'use client';

import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';

export default function JoinMission() {
  return (
    <section className="bg-[#F9FAFB] py-28 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-4xl font-semibold text-gray-800 leading-snug mb-12"
        >
          <span className="block text-4xl text-gray-400 mb-2">“</span>
          The future won&apos;t belong to those who use AI — <br />
          but to those whose{' '}
          <span className="font-bold text-black underline underline-offset-4 decoration-gray-300">
            ideas are executed by it
          </span>
          <span className="block text-4xl text-gray-400 mt-2">”</span>
        </motion.blockquote>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-500 text-lg mb-2"
        >
          OriMind exists to end friction between imagination and execution.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-800 text-lg font-medium mb-16"
        >
          We are building the foundation of the next trillion-dollar intelligence ecosystem.
        </motion.p>

        {/* Join Mission Heading */}
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-black mb-4"
        >
          Join the Mission
        </motion.h3>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-gray-500 text-lg mb-2"
        >
          Be among the first to experience the future of AI execution.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-gray-800 text-lg font-medium mb-12"
        >
          Your imagination deserves a platform that can finish what you start.
        </motion.p>

        {/* Join Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white font-semibold rounded-2xl hover:bg-gray-900 transition-all"
        >
          <Brain size={18} />
          Join the Waitlist
        </motion.button>
      </div>
    </section>
  );
}
