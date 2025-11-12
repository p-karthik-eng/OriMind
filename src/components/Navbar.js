'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for background opacity
  if (typeof window !== 'undefined') {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    typeof window !== 'undefined' && window.addEventListener('scroll', handleScroll);
  }

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-black/10 border-b border-white/5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-full border border-white/60">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="white"
              className="w-5 h-5"
            >
              <circle cx="12" cy="12" r="3" />
              <circle cx="12" cy="5" r="2" />
              <circle cx="19" cy="12" r="2" />
              <circle cx="12" cy="19" r="2" />
              <circle cx="5" cy="12" r="2" />
              <line x1="12" y1="8" x2="12" y2="16" strokeLinecap="round" />
              <line x1="8" y1="12" x2="16" y2="12" strokeLinecap="round" />
            </svg>
          </div>
          <span className="text-xl font-bold text-white">OriMind</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#"
            className="text-white/60 hover:text-white text-sm font-medium transition-colors"
          >
            Product
          </Link>
          <Link
            href="#"
            className="text-white/60 hover:text-white text-sm font-medium transition-colors"
          >
            Vision
          </Link>
          <Link
            href="#"
            className="text-white/60 hover:text-white text-sm font-medium transition-colors"
          >
            Team
          </Link>
          <button className="px-6 py-2.5 border border-white text-white text-sm font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300">
            Join Waitlist
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-black/80 backdrop-blur-md border-t border-white/10 px-6 py-4 space-y-4"
        >
          <Link
            href="#"
            className="block text-white/60 hover:text-white text-sm font-medium transition-colors"
          >
            Product
          </Link>
          <Link
            href="#"
            className="block text-white/60 hover:text-white text-sm font-medium transition-colors"
          >
            Vision
          </Link>
          <Link
            href="#"
            className="block text-white/60 hover:text-white text-sm font-medium transition-colors"
          >
            Team
          </Link>
          <button className="w-full px-6 py-2.5 border border-white text-white text-sm font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300">
            Join Waitlist
          </button>
        </motion.div>
      )}
    </nav>
  );
}
