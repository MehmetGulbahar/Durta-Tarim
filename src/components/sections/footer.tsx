"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Instagram, ArrowUpRight, MapPin, Phone, Mail } from "lucide-react";

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/18KKKeBFfc/",
    icon: Facebook,
  },
  {
    name: "Instagram",
    href: "#",
    icon: Instagram,
  },
];

const quickLinks = [
  { name: "Hakkımızda", href: "#about" },
  { name: "Hizmetler", href: "#features" },
  { name: "Galeri", href: "#gallery" },
  { name: "İletişim", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Link href="/" className="inline-block mb-6">
              <span className="font-bold text-2xl">
                <span className="text-primary">DURTA</span>{" "}
                <span className="text-white">TARIM</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Taze ürün taşımacılığı için profesyonel lojistik çözümler.
              Güvenilir ve verimli teslimat hizmetleri.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-primary/20 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                >
                  <social.icon className="h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" />
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white mb-6">Hızlı Erişim</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors duration-300 group"
                  >
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white mb-6">Hizmetlerimiz</h3>
            <ul className="space-y-3">
              {['Soğuk Zincir Lojistik', 'Taze Ürün Tedariki', 'Toptan Gıda', 'Depo Hizmetleri'].map((service) => (
                <li key={service}>
                  <span className="flex items-center gap-2 text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white mb-6">
              İletişim Bilgileri
            </h3>
            <div className="space-y-4">
              <a href="https://maps.google.com/?q=29 EKİM MAHALLESİ ATATÜRK CAD. NO:239/ZH BUCA İZMİR" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-gray-400 hover:text-gray-300 transition-colors group">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">29 Ekim Mahallesi, Atatürk Cad. No:239/ZH Buca / İzmir</span>
              </a>
              <a href="tel:+905324646041" className="flex items-center gap-3 text-gray-400 hover:text-gray-300 transition-colors">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span>0532 464 60 41</span>
              </a>
              <a href="mailto:durta-gida@outlook.com" className="flex items-center gap-3 text-gray-400 hover:text-gray-300 transition-colors">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span>durta-gida@outlook.com</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Durta Gıda. Tüm hakları saklıdır.
            </p>
            <p className="text-gray-600 text-sm">
              Kalite ve güvenle hizmetinizdeyiz
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
