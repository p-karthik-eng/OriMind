'use client';

import { motion } from 'framer-motion';
import { Brain, Code2, Rocket, Database, Eye, Globe } from 'lucide-react';
import NodeCluster from './NodeCluster';

export default function MVPFeatures() {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Natural Language Control',
      desc: 'Command autonomous systems with plain English',
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Multi-Agent Orchestration',
      desc: 'Coordinate multiple AI agents seamlessly',
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Real-Time Learning',
      desc: 'AI improves with every execution',
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Cross-Platform Integration',
      desc: 'Works with all your existing tools',
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Secure Execution',
      desc: 'Enterprise-grade security and compliance',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Performance Analytics',
      desc: 'Real-time metrics and insights',
    },
  ];

  return (
    <section className="bg-black py-40 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium text-white/60 bg-white/5 border border-white/10 rounded-full"
        >
          <Rocket size={15} />
          Built for Autonomous Excellence
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          MVP Features
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-white/60 max-w-3xl mb-16"
        >
          The infinall AI MVP represents the first working version of the
          OriMind ecosystem — where you can type one command and see it executed,
          end-to-end.
        </motion.p>

        {/* Feature Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
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
                nodeCount={18}
                icon={feature.icon}
                title={feature.title}
                description={feature.desc}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Highlight Box */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-xl py-8 px-8"
        >
          <p className="text-lg text-white/80 font-medium">
            The MVP is not a demo — it&apos;s the first{' '}
            <span className="font-semibold text-white">
              living version
            </span>{' '}
            of autonomous AI execution.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
