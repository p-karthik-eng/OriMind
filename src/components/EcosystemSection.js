'use client';

import { Brain, Zap, Database, Layers, Eye, Network } from 'lucide-react';
import { motion } from 'framer-motion';
import NodeCluster from './NodeCluster';

export default function EcosystemSection() {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Intent Understanding',
      desc: 'Detects what you mean',
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: 'Agent Orchestration',
      desc: 'Distributes commands',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Execution Engine',
      desc: 'Builds and deploys',
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Persistent Memory',
      desc: 'Remembers everything',
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Transparent Process',
      desc: 'Real-time visibility',
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: 'Full Pipeline',
      desc: 'End-to-end automation',
    },
  ];

  return (
    <section className="bg-black py-40 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium text-white/60 bg-white/5 border border-white/10 rounded-full"
        >
          <Network size={15} />
          One Ecosystem. Infinite Possibilities.
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          The Connected Intelligence
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-lg text-white/60 max-w-2xl mb-16"
        >
          AI today can generate text, code, or designs — but nothing connects the
          full pipeline. That&apos;s where{' '}
          <span className="font-semibold text-white">OriMind changes everything.</span>
        </motion.p>

        {/* Feature Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <NodeCluster
                nodeCount={20}
                icon={feature.icon}
                title={feature.title}
                description={feature.desc}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
