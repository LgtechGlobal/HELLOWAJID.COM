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
      <div 
        className="fixed inset-0 z-50 flex flex-col justify-between bg-black/95 backdrop-blur-xl p-3 sm:p-6"
        onClick={onClose}
      >
        {/* Top bar */}
        <div 
          className="w-full flex items-center justify-between z-20 shrink-0"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-2 text-cream-200">
            <Maximize2 className="w-4 h-4 text-forest-400" />
            <span className="text-[11px] sm:text-xs uppercase tracking-widest font-semibold">
              HD Odisha Gallery
            </span>
            <span className="text-[11px] sm:text-xs text-cream-400/60 ml-1">
              ({currentIndex + 1} / {items.length})
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-forest-600 text-white transition-colors border border-white/10 touch-manipulation active:scale-95"
            aria-label="Close Lightbox"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Central Image Container with Navigation Arrows */}
        <div 
          className="relative max-w-5xl w-full mx-auto flex-1 flex items-center justify-center my-2"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-1 sm:left-4 z-20 p-2 sm:p-3 rounded-full bg-black/60 hover:bg-forest-600 text-white transition-all backdrop-blur-md border border-white/10 touch-manipulation active:scale-90"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-1 sm:right-4 z-20 p-2 sm:p-3 rounded-full bg-black/60 hover:bg-forest-600 text-white transition-all backdrop-blur-md border border-white/10 touch-manipulation active:scale-90"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Active Image */}
          <motion.div
            key={currentItem.id}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl max-h-[60vh] sm:max-h-[70vh] border border-forest-800/50 flex items-center justify-center"
          >
            <img
              src={currentItem.src}
              alt={currentItem.title}
              className="max-h-[60vh] sm:max-h-[70vh] w-auto max-w-full object-contain mx-auto"
            />
          </motion.div>
        </div>

        {/* Bottom Caption Bar */}
        <div 
          className="text-center max-w-2xl mx-auto px-4 shrink-0 pb-2"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="font-serif text-base sm:text-xl font-bold text-white tracking-wide leading-tight">
            {currentItem.title}
          </h3>
          <p className="flex items-center justify-center gap-1.5 text-xs text-forest-400 mt-1">
            <MapPin className="w-3.5 h-3.5" />
            <span>{currentItem.location}</span>
          </p>
          {currentItem.description && (
            <p className="hidden sm:block text-xs text-cream-200/80 mt-1 font-light">
              {currentItem.description}
            </p>
          )}
        </div>
      </div>
    </AnimatePresence>
  );
}
