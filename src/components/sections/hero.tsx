"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Truck, Timer, ThermometerSnowflake } from "lucide-react";

// Animasyon varyantları
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

// Background pulse animasyonu
const pulseVariants = {
  pulse: {
    scale: [1, 1.05, 1],
    opacity: [0.5, 0.8, 0.5],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const stats = [
  {
    icon: Truck,
    value: "50+",
    label: "Araç Filosu",
  },
  {
    icon: Timer,
    value: "24/7",
    label: "Hizmet",
  },
  {
    icon: ThermometerSnowflake,
    value: "-18°C",
    label: "Soğuk Zincir",
  },
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 md:pt-20">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.img
          src="/images/Wallpaper.jpg"
          alt="Logistics Background"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column - Text Content */}
          <div className="text-white">
            <motion.div variants={itemVariants}>
              <motion.span
                className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium mb-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Türkiye'nin Lider Tedarik Zinciri Firması
              </motion.span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Doğanın Tazeliği,{" "}
                <motion.span
                  className="text-primary"
                  animate={{
                    textShadow: [
                      "0 0 8px rgb(30 153 81 / 0)",
                      "0 0 16px rgb(30 153 81 / 0.5)",
                      "0 0 8px rgb(30 153 81 / 0)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Doğrudan Kapınıza
                </motion.span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-xl">
                Tazelik ve Lezzet, Güven ve Hızla Kapınızda. Modern filomuz ve
                uzman ekibimizle yanınızdayız.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 mb-12"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="text-lg px-8" asChild>
                  <a href="#contact">
                    Teklif Al <ChevronRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 bg-white/10 hover:bg-white/20 border-white/20"
                  asChild
                >
                  <a href="#features">Hizmetlerimiz</a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8"
              variants={containerVariants}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 rounded-lg bg-white/10 backdrop-blur-sm"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255,255,255,0.15)",
                    transition: { duration: 0.2 },
                  }}
                >
                  <stat.icon className="w-6 h-6 mx-auto mb-2" />
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Decorative Element */}
          <motion.div
            variants={itemVariants}
            className="relative z-10 flex justify-center lg:justify-self-end xl:justify-self-center"
          >
            <div className="relative w-fit">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl"
                variants={pulseVariants}
                animate="pulse"
              />
              <motion.div
                className="relative bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.img
                  src="/images/logistic.jpg"
                  alt="Logistics Illustration"
                  className="w-[250px] h-auto sm:w-[280px] md:w-[320px] lg:w-[400px] xl:w-[480px] rounded-xl object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{
          y: [0, 10, 0],
          opacity: [1, 0.5, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
          <div className="w-1.5 h-3 bg-white rounded-full mx-auto" />
        </div>
      </motion.div>
    </section>
  );
}
