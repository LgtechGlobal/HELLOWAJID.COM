import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, MapPin, Maximize2, Compass } from 'lucide-react';
import { GALLERY_ITEMS, GALLERY_CATEGORIES } from '../data/gallery';
import Lightbox from '../components/Lightbox';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'all') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const handleOpenLightbox = (index) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrevImage = () => {
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1));
  };

  const handleNextImage = () => {
    setLightboxIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="min-h-screen bg-[#08140c] text-[#f7f4ee] pt-20 sm:pt-24 pb-16 sm:pb-20">
      
      {/* =========================================
          HERO BANNER
      ========================================= */}
      <section className="relative h-[45vh] sm:h-[55vh] min-h-[360px] flex items-center justify-center overflow-hidden mb-8 sm:mb-12">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/gallery/gallery-tiger.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08140c] via-black/60 to-black/75" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-forest-900/80 border border-forest-500/30 text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-forest-300 backdrop-blur-md mb-3 sm:mb-4">
            <Camera className="w-3.5 h-3.5" />
            <span>Cinematic Visuals</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl font-bold text-cream-100 tracking-tight mb-3 sm:mb-4">
            Photography Gallery
          </h1>

          <p className="text-xs sm:text-base md:text-lg text-cream-200/90 font-light max-w-2xl mx-auto leading-relaxed">
            High-definition glimpses of Similipal tigers, twin waterfalls, mist-kissed ridges, and ancient sacred Kalinga temple architecture.
          </p>
        </div>
      </section>

      {/* =========================================
          CATEGORY FILTERS (Scrollable on mobile)
      ========================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
        <div className="flex items-center sm:justify-center overflow-x-auto no-scrollbar py-1 gap-2 sm:gap-3 -mx-4 px-4 sm:mx-0 sm:px-0">
          {GALLERY_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            const count = cat.id === 'all'
              ? GALLERY_ITEMS.length
              : GALLERY_ITEMS.filter((item) => item.category === cat.id).length;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 flex items-center gap-1.5 sm:gap-2 shrink-0 touch-manipulation active:scale-95 ${
                  isActive
                    ? 'bg-gradient-to-r from-forest-500 to-forest-600 text-white shadow-lg shadow-forest-600/30'
                    : 'bg-forest-950/80 border border-forest-800/80 text-cream-200/70 hover:text-white hover:bg-forest-900/60'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-white/20 text-white' : 'bg-forest-900 text-forest-300'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* =========================================
          MASONRY-STYLE GALLERY GRID
      ========================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-6 space-y-4 sm:space-y-6"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => handleOpenLightbox(index)}
                className="group relative rounded-2xl sm:rounded-3xl overflow-hidden border border-forest-800/50 bg-forest-950 shadow-xl cursor-pointer break-inside-avoid touch-manipulation active:scale-[0.99]"
              >
                {/* Photo */}
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Gradient overlay for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent sm:opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-between p-4 sm:p-5" />

                {/* Zoom badge (top right) */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 opacity-80 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="p-1.5 sm:p-2 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 inline-flex items-center justify-center">
                    <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </span>
                </div>

                {/* Details (bottom) */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 sm:translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-widest text-forest-300 block mb-0.5 sm:mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="flex items-center gap-1.5 text-[11px] sm:text-xs text-cream-300/80 mt-1">
                    <MapPin className="w-3 h-3 text-forest-400 shrink-0" />
                    <span className="truncate">{item.location}</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Fullscreen Lightbox */}
      <Lightbox
        items={filteredItems}
        currentIndex={lightboxIndex}
        onClose={handleCloseLightbox}
        onPrev={handlePrevImage}
        onNext={handleNextImage}
      />

    </div>
  );
}
