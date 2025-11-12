'use client';

import { motion } from 'framer-motion';
import { Brain, Code2, Rocket, Database, Eye, Globe } from 'lucide-react';

export default function MVPFeatures() {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-gray-700" />,
      title: 'Smart Intent Router',
      desc: 'Routes commands intelligently',
    },
    {
      icon: <Code2 className="w-8 h-8 text-gray-700" />,
      title: 'Coding Agent',
      desc: 'Builds full-stack apps',
    },
    {
      icon: <Rocket className="w-8 h-8 text-gray-700" />,
      title: 'Content Agent',
      desc: 'Creates publish-ready content',
    },
    {
      icon: <Database className="w-8 h-8 text-gray-700" />,
      title: 'Memory Kernel',
      desc: 'Persistent project memory',
    },
    {
      icon: <Eye className="w-8 h-8 text-gray-700" />,
      title: 'Execution Console',
      desc: 'Real-time transparency',
    },
    {
      icon: <Globe className="w-8 h-8 text-gray-700" />,
      title: 'Instant Delivery',
      desc: 'Live URLs & products',
    },
  ];

  return (
    <section className="bg-[#F9FAFB] py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Top Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-full shadow-sm"
        >
          <Rocket size={15} />
          Product Features
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold text-black mb-6"
        >
          MVP Features: No-Code AI Automation
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-16"
        >
          The infinall AI MVP represents the first working version of the
          OriMind ecosystem — where you can type one command and see it executed,
          end-to-end.
        </motion.p>

        {/* Feature Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
            >
              <div className="flex flex-col items-start text-left space-y-4">
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gray-50 border border-gray-200">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-black">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Highlight Box */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-sm py-8 px-6"
        >
          <p className="text-lg text-gray-700 font-medium">
            The MVP is not a demo — it&apos;s the first{' '}
            <span className="font-semibold text-black underline-offset-2">
              living version
            </span>{' '}
            of autonomous AI execution.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
