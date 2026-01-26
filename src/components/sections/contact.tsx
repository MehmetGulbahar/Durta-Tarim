"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send, MessageCircle, ArrowUpRight } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

export function Contact() {
  const [state, handleSubmit] = useForm("xeoekkra");

  const contactInfo = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: "0532 464 60 41",
      href: "https://wa.me/905324646041",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Phone,
      title: "Telefon",
      details: "0532 464 60 41",
      href: "tel:+905324646041",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: Mail,
      title: "E-posta",
      details: "durta-gida@outlook.com",
      href: "mailto:durta-gida@outlook.com",
      color: "from-purple-500 to-violet-600",
    },
    {
      icon: MapPin,
      title: "Adres",
      details: "29 EKİM MAHALLESİ ATATÜRK CAD. NO:239/ZH BUCA / İZMİR",
      href: "https://maps.google.com/?q=29 EKİM MAHALLESİ ATATÜRK CAD. NO:239/ZH BUCA İZMİR",
      color: "from-orange-500 to-red-600",
    },
  ];

  return (
    <section
      id="contact"
      className="py-28 md:py-36 bg-gradient-to-b  to-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-primary" />
              İletişim
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Bizimle İletişime Geçin
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Soğuk zincir lojistik ihtiyaçlarınız için bize ulaşın
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target={item.icon === MapPin ? "_blank" : undefined}
                rel={item.icon === MapPin ? "noopener noreferrer" : undefined}
                className="block group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-2xl p-6 transition-all duration-500 hover:shadow-xl hover:shadow-gray-100/80 hover:-translate-y-1 border border-gray-100 group-hover:border-primary/20 relative overflow-hidden">
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
                  
                  <div className="flex items-start gap-5 relative">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} p-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                      <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed break-words">{item.details}</p>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-gray-300 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 flex-shrink-0" />
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl shadow-gray-100/50 p-8 md:p-10 border border-gray-100 relative overflow-hidden"
          >
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-[100px]" />
            
            {state.succeeded ? (
              <motion.div 
                className="text-center py-12"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Send className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Teşekkürler!
                </h3>
                <p className="text-gray-600 max-w-sm mx-auto">
                  Mesajınız başarıyla gönderildi. En kısa sürede size dönüş
                  yapacağız.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    İsim
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="Adınız Soyadınız"
                    className="w-full px-5 py-4 rounded-xl border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 bg-gray-50/50 text-base"
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    E-posta
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="ornek@email.com"
                    className="w-full px-5 py-4 rounded-xl border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 bg-gray-50/50 text-base"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Mesaj
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Mesajınızı buraya yazın..."
                    className="w-full px-5 py-4 rounded-xl border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 bg-gray-50/50 min-h-[140px] resize-y text-base"
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-14 text-base font-semibold bg-primary hover:bg-primary/90 text-white rounded-xl transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
                  disabled={state.submitting}
                >
                  {state.submitting ? (
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Gönderiliyor...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-3">
                      <span>Mesaj Gönder</span>
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
  );
}
