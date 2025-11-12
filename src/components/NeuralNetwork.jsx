'use client';

import React, { useEffect, useRef, useState } from 'react';

const NeuralNetwork = ({ 
  nodeCount = 60, 
  connectionDistance = 180, 
  className = '',
  animated = true,
  mouseEffects = true,
  width = '100%',
  height = '100vh'
}) => {
  const canvasRef = useRef(null);
  const [nodes, setNodes] = useState([]);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const animationRef = useRef(null);
  const activeNodesRef = useRef(new Set());

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const w = canvas.offsetWidth || window.innerWidth;
    const h = canvas.offsetHeight || window.innerHeight;

    // Initialize nodes
    const initialNodes = Array.from({ length: nodeCount }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      opacity: 0.3 + Math.random() * 0.5,
      pulseSpeed: 3 + Math.random() * 2,
      pulsePhase: Math.random() * Math.PI * 2,
      size: 4 + Math.random() * 4,
      isActive: false,
    }));
    setNodes(initialNodes);

    // Activate random nodes periodically
    const activationInterval = setInterval(() => {
      activeNodesRef.current.clear();
      const numActive = 8 + Math.floor(Math.random() * 5);
      for (let i = 0; i < numActive; i++) {
        activeNodesRef.current.add(Math.floor(Math.random() * nodeCount));
      }
    }, 4000 + Math.random() * 1000);

    // Handle mouse movement
    const handleMouseMove = (e) => {
      if (!mouseEffects) return;
      const rect = canvas.getBoundingClientRect();
      setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    window.addEventListener('mousemove', handleMouseMove);

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const animate = () => {
      const w = canvas.offsetWidth || window.innerWidth;
      const h = canvas.offsetHeight || window.innerHeight;

      // Set canvas size
      canvas.width = w;
      canvas.height = h;

      // Clear canvas
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, w, h);

      // Update and draw nodes
      const updatedNodes = nodes.map((node, idx) => {
        let newNode = { ...node };

        // Update position
        newNode.x += newNode.vx;
        newNode.y += newNode.vy;

        // Bounce off edges
        if (newNode.x < 0 || newNode.x > w) newNode.vx *= -1;
        if (newNode.y < 0 || newNode.y > h) newNode.vy *= -1;

        newNode.x = Math.max(0, Math.min(w, newNode.x));
        newNode.y = Math.max(0, Math.min(h, newNode.y));

        // Update pulse
        newNode.pulsePhase += 0.05;
        if (animated) {
          newNode.opacity = 0.2 + Math.sin(newNode.pulsePhase / newNode.pulseSpeed) * 0.3 + 0.3;
        }

        // Check if active
        newNode.isActive = activeNodesRef.current.has(idx);

        // Mouse effects - light up nearest 5 nodes
        if (mouseEffects) {
          const dx = newNode.x - mouse.x;
          const dy = newNode.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            newNode.opacity = Math.min(1, newNode.opacity + 0.3);
          }
        }

        // Draw node
        const opacity = newNode.isActive ? 1 : newNode.opacity;
        const glow = newNode.isActive ? 40 : 20;

        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.beginPath();
        ctx.arc(newNode.x, newNode.y, newNode.size, 0, Math.PI * 2);
        ctx.fill();

        // Draw glow
        const gradient = ctx.createRadialGradient(newNode.x, newNode.y, 0, newNode.x, newNode.y, glow);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity * 0.6})`);
        gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);
        ctx.fillStyle = gradient;
        ctx.fillRect(newNode.x - glow, newNode.y - glow, glow * 2, glow * 2);

        return newNode;
      });

      // Draw connections
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
      ctx.lineWidth = 1;

      for (let i = 0; i < updatedNodes.length; i++) {
        for (let j = i + 1; j < updatedNodes.length; j++) {
          const dx = updatedNodes[i].x - updatedNodes[j].x;
          const dy = updatedNodes[i].y - updatedNodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const opacity = 0.15 + (1 - dist / connectionDistance) * 0.3;
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(updatedNodes[i].x, updatedNodes[i].y);
            ctx.lineTo(updatedNodes[j].x, updatedNodes[j].y);
            ctx.stroke();
          }
        }
      }

      setNodes(updatedNodes);
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(activationInterval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nodeCount, connectionDistance, mouseEffects, animated]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        width,
        height,
        display: 'block',
      }}
    />
  );
};

export default React.memo(NeuralNetwork);
