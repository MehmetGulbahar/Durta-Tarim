"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "#home", label: "Ana Sayfa" },
  { href: "#features", label: "Hizmetler" },
  { href: "#gallery", label: "Galeri" },
  { href: "#contact", label: "İletişim" },
];

const navVariants = {
  hidden: { y: -100 },
  visible: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

const menuItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg shadow-gray-100/50 py-3"
            : "bg-white py-4"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="relative group flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <span className="text-primary font-bold text-lg">D</span>
                </div>
                <span className="font-bold text-xl">
                  <span className="text-primary">DURTA</span>{" "}
                  <span className="text-gray-800">TARIM</span>
                </span>
              </Link>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  variants={menuItemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="relative px-4 py-2 text-sm font-medium text-gray-600 hover:text-primary transition-colors rounded-lg hover:bg-gray-50 group"
                  >
                    {item.label}
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary rounded-full group-hover:w-6 transition-all duration-300" />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Contact Button & Mobile Menu Button */}
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="hidden md:block"
              >
                <Button
                  asChild
                  className="bg-primary hover:bg-primary/90 text-white rounded-xl px-6 py-5 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/25 transition-all group"
                >
                  <Link href="#contact" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>Teklif Al</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </Button>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="md:hidden p-2.5 rounded-xl text-gray-800 hover:bg-gray-100 transition-colors border border-gray-100"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="fixed inset-x-0 top-[68px] p-4 bg-white/95 backdrop-blur-md shadow-xl shadow-gray-200/50 md:hidden z-40 border-t border-gray-100"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className="flex items-center justify-between text-gray-700 hover:text-primary transition-colors px-4 py-3 rounded-xl hover:bg-gray-50 font-medium group"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="pt-2"
              >
                <Button
                  asChild
                  className="bg-primary hover:bg-primary/90 text-white w-full rounded-xl shadow-lg shadow-primary/20 py-6 text-base font-semibold"
                >
                  <Link href="#contact" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    Teklif Al
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
