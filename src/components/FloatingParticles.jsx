'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// eslint-disable-next-line react-hooks/rules-of-hooks
const FloatingParticles = ({ count = 25 }) => {
  const [particles, setParticles] = useState([]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const newParticles = Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 20 + Math.random() * 20,
      drift: (Math.random() - 0.5) * 100,
      size: 2 + Math.random() * 4,
    }));
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setParticles(newParticles);
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${particle.left}%`,
            bottom: -10,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: -window.innerHeight - 20,
            x: particle.drift,
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
};

export default React.memo(FloatingParticles);
