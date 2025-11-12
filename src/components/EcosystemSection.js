'use client';

import { Brain, Zap, Database, Layers, Eye, Network } from 'lucide-react';
import { motion } from 'framer-motion';

export default function EcosystemSection() {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-gray-700" />,
      title: 'Intent Understanding',
      desc: 'Detects what you mean',
    },
    {
      icon: <Network className="w-8 h-8 text-gray-700" />,
      title: 'Agent Orchestration',
      desc: 'Distributes commands',
    },
    {
      icon: <Zap className="w-8 h-8 text-gray-700" />,
      title: 'Execution Engine',
      desc: 'Builds and deploys',
    },
    {
      icon: <Database className="w-8 h-8 text-gray-700" />,
      title: 'Persistent Memory',
      desc: 'Remembers everything',
    },
    {
      icon: <Eye className="w-8 h-8 text-gray-700" />,
      title: 'Transparent Process',
      desc: 'Real-time visibility',
    },
    {
      icon: <Layers className="w-8 h-8 text-gray-700" />,
      title: 'Full Pipeline',
      desc: 'End-to-end automation',
    },
  ];

  return (
    <section className="bg-[#F9FAFB] py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-full shadow-sm"
        >
          <Network size={15} />
          Revolutionary Technology
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold text-black mb-6"
        >
          The World&apos;s First End-to-End AI Execution Ecosystem
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-16"
        >
          AI today can generate text, code, or designs — but nothing connects the
          full pipeline. That&apos;s where{' '}
          <span className="font-semibold text-black">OriMind changes everything.</span>
        </motion.p>

        {/* Feature Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
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
                <h3 className="text-xl font-semibold text-black">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
