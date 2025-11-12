'use client';

import { motion } from 'framer-motion';
import { Network, Users2, Globe } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function EcosystemVision() {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  const features = [
    {
      icon: <Network className="w-8 h-8" />,
      title: 'AI Agent Marketplace',
      desc: 'Store for automation agents across industries',
    },
    {
      icon: <Users2 className="w-8 h-8" />,
      title: 'Enterprise AI Workforce',
      desc: 'Rent fleets of AI agents like virtual employees',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Memory Network',
      desc: 'Collective intelligence that grows with every task',
    },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;
    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let scale = 1;
    const nodes = Array.from({ length: 100 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      opacity: 0.1 + Math.random() * 0.4,
    }));

    const animate = () => {
      scale += 0.0002;
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      nodes.forEach((node, idx) => {
        // Expand from center
        const angle = Math.atan2(node.y - centerY, node.x - centerX);
        node.x = centerX + Math.cos(angle) * (100 + idx * 2) * scale;
        node.y = centerY + Math.sin(angle) * (100 + idx * 2) * scale;

        if (Math.abs(node.x - centerX) > width || Math.abs(node.y - centerY) > height) {
          scale = 1;
          node.x = Math.random() * width;
          node.y = Math.random() * height;
        }
      });

      // Draw connections
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.lineWidth = 0.5;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach((node) => {
        ctx.fillStyle = `rgba(255, 255, 255, ${node.opacity})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <section className="bg-black py-40 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Background animation */}
        <div className="absolute inset-0 opacity-20">
          <canvas ref={canvasRef} className="w-full h-full" />
        </div>

        <div className="relative z-10">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            The Apple of Autonomous Intelligence
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-white/60 max-w-3xl mb-16"
          >
            OriMind is not building products — it&apos;s building an{' '}
            <span className="font-semibold text-white">AI civilization.</span>
          </motion.p>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="p-8 bg-gradient-to-br from-white/5 to-white/2 rounded-2xl border border-white/20 hover:border-white/40 transition-all"
              >
                <div className="flex flex-col items-start text-left space-y-4">
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-white/10 border border-white/20 text-white">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-white/60 text-sm">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trillion-Dollar Ambition
            </h3>
            <p className="text-lg text-white/60 max-w-3xl mx-auto leading-relaxed">
              We&apos;re building not just a company, but an intelligence
              infrastructure for the planet — the{' '}
              <span className="font-semibold text-white">
                foundation of autonomous execution.
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
