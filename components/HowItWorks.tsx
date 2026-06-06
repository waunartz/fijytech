"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Keşif Çağrısı",
    description:
      "Ücretsiz 30 dakikalık keşif görüşmesinde iş süreçlerinizi, hedeflerinizi ve otomasyon fırsatlarınızı birlikte analiz ediyoruz.",
    icon: "📞",
  },
  {
    step: "02",
    title: "Geliştirme",
    description:
      "Analize göre özelleştirilmiş AI çözümünüzü tasarlıyor, geliştiriyor ve kapsamlı testlerden geçirerek teslim ediyoruz.",
    icon: "⚡",
  },
  {
    step: "03",
    title: "Büyüme",
    description:
      "Sistemi devreye aldıktan sonra performansı izliyor, optimizasyonlar yapıyor ve işiniz büyüdükçe çözümü ölçeklendiriyoruz.",
    icon: "🚀",
  },
];

export default function HowItWorks() {
  return (
    <section id="nasil-calisir" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-[#E24B4A] font-semibold text-sm uppercase tracking-widest">
            Süreç
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Nasıl Çalışır?
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
            Sizi AI otomasyonuna taşıyan basit ve şeffaf sürecimiz.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-1/2 -translate-x-1/2 w-[calc(66%-80px)] h-0.5 bg-gradient-to-r from-[#E24B4A]/30 via-[#E24B4A] to-[#E24B4A]/30" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step circle */}
                <div className="relative z-10 w-16 h-16 bg-[#E24B4A] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-[#E24B4A]/30 mb-6">
                  <span className="text-2xl">{step.icon}</span>
                </div>

                {/* Step number badge */}
                <div className="absolute top-0 right-1/2 translate-x-12 -translate-y-1 bg-white border border-gray-200 text-[#E24B4A] text-xs font-bold px-2 py-0.5 rounded-full shadow-sm">
                  {step.step}
                </div>

                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm w-full">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
