"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

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
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2"
          >
            <h3 className="text-xl font-bold mb-4">Durta Tarım</h3>
            <p className="mb-4">
              Taze ürün taşımacılığı için profesyonel lojistik çözümler.
              Güvenilir ve verimli teslimat hizmetleri.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  <social.icon className="h-5 w-5" />
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
            <h3 className="text-lg font-semibold mb-4">Hızlı Erişim</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
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
            <h3 className="text-lg font-semibold mb-4">
              Bizimle İletişime Geçin
            </h3>
            <address className="not-italic space-y-2">
              <p>29 EKİM MAHALLESİ</p>
              <p>ATATÜRK CAD.</p>
              <p>NO:239/ZH BUCA / İZMİR </p>
              <p className="mt-4">
                <a
                  href="tel:+1234567890"
                  className="hover:text-white transition-colors"
                >
                  0532 464 60 41
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@fruitlogistics.com"
                  className="hover:text-white transition-colors"
                >
                  durta-gida@outlook.com
                </a>
              </p>
            </address>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>
            © {new Date().getFullYear()} Durta Gıda. Bütün hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
