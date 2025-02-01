"use client"

import { motion } from "framer-motion"

export function Map() {
  return (
    <section className="relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="h-[400px] w-full"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3126.864789384329!2d27.180491676944506!3d38.39397047125685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd8e76e3c0001%3A0x7c3138cc270c2979!2s29%20Ekim%2C%20Atat%C3%BCrk%20Cd.%20NO%3A239%20G%20101%2C%2035395%20Buca%2F%C4%B0zmir!5e0!3m2!1str!2str!4v1709913892726!5m2!1str!2str"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  )
} 