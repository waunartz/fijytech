"use client";

import { motion } from "framer-motion";

const tools = [
  {
    name: "Claude AI",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <circle cx="20" cy="20" r="20" fill="#CC785C" />
        <path
          d="M13 26l4-12 3 8 3-5 4 9"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Apify",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <rect width="40" height="40" rx="8" fill="#00B8A9" />
        <path
          d="M10 30V10l10 10 10-10v20"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Claude Code",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <rect width="40" height="40" rx="8" fill="#1a1a2e" />
        <path
          d="M14 16l-6 4 6 4M26 16l6 4-6 4M22 12l-4 16"
          stroke="#CC785C"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Next.js",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <circle cx="20" cy="20" r="20" fill="#000000" />
        <path
          d="M13 28V13l14 17V13"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="13"
          y1="20"
          x2="22"
          y2="20"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "Make.com",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <rect width="40" height="40" rx="8" fill="#6366f1" />
        <circle cx="12" cy="20" r="4" fill="white" />
        <circle cx="28" cy="20" r="4" fill="white" />
        <circle cx="20" cy="13" r="4" fill="white" />
        <line x1="16" y1="18" x2="12" y2="20" stroke="white" strokeWidth="1.5" />
        <line x1="24" y1="18" x2="28" y2="20" stroke="white" strokeWidth="1.5" />
        <line x1="16" y1="15" x2="20" y2="13" stroke="white" strokeWidth="1.5" />
        <line x1="24" y1="15" x2="20" y2="13" stroke="white" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: "n8n",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <rect width="40" height="40" rx="8" fill="#ea4b71" />
        <text
          x="50%"
          y="56%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="white"
          fontSize="14"
          fontWeight="bold"
          fontFamily="monospace"
        >
          n8n
        </text>
      </svg>
    ),
  },
];

export default function ToolsBar() {
  return (
    <section className="py-12 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8"
        >
          Kullandığımız Araçlar & Teknolojiler
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex flex-col items-center gap-2 group"
            >
              <div className="transition-transform duration-200 group-hover:-translate-y-1">
                {tool.icon}
              </div>
              <span className="text-xs font-medium text-gray-500 group-hover:text-gray-700 transition-colors">
                {tool.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
