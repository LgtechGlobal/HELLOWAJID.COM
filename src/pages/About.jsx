import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Trees, Compass, Shield, Target, Eye, ArrowRight, Heart, Award, Sparkles } from 'lucide-react';

export default function About() {
  const experiences = [
    {
      title: 'Pristine Nature',
      image: '/images/destinations/joranda.jpg',
      desc: 'Cascading waterfalls, untouched sal woodlands, and virgin hills untouched by commercial over-tourism.'
    },
    {
      title: 'Untamed Wildlife',
      image: '/images/gallery/gallery-tiger.jpg',
      desc: 'Royal Bengal tigers, Asian wild elephants, Irrawaddy dolphins, and world-record saltwater crocodiles.'
    },
    {
      title: 'Golden Beaches',
      image: '/images/destinations/puri-beach.jpg',
      desc: 'Blue Flag certified golden shorelines along the Bay of Bengal, serene casuarina groves, and sacred surf.'
    },
    {
      title: 'Living Heritage',
      image: '/images/destinations/konark.jpg',
      desc: 'Thirteenth-century architectural masterworks at Konark, rock edicts of Ashoka, and timeless temples.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#08140c] text-[#f7f4ee] pt-24 pb-20">
      
      {/* =========================================
          HERO BANNER: Large Odisha Nature Background
      ========================================= */}
      <section className="relative h-[65vh] min-h-[460px] flex items-center justify-center overflow-hidden mb-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/hero/about-banner.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08140c] via-black/60 to-black/75" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-900/80 border border-forest-500/30 text-xs font-semibold uppercase tracking-widest text-forest-300 backdrop-blur-md mb-4"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Discover Our Story</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-cream-100 tracking-tight mb-4"
          >
            Explore Odisha With Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-cream-200/90 font-light max-w-2xl mx-auto leading-relaxed"
          >
            Odisha is India’s hidden gem of raw natural splendour. We are dedicated to providing sustainable, immersive, and responsible tourism that honors nature and uplifts local communities.
          </motion.p>
        </div>
      </section>

      {/* =========================================
          FOUR PILLARS: NATURE, WILDLIFE, BEACHES, CULTURE
      ========================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-forest-400">
            A Land of Diverse Wonders
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream-100 mt-1">
            Odisha’s Four Elements
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              className="group relative rounded-3xl overflow-hidden aspect-[4/5] border border-forest-800/50 bg-forest-950 shadow-xl"
            >
              <img
                src={exp.image}
                alt={exp.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-serif text-2xl font-bold text-white mb-2">
                  {exp.title}
                </h3>
                <p className="text-xs text-cream-200/80 leading-relaxed font-light">
                  {exp.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================================
          PHOTOGRAPHY-BASED SIMILIPAL SHOWCASE
      ========================================= */}
      <section className="py-16 bg-[#0a1a12] border-y border-forest-900/60 mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Visual Mosaic */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] border border-forest-800/50">
                  <img
                    src="/images/destinations/similipal.jpg"
                    alt="Similipal Core Canopy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-xs font-serif text-white font-medium">
                    Virgin Sal Canopy
                  </span>
                </div>
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-forest-800/50">
                  <img
                    src="/images/destinations/bhitarkanika.jpg"
                    alt="Similipal Wildlife"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-xs font-serif text-white font-medium">
                    Protected Ecosystem
                  </span>
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-forest-800/50">
                  <img
                    src="/images/destinations/barehipani.jpg"
                    alt="Barehipani 399m"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-xs font-serif text-white font-medium">
                    Barehipani (399m)
                  </span>
                </div>
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] border border-forest-800/50">
                  <img
                    src="/images/gallery/gallery-tiger.jpg"
                    alt="Similipal Tiger Reserve"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-xs font-serif text-white font-medium">
                    Tiger Reserve
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-forest-400">
                Our Primary Focus
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream-100 leading-tight">
                Similipal: The Heart of Wild Odisha
              </h2>
              <p className="text-sm text-cream-200/80 leading-relaxed font-light">
                Deriving its name from the crimson-blossoming ‘Simul’ (silk cotton) tree, Similipal is more than a sanctuary—it is an ancient ecological treasure house in Mayurbhanj.
              </p>
              <p className="text-sm text-cream-200/80 leading-relaxed font-light">
                Our guided safaris ensure minimal impact on wildlife habitats while delivering an unforgettable encounter with dense sal forests, dramatic waterfalls, and tribal folklore.
              </p>
              <div className="pt-2">
                <Link
                  to="/destinations"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-forest-600 hover:bg-forest-500 text-white font-semibold text-xs uppercase tracking-wider transition-all"
                >
                  <span>Explore Similipal Safaris</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================
          MISSION & VISION SECTION
      ========================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission */}
          <div className="glass-card p-8 sm:p-10 rounded-3xl relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-forest-900/80 border border-forest-600/40 flex items-center justify-center text-forest-400 mb-6">
              <Target className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-forest-400 block mb-2">
              Our Mission
            </span>
            <h3 className="font-serif text-2xl font-bold text-cream-100 mb-3">
              Conscious & Sustainable Travel
            </h3>
            <p className="text-sm text-cream-300/80 leading-relaxed font-light">
              To connect conscious travelers with the untouched wonders of Odisha while preserving forest ecosystems, respecting tribal heritage, and directly supporting local wildlife conservationists.
            </p>
          </div>

          {/* Vision */}
          <div className="glass-card p-8 sm:p-10 rounded-3xl relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-forest-900/80 border border-forest-600/40 flex items-center justify-center text-forest-400 mb-6">
              <Eye className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-forest-400 block mb-2">
              Our Vision
            </span>
            <h3 className="font-serif text-2xl font-bold text-cream-100 mb-3">
              Global Recognition for Odisha
            </h3>
            <p className="text-sm text-cream-300/80 leading-relaxed font-light">
              To establish Similipal National Park and Odisha as India’s premier sustainable eco-tourism destination, renowned globally for biodiversity, authenticity, and pristine visual beauty.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
