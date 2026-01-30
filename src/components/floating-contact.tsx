"use client";

import { useState } from "react";
import { Phone, MessageCircle, Instagram, X, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const contactOptions = [
  {
    name: "WhatsApp",
    icon: MessageCircle,
    href: "https://wa.me/905324646041",
    color: "bg-green-500 hover:bg-green-600",
  },
  {
    name: "Telefon",
    icon: Phone,
    href: "tel:+905324646041",
    color: "bg-blue-500 hover:bg-blue-600",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/durtameyve/",
    color: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 hover:opacity-90",
  },
  {
    name: "E-posta",
    icon: Mail,
    href: "mailto:durta-gida@outlook.com",
    color: "bg-red-500 hover:bg-red-600",
  },
];

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Contact Options */}
      <div
        className={cn(
          "flex flex-col gap-3 transition-all duration-300",
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        )}
      >
        {contactOptions.map((option, index) => (
          <a
            key={option.name}
            href={option.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-full text-white shadow-lg transition-all duration-300 hover:scale-105",
              option.color
            )}
            style={{
              transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
            }}
          >
            <option.icon className="w-5 h-5" />
            <span className="text-sm font-medium whitespace-nowrap">
              {option.name}
            </span>
          </a>
        ))}
      </div>

      {/* Main FAB Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110",
          isOpen
            ? "bg-gray-700 hover:bg-gray-800 rotate-0"
            : "bg-green-500 hover:bg-green-600 rotate-0"
        )}
        aria-label={isOpen ? "Kapat" : "İletişim"}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white transition-transform duration-300" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white transition-transform duration-300" />
        )}
      </button>
    </div>
  );
}
