'use client';

import { motion } from 'framer-motion';
import { Wand2, Globe, Smartphone, FileText, Rocket, PenTool } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function InfinallSection() {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  const items = [
    { icon: <Globe size={22} />, label: 'Websites' },
    { icon: <Smartphone size={22} />, label: 'Apps' },
    { icon: <FileText size={22} />, label: 'Blogs' },
    { icon: <Rocket size={22} />, label: 'Campaigns' },
    { icon: <PenTool size={22} />, label: 'Designs' },
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

    const nodes = Array.from({ length: 40 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 1,
      vy: (Math.random() - 0.5) * 1,
      opacity: 0.3 + Math.random() * 0.5,
    }));

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, width, height);

      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        node.x = Math.max(0, Math.min(width, node.x));
        node.y = Math.max(0, Math.min(height, node.y));

        // Draw to center
        const centerX = width / 2;
        const centerY = height / 2;
        const dx = centerX - node.x;
        const dy = centerY - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 300) {
          ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - dist / 300)})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(centerX, centerY);
          ctx.stroke();
        }
      });

      // Draw nodes
      nodes.forEach((node) => {
        ctx.fillStyle = `rgba(255, 255, 255, ${node.opacity})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 3, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw central bright node
      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, 8, 0, Math.PI * 2);
      ctx.fill();

      const gradient = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, 60);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(width / 2 - 60, height / 2 - 60, 120, 120);

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <section className="bg-black text-white py-40 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Background animation */}
        <div className="absolute inset-0 opacity-20">
          <canvas ref={canvasRef} className="w-full h-full" />
        </div>

        <div className="relative z-10">
          {/* Top Tag */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium text-white/60 bg-white/5 border border-white/10 rounded-full"
          >
            <Wand2 size={15} />
            Flagship Product
          </motion.div>

          {/* Main Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            infinall AI — The Operating System for Autonomous Work
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-white/60 font-medium mb-8"
          >
            End-to-end automation. From research to execution.
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-white/50 max-w-3xl mb-16 leading-relaxed text-base md:text-lg"
          >
            The world&apos;s first <span className="font-semibold text-white">End-to-End AI Execution Engine</span> — an ecosystem that builds,
            designs, writes, and deploys autonomously.
          </motion.p>

          {/* Grid Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 justify-center mb-16"
          >
            {items.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="bg-white/5 border border-white/20 rounded-2xl px-6 py-5 text-center cursor-pointer hover:border-white/40 transition-all"
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="text-white/70">{item.icon}</div>
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
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-all"
          >
            <Wand2 size={18} />
            Request Early Access
          </motion.button>
        </div>
      </div>
    </section>
  );
}
