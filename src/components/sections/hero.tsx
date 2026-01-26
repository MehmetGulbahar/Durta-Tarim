"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Truck, Shield, Clock } from "lucide-react";

// Animasyon varyantları
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Background pulse animasyonu
const pulseVariants = {
  pulse: {
    scale: [1, 1.03, 1],
    opacity: [0.4, 0.6, 0.4],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const statsData = [
  { icon: Truck, value: "500+", label: "Günlük Teslimat" },
  { icon: Shield, value: "20+", label: "Yıl Deneyim" },
  { icon: Clock, value: "7/24", label: "Hizmet" },
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 md:pt-20 overflow-hidden">
      {/* Background Image with Enhanced Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/60 to-primary/20 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        />
        {/* Decorative gradient orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] z-5" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px] z-5" />
        
        <motion.img
          src="/images/Wallpaper.jpg"
          alt="Logistics Background"
          className="w-full h-full object-cover"
          initial={{ scale: 1.15, filter: "blur(4px)" }}
          animate={{ scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column - Text Content */}
          <div className="text-white max-w-2xl">
            <motion.div variants={itemVariants}>
              <motion.span
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md text-sm font-medium mb-6 border border-white/10"
                whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.15)" }}
              >
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Türkiye'nin Lider Tedarik Zinciri Firması
              </motion.span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight"
            >
              Doğanın Tazeliği,{" "}
              <span className="relative inline-block">
                <span className="text-primary">Doğrudan Kapınıza</span>
                <motion.span 
                  className="absolute -bottom-2 left-0 h-1 bg-primary rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                />
              </span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl mb-10 text-gray-300 max-w-xl leading-relaxed"
            >
              Tazelik ve lezzet, güven ve hızla kapınızda. Modern filomuz ve
              uzman ekibimizle her zaman yanınızdayız.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 mb-14"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button size="lg" className="text-base md:text-lg px-8 py-6 rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-shadow" asChild>
                  <a href="#contact">
                    Teklif Al <ChevronRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base md:text-lg px-8 py-6 rounded-xl bg-white/5 hover:bg-white/15 border-white/20 backdrop-blur-sm text-white"
                  asChild
                >
                  <a href="#features">Hizmetlerimiz</a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats Row */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-6 md:gap-10"
            >
              {statsData.map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.15, duration: 0.5 }}
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center border border-primary/30">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xl md:text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs md:text-sm text-gray-400">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Decorative Element (Desktop) */}
          <motion.div
            variants={itemVariants}
            className="relative z-10 hidden lg:flex justify-center xl:justify-end"
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-8 bg-gradient-to-br from-primary/30 via-primary/10 to-transparent rounded-3xl blur-3xl"
                variants={pulseVariants}
                animate="pulse"
              />
              <motion.div
                className="relative bg-white/5 backdrop-blur-md p-3 rounded-3xl border border-white/10 shadow-2xl"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.img
                  src="/images/logistic.jpg"
                  alt="Logistics Illustration"
                  className="w-[320px] md:w-[380px] lg:w-[420px] xl:w-[500px] h-auto rounded-2xl object-cover"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Mobile Image - Visible only on mobile/tablet */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="lg:hidden mt-10 relative z-10"
        >
          <div className="relative mx-auto max-w-md">
            <motion.div
              className="absolute -inset-4 bg-gradient-to-br from-primary/30 via-primary/10 to-transparent rounded-3xl blur-2xl"
              variants={pulseVariants}
              animate="pulse"
            />
            <div className="relative bg-white/5 backdrop-blur-md p-2 sm:p-3 rounded-2xl border border-white/10 shadow-2xl">
              <img
                src="/images/logistic.jpg"
                alt="Logistics Illustration"
                className="w-full h-auto rounded-xl object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -10 }}
        animate={{
          opacity: 1,
          y: [0, 8, 0],
        }}
        transition={{
          opacity: { delay: 1.5, duration: 0.5 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <div className="w-7 h-11 border-2 border-white/30 rounded-full p-1 backdrop-blur-sm">
          <motion.div 
            className="w-1.5 h-3 bg-white rounded-full mx-auto"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
