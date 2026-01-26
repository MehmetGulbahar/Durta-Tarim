"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    src: "/images/gallery/elma.jpeg",
    alt: "Elma",
    title: "Taze Elma",
    description: "Özenle seçilmiş taze elmalar",
    category: "Meyve",
  },
  {
    src: "/images/gallery/armut.jpeg",
    alt: "Armut",
    title: "Taze Armut",
    description: "Lezzetli ve sulu armutlar",
    category: "Meyve",
  },
  {
    src: "/images/gallery/nar.jpeg",
    alt: "Nar",
    title: "Taze Nar",
    description: "Vitamin deposu taze narlar",
    category: "Meyve",
  },
  {
    src: "/images/gallery/mandalina.jpeg",
    alt: "Mandalina",
    title: "Taze Mandalina",
    description: "C vitamini kaynağı mandalinalar",
    category: "Meyve",
  },
  {
    src: "/images/gallery/uzum.jpeg",
    alt: "Üzüm",
    title: "Taze Üzüm",
    description: "Şifa kaynağı taze üzümler",
    category: "Meyve",
  },
  {
    src: "/images/gallery/ananas.jpeg",
    alt: "Ananas",
    title: "Taze Ananas",
    description: "Tropikal lezzet ananaslar",
    category: "Egzotik",
  },
  {
    src: "/images/gallery/avokado.jpeg",
    alt: "Avokado",
    title: "Taze Avokado",
    description: "Sağlıklı yağ kaynağı avokado",
    category: "Egzotik",
  },
  {
    src: "/images/gallery/ejdermeyve.jpeg",
    alt: "Ejder Meyvesi",
    title: "Ejder Meyvesi",
    description: "Egzotik ve besleyici ejder meyvesi",
    category: "Egzotik",
  },
  {
    src: "/images/gallery/ayva.jpeg",
    alt: "Ayva",
    title: "Taze Ayva",
    description: "Kış meyvesi taze ayvalar",
    category: "Meyve",
  },
  {
    src: "/images/gallery/cennet%20elmas%C4%B1.jpeg",
    alt: "Cennet Elması",
    title: "Cennet Elması",
    description: "Trabzon hurması cennet elması",
    category: "Meyve",
  },
  {
    src: "/images/gallery/kabak.jpeg",
    alt: "Kabak",
    title: "Taze Kabak",
    description: "Organik ve taze kabaklar",
    category: "Sebze",
  },
  {
    src: "/images/gallery/salatal%C4%B1k.jpeg",
    alt: "Salatalık",
    title: "Taze Salatalık",
    description: "Çıtır çıtır taze salatalıklar",
    category: "Sebze",
  },
  {
    src: "/images/gallery/sergi1.jpeg",
    alt: "Ürün Sergisi",
    title: "Ürün Sergimiz",
    description: "Taze meyve ve sebze çeşitlerimiz",
    category: "Sergi",
  },
  {
    src: "/images/gallery/sergi2.jpeg",
    alt: "Ürün Sergisi",
    title: "Kalite Standartlarımız",
    description: "A kalite ürünlerimiz",
    category: "Sergi",
  },
];

