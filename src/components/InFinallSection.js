'use client';

import { motion } from 'framer-motion';
import { Wand2, Globe, Smartphone, FileText, Rocket, PenTool } from 'lucide-react';

export default function InfinallSection() {
  const items = [
    { icon: <Globe size={22} />, label: 'Websites' },
    { icon: <Smartphone size={22} />, label: 'Apps' },
    { icon: <FileText size={22} />, label: 'Blogs' },
    { icon: <Rocket size={22} />, label: 'Campaigns' },
    { icon: <PenTool size={22} />, label: 'Designs' },
  ];

  return (
    <section className="bg-black text-white py-28 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Top Tag */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium text-gray-200 bg-[#111111] border border-gray-700 rounded-full shadow-sm"
        >
          <Wand2 size={15} />
          Flagship Product
        </motion.div>

        {/* Main Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          infinall AI: Autonomous Execution Engine
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-2xl text-gray-300 font-medium mb-8"
        >
          You Imagine. It&apos;s Done.
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-400 max-w-3xl mx-auto mb-16 leading-relaxed text-base md:text-lg"
        >
          The world&apos;s first <span className="font-semibold text-white">End-to-End AI Execution Engine</span> — an ecosystem that builds,
          designs, writes, and deploys autonomously.
        </motion.p>

        {/* Grid Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 justify-center mb-16"
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -3, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-[#0F0F0F] border border-gray-800 rounded-2xl px-8 py-6 text-center cursor-pointer hover:border-gray-600 transition-all"
            >
              <div className="flex flex-col items-center gap-3">
                <div className="text-gray-300">{item.icon}</div>
                <span className="font-semibold text-white text-sm md:text-base">
                  {item.label}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Join Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-2xl hover:bg-gray-100 transition-all"
        >
          <Wand2 size={18} />
          Join the Waitlist
        </motion.button>
      </div>
    </section>
  );
}
