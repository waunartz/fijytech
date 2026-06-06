"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="cta" className="py-20 lg:py-28 bg-[#E24B4A] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-white/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/3 rounded-full" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            Ücretsiz Keşif Çağrısı
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            İşletmenizi AI ile Dönüştürmeye
            <br />
            Hazır mısınız?
          </h2>

          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            30 dakikalık ücretsiz keşif çağrısında iş süreçlerinizi analiz
            ediyoruz ve size özel otomasyon yol haritası çıkarıyoruz. Taahhüt
            yok, tamamen ücretsiz.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="mailto:sarpsensan@fijytech.com"
              className="w-full sm:w-auto bg-white hover:bg-gray-100 text-[#E24B4A] px-8 py-4 rounded-xl font-bold text-base transition-all duration-200 hover:shadow-2xl"
            >
              Ücretsiz Keşif Çağrısı Başlat
            </Link>
            <Link
              href="mailto:sarpsensan@fijytech.com"
              className="w-full sm:w-auto border-2 border-white/50 hover:border-white text-white px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200"
            >
              E-posta Gönder
            </Link>
          </div>

          <p className="text-white/60 text-sm mt-6">
            24 saat içinde geri dönüş garantisi
          </p>
        </motion.div>
      </div>
    </section>
  );
}
