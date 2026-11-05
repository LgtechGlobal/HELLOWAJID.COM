import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Check, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PackageModal({ pkg, onClose }) {
  if (!pkg) return null;

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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-3xl bg-[#0a1a12] border border-forest-700/50 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[92vh] flex flex-col"
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 p-2 sm:p-2.5 rounded-full bg-black/70 text-white hover:bg-forest-600 transition-colors backdrop-blur-sm border border-white/10 touch-manipulation active:scale-95"
            aria-label="Close"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Banner */}
          <div className="relative h-44 sm:h-64 w-full overflow-hidden shrink-0">
            <img
              src={pkg.image}
              alt={pkg.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a12] via-[#0a1a12]/50 to-transparent" />
            <div className="absolute bottom-3 left-4 right-4 sm:bottom-4 sm:left-6 sm:right-6">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold bg-forest-500/90 text-white backdrop-blur-sm mb-1.5 sm:mb-2">
                {pkg.badge}
              </span>
              <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight">
                {pkg.title}
              </h2>
              <div className="flex items-center gap-2 sm:gap-3 mt-1 text-xs text-cream-200">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-forest-400" />
                  {pkg.duration}
                </span>
                <span>•</span>
                <span className="font-semibold text-forest-300 text-sm sm:text-base">
                  {pkg.price} <span className="text-[10px] sm:text-xs font-normal text-cream-400">/ person</span>
                </span>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="p-4 sm:p-8 overflow-y-auto space-y-4 sm:space-y-6">
            <p className="text-xs sm:text-sm text-cream-200/90 leading-relaxed font-light">
              {pkg.description}
            </p>

            {/* Highlights */}
            <div>
              <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-forest-400 mb-2.5 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Package Inclusions & Perks
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {pkg.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-cream-200/90">
                    <Check className="w-3.5 h-3.5 text-forest-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Day-by-Day Itinerary */}
            <div>
              <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-forest-400 mb-2.5">
                Day-by-Day Tour Flow
              </h4>
              <div className="space-y-2.5">
                {pkg.itinerary.map((step, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-forest-950/60 border border-forest-800/60 flex items-start gap-2.5">
                    <span className="px-2 py-0.5 rounded bg-forest-800 text-forest-200 text-[10px] sm:text-xs font-bold shrink-0">
                      {step.day}
                    </span>
                    <p className="text-xs sm:text-sm text-cream-200/90 leading-relaxed">
                      {step.plan}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom bar */}
            <div className="pt-3 sm:pt-4 border-t border-forest-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
              <div className="flex items-center gap-2 text-[11px] text-cream-400/80">
                <ShieldCheck className="w-4 h-4 text-forest-400 shrink-0" />
                <span>Verified Local Naturalists & Safe 4x4 Transport</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
                <button
                  onClick={onClose}
                  className="w-1/2 sm:w-auto px-4 py-2.5 rounded-full border border-forest-700/60 text-xs font-medium text-cream-200 hover:bg-forest-900/60 touch-manipulation"
                >
                  Close
                </button>
                <Link
                  to={`/contact?package=${encodeURIComponent(pkg.title)}`}
                  onClick={onClose}
                  className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-forest-500 to-forest-600 hover:from-forest-400 text-white text-xs font-semibold uppercase tracking-wider shadow-lg touch-manipulation"
                >
                  <span>Book Package</span>
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