export function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handlePrev = useCallback(() => {
    setSelectedImageIndex(prev => 
      prev !== null ? (prev === 0 ? images.length - 1 : prev - 1) : null
    );
  }, []);

  const handleNext = useCallback(() => {
    setSelectedImageIndex(prev => 
      prev !== null ? (prev === images.length - 1 ? 0 : prev + 1) : null
    );
  }, []);

  const handleClose = useCallback(() => {
    setSelectedImageIndex(null);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      
      switch (e.key) {
        case 'ArrowLeft':
          handlePrev();
          break;
        case 'ArrowRight':
          handleNext();
          break;
        case 'Escape':
          handleClose();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    // Prevent body scroll when modal is open
    if (selectedImageIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedImageIndex, handlePrev, handleNext, handleClose]);

  return (
    <section id="gallery" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-6 border border-primary/30">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Galeri
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
               <span className="text-primary">Ürün Galerimiz</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Taze ve kaliteli ürünlerimizden örnekler
            </p>
          </motion.div>
        </div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-xl cursor-pointer group aspect-square"
              onClick={() => setSelectedImageIndex(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image */}
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className={`object-cover transition-all duration-700 ${
                  hoveredIndex === index ? 'scale-110' : 'scale-100'
                }`}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              
              {/* Dark Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity duration-500 ${
                hoveredIndex === index ? 'opacity-90' : 'opacity-40'
              }`} />
              
              {/* Category Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className={`px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm transition-all duration-300 ${
                  hoveredIndex === index 
                    ? 'bg-primary text-white' 
                    : 'bg-white/10 text-white/80'
                }`}>
                  {image.category}
                </span>
              </div>
              
              {/* Zoom Icon */}
              <div className={`absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
                hoveredIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}>
                <ZoomIn className="w-5 h-5 text-white" />
              </div>
              
              {/* Content */}
              <div className={`absolute bottom-0 left-0 right-0 p-5 md:p-6 transition-all duration-500 ${
                hoveredIndex === index ? 'translate-y-0' : 'translate-y-2'
              }`}>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                  {image.title}
                </h3>
                <p className={`text-sm text-white/70 transition-all duration-500 ${
                  hoveredIndex === index ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0'
                } overflow-hidden`}>
                  {image.description}
                </p>
              </div>
              
              {/* Border Glow on Hover */}
              <div className={`absolute inset-0 rounded-2xl border-2 transition-all duration-500 pointer-events-none ${
                hoveredIndex === index ? 'border-primary/50' : 'border-transparent'
              }`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-gray-500 text-sm">
            Tüm ürünlerimizi görmek için <a href="#contact" className="text-primary hover:underline font-medium">bizimle iletişime geçin</a>
          </p>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10"
          onClick={() => setSelectedImageIndex(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />
          
          {/* Close Button - Always visible */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImageIndex(null);
            }}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-red-500/80 transition-all duration-300 z-[110] border border-white/20 shadow-lg"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          
          {/* Navigation - Previous */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary transition-all duration-300 z-[110] border border-white/20 shadow-lg group"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
          </button>
          
          {/* Navigation - Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary transition-all duration-300 z-[110] border border-white/20 shadow-lg group"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
          </button>

          {/* Main Content Container */}
          <motion.div 
            key={selectedImageIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative z-[105] w-full max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Card */}
            <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              {/* Image */}
              <div className="relative w-full aspect-square sm:aspect-[4/3] md:aspect-[16/10]">
                <Image
                  src={images[selectedImageIndex].src}
                  alt={images[selectedImageIndex].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 60vw"
                  priority
                />
              </div>
              
              {/* Image Info */}
              <div className="p-4 sm:p-6 bg-gradient-to-t from-black/80 to-black/40">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/30 text-primary text-xs sm:text-sm font-medium mb-2">
                      {images[selectedImageIndex].category}
                    </span>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                      {images[selectedImageIndex].title}
                    </h3>
                    <p className="text-white/60 text-sm sm:text-base mt-1">
                      {images[selectedImageIndex].description}
                    </p>
                  </div>
                  <div className="text-white/50 text-sm font-medium">
                    {selectedImageIndex + 1} / {images.length}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Thumbnail Navigation */}
            <div className="mt-4 flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap px-4">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImageIndex(idx);
                  }}
                  className={`relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg overflow-hidden transition-all duration-300 ${
                    idx === selectedImageIndex 
                      ? 'ring-2 ring-primary ring-offset-2 ring-offset-black/50 scale-110' 
                      : 'opacity-50 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </button>
              ))}
            </div>
          </motion.div>
          
          {/* Keyboard hint */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-4 text-white/30 text-xs z-[105]">
            <span className="flex items-center gap-1">
              <kbd className="px-2 py-0.5 rounded bg-white/10 border border-white/20">←</kbd>
              <kbd className="px-2 py-0.5 rounded bg-white/10 border border-white/20">→</kbd>
              Gezin
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-2 py-0.5 rounded bg-white/10 border border-white/20">ESC</kbd>
              Kapat
            </span>
          </div>
        </motion.div>
      )}
    </section>
  );
}
