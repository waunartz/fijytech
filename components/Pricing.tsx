"use client";

import { useState } from "react";
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

type Status = "idle" | "loading" | "success" | "error";

export default function Pricing() {
  const [form, setForm] = useState({
    isim: "",
    email: "",
    telefon: "",
    mesaj: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ isim: "", email: "", telefon: "", mesaj: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
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
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto bg-gray-50 rounded-2xl p-8 border border-gray-100"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
            Ücretsiz Teklif Formu
          </h3>
          <p className="text-gray-500 text-sm text-center mb-8">
            Formu doldurun, 24 saat içinde size dönelim.
          </p>

          {status === "success" ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">✅</div>
              <p className="text-gray-900 font-semibold text-lg">Talebiniz alındı!</p>
              <p className="text-gray-500 text-sm mt-2">
                En kısa sürede size geri döneceğiz.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    İsim Soyisim <span className="text-[#E24B4A]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={form.isim}
                    onChange={(e) => setForm({ ...form, isim: e.target.value })}
                    placeholder="Ahmet Yılmaz"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E24B4A] focus:outline-none focus:ring-2 focus:ring-[#E24B4A]/10 text-sm bg-white transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    E-posta <span className="text-[#E24B4A]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="ahmet@sirket.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E24B4A] focus:outline-none focus:ring-2 focus:ring-[#E24B4A]/10 text-sm bg-white transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Telefon
                </label>
                <input
                  type="tel"
                  value={form.telefon}
                  onChange={(e) => setForm({ ...form, telefon: e.target.value })}
                  placeholder="+90 555 000 00 00"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E24B4A] focus:outline-none focus:ring-2 focus:ring-[#E24B4A]/10 text-sm bg-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Projeniz Hakkında <span className="text-[#E24B4A]">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.mesaj}
                  onChange={(e) => setForm({ ...form, mesaj: e.target.value })}
                  placeholder="Hangi süreçleri otomatize etmek istiyorsunuz? Kısaca anlatın..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E24B4A] focus:outline-none focus:ring-2 focus:ring-[#E24B4A]/10 text-sm bg-white transition-colors resize-none"
                />
              </div>

              {status === "error" && (
                <p className="text-red-500 text-sm text-center">
                  Bir hata oluştu. Lütfen tekrar deneyin.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-[#E24B4A] hover:bg-[#c93c3b] disabled:opacity-60 text-white py-3.5 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-[#E24B4A]/30"
              >
                {status === "loading" ? "Gönderiliyor..." : "Ücretsiz Teklif Al"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
