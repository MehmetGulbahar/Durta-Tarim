"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useState } from "react";
import { X } from "lucide-react";

// Swiper stillerini import ediyoruz
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  {
    src: "/images/gallery/galeri1.jpg",
    alt: "Meyve Sebze 1",
    title: "Taze Meyve & Sebze",
    description: "En taze ürünleri özenle seçiyoruz",
  },

  {
    src: "/images/gallery/galeri2.jpg",
    alt: "Meyve Sebze 2",
    title: "Mevsimlik Ürünler",
    description: "Mevsiminde en kaliteli ürünler",
  },

  {
    src: "/images/gallery/galeri3.jpg",
    alt: "Meyve Sebze 3",
    title: "Toptan Tedarik",
    description: "İşletmenize özel toptan tedarik çözümleri",
  },
  {
    src: "/images/gallery/galeri4.jpg",
    alt: "Meyve Sebze 4",
    title: "Seçkin Ürünler",
    description: "Özenle seçilmiş A kalite ürünler",
  },
  {
    src: "/images/gallery/galeri5.jpg",
    alt: "Meyve Sebze 5",
    title: "Geniş Ürün Yelpazesi",
    description: "Her türlü meyve ve sebze çeşidi",
  },
  {
    src: "/images/gallery/galeri6.jpg",
    alt: "Meyve Sebze 6",
    title: "Taze Ürün Garantisi",
    description: "Günlük taze ürün tedariki",
  },
];

export function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Galeri
            </span>
            <h2 className="text-3xl font-bold mb-4">Ürün Galerimiz</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Taze ve kaliteli ürünlerimizden örnekler
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative -mx-4 sm:-mx-6 lg:-mx-8"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={40}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.2,
              },
              1024: {
                slidesPerView: 1.8,
              },
              1280: {
                slidesPerView: 2.2,
              }
            }}
            className="pb-12 px-4 sm:px-6 lg:px-8"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div
                  className="relative aspect-[16/9] rounded-2xl overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedImageIndex(index)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4">
                    <h3 className="text-2xl font-semibold mb-3">
                      {image.title}
                    </h3>
                    <p className="text-base text-center">
                      {image.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      {/* Modal */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedImageIndex(null);
            }
          }}
        >
          <div className="relative w-full h-full p-4">
            <button
              onClick={() => setSelectedImageIndex(null)}
              className="absolute top-4 right-4 text-white hover:text-primary transition-colors z-50"
            >
              <X className="w-8 h-8" />
            </button>

            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              initialSlide={selectedImageIndex}
              className="w-full h-full"
              onSlideChange={(swiper) => {
                const newIndex = swiper.activeIndex;
                setSelectedImageIndex(newIndex);
              }}
            >
              {images.map((image, index) => (
                <SwiperSlide
                  key={index}
                  className="flex items-center justify-center"
                >
                  <div className="relative w-full h-full flex flex-col items-center justify-center p-4">
                    <div className="relative w-full max-w-7xl aspect-[16/9]">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-contain"
                        sizes="100vw"
                        priority
                      />
                    </div>
                    <div className="text-white text-center mt-4 max-w-2xl">
                      <h3 className="text-2xl font-semibold mb-2">
                        {image.title}
                      </h3>
                      <p className="text-lg">{image.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}

      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #1e9951;
          background: rgba(255, 255, 255, 0.9);
          padding: 24px;
          border-radius: 50%;
          width: 24px;
          height: 24px;
        }

        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 16px;
        }

        .swiper-pagination-bullet {
          background: #1e9951;
        }

        .swiper-pagination-bullet-active {
          background: #1e9951;
        }

        /* Modal içindeki Swiper için özel stiller */
        .fixed .swiper {
          height: 100vh;
          padding: 40px 0;
        }

        .fixed .swiper-button-next,
        .fixed .swiper-button-prev {
          color: white;
          background: rgba(30, 153, 81, 0.3);
          width: 50px;
          height: 50px;
        }

        .fixed .swiper-button-next:hover,
        .fixed .swiper-button-prev:hover {
          background: rgba(30, 153, 81, 0.5);
        }

        .fixed .swiper-pagination-bullet {
          background: white;
          opacity: 0.5;
        }

        .fixed .swiper-pagination-bullet-active {
          opacity: 1;
          background: #1e9951;
        }
      `}</style>
    </section>
  );
}
