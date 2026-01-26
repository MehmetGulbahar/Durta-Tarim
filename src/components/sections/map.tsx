"use client"

import { motion } from "framer-motion"
import { MapPin, Navigation, Phone, Clock } from "lucide-react"

export function Map() {
  const address = "29 Ekim, Atatürk Cd. NO:239 G 101, 35395 Buca/İzmir";
  const googleMapsUrl = "https://www.google.com/maps/place/29+Ekim,+Atat%C3%BCrk+Cd.+NO:239+G+101,+35395+Buca%2F%C4%B0zmir";
  
  return (
    <section className="relative bg-gradient-to-b from-white to-gray-100">
      {/* Section header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            <MapPin className="w-4 h-4" />
            Lokasyon
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Bizi <span className="text-primary">Ziyaret Edin</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Taze ürünlerimizi yerinde görün, kalitemizi keşfedin
          </p>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative"
      >
        {/* Map Container with custom marker overlay */}
        <div className="relative h-[500px] w-full">
          {/* Gradient overlays */}
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-gray-100 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-gray-100 to-transparent z-10 pointer-events-none" />
          
          {/* Google Map iframe */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1563.432!2d27.1826!3d38.3940!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd8e76e3c0001%3A0x7c3138cc270c2979!2s29%20Ekim%2C%20Atat%C3%BCrk%20Cd.%20NO%3A239%20G%20101%2C%2035395%20Buca%2F%C4%B0zmir!5e0!3m2!1str!2str!4v1709913892726!5m2!1str!2str&markers=color:green%7C38.3940,27.1826"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
          
          {/* Custom Marker Overlay */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full z-20 pointer-events-none">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Marker pin */}
              <div className="relative">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                {/* Pulse effect */}
                <div className="absolute inset-0 w-12 h-12 bg-primary rounded-full animate-ping opacity-30" />
                {/* Pin pointer */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[10px] border-l-transparent border-r-transparent border-t-primary" />
              </div>
            </motion.div>
          </div>
          
          {/* Info Card - Floating */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute top-8 left-4 sm:left-8 z-20 hidden md:block"
          >
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 max-w-xs border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Durta Tarım</h4>
                  <p className="text-sm text-gray-500">Meyve & Sebze Tedarik</p>
                </div>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <Navigation className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">{address}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <p className="text-gray-600">+90 531 669 09 78</p>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                  <p className="text-gray-600">Pazartesi - Cumartesi: 06:00 - 20:00</p>
                </div>
              </div>
              
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-white rounded-xl font-medium text-sm hover:bg-primary/90 transition-colors"
              >
                <Navigation className="w-4 h-4" />
                Yol Tarifi Al
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Mobile Info Card */}
        <div className="md:hidden container mx-auto px-4 py-6">
          <div className="bg-white rounded-2xl shadow-lg p-5 border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Durta Tarım</h4>
                <p className="text-xs text-gray-500">Meyve & Sebze Tedarik</p>
              </div>
            </div>
            
            <div className="space-y-2 text-sm mb-4">
              <div className="flex items-start gap-2">
                <Navigation className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-gray-600 text-xs">{address}</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <p className="text-gray-600 text-xs">+90 531 669 09 78</p>
              </div>
            </div>
            
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-white rounded-xl font-medium text-sm hover:bg-primary/90 transition-colors"
            >
              <Navigation className="w-4 h-4" />
              Yol Tarifi Al
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
} 