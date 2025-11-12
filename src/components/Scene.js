'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

function FloatingShapes() {
  const group = useRef();
  
  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.y = clock.getElapsedTime() * 0.1;
      group.current.children.forEach((child, index) => {
        child.position.y = Math.sin(clock.getElapsedTime() * 0.5 + index * 2) * 0.5;
      });
    }
  });

  const shapes = [
    { position: [0, 0, 0], color: '#ffffff', size: 1.5, geometry: 'box' },
    { position: [4, 1, -2], color: '#aaaaaa', size: 1, geometry: 'sphere' },
    { position: [-3, -1, -3], color: '#888888', size: 0.8, geometry: 'torus' },
    { position: [2, -2, 1], color: '#666666', size: 0.7, geometry: 'cone' },
  ];

  return (
    <group ref={group}>
      {shapes.map((shape, i) => (
        <mesh key={i} position={shape.position}>
          {shape.geometry === 'box' && <boxGeometry args={[shape.size, shape.size, shape.size]} />}
          {shape.geometry === 'sphere' && <sphereGeometry args={[shape.size, 32, 32]} />}
          {shape.geometry === 'torus' && <torusGeometry args={[shape.size, 0.2, 16, 100]} />}
          {shape.geometry === 'cone' && <coneGeometry args={[shape.size, shape.size * 2, 32]} />}
          <meshStandardMaterial 
            color={shape.color} 
            metalness={0.1} 
            roughness={0.2} 
            transparent 
            opacity={0.6} 
            wireframe={true}
          />
        </mesh>
      ))}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
    </group>
  );
}

export default function Scene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <FloatingShapes />
      </Canvas>
    </div>
  );
}
