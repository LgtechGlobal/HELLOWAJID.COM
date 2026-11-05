import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Compass, Mail, Phone, MapPin, ArrowRight, ShieldCheck, Heart, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-[#050f08] border-t border-forest-900/80 text-cream-200/80 pt-12 sm:pt-16 pb-8 relative overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-forest-900/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-olive-dark/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 mb-10 sm:mb-14">
          
          {/* Brand info */}
          <div className="sm:col-span-2 space-y-3 sm:space-y-4">
            <Link to="/" className="flex items-center space-x-2.5 sm:space-x-3 text-left">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-forest-700/50 border border-forest-500/40 flex items-center justify-center shrink-0">
                <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-cream-100" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-xl font-bold tracking-wider text-cream-100">
                  ODISHA <span className="text-forest-400 font-sans text-[10px] sm:text-xs uppercase tracking-widest">Travel</span>
                </span>
                <span className="text-[9px] sm:text-[10px] tracking-[0.2em] text-cream-300/60 uppercase">
                  Similipal National Park
                </span>
              </div>
            </Link>
            <p className="text-xs sm:text-sm text-cream-300/70 leading-relaxed max-w-md font-light">
              Dedicated to showcasing Odisha’s raw landscapes, the UNESCO Biosphere of Similipal, roaring waterfalls, serene coastal shores, and 2,500 years of living heritage.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-forest-900/60 border border-forest-700/40 text-forest-300">
                <ShieldCheck className="w-3.5 h-3.5 text-forest-400" /> Eco-Safaris
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-forest-900/60 border border-forest-700/40 text-cream-300">
                Mayurbhanj Wild Trails
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-forest-400">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors py-1 block">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors py-1 block">
                  About Similipal & Odisha
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="hover:text-white transition-colors py-1 block">
                  All 18+ Destinations
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-white transition-colors py-1 block">
                  Photography Gallery
                </Link>
              </li>
              <li>
                <Link to="/packages" className="hover:text-white transition-colors py-1 block">
                  Tour Packages & Safaris
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors py-1 block">
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Key Destinations */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-forest-400">
              Top Highlights
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/destinations" className="hover:text-white transition-colors py-1 flex items-center justify-between">
                  <span>Similipal Tiger Reserve</span>
                  <span className="text-[9px] text-forest-400 uppercase">Core</span>
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="hover:text-white transition-colors py-1 block">
                  Barehipani Waterfall (399m)
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="hover:text-white transition-colors py-1 block">
                  Chilika Dolphin Lagoon
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="hover:text-white transition-colors py-1 block">
                  Deomali Eastern Ghats Peak
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="hover:text-white transition-colors py-1 block">
                  Konark Sun Temple
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="hover:text-white transition-colors py-1 block">
                  Puri Golden Beach
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact / Newsletter */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-forest-400">
              Stay Connected
            </h4>
            <div className="space-y-2 text-xs text-cream-300/70">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-forest-400 shrink-0 mt-0.5" />
                <span>Baripada Office, Near Bhanjpur, Mayurbhanj, Odisha 757001</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-forest-400 shrink-0" />
                <a href="tel:+919437012890" className="hover:text-white">+91 94370 12890 / 06792-252573</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-forest-400 shrink-0" />
                <span>info@odishatourism-similipal.in</span>
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="pt-1 sm:pt-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl bg-forest-950/80 border border-forest-800 text-xs text-cream-100 placeholder:text-cream-400/40 focus:outline-none focus:border-forest-500 transition-colors pr-10"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-2.5 bg-forest-600 hover:bg-forest-500 text-white rounded-lg transition-colors flex items-center justify-center touch-manipulation active:scale-95"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
              {subscribed && (
                <p className="text-[11px] text-forest-300 mt-2 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-forest-400" /> Subscribed! Welcome to wild Odisha.
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 sm:pt-8 border-t border-forest-900/70 flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs text-cream-400/50 gap-3 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Odisha Tour & Travel. Similipal National Park Eco-Initiative. All rights reserved.</p>
          <p className="flex items-center justify-center gap-1.5">
            Designed for wanderers with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> and reverence for Mother Nature.
          </p>
        </div>
      </div>
    </footer>
  );
}
