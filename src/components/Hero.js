'use client';

import dynamic from 'next/dynamic';

const NeuralHero = dynamic(() => import('./NeuralHero'), { ssr: false });

export default function Hero() {
  return <NeuralHero />;
}
