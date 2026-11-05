import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowRight, Compass, Star, Filter, Eye } from 'lucide-react';
import { DESTINATIONS, CATEGORIES } from '../data/destinations';
import DestinationModal from '../components/DestinationModal';

export default function Destinations() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeModalDest, setActiveModalDest] = useState(null);

  const filteredDestinations = useMemo(() => {
    if (selectedCategory === 'all') return DESTINATIONS;
    return DESTINATIONS.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-[#08140c] text-[#f7f4ee] pt-24 pb-20">
      
      {/* =========================================
          HERO BANNER
      ========================================= */}
      <section className="relative h-[55vh] min-h-[420px] flex items-center justify-center overflow-hidden mb-12">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/destinations/barehipani.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08140c] via-black/60 to-black/75" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-900/80 border border-forest-500/30 text-xs font-semibold uppercase tracking-widest text-forest-300 backdrop-blur-md mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>Odisha Travel Catalog</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-cream-100 tracking-tight mb-4">
            Explore Destinations
          </h1>

          <p className="text-base sm:text-lg text-cream-200/90 font-light max-w-2xl mx-auto leading-relaxed">
            From the tiger-inhabited sal forests of Similipal to ancient Sun Temple chariot wheels and tranquil Bay of Bengal beaches.
          </p>
        </div>
      </section>

      {/* =========================================
          CATEGORY FILTER TABS
      ========================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            const count = cat.id === 'all' 
              ? DESTINATIONS.length 
              : DESTINATIONS.filter(d => d.category === cat.id).length;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? 'bg-gradient-to-r from-forest-500 to-forest-600 text-white shadow-lg shadow-forest-600/30 scale-105'
                    : 'bg-forest-950/70 border border-forest-800/80 text-cream-200/70 hover:text-white hover:bg-forest-900/60'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
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
          DESTINATIONS GRID
      ========================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredDestinations.map((dest) => (
              <motion.div
                key={dest.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-3xl overflow-hidden aspect-[3/4] bg-forest-950 border border-forest-800/50 shadow-xl flex flex-col justify-end"
              >
                {/* Large HD Photograph */}
                <img
                  src={dest.image}
                  alt={dest.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent group-hover:via-black/30 transition-colors" />

                {/* Category Pill Badge (Top) */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-forest-950/80 backdrop-blur-md text-forest-300 border border-forest-700/50">
                    {dest.categoryLabel}
                  </span>
                  <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] text-gold border border-white/10">
                    <Star className="w-3 h-3 fill-gold text-gold" />
                    <span>{dest.rating}</span>
                  </div>
                </div>

                {/* Card Content & Action (Bottom) */}
                <div className="relative z-10 p-5 sm:p-6 space-y-2">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-cream-200 transition-colors leading-snug">
                    {dest.name}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-cream-300/80">
                    <MapPin className="w-3.5 h-3.5 text-forest-400 shrink-0" />
                    <span className="truncate">{dest.location}</span>
                  </div>

                  {/* Explore More Button */}
                  <div className="pt-3">
                    <button
                      onClick={() => setActiveModalDest(dest)}
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-forest-800/80 hover:bg-forest-600 text-white font-medium text-xs uppercase tracking-wider border border-forest-600/40 backdrop-blur-sm transition-all duration-300 group-hover:shadow-lg"
                    >
                      <Eye className="w-3.5 h-3.5 text-forest-300" />
                      <span>Explore More</span>
                      <ArrowRight className="w-3.5 h-3.5 text-forest-300 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Destination detail modal */}
      <DestinationModal
        destination={activeModalDest}
        onClose={() => setActiveModalDest(null)}
      />

    </div>
  );
}
