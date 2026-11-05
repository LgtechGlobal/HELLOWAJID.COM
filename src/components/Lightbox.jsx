import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, MapPin, Maximize2 } from 'lucide-react';

export default function Lightbox({ items, currentIndex, onClose, onPrev, onNext }) {
  if (currentIndex === null || !items || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl">
        {/* Top bar */}
        <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-4 sm:p-6 bg-gradient-to-b from-black/80 to-transparent">
          <div className="flex items-center gap-2 text-cream-200">
            <Maximize2 className="w-4 h-4 text-forest-400" />
            <span className="text-xs uppercase tracking-widest font-semibold">
              HD Odisha Gallery
            </span>
            <span className="text-xs text-cream-400/60 ml-2">
              ({currentIndex + 1} of {items.length})
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-white/10 hover:bg-forest-600 text-white transition-colors border border-white/10"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Previous Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-3 sm:left-6 z-20 p-3 sm:p-4 rounded-full bg-black/50 hover:bg-forest-600 text-white transition-all backdrop-blur-md border border-white/10 group transform hover:scale-110"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
        </button>

        {/* Next Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-3 sm:right-6 z-20 p-3 sm:p-4 rounded-full bg-black/50 hover:bg-forest-600 text-white transition-all backdrop-blur-md border border-white/10 group transform hover:scale-110"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
        </button>

        {/* Central Image Container */}
        <div className="relative max-w-6xl max-h-[85vh] w-full mx-4 sm:mx-12 flex flex-col items-center justify-center">
          <motion.div
            key={currentItem.id}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.3 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl max-h-[72vh] border border-forest-800/50"
          >
            <img
              src={currentItem.src}
              alt={currentItem.title}
              className="max-h-[72vh] w-auto max-w-full object-contain mx-auto"
            />
          </motion.div>

          {/* Caption */}
          <motion.div
            key={`caption-${currentItem.id}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-center max-w-2xl px-4"
          >
            <h3 className="font-serif text-lg sm:text-2xl font-bold text-white tracking-wide">
              {currentItem.title}
            </h3>
            <p className="flex items-center justify-center gap-1.5 text-xs sm:text-sm text-forest-400 mt-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>{currentItem.location}</span>
            </p>
            {currentItem.description && (
              <p className="text-xs sm:text-sm text-cream-200/80 mt-1.5 font-light">
                {currentItem.description}
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
