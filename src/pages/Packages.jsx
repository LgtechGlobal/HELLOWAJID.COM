import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, ShieldCheck, Sparkles, ArrowRight, Eye, Check, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PACKAGES } from '../data/packages';
import PackageModal from '../components/PackageModal';

export default function Packages() {
  const [selectedPackage, setSelectedPackage] = useState(null);

  return (
    <div className="min-h-screen bg-[#08140c] text-[#f7f4ee] pt-24 pb-20">
      
      {/* =========================================
          HERO BANNER
      ========================================= */}
      <section className="relative h-[55vh] min-h-[420px] flex items-center justify-center overflow-hidden mb-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/hero/hero-similipal.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08140c] via-black/60 to-black/75" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-900/80 border border-forest-500/30 text-xs font-semibold uppercase tracking-widest text-forest-300 backdrop-blur-md mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Odisha Expeditions</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-cream-100 tracking-tight mb-4">
            Tour Packages & Safaris
          </h1>

          <p className="text-base sm:text-lg text-cream-200/90 font-light max-w-2xl mx-auto leading-relaxed">
            All-inclusive, verified itineraries crafted with certified naturalists, private 4x4 vehicles, and eco-cottages inside core sanctuaries.
          </p>
        </div>
      </section>

      {/* =========================================
          PACKAGES GRID
      ========================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {PACKAGES.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group glass-card rounded-3xl overflow-hidden border border-forest-800/60 shadow-2xl flex flex-col justify-between"
            >
              {/* Top Image Banner */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#091a10] via-black/30 to-transparent" />
                
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-forest-600/90 text-white backdrop-blur-md border border-white/10 shadow-lg">
                    {pkg.badge}
                  </span>
                </div>

                {/* Duration */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-cream-200">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
                    <Clock className="w-3.5 h-3.5 text-forest-400" />
                    <span>{pkg.duration}</span>
                  </span>
                  <div className="flex items-center gap-1 text-gold px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs">
                    <Star className="w-3 h-3 fill-gold text-gold" />
                    <span>4.9 (Verified)</span>
                  </div>
                </div>
              </div>

              {/* Package Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white group-hover:text-forest-200 transition-colors leading-tight mb-3">
                    {pkg.title}
                  </h3>
                  <p className="text-sm text-cream-300/80 leading-relaxed font-light mb-5">
                    {pkg.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 pt-2 border-t border-forest-900/80">
                    {pkg.highlights.slice(0, 3).map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-cream-200/90">
                        <Check className="w-3.5 h-3.5 text-forest-400 shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price and Action Buttons */}
                <div className="pt-5 border-t border-forest-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-cream-400/60 block">Starting From</span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-serif text-2xl sm:text-3xl font-black text-forest-300">
                        {pkg.price}
                      </span>
                      <span className="text-xs text-cream-400/80 font-normal">
                        {pkg.perPerson}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    {/* View Details button */}
                    <button
                      onClick={() => setSelectedPackage(pkg)}
                      className="w-1/2 sm:w-auto px-4 py-2.5 rounded-full border border-forest-700/70 hover:bg-forest-900/60 text-xs font-semibold text-cream-200 transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Eye className="w-3.5 h-3.5 text-forest-400" />
                      <span>View Details</span>
                    </button>

                    {/* Book Now button */}
                    <Link
                      to={`/contact?package=${encodeURIComponent(pkg.title)}`}
                      className="w-1/2 sm:w-auto px-5 py-2.5 rounded-full bg-gradient-to-r from-forest-500 to-forest-600 hover:from-forest-400 text-white text-xs font-semibold uppercase tracking-wider shadow-lg flex items-center justify-center gap-1.5 transition-all"
                    >
                      <span>Book Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Trust & Guarantee Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-forest-950/80 border border-forest-800/60 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-forest-900/80 border border-forest-600/50 flex items-center justify-center text-forest-400 shrink-0">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h4 className="font-serif text-xl font-bold text-cream-100">
                Custom Tailored Odisha Expeditions
              </h4>
              <p className="text-xs sm:text-sm text-cream-300/70 mt-1">
                Need a custom duration, birdwatching focus, or private family safari? Our team designs tailor-made journeys.
              </p>
            </div>
          </div>
          <Link
            to="/contact"
            className="shrink-0 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-cream-100 text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            Request Custom Itinerary
          </Link>
        </div>
      </div>

      {/* Package details modal */}
      <PackageModal
        pkg={selectedPackage}
        onClose={() => setSelectedPackage(null)}
      />

    </div>
  );
}
