import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Calendar, Compass, Star, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DestinationModal({ destination, onClose }) {
  if (!destination) return null;

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-3xl bg-[#0a1a12] border border-forest-700/50 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[92vh] flex flex-col"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 p-2 sm:p-2.5 rounded-full bg-black/70 text-white hover:bg-forest-600 transition-colors backdrop-blur-sm border border-white/10 touch-manipulation active:scale-95"
            aria-label="Close details"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Modal Header Image */}
          <div className="relative h-44 sm:h-72 w-full overflow-hidden shrink-0">
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a12] via-[#0a1a12]/40 to-transparent" />
            
            <div className="absolute bottom-3 left-4 right-4 sm:bottom-4 sm:left-6 sm:right-6">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold bg-forest-600/90 text-white backdrop-blur-sm mb-1.5 sm:mb-2">
                <Compass className="w-3 h-3" />
                <span>{destination.categoryLabel}</span>
              </div>
              <h2 className="font-serif text-xl sm:text-3xl lg:text-4xl font-bold text-white tracking-wide leading-tight">
                {destination.name}
              </h2>
              <p className="flex items-center gap-1.5 text-xs text-cream-200/90 mt-1">
                <MapPin className="w-3.5 h-3.5 text-forest-400 shrink-0" />
                <span className="truncate">{destination.location}</span>
                <span className="mx-1 text-forest-600">•</span>
                <span className="flex items-center gap-0.5 text-gold shrink-0">
                  <Star className="w-3 h-3 fill-gold text-gold" />
                  {destination.rating}
                </span>
              </p>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-4 sm:p-8 overflow-y-auto space-y-4 sm:space-y-6">
            <div>
              <h3 className="text-xs sm:text-base font-medium text-forest-300 italic mb-1.5">
                "{destination.tagline}"
              </h3>
              <p className="text-xs sm:text-sm text-cream-200/80 leading-relaxed font-light">
                {destination.description}
              </p>
            </div>

            {/* Quick Specs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-forest-950/60 border border-forest-800/60">
              <div className="flex items-start gap-2.5">
                <Calendar className="w-4 h-4 text-forest-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-cream-400/60 block">Best Season</span>
                  <span className="text-xs sm:text-sm font-medium text-cream-100">{destination.bestTime}</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-forest-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-cream-400/60 block">Nearest Hub / Access</span>
                  <span className="text-xs sm:text-sm font-medium text-cream-100">{destination.nearestHub}</span>
                </div>
              </div>
            </div>

            {/* Key Highlights */}
            {destination.highlights && (
              <div>
                <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-forest-400 mb-2.5">
                  Highlights & Attractions
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {destination.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-cream-200/90">
                      <CheckCircle className="w-3.5 h-3.5 text-forest-400 shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Modal Actions */}
            <div className="pt-3 sm:pt-4 border-t border-forest-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
              <span className="text-[11px] text-cream-400/70 text-center sm:text-left">
                Plan your guided tour to {destination.name}
              </span>
              <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
                <button
                  onClick={onClose}
                  className="w-1/2 sm:w-auto px-4 py-2.5 rounded-full border border-forest-700/60 text-xs font-medium text-cream-200 hover:bg-forest-900/60 transition-colors touch-manipulation"
                >
                  Close
                </button>
                <Link
                  to={`/contact?destination=${encodeURIComponent(destination.name)}`}
                  onClick={onClose}
                  className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-forest-500 to-forest-600 hover:from-forest-400 text-white text-xs font-semibold uppercase tracking-wider shadow-lg touch-manipulation"
                >
                  <span>Book Tour</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
