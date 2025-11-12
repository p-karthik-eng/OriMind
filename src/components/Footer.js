'use client';

import { Mail, Phone, MapPin, Rocket, Heart, Instagram, Twitter, Youtube, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0B0B0D] via-[#0E0E11] to-[#111217] text-gray-300 pt-20 pb-10 px-6 md:px-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 pb-10">

        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-500">
              <Rocket className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white">OriMind</h2>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            One Mind, Infinite Possibilities. A multi-purpose platform for limitless innovation powered by AI.
          </p>

          <h3 className="text-white font-semibold flex items-center gap-2 mb-2">
            <Mail className="w-5 h-5" /> Join the Revolution
          </h3>
          <button className="w-full sm:w-auto px-8 py-3 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition-all flex items-center justify-center gap-2">
            Join the Waitlist <Rocket size={16} />
          </button>
        </motion.div>

        {/* Middle Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="md:mx-auto"
        >
          <h3 className="text-white font-semibold flex items-center gap-2 mb-4">
            <Rocket className="w-5 h-5" /> Quick Links
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="#" className="hover:text-white transition">About</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">Blog</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">Join the Waitlist</Link>
            </li>
          </ul>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h3 className="text-white font-semibold flex items-center gap-2 mb-4">
            <Phone className="w-5 h-5" /> Contact Us
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2 text-gray-400">
              <Phone size={16} /> +91 9515161596
            </li>
            <li className="flex items-center gap-2 text-gray-400">
              <Mail size={16} /> support@orimind.com
            </li>
            <li className="flex items-center gap-2 text-gray-400 leading-snug">
              <MapPin size={16} /> Sheriguda, Hyderabad, Telangana 500081
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 pt-6 mt-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © 2025 OriMind. Made with <Heart className="w-4 h-4 text-red-500 inline mx-1" /> for infinite possibilities.
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <Link href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition">
            <Instagram size={18} />
          </Link>
          <Link href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition">
            <Twitter size={18} />
          </Link>
          <Link href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition">
            <Youtube size={18} />
          </Link>
          <Link href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition">
            <Github size={18} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
