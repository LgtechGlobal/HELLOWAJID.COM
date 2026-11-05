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
    <footer className="bg-[#050f08] border-t border-forest-900/80 text-cream-200/80 pt-16 pb-8 relative overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-forest-900/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-olive-dark/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-14">
          
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center space-x-3 text-left">
              <div className="w-10 h-10 rounded-full bg-forest-700/50 border border-forest-500/40 flex items-center justify-center">
                <Compass className="w-5 h-5 text-cream-100" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-wider text-cream-100">
                  ODISHA <span className="text-forest-400 font-sans text-xs uppercase tracking-widest">Travel</span>
                </span>
                <span className="text-[10px] tracking-[0.2em] text-cream-300/60 uppercase">
                  Similipal National Park
                </span>
              </div>
            </Link>
            <p className="text-sm text-cream-300/70 leading-relaxed max-w-md">
              Dedicated to showcasing Odisha’s raw landscapes, the UNESCO Biosphere of Similipal, roaring waterfalls, serene coastal shores, and 2,500 years of living heritage.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-forest-900/60 border border-forest-700/40 text-forest-300">
                <ShieldCheck className="w-3.5 h-3.5 text-forest-400" /> Eco-Certified Safaris
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-forest-900/60 border border-forest-700/40 text-cream-300">
                Mayurbhanj Wild Trails
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-forest-400">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors duration-200">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors duration-200">
                  About Similipal & Odisha
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="hover:text-white transition-colors duration-200">
                  All 18+ Destinations
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-white transition-colors duration-200">
                  Photography Gallery
                </Link>
              </li>
              <li>
                <Link to="/packages" className="hover:text-white transition-colors duration-200">
                  Tour Packages & Safaris
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors duration-200">
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Key Destinations */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-forest-400">
              Top Highlights
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/destinations" className="hover:text-white transition-colors duration-200 flex items-center justify-between">
                  <span>Similipal Tiger Reserve</span>
                  <span className="text-[10px] text-forest-400 uppercase">Core</span>
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="hover:text-white transition-colors duration-200">
                  Barehipani Waterfall (399m)
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="hover:text-white transition-colors duration-200">
                  Chilika Dolphin Lagoon
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="hover:text-white transition-colors duration-200">
                  Deomali Eastern Ghats Peak
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="hover:text-white transition-colors duration-200">
                  Konark Sun Temple
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="hover:text-white transition-colors duration-200">
                  Puri Golden Beach
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact / Newsletter */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-forest-400">
              Stay Connected
            </h4>
            <div className="space-y-2 text-xs text-cream-300/70">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-forest-400 shrink-0 mt-0.5" />
                <span>Baripada Office, Near Bhanjpur, Mayurbhanj, Odisha 757001</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-forest-400 shrink-0" />
                <span>+91 94370 12890 / 06792-252573</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-forest-400 shrink-0" />
                <span>info@odishatourism-similipal.in</span>
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="pt-2">
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
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-2.5 bg-forest-600 hover:bg-forest-500 text-white rounded-lg transition-colors flex items-center justify-center"
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
        <div className="pt-8 border-t border-forest-900/70 flex flex-col sm:flex-row items-center justify-between text-xs text-cream-400/50 gap-4">
          <p>© {new Date().getFullYear()} Odisha Tour & Travel. Similipal National Park Eco-Initiative. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed for wanderers with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> and reverence for Mother Nature.
          </p>
        </div>
      </div>
    </footer>
  );
}
