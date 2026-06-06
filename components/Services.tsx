"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: "🎯",
    title: "Müşteri Bulma Otomasyonu",
    description:
      "Hedef kitlenizi otomatik olarak belirleyin, sosyal medya ve web kaynaklarından potansiyel müşterileri AI ile filtreleyin ve CRM'inize aktarın.",
  },
  {
    icon: "⚙️",
    title: "AI İş Süreci Otomasyonu",
    description:
      "Tekrarlayan manuel görevlerinizi otomatize edin. Fatura işleme, raporlama, e-posta yanıtlama ve daha fazlası artık otomatik çalışır.",
  },
  {
    icon: "💻",
    title: "Web Sitesi & SaaS Geliştirme",
    description:
      "Modern, hızlı ve ölçeklenebilir web uygulamaları ve SaaS platformları geliştiriyoruz. Next.js, React ve en güncel teknolojilerle.",
  },
  {
    icon: "🤖",
    title: "AI Müşteri Destek Ajanı",
    description:
      "7/24 kesintisiz çalışan, şirketinizi içten tanıyan AI chatbot ile müşteri sorularını anında yanıtlayın ve destek maliyetlerini düşürün.",
  },
  {
    icon: "📊",
    title: "Veri Toplama & Analiz",
    description:
      "Web scraping, API entegrasyonları ve veri boru hatlarıyla ihtiyaç duyduğunuz verileri toplayın, temizleyin ve analiz edin.",
  },
  {
    icon: "📣",
    title: "İçerik & Pazarlama Otomasyonu",
    description:
      "Blog yazıları, sosyal medya paylaşımları ve e-posta kampanyalarını AI ile üretin, planlayın ve otomatik olarak yayınlayın.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function Services() {
  return (
    <section id="hizmetler" className="py-20 lg:py-28 bg-white">
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
            Hizmetlerimiz
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
            İşinizi Büyütecek{" "}
            <span className="text-[#E24B4A]">AI Çözümleri</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Her işletmenin ihtiyacına özel, ölçülebilir sonuçlar üreten yapay
            zeka otomasyon hizmetleri sunuyoruz.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#E24B4A]/30 hover:shadow-xl hover:shadow-[#E24B4A]/5 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#E24B4A]/10 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:bg-[#E24B4A]/20 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#E24B4A] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
