"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Award, Play, X, Newspaper, ExternalLink } from "lucide-react";

const pressItems = [
  {
    id: "1",
    type: "video",
    title: "Güncel Piyasa Programı",
    description: "Beyaz TV Güncel Piyasa programına konuk olduk, sektördeki gelişmeleri ve Durta Tarım'ın vizyonunu anlattık",
    thumbnail: "/images/press/durtatmbnail.png",
    videoSrc: "https://drive.google.com/file/d/1GtQ1XwnqVY-v_fO1f8V0MgrqUGlI7maG/preview",
    isGoogleDrive: true,
    source: "Beyaz TV - Güncel Piyasa",
    date: "2026",
  },
  {
    id: "2",
    type: "video",
    title: "Ekonomi Dünyası Röportajı",
    description: "Durta Tarım'ın sektördeki başarı hikayesi ve gelecek vizyonu hakkında özel röportaj",
    thumbnail: "/images/press/roportajtumbnail.png",
    videoSrc: "/images/press/Ekonomi_dunyası_roportaj.mp4",
    source: "Show Türk - Ekonomi Dünyası",
    date: "2025",
  },
  {
    id: "3",
    type: "image",
    title: "Yılın Tedarikçisi Ödülü",
    description: "Ege Bölgesi'nin en başarılı yaş meyve sebze tedarikçisi ödülünü aldık",
    thumbnail: "/images/press/odul_toreni.jpg",
    source: "İzmir Ticaret Odası",
    date: "2025",
  },
  {
    id: "4",
    type: "video",
    title: "Ödül Töreni",
    description: "Yılın En İyi Tedarikçisi ödülünü alırken",
    thumbnail: "/images/press/odul_toreni.jpg",
    videoSrc: "/images/press/odul_al%C4%B1rken.mp4",
    source: "Ödül Töreni",
    date: "2025",
  },
];

export function Press() {
  const [activeVideo, setActiveVideo] = useState<{src: string; isGoogleDrive?: boolean} | null>(null);
  const [activeImage, setActiveImage] = useState<{src: string; title: string} | null>(null);

  return (
    <section id="press" className="py-24 md:py-32 bg-gradient-to-b to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[200px] bg-primary/5 rounded-full blur-[100px] translate-y-1/2" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              <Award className="w-4 h-4" />
              Basında Biz
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Medyada <span className="text-primary">Durta Tarım</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Başarı hikayelerimiz ve ödüllerimiz
            </p>
          </motion.div>
        </div>

        {/* Press Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {pressItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg shadow-gray-100/50 hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Thumbnail */}
              <div 
                className="relative h-52 overflow-hidden cursor-pointer"
                onClick={() => {
                  if (item.type === "video" && item.videoSrc) {
                    setActiveVideo({ src: item.videoSrc, isGoogleDrive: item.isGoogleDrive });
                  } else if (item.type === "image") {
                    setActiveImage({ src: item.thumbnail, title: item.title });
                  }
                }}
              >
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Play Button for Videos */}
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg cursor-pointer group-hover:bg-primary transition-colors duration-300"
                    >
                      <Play className="w-7 h-7 text-primary group-hover:text-white ml-1 transition-colors duration-300" fill="currentColor" />
                    </motion.div>
                  </div>
                )}
                
                {/* Zoom Icon for Images */}
                {item.type === "image" && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg cursor-pointer"
                    >
                      <Award className="w-6 h-6 text-primary" />
                    </motion.div>
                  </div>
                )}
                
                {/* Type Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-gray-700">
                    {item.type === "video" ? (
                      <>
                        <Play className="w-3 h-3 text-red-500" />
                        Video
                      </>
                    ) : (
                      <>
                        <Award className="w-3 h-3 text-primary" />
                        Ödül
                      </>
                    )}
                  </span>
                </div>
                
                {/* Source Badge */}
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-white/90 text-sm font-medium">{item.source}</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">{item.date}</span>
                  {item.type === "video" && item.videoSrc && (
                    <button
                      onClick={() => setActiveVideo({ src: item.videoSrc!, isGoogleDrive: item.isGoogleDrive })}
                      className="flex items-center gap-1.5 text-primary text-sm font-medium hover:underline"
                    >
                      <Play className="w-4 h-4" />
                      İzle
                    </button>
                  )}
                  {item.type === "image" && (
                    <button
                      onClick={() => setActiveImage({ src: item.thumbnail, title: item.title })}
                      className="flex items-center gap-1.5 text-primary text-sm font-medium hover:underline"
                    >
                      <Award className="w-4 h-4" />
                      Görüntüle
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10"
          onClick={() => setActiveVideo(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
          
          {/* Close Button */}
          <button
            onClick={() => setActiveVideo(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-red-500/80 transition-all duration-300 z-[110] border border-white/20"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          
          {/* Video Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative z-[105] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
              {activeVideo.isGoogleDrive ? (
                <iframe
                  src={activeVideo.src}
                  className="w-full aspect-video"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              ) : (
                <video
                  src={activeVideo.src}
                  controls
                  autoPlay
                  className="w-full aspect-video"
                >
                  Tarayıcınız video oynatmayı desteklemiyor.
                </video>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Image Modal */}
      {activeImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10"
          onClick={() => setActiveImage(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
          
          {/* Close Button */}
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-red-500/80 transition-all duration-300 z-[110] border border-white/20"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          
          {/* Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative z-[105] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={activeImage.src}
                  alt={activeImage.title}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>
              <div className="p-4 bg-black/50 text-center">
                <h3 className="text-xl font-bold text-white">{activeImage.title}</h3>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
