import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Check, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PackageModal({ pkg, onClose }) {
  if (!pkg) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-3xl bg-[#0a1a12] border border-forest-700/50 rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 text-white hover:bg-forest-600 transition-colors backdrop-blur-sm border border-white/10"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Banner */}
          <div className="relative h-60 sm:h-72 w-full overflow-hidden shrink-0">
            <img
              src={pkg.image}
              alt={pkg.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a12] via-[#0a1a12]/50 to-transparent" />
            <div className="absolute bottom-4 left-6 right-6">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-forest-500/90 text-white backdrop-blur-sm mb-2">
                {pkg.badge}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                {pkg.title}
              </h2>
              <div className="flex items-center gap-3 mt-1.5 text-xs sm:text-sm text-cream-200">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-forest-400" />
                  {pkg.duration}
                </span>
                <span>•</span>
                <span className="font-semibold text-forest-300 text-base">
                  {pkg.price} <span className="text-xs font-normal text-cream-400">/ person</span>
                </span>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            <p className="text-sm text-cream-200/90 leading-relaxed">
              {pkg.description}
            </p>

            {/* Highlights */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-forest-400 mb-3 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" /> Package Inclusions & Perks
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {pkg.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-cream-200/90">
                    <Check className="w-4 h-4 text-forest-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Day-by-Day Itinerary */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-forest-400 mb-3">
                Day-by-Day Tour Flow
              </h4>
              <div className="space-y-3">
                {pkg.itinerary.map((step, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-forest-950/60 border border-forest-800/60 flex items-start gap-3">
                    <span className="px-2.5 py-1 rounded bg-forest-800 text-forest-200 text-xs font-bold shrink-0">
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
            <div className="pt-4 border-t border-forest-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-cream-400/80">
                <ShieldCheck className="w-4 h-4 text-forest-400" />
                <span>100% Verified Local Guides & Safe Transport</span>
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={onClose}
                  className="w-1/2 sm:w-auto px-5 py-2.5 rounded-full border border-forest-700/60 text-xs font-medium text-cream-200 hover:bg-forest-900/60"
                >
                  Close
                </button>
                <Link
                  to={`/contact?package=${encodeURIComponent(pkg.title)}`}
                  onClick={onClose}
                  className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-forest-500 to-forest-600 hover:from-forest-400 text-white text-xs font-semibold uppercase tracking-wider shadow-lg"
                >
                  <span>Book This Package</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
