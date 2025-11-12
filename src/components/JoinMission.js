'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function JoinMission() {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;
    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const centerX = width / 2;
    const centerY = height / 2;

    const nodes = Array.from({ length: 60 }).map((_, idx) => {
      const angle = (idx / 60) * Math.PI * 2;
      const distance = 150 + Math.random() * 100;
      return {
        x: centerX + Math.cos(angle) * distance,
        y: centerY + Math.sin(angle) * distance,
        angle,
        distance,
        opacity: 0.3 + Math.random() * 0.5,
      };
    });

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, width, height);

      // Move nodes toward center
      nodes.forEach((node) => {
        node.distance *= 0.98;
        node.x = centerX + Math.cos(node.angle) * node.distance;
        node.y = centerY + Math.sin(node.angle) * node.distance;

        if (node.distance < 50) {
          node.distance = 150 + Math.random() * 100;
        }
      });

      // Draw connections
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.lineWidth = 0.5;
      nodes.forEach((node) => {
        ctx.beginPath();
        ctx.moveTo(node.x, node.y);
        ctx.lineTo(centerX, centerY);
        ctx.stroke();
      });

      // Draw nodes
      nodes.forEach((node) => {
        ctx.fillStyle = `rgba(255, 255, 255, ${node.opacity})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 3, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw central bright node
      ctx.fillStyle = 'rgba(255, 255, 255, 1)';
      ctx.beginPath();
      ctx.arc(centerX, centerY, 12, 0, Math.PI * 2);
      ctx.fill();

      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 80);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.6)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(centerX - 80, centerY - 80, 160, 160);

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="bg-black py-40 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Background animation */}
        <div className="absolute inset-0 opacity-20">
          <canvas ref={canvasRef} className="w-full h-full" />
        </div>

        <div className="relative z-10">
          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white text-center mb-8"
          >
            Join the Autonomous Revolution
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-white/70 text-center mb-16"
          >
            Be among the first to experience true autonomous AI. Secure your spot on the waitlist now.
          </motion.p>

          {/* Email Form */}
          <motion.form
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="max-w-md mx-auto mb-12"
          >
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-6 py-4 bg-white/5 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/60 transition-all"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-all whitespace-nowrap"
              >
                Join Waitlist
              </button>
            </div>
          </motion.form>

          {/* Below form text */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-white/60 text-sm mb-4">
              ✓ Early access priority • ✓ Exclusive updates • ✓ Beta testing opportunities
            </p>
            <p className="text-white/40 text-xs">
              No spam. Your information is safe with us.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
