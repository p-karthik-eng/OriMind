'use client';

import { motion } from 'framer-motion';
import { Network, Users2, Globe } from 'lucide-react';

export default function EcosystemVision() {
  const features = [
    {
      icon: <Network className="w-8 h-8 text-gray-700" />,
      title: 'AI Agent Marketplace',
      desc: 'Store for automation agents across industries',
    },
    {
      icon: <Users2 className="w-8 h-8 text-gray-700" />,
      title: 'Enterprise AI Workforce',
      desc: 'Rent fleets of AI agents like virtual employees',
    },
    {
      icon: <Globe className="w-8 h-8 text-gray-700" />,
      title: 'Global Memory Network',
      desc: 'Collective intelligence that grows with every task',
    },
  ];

  return (
    <section className="bg-[#F9FAFB] py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold text-black mb-4"
        >
          The OriMind Ecosystem Vision
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-600 max-w-3xl mx-auto mb-16"
        >
          OriMind is not building products — it&apos;s building an{' '}
          <span className="font-semibold text-black">AI civilization.</span>
        </motion.p>

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
            >
              <div className="flex flex-col items-center text-center space-y-4">
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

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
            Trillion-Dollar Ambition
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We&apos;re building not just a company, but an intelligence
            infrastructure for the planet — the{' '}
            <span className="font-semibold text-black">
              Apple of Autonomous Intelligence.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
