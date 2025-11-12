'use client';

import EcosystemVision from '@/components/Ecosystem';
import EcosystemSection from '@/components/EcosystemSection';
import Footer from '@/components/Footer';
import InfinallSection from '@/components/InFinallSection';
import JoinMission from '@/components/JoinMission';
import MVPFeatures from '@/components/MVPfeatures';
import dynamic from 'next/dynamic';

// Dynamically import components with no SSR to avoid hydration issues with Three.js
const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: false });
const Hero = dynamic(() => import('@/components/Hero'), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <EcosystemSection />
      <InfinallSection />
      <MVPFeatures  />
      <EcosystemVision />
      <JoinMission />
      <Footer />
    </main>
  );
}
