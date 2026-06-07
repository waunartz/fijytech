"use client";

import { motion } from "framer-motion";

const paragraphs = [
  "Türkiye'de işletmelerin büyük çoğunluğu hâlâ manuel süreçlerle zaman kaybediyor. Saatler veri girişine, günler takibe, haftalar raporlamaya gidiyor. Oysa yapay zeka bu işleri saniyeler içinde yapabiliyor.",
  "Fijytech olarak tek bir amacımız var: Her ölçekteki işletmenin yapay zeka ve otomasyon gücüne erişimini sağlamak. Büyük şirketlerin ayrıcalığı olan teknolojiyi, KOBİ'lere ve girişimlere ulaştırmak.",
  "Kod yazmayı değil, sonuç üretmeyi seviyoruz. Müşterilerimizin rakiplerini geride bırakmasını, ekiplerinin gerçek işe odaklanmasını, sistemlerin onlar uyurken çalışmasını istiyoruz.",
  "Bu bir yazılım şirketi değil. Bu bir büyüme ortaklığı.",
];

export default function Mission() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Title */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-[#E24B4A] font-semibold text-sm uppercase tracking-widest">
              Misyonumuz
            </span>
            <h2 className="text-[2rem] sm:text-5xl lg:text-6xl font-bold text-gray-900 mt-4 leading-tight">
              Neden
              <br />
              <span className="text-[#E24B4A]">Fijytech?</span>
            </h2>
          </motion.div>

          {/* Right: Manifesto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="relative border-l-4 border-[#E24B4A] pl-8"
          >
            <div className="space-y-5">
              {paragraphs.map((text, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className={`text-gray-700 leading-relaxed ${
                    i === paragraphs.length - 1
                      ? "text-lg font-semibold text-gray-900"
                      : "text-base"
                  }`}
                >
                  {text}
                </motion.p>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-8 text-[#E24B4A] font-semibold text-sm"
            >
              — Fijytech Ekibi
            </motion.p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
