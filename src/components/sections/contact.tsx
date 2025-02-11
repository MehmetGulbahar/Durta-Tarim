"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react"
import { useForm, ValidationError } from '@formspree/react'

export function Contact() {
  const [state, handleSubmit] = useForm("xeoekkra")

  const contactInfo = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: "0532 464 60 41",
      href: "https://wa.me/905324646041",
    },
    {
      icon: Phone,
      title: "Telefon",
      details: "0532 464 60 41",
      href: "tel:+905324646041",
    },
    {
      icon: Mail,
      title: "E-posta",
      details: "durta-gida@outlook.com",
      href: "mailto:durta-gida@outlook.com",
    },
    {
      icon: MapPin,
      title: "Adres",
      details: "29 EKİM MAHALLESİ ATATÜRK CAD. NO:239/ZH BUCA / İZMİR",
      href: "https://maps.google.com/?q=29 EKİM MAHALLESİ ATATÜRK CAD. NO:239/ZH BUCA İZMİR",
    },
  ]

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              İletişim
            </span>
            <h2 className="text-3xl font-bold mb-4">Bizimle İletişime Geçin</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Soğuk zincir lojistik ihtiyaçlarınız için bize ulaşın
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={item.icon === MapPin ? "_blank" : undefined}
                rel={item.icon === MapPin ? "noopener noreferrer" : undefined}
                className="block group"
              >
                <div className="bg-white rounded-xl shadow-lg shadow-gray-100/50 p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 rounded-lg p-3">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.details}</p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg shadow-gray-100/50 p-8"
          >
            {state.succeeded ? (
              <div className="text-center p-8">
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  Teşekkürler!
                </h3>
                <p className="text-gray-600">
                  Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      İsim
                    </label>
                    <Input
                      id="name"
                      name="name"
                      required
                      placeholder="Adınız Soyadınız"
                      className="w-full px-4 py-3 rounded-xl border-gray-200 focus:border-primary focus:ring-primary transition-colors duration-200 bg-gray-50/50"
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-sm mt-1" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-posta
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="ornek@email.com"
                      className="w-full px-4 py-3 rounded-xl border-gray-200 focus:border-primary focus:ring-primary transition-colors duration-200 bg-gray-50/50"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm mt-1" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mesaj
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Mesajınızı buraya yazın..."
                      className="w-full px-4 py-3 rounded-xl border-gray-200 focus:border-primary focus:ring-primary transition-colors duration-200 bg-gray-50/50 min-h-[150px] resize-y"
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm mt-1" />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 text-base font-medium bg-primary hover:bg-primary/90 text-white rounded-xl transition-all duration-200 transform hover:scale-[1.02]"
                  disabled={state.submitting}
                >
                  {state.submitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin" />
                      <span>Gönderiliyor...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <span>Gönder</span>
                      <Send className="w-5 h-5" />
                    </div>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
} 