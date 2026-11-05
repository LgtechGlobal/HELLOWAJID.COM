import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Compass, ArrowDown, MapPin, ArrowRight, ShieldCheck, 
  Sparkles, Camera, Mountain, Trees, Waves, Eye, ChevronRight,
  Play, Pause, Volume2, VolumeX
} from 'lucide-react';
import { DESTINATIONS } from '../data/destinations';
import { GALLERY_ITEMS } from '../data/gallery';
import DestinationModal from '../components/DestinationModal';

export default function Home() {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  // Ensure autoplay triggers on mobile devices smoothly
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().then(() => {
        setIsVideoPlaying(true);
      }).catch(() => {
        // Autoplay may be restricted by mobile battery saver / low data mode
        setIsVideoPlaying(false);
      });
    }
  }, []);

  const toggleVideoPlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsVideoPlaying(true);
      } else {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  // Exact 10 featured destinations requested by prompt:
  // Similipal, Barehipani, Joranda, Chilika, Puri Beach, Konark, Daringbadi, Deomali, Satkosia, Gopalpur
  const featuredIds = [
    'similipal-national-park',
    'barehipani-waterfall',
    'joranda-waterfall',
    'chilika-lake',
    'puri-beach',
    'konark-sun-temple',
    'daringbadi',
    'deomali-hills',
    'satkosia-tiger-reserve',
    'gopalpur-beach'
  ];

  const featuredDestinations = featuredIds
    .map((id) => DESTINATIONS.find((d) => d.id === id))
    .filter(Boolean);

  const previewGallery = GALLERY_ITEMS.slice(0, 6);

  const whyChooseUs = [
    {
      title: 'Explore Hidden Places',
      desc: 'Venture deep beyond regular tourist trails into untouched virgin waterfalls, secluded valleys, and pristine tribal frontiers.',
      icon: Compass,
      stat: '40+ Hidden Trails'
    },
    {
      title: 'Comfortable Travel',
      desc: 'Seamless air-conditioned 4x4 safaris, verified forest canopy cottages, and certified safety-first hospitality protocols.',
      icon: ShieldCheck,
      stat: '100% Verified Stays'
    },
    {
      title: 'Local Travel Experiences',
      desc: 'Authentic interactions guided by native Mayurbhanj naturalists and regional conservationists who know every tiger footprint.',
      icon: Trees,
      stat: 'Native Guides'
    },
    {
      title: 'Memorable Adventures',
      desc: 'From sunrise dolphin cruises in Chilika to mist treks atop Deomali and roaring waterfalls in Similipal that stay with you forever.',
      icon: Sparkles,
      stat: '99.4% Guest Delight'
    }
  ];

  return (
    <div className="min-h-screen bg-[#08140c] text-[#f7f4ee] overflow-x-hidden">
      {/* =========================================
          HERO SECTION (Mobile-Optimized Cinematic Video Background)
      ========================================= */}
      <section className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden pt-20 pb-16">
        
        {/* Fullscreen Video of Beautiful Nature & Wild Animal */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            ref={videoRef}
            src="/videos/hero-wildlife.mp4"
            poster="/images/hero/hero-similipal.jpg"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover object-center scale-105"
          />
        </div>

        {/* Cinematic Multi-layered Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08140c] via-black/55 to-black/75" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#08140c]/40 to-[#08140c]/90 pointer-events-none" />

        {/* Video Controls Pill */}
        <div className="absolute top-20 right-3 sm:top-24 sm:right-8 z-20 flex items-center gap-1.5 sm:gap-2">
          <button
            onClick={toggleVideoPlay}
            className="p-2 sm:p-2.5 rounded-full bg-black/50 hover:bg-forest-600/80 backdrop-blur-md text-white/90 border border-white/10 transition-colors shadow-lg touch-manipulation active:scale-90"
            aria-label={isVideoPlaying ? 'Pause nature video' : 'Play nature video'}
            title={isVideoPlaying ? 'Pause video' : 'Play video'}
          >
            {isVideoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={toggleMute}
            className="p-2 sm:p-2.5 rounded-full bg-black/50 hover:bg-forest-600/80 backdrop-blur-md text-white/90 border border-white/10 transition-colors shadow-lg touch-manipulation active:scale-90"
            aria-label={isMuted ? 'Unmute video' : 'Mute video'}
            title={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-forest-900/85 border border-forest-400/40 text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-forest-300 backdrop-blur-md mb-4 sm:mb-6"
          >
            <Compass className="w-3.5 h-3.5 text-forest-400 shrink-0" />
            <span className="truncate">Similipal Biosphere & Pristine Odisha</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-serif text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-cream-100 tracking-tight leading-[1.15] sm:leading-[1.1] mb-4 sm:mb-6 drop-shadow-2xl"
          >
            Discover The <br />
            <span className="italic font-normal bg-gradient-to-r from-cream-100 via-forest-200 to-forest-400 bg-clip-text text-transparent">
              Untouched Beauty
            </span>{' '}
            of Odisha
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-sm sm:text-xl md:text-2xl text-cream-200/90 font-light tracking-wide max-w-2xl mx-auto mb-8 sm:mb-10 drop-shadow"
          >
            Explore Nature. Experience Wildlife. Create Memories.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto max-w-sm sm:max-w-none"
          >
            <Link
              to="/destinations"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-gradient-to-r from-forest-500 via-forest-600 to-forest-700 hover:from-forest-400 hover:to-forest-600 text-white font-semibold text-xs sm:text-sm tracking-wider uppercase shadow-xl hover:shadow-forest-500/30 transition-all duration-300 touch-manipulation active:scale-[0.98]"
            >
              <span>Explore Destinations</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/packages"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-white/10 hover:bg-white/20 text-cream-100 border border-white/20 font-semibold text-xs sm:text-sm tracking-wider uppercase backdrop-blur-md transition-all duration-300 touch-manipulation active:scale-[0.98]"
            >
              <span>View Packages</span>
            </Link>
          </motion.div>
        </div>

        {/* Scroll Down Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-5 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1.5 text-cream-300/60 z-10 pointer-events-none"
        >
          <span className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase font-medium">Scroll down</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-5 h-8 sm:w-6 sm:h-10 rounded-full border-2 border-cream-200/30 flex items-start justify-center p-1"
          >
            <motion.div className="w-1 h-2 sm:w-1.5 sm:h-2.5 bg-forest-400 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* =========================================
          SIMILIPAL SPOTLIGHT (Primary Destination)
      ========================================= */}
      <section className="py-14 sm:py-20 lg:py-28 relative overflow-hidden bg-gradient-to-b from-[#08140c] via-[#0b1c11] to-[#08140c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left text spotlight */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900/60 border border-forest-600/40 text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-forest-300">
                <Trees className="w-3.5 h-3.5 text-forest-400" />
                <span>Primary Destination</span>
              </div>
              
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cream-100 leading-tight">
                Similipal <br />
                <span className="italic font-normal text-forest-300">National Park</span>
              </h2>

              <p className="text-sm sm:text-base text-cream-200/80 leading-relaxed font-light">
                Spanning over 2,750 square kilometers of virgin sal canopies in Mayurbhanj, Similipal is a designated UNESCO World Biosphere Reserve. It is the sacred sanctuary of Royal Bengal Tigers, rare melanistic (black) tigers, wild elephant herds, and cascading 399m waterfalls.
              </p>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 py-1 sm:py-2">
                <div className="p-3.5 sm:p-4 rounded-2xl bg-forest-950/70 border border-forest-800/60">
                  <span className="block font-serif text-xl sm:text-2xl font-bold text-forest-400">2,750+</span>
                  <span className="text-[10px] sm:text-xs text-cream-400/80 uppercase tracking-wider">Sq. Km Wilderness</span>
                </div>
                <div className="p-3.5 sm:p-4 rounded-2xl bg-forest-950/70 border border-forest-800/60">
                  <span className="block font-serif text-xl sm:text-2xl font-bold text-forest-400">1,076+</span>
                  <span className="text-[10px] sm:text-xs text-cream-400/80 uppercase tracking-wider">Flora Species</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                <Link
                  to="/destinations"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-forest-300 hover:text-white transition-colors group"
                >
                  <span>Explore Similipal Safaris</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <span className="text-forest-700 hidden sm:inline">•</span>
                <Link
                  to="/packages"
                  className="text-xs sm:text-sm font-semibold text-cream-300/70 hover:text-white transition-colors"
                >
                  View 2D/3D Packages
                </Link>
              </div>
            </div>

            {/* Right photographic composition with local files */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-3 sm:space-y-4">
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/5] border border-forest-800/50 shadow-2xl group">
                  <img
                    src="/images/gallery/gallery-tiger.jpg"
                    alt="Royal Bengal Tiger Similipal"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                    <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-forest-300">Wildlife Sanctuary</span>
                    <p className="text-xs sm:text-sm font-serif font-semibold text-white truncate">Royal Bengal Tiger</p>
                  </div>
                </div>

                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3] border border-forest-800/50 shadow-2xl group">
                  <img
                    src="/images/destinations/joranda.jpg"
                    alt="Joranda Falls Similipal"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                    <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-forest-300">Waterfalls</span>
                    <p className="text-xs sm:text-sm font-serif font-semibold text-white truncate">Joranda Falls (181m)</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4 pt-4 sm:pt-8">
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3] border border-forest-800/50 shadow-2xl group">
                  <img
                    src="/images/destinations/barehipani.jpg"
                    alt="Barehipani Waterfall"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                    <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-forest-300">Majestic Falls</span>
                    <p className="text-xs sm:text-sm font-serif font-semibold text-white truncate">Barehipani Falls (399m)</p>
                  </div>
                </div>

                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/5] border border-forest-800/50 shadow-2xl group">
                  <img
                    src="/images/gallery/gallery-elephant.jpg"
                    alt="Wild Asian Elephants Similipal"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                    <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-forest-300">Corridor</span>
                    <p className="text-xs sm:text-sm font-serif font-semibold text-white truncate">Wild Asian Elephants</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          FEATURED DESTINATIONS (Image-Heavy Cards)
      ========================================= */}
      <section className="py-14 sm:py-20 lg:py-28 bg-[#08140c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-14 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-950 border border-forest-800 text-[11px] font-semibold uppercase tracking-widest text-forest-400 mb-2">
                <Compass className="w-3.5 h-3.5" />
                <span>Featured Odisha Destinations</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-cream-100">
                10 Iconic Landscapes
              </h2>
            </div>
            <Link
              to="/destinations"
              className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-forest-900/60 hover:bg-forest-800 border border-forest-700/50 text-xs font-semibold uppercase tracking-wider text-cream-100 transition-colors self-start sm:self-auto touch-manipulation"
            >
              <span>View All 18 Destinations</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Cards Grid: 10 Destinations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5">
            {featuredDestinations.map((dest) => (
              <motion.div
                key={dest.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedDestination(dest)}
                className="group relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/5] sm:aspect-[3/4] cursor-pointer border border-forest-900/60 bg-forest-950 shadow-xl touch-manipulation active:scale-[0.99]"
              >
                {/* Background Image */}
                <img
                  src={dest.image}
                  alt={dest.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10 group-hover:via-black/20 transition-colors" />

                {/* Minimal Label Badge */}
                <div className="absolute top-3.5 right-3.5">
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-forest-300 border border-white/10">
                    {dest.categoryLabel.split(' ')[0]}
                  </span>
                </div>

                {/* Small Destination Name and Location Label */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-cream-200 transition-colors leading-tight">
                    {dest.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-cream-300/80 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-forest-400 shrink-0" />
                    <span className="truncate">{dest.location}</span>
                  </div>
                  <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] text-forest-400 font-medium">
                    <span>Explore details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================
          WHY CHOOSE US SECTION
      ========================================= */}
      <section className="py-14 sm:py-20 lg:py-24 bg-gradient-to-b from-[#08140c] via-[#0b1c11] to-[#08140c] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-forest-400">
              The Odia Wild Difference
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-cream-100 mt-2">
              Why Explore With Us
            </h2>
            <p className="text-xs sm:text-base text-cream-300/70 font-light mt-3">
              We operate low-impact, deep-nature expeditions that prioritize biodiversity conservation, local tribal heritage, and authentic exploration.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="glass-card p-5 sm:p-8 rounded-2xl sm:rounded-3xl relative overflow-hidden transition-all duration-300"
                >
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-forest-900/80 border border-forest-600/40 flex items-center justify-center text-forest-400 mb-4 sm:mb-5">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-forest-400 block mb-1">
                    {item.stat}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-cream-100 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-cream-300/80 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================
          LARGE PHOTOGRAPHY GALLERY PREVIEW
      ========================================= */}
      <section className="py-14 sm:py-20 lg:py-24 bg-[#08140c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-forest-400">
                Visual Journey
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-cream-100 mt-1">
                Glimpses of Wild Odisha
              </h2>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-forest-900/60 hover:bg-forest-800 border border-forest-700/50 text-xs font-semibold uppercase tracking-wider text-cream-100 transition-colors self-start sm:self-auto touch-manipulation"
            >
              <Camera className="w-4 h-4 text-forest-400" />
              <span>Open Fullscreen Gallery</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
            {previewGallery.map((img) => (
              <Link
                key={img.id}
                to="/gallery"
                className="group relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/3] border border-forest-900/60 bg-forest-950 shadow-lg block touch-manipulation"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-85 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3.5 sm:left-3.5 sm:right-3.5">
                  <p className="text-[10px] sm:text-[11px] font-semibold text-cream-100 truncate font-serif">
                    {img.title}
                  </p>
                  <p className="text-[9px] sm:text-[10px] text-forest-300 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 shrink-0" />
                    <span className="truncate">{img.location}</span>
                  </p>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================
          CALL TO ACTION BANNER (Local File)
      ========================================= */}
      <section className="relative py-12 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto rounded-2xl sm:rounded-3xl relative overflow-hidden border border-forest-700/40 shadow-2xl">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('/images/hero/cta-banner.jpg')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#08140c] via-[#08140c]/85 to-black/70" />

          <div className="relative z-10 p-6 sm:p-14 lg:p-20 max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full bg-forest-800/80 border border-forest-500/30 text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-forest-200 mb-3 sm:mb-4">
              Plan Your Journey Today
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-cream-100 mb-3 sm:mb-4 leading-tight">
              Ready to witness India’s best kept secret?
            </h2>
            <p className="text-xs sm:text-base text-cream-200/80 font-light mb-6 sm:mb-8 leading-relaxed">
              From guided safaris in Similipal National Park to serene sunrises over Chandrabhaga beach, let our native travel experts craft your bespoke Odisha adventure.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                to="/packages"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 sm:px-8 sm:py-3.5 rounded-full bg-gradient-to-r from-forest-500 to-forest-600 hover:from-forest-400 text-white font-semibold text-xs uppercase tracking-wider shadow-lg touch-manipulation active:scale-[0.98]"
              >
                <span>Browse Tour Packages</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 sm:px-8 sm:py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-cream-100 border border-white/20 font-semibold text-xs uppercase tracking-wider backdrop-blur-md touch-manipulation active:scale-[0.98]"
              >
                <span>Contact Travel Desk</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Destination detail modal when clicking a card */}
      <DestinationModal
        destination={selectedDestination}
        onClose={() => setSelectedDestination(null)}
      />
    </div>
  );
}
