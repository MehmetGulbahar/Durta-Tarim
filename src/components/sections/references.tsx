"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Building2, Timer, Award } from "lucide-react";

const partners = [
  {
    name: "Name Kurumsal Yemek Gıda A.Ş",
    logo: "/icons/gurmesin.png",
    type: "Catering",
    description: "Gurmesin Yemek Gıda A.Ş",
  },
  {
    name: "Çağdaş Market",
    logo: "/icons/cagdas.png",
    type: "Market Zinciri",
    description: "Ege bölgesinin güvenilir marketi",
  },
  {
    name: "Üçel Market",
    logo: "/icons/ucel.png",
    type: "Market Zinciri",
    description: "Kaliteli hizmet anlayışı",
  },
];

const stats = [
  {
    icon: Building2,
    value: "20+",
    label: "İş Ortağı",
  },
  {
    icon: Timer,
    value: "20+",
    label: "Yıllık Tecrübe",
  },
  {
    icon: Award,
    value: "A+",
    label: "Kalite Standardı",
  },
];

export function References() {
  return (
    <section
      id="references"
      className="py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              İş Ortaklarımız
            </span>
            <h2 className="text-3xl font-bold mb-4">
              Güvenilir İş Birliklerimiz
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Yılların verdiği tecrübe ve güvenle birlikte çalıştığımız değerli
              iş ortaklarımız
            </p>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 rounded-xl bg-white shadow-lg shadow-gray-100/50 transition-transform hover:-translate-y-1"
            >
              <stat.icon className="w-12 h-12 text-primary mr-4" />
              <div>
                <div className="text-3xl font-bold text-gray-900">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl shadow-lg shadow-gray-100/50 p-6 hover:shadow-xl transition-all duration-300"
            >
              {/* Logo */}
              <div className="relative h-20 mb-4">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-1">{partner.name}</h3>
                <p className="text-sm text-primary mb-2">{partner.type}</p>
                <p className="text-sm text-gray-600">{partner.description}</p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 -mt-2 -mr-2 w-20 h-20 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all duration-300" />
              <div className="absolute bottom-0 left-0 -mb-2 -ml-2 w-12 h-12 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/10 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
