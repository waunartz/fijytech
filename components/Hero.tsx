"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#E24B4A]/5 rounded-full blur-3xl" />
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#E24B4A]/10 rounded-full blur-2xl" />
        <div className="absolute bottom-10 -left-20 w-64 h-64 bg-[#E24B4A]/8 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-[#E24B4A]/10 text-[#E24B4A] px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
        >
          <span className="w-2 h-2 bg-[#E24B4A] rounded-full animate-pulse" />
          AI Otomasyon Ajansı
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6"
        >
          İşinizi{" "}
          <span className="text-[#E24B4A] relative">
            Yapay Zeka
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 300 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 9C50 4 100 2 150 5C200 8 250 6 298 3"
                stroke="#E24B4A"
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.4"
              />
            </svg>
          </span>{" "}
          ile{" "}
          <br className="hidden sm:block" />
          Otomatize Edin
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          FijyTech olarak tekrarlayan iş süreçlerinizi otomatize ediyor, müşteri
          bulma ve destek sistemlerinizi yapay zeka ile güçlendiriyoruz. Zamandan
          tasarruf edin, gelirinizi artırın.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#teklif"
            className="w-full sm:w-auto bg-[#E24B4A] hover:bg-[#c93c3b] text-white px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200 hover:shadow-xl hover:shadow-[#E24B4A]/30 hover:-translate-y-0.5"
          >
            Ücretsiz Teklif Al
          </Link>
          <Link
            href="#nasil-calisir"
            className="w-full sm:w-auto border-2 border-gray-200 hover:border-[#E24B4A] text-gray-700 hover:text-[#E24B4A] px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200"
          >
            Nasıl Çalışır?
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto"
        >
          {[
            { value: "10x", label: "Daha Hızlı" },
            { value: "%80", label: "Maliyet Tasarrufu" },
            { value: "7/24", label: "Kesintisiz Çalışma" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-[#E24B4A]">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
