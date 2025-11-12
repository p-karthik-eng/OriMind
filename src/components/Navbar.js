'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Linkedin, X, Link2 } from 'lucide-react'; // lucide-react icons

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#F9FAFB] border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="black"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.75v14.5m0 0L8 15.25m4 4L16 15.25"
              />
            </svg>
          </div>
          <span className="text-xl font-semibold text-black">OriMind</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="#"
            className="flex items-center gap-1 text-gray-700 hover:text-black text-sm font-medium transition"
          >
            <Link2 size={15} />
            About
          </Link>
          <Link
            href="#"
            className="flex items-center gap-1 text-gray-700 hover:text-black text-sm font-medium transition"
          >
            <Link2 size={15} />
            Blog
          </Link>
          <Link
            href="#"
            className="text-gray-800 hover:text-black transition"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </Link>
          <Link
            href="#"
            className="text-gray-800 hover:text-black transition"
            aria-label="X"
          >
            <X size={20} />
          </Link>
          <Link
            href="#"
            className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-900 transition-all flex items-center gap-2"
          >
            Get in Touch
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="black"
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
              stroke="black"
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
        <div className="md:hidden bg-[#F9FAFB] border-t border-gray-200 px-6 py-4 space-y-4">
          <Link
            href="#"
            className="flex items-center gap-1 text-gray-700 hover:text-black text-sm font-medium transition"
          >
            <Link2 size={15} />
            About
          </Link>
          <Link
            href="#"
            className="flex items-center gap-1 text-gray-700 hover:text-black text-sm font-medium transition"
          >
            <Link2 size={15} />
            Blog
          </Link>
          <div className="flex gap-4 pt-2">
            <Link href="#" className="text-black hover:opacity-70">
              <Linkedin size={18} />
            </Link>
            <Link href="#" className="text-black hover:opacity-70">
              <X size={20} />
            </Link>
          </div>
          <Link
            href="#"
            className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-900 transition-all flex items-center gap-2"
          >
            Get in Touch
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
          </Link>
        </div>
      )}
    </nav>
  );
}
