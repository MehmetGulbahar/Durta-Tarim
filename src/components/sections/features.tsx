"use client";

import { motion } from "framer-motion";
import { Truck, ThermometerSnowflake, Timer, Globe, ArrowRight } from "lucide-react";

const features = [
  {
    title: "Hızlı Teslimat Ağı",
    description:
      "Ülke genelinde optimize edilmiş rotalarla verimli taşımacılık",
    icon: Truck,
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Sıcaklık Kontrolü",
    description: "Ürünlerin taze kalmasını sağlayan gelişmiş soğutma sistemleri",
    icon: ThermometerSnowflake,
    color: "from-blue-500 to-cyan-600",
  },
  {
    title: "24/7 Hizmet",
    description: "Günün her saati destek ve izleme",
    icon: Timer,
    color: "from-orange-500 to-amber-600",
  },
  {
    title: "Ülke Geneli Kapsam",
    description: "Tüm büyük şehirleri kapsayan geniş ağ",
    icon: Globe,
    color: "from-purple-500 to-violet-600",
  },
];

export function Features() {
  return (
    <section id="features" className="py-28 md:py-36 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      
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
              Profesyonel Çözümler
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Hizmetlerimiz
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Taze ürün taşımacılığı için profesyonel lojistik çözümler.
              Güvenilir ve verimli teslimat hizmetleri.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-full bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-100/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
                
                {/* Icon container */}
                <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {feature.description}
                </p>
                
                {/* Learn more link */}
                <div className="flex items-center text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm">Daha fazla</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
                
                {/* Decorative corner */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Marquee bölümü */}
      <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 py-10 mt-24 overflow-hidden relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
        
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center space-x-10 mx-6 flex-shrink-0">
              <span className="text-xl font-semibold text-primary/80">
                Taze Meyve & Sebze Tedariki
              </span>
              <span className="w-2 h-2 rounded-full bg-primary/40" />
              <span className="text-xl font-semibold text-primary/80">
                Soğuk Zincir Lojistiği
              </span>
              <span className="w-2 h-2 rounded-full bg-primary/40" />
              <span className="text-xl font-semibold text-primary/80">
                Toptan Gıda Tedariki
              </span>
              <span className="w-2 h-2 rounded-full bg-primary/40" />
              <span className="text-xl font-semibold text-primary/80">
                7/24 Hizmet
              </span>
              <span className="w-2 h-2 rounded-full bg-primary/40" />
              <span className="text-xl font-semibold text-primary/80">
                Profesyonel Ekip
              </span>
              <span className="w-2 h-2 rounded-full bg-primary/40" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
