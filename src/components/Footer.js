'use client';

import { Mail, Phone, MapPin, Rocket, Heart, Instagram, Twitter, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black via-black to-black/80 text-white/70 pt-24 pb-12 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 pb-16">

        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 flex items-center justify-center rounded-full border border-white/60">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="white"
                className="w-4 h-4"
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
            <h2 className="text-2xl font-bold text-white">OriMind</h2>
          </div>
          <p className="text-white/50 text-sm leading-relaxed mb-6">
            Building the world&apos;s first end-to-end AI execution ecosystem.
          </p>

          <h3 className="text-white font-semibold flex items-center gap-2 mb-2">
            <Mail className="w-5 h-5" /> Join the Revolution
          </h3>
          <button className="w-full sm:w-auto px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-all flex items-center justify-center gap-2">
            Join the Waitlist <Rocket size={16} />
          </button>
        </motion.div>

        {/* Middle Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="md:mx-auto"
        >
          <h3 className="text-white font-semibold flex items-center gap-2 mb-4">
            <Rocket className="w-5 h-5" /> Quick Links
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="#" className="hover:text-white transition">Product</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">Vision</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">Team</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">Blog</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">Contact</Link>
            </li>
          </ul>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-white font-semibold flex items-center gap-2 mb-4">
            <Mail className="w-5 h-5" /> Get in Touch
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2 text-white/60">
              <Mail size={16} /> support@orimind.com
            </li>
            <li className="flex items-center gap-2 text-white/60">
              <Phone size={16} /> +1 (555) 123-4567
            </li>
            <li className="flex items-center gap-2 text-white/60 leading-snug">
              <MapPin size={16} /> San Francisco, CA
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Copyright */}
        <p className="text-sm text-white/40">
          © 2024 OriMind. Made with <Heart className="w-4 h-4 text-red-500 inline mx-1" /> for infinite possibilities.
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <Link href="#" className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition border border-white/10 hover:border-white/20">
            <Twitter size={18} />
          </Link>
          <Link href="#" className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition border border-white/10 hover:border-white/20">
            <Linkedin size={18} />
          </Link>
          <Link href="#" className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition border border-white/10 hover:border-white/20">
            <Github size={18} />
          </Link>
          <Link href="#" className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition border border-white/10 hover:border-white/20">
            <Instagram size={18} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
