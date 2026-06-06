"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const plans = [
  {
    type: "Proje Bazlı",
    icon: "🎯",
    badge: null,
    description:
      "Belirli bir ihtiyaç için tek seferlik AI otomasyon projesi. Net kapsam, net teslimat.",
    features: [
      "Tek seferlik geliştirme",
      "Kapsamlı analiz & tasarım",
      "Test ve canlıya alma",
      "2 ay teknik destek",
      "Kaynak kod teslimi",
    ],
    ideal: "Tek projeye odaklanan işletmeler",
  },
  {
    type: "Aylık Abonelik",
    icon: "🔄",
    badge: "Popüler",
    description:
      "Sürekli büyüyen ve optimize olan AI altyapısı. Her ay yeni otomasyon, sürekli iyileştirme.",
    features: [
      "Aylık yeni otomasyon geliştirme",
      "Sürekli optimizasyon & bakım",
      "Öncelikli teknik destek",
      "Aylık performans raporu",
      "Sınırsız revizyon hakkı",
    ],
    ideal: "Hızlı büyüyen ve sürekli ölçeklenen işletmeler",
  },
];

export default function Pricing() {
  return (
    <section id="teklif" className="py-20 lg:py-28 bg-white">
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
            Fiyatlandırma
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Projenize Özel{" "}
            <span className="text-[#E24B4A]">Teklif Alın</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Her proje kendine özgüdür. Size en uygun modeli seçin, ücretsiz
            keşif çağrısıyla kişiselleştirilmiş teklifinizi alın.
          </p>
        </motion.div>

        {/* Plans */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.type}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative rounded-2xl p-8 border-2 transition-all duration-300 ${
                plan.badge
                  ? "border-[#E24B4A] shadow-xl shadow-[#E24B4A]/10 bg-white"
                  : "border-gray-100 bg-gray-50 hover:border-gray-200"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#E24B4A] text-white text-xs font-bold px-4 py-1 rounded-full">
                  {plan.badge}
                </div>
              )}

              <div className="text-3xl mb-4">{plan.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {plan.type}
              </h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-[#E24B4A]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-3 h-3 text-[#E24B4A]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <p className="text-xs text-gray-400 mb-4">
                <span className="font-semibold">İdeal:</span> {plan.ideal}
              </p>

              <Link
                href="#cta"
                className={`block w-full text-center py-3.5 rounded-xl font-semibold transition-all duration-200 ${
                  plan.badge
                    ? "bg-[#E24B4A] hover:bg-[#c93c3b] text-white shadow-lg shadow-[#E24B4A]/25 hover:shadow-xl hover:shadow-[#E24B4A]/30"
                    : "bg-gray-900 hover:bg-gray-800 text-white"
                }`}
              >
                Ücretsiz Teklif Al
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
