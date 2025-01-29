"use client";

import { motion } from "framer-motion";
import { Truck, ThermometerSnowflake, Timer, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Hızlı Teslimat Ağı",
    description:
      "Ülke genelinde optimize edilmiş rotalarla verimli taşımacılık",
    icon: Truck,


  },
  {
    title: "Sıcaklık Kontrolü",
    description: "Ürünlerin taze kalmasını sağlayan gelişmiş soğutma sistemleri",
    icon: ThermometerSnowflake,
  },

  {
    title: "24/7 Hizmet",
    description: "Günün her saati destek ve izleme",
    icon: Timer,
  },

  {
    title: "Ülke Genel Kapsamı",
    description: "Tüm büyük şehirleri kapsayan geniş ağ",
    icon: Globe,
  },

];

export function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Hizmetlerimiz</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Taze ürün taşımacılığı için profesyonel lojistik çözümler.
            Güvenilir ve verimli teslimat hizmetleri.

          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <feature.icon className="w-10 h-10 mb-4 text-primary" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Marquee bölümü */}
      <div className="bg-primary/5 py-8 mt-16 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center space-x-8 mx-4 flex-shrink-0">
              <span className="text-xl font-semibold text-primary">
                Taze Meyve & Sebze Tedariki
              </span>
              <span className="text-3xl text-primary">•</span>
              <span className="text-xl font-semibold text-primary">
                Soğuk Zincir Lojistiği
              </span>
              <span className="text-3xl text-primary">•</span>
              <span className="text-xl font-semibold text-primary">
                Toptan Gıda Tedariki
              </span>
              <span className="text-3xl text-primary">•</span>
              <span className="text-xl font-semibold text-primary">
                7/24 Hizmet
              </span>
              <span className="text-3xl text-primary">•</span>
              <span className="text-xl font-semibold text-primary">
                Profesyonel Ekip
              </span>
              <span className="text-3xl text-primary">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
