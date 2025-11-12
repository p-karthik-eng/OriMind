'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const NodeCluster = ({ nodeCount = 25, icon, title, description }) => {
  const canvasRef = useRef(null);
  const nodesRef = useRef([]);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;

    // Initialize nodes in a cluster pattern
    const nodes = Array.from({ length: nodeCount }).map(() => ({
      x: width / 2 + (Math.random() - 0.5) * 60,
      y: height / 2 + (Math.random() - 0.5) * 60,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      opacity: 0.3 + Math.random() * 0.5,
      size: 3 + Math.random() * 3,
    }));
    nodesRef.current = nodes;

    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const animate = () => {
      ctx.fillStyle = 'transparent';
      ctx.clearRect(0, 0, width, height);

      // Update nodes
      nodesRef.current = nodesRef.current.map((node) => {
        let newNode = { ...node };

        newNode.x += newNode.vx;
        newNode.y += newNode.vy;

        // Keep nodes in bounds with attraction to center
        const centerX = width / 2;
        const centerY = height / 2;
        const dx = centerX - newNode.x;
        const dy = centerY - newNode.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist > 80) {
          newNode.vx += dx * 0.0005;
          newNode.vy += dy * 0.0005;
        }

        // Bounce off edges
        if (newNode.x < 5 || newNode.x > width - 5) newNode.vx *= -1;
        if (newNode.y < 5 || newNode.y > height - 5) newNode.vy *= -1;

        newNode.x = Math.max(5, Math.min(width - 5, newNode.x));
        newNode.y = Math.max(5, Math.min(height - 5, newNode.y));

        return newNode;
      });

      // Draw connections
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.lineWidth = 0.5;

      for (let i = 0; i < nodesRef.current.length; i++) {
        for (let j = i + 1; j < nodesRef.current.length; j++) {
          const dx = nodesRef.current[i].x - nodesRef.current[j].x;
          const dy = nodesRef.current[i].y - nodesRef.current[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 60) {
            ctx.beginPath();
            ctx.moveTo(nodesRef.current[i].x, nodesRef.current[i].y);
            ctx.lineTo(nodesRef.current[j].x, nodesRef.current[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodesRef.current.forEach((node) => {
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(1, node.opacity + 0.3)})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fill();

        // Add glow
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 15);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${node.opacity * 0.4})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(node.x - 15, node.y - 15, 30, 30);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [nodeCount]);

  return (
    <motion.div
      className="relative p-8 bg-gradient-to-br from-white/5 to-white/2 rounded-2xl border border-white/20 hover:border-white/40 transition-all overflow-hidden group"
      whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.6)' }}
    >
      {/* Canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.6 }}
      />

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-start space-y-4">
        <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-white/10 border border-white/20 text-white">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white">
          {title}
        </h3>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

export default React.memo(NodeCluster);
