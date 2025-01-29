"use client"

import { motion } from "framer-motion"
import { Shield, Truck, ThermometerSnowflake, Clock, MapPin, HeartHandshake } from "lucide-react"

const reasons = [
  {
    icon: Shield,
    title: "Güvenilir Hizmet",
    description: "15 yıllık tecrübemizle soğuk zincir lojistiğinde güvenilir çözümler sunuyoruz.",
  },
  {
    icon: Truck,
    title: "Modern Filo",
    description: "Tam donanımlı frigorifik araçlarımızla ürünlerinizi güvenle taşıyoruz.",
  },
  {
    icon: ThermometerSnowflake,
    title: "Sıcaklık Kontrolü",
    description: "7/24 sıcaklık takip sistemi ile ürünleriniz kontrol altında.",
  },
  {
    icon: Clock,
    title: "Zamanında Teslimat",
    description: "Optimize edilmiş rota planlaması ile tam zamanında teslimat.",
  },
  {
    icon: MapPin,
    title: "Geniş Hizmet Ağı",
    description: "Türkiye genelinde yaygın hizmet ağı ile her noktaya ulaşım.",
  },
  {
    icon: HeartHandshake,
    title: "Müşteri Odaklı",
    description: "Müşteri memnuniyeti odaklı profesyonel hizmet anlayışı.",
  },
]

export function WhyUs() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Neden Biz?
            </span>
            <h2 className="text-3xl font-bold mb-4">Neden Bizi Seçmelisiniz?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Soğuk zincir lojistiğinde fark yaratan hizmet anlayışımız
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl p-8 shadow-lg shadow-gray-100/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-primary/10 rounded-lg p-4 w-fit mb-6 group-hover:bg-primary/20 transition-colors">
                <reason.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 -mt-2 -mr-2 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 