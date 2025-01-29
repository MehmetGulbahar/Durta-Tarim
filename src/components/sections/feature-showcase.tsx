"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight, CheckCircle2 } from "lucide-react";

const benefits = [
  "Türkiye'nin her noktasına güvenli teslimat",
  "Özel soğutmalı araç filosu",
  "Profesyonel lojistik ekibi",
  "7/24 müşteri desteği",
  "Gerçek zamanlı teslimat takibi",
];

export function FeatureShowcase() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Sol Taraf - Görsel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/gallery/galeri15.jpg"
                alt="Modern Lojistik"
                fill
                className="object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
            </div>
            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl"
            >
              <div className="text-4xl font-bold text-primary mb-1">15+</div>
              <div className="text-gray-600">Yıllık Tecrübe</div>
            </motion.div>
          </motion.div>

          {/* Sağ Taraf - İçerik */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Neden Bizi Seçmelisiniz?
            </span>
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              Modern Lojistik Çözümlerle{" "}
              <span className="text-primary">Yanınızdayız</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Taze meyve ve sebzelerinizi en modern ekipmanlarla, soğuk zinciri
              bozmadan, zamanında teslim ediyoruz. Profesyonel ekibimiz ve geniş
              araç filomuzla hizmetinizdeyiz.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Button size="lg" className="text-lg px-8" asChild>
                <a href="#contact">
                  İletişime Geç <ChevronRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
