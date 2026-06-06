"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "Nasıl Çalışır", href: "#nasil-calisir" },
  { label: "Teklif Al", href: "#teklif" },
  { label: "İletişim", href: "mailto:sarpsensan@fijytech.com" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Left: Logo */}
          <Link href="/">
            <Image
              src="/fijytech.png"
              alt="Fijytech"
              width={48}
              height={48}
              style={{ borderRadius: "10px" }}
            />
          </Link>

          {/* Center: Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right: Instagram */}
          <a
            href="https://instagram.com/fijytech"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="border border-gray-300 rounded-lg p-2 hover:border-red-500 hover:text-red-500 transition-colors inline-flex text-gray-400"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </a>

        </motion.div>

        {/* Bottom: Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} FijyTech. Tüm hakları saklıdır.
          </p>
          <p className="text-gray-600 text-xs">
            AI Otomasyon Ajansı — Türkiye
          </p>
        </div>
      </div>
    </footer>
  );
}
