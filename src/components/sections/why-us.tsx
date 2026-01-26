"use client"

import { motion } from "framer-motion"
import { Shield, Truck, ThermometerSnowflake, Clock, MapPin, HeartHandshake } from "lucide-react"

const reasons = [
  {
    icon: Shield,
    title: "Güvenilir Hizmet",
    description: "20 yıllık tecrübemizle soğuk zincir lojistiğinde güvenilir çözümler sunuyoruz.",
    gradient: "from-emerald-500 to-green-600",
  },
  {
    icon: Truck,
    title: "Modern Filo",
    description: "Tam donanımlı frigorifik araçlarımızla ürünlerinizi güvenle taşıyoruz.",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    icon: ThermometerSnowflake,
    title: "Sıcaklık Kontrolü",
    description: "7/24 sıcaklık takip sistemi ile ürünleriniz kontrol altında.",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    icon: Clock,
    title: "Zamanında Teslimat",
    description: "Optimize edilmiş rota planlaması ile tam zamanında teslimat.",
    gradient: "from-orange-500 to-red-600",
  },
  {
    icon: MapPin,
    title: "Geniş Hizmet Ağı",
    description: "Türkiye genelinde yaygın hizmet ağı ile her noktaya ulaşım.",
    gradient: "from-purple-500 to-violet-600",
  },
  {
    icon: HeartHandshake,
    title: "Müşteri Odaklı",
    description: "Müşteri memnuniyeti odaklı profesyonel hizmet anlayışı.",
    gradient: "from-pink-500 to-rose-600",
  },
]

export function WhyUs() {
  return (
    <section className="py-28 md:py-36 bg-gradient-to-b  to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] translate-x-1/2" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Neden Biz?
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Neden Bizi Seçmelisiniz?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Soğuk zincir lojistiğinde fark yaratan hizmet anlayışımız
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden h-full">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
                
                {/* Icon with gradient border */}
                <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${reason.gradient} p-0.5 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                    <reason.icon className="w-7 h-7 text-primary" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-primary transition-colors duration-300">
                  {reason.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>

                {/* Decorative corner elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-8 translate-x-8" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-6 -translate-x-6" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 