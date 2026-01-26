"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight, CheckCircle2, ArrowUpRight } from "lucide-react";

const benefits = [
  "Türkiye'nin her noktasına güvenli teslimat",
  "Özel soğutmalı araç filosu",
  "Profesyonel lojistik ekibi",
  "7/24 müşteri desteği",
  "Gerçek zamanlı teslimat takibi",
];

export function FeatureShowcase() {
  return (
    <section className="py-28 md:py-36 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Sol Taraf - Görsel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/50">
              <Image
                src="/images/about.png"
                alt="Modern Lojistik"
                fill
                className="object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-transparent" />
              
              {/* Pattern overlay */}
              <div className="absolute inset-0 opacity-20" style={{ 
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '24px 24px'
              }} />
            </div>
            
            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <ArrowUpRight className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-1">20+</div>
                  <div className="text-gray-600 font-medium">Yıllık Tecrübe</div>
                </div>
              </div>
            </motion.div>

            {/* Secondary floating element */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              className="absolute top-6 -left-4 md:-left-6 bg-primary text-white px-5 py-3 rounded-xl shadow-lg"
            >
              <div className="text-sm font-medium">Müşteri Memnuniyeti</div>
              <div className="text-2xl font-bold">%98</div>
            </motion.div>
          </motion.div>

          {/* Sağ Taraf - İçerik */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="lg:pl-8"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Neden Bizi Seçmelisiniz?
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-gray-900">
              Modern Lojistik Çözümlerle{" "}
              <span className="text-primary relative">
                Yanınızdayız
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 8.5C50 2 150 2 198 8.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-primary/30"/>
                </svg>
              </span>
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-lg">
              Taze meyve ve sebzelerinizi en modern ekipmanlarla, soğuk zinciri
              bozmadan, zamanında teslim ediyoruz. Profesyonel ekibimiz ve geniş
              araç filomuzla hizmetinizdeyiz.
            </p>

            <div className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.4, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Button 
                size="lg" 
                className="text-base px-8 py-6 rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/25 transition-all group" 
                asChild
              >
                <a href="#contact" className="flex items-center gap-2">
                  İletişime Geç 
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
