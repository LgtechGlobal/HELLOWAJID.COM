import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Compass, PhoneCall, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Packages', path: '/packages' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || !isHome || mobileMenuOpen
            ? 'bg-[#08140c]/95 backdrop-blur-md border-b border-forest-800/50 shadow-2xl py-3'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="group flex items-center space-x-2.5 sm:space-x-3 text-left">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-forest-600 via-forest-700 to-forest-900 border border-forest-400/30 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300 shrink-0">
                <Compass className="w-5 h-5 sm:w-6 sm:h-6 text-cream-200 group-hover:rotate-45 transition-transform duration-500" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-2xl font-bold tracking-wider text-cream-100 flex items-center gap-1.5">
                  ODISHA <span className="text-forest-400 font-sans text-[10px] sm:text-xs tracking-widest uppercase font-semibold px-1.5 py-0.5 rounded bg-forest-950/80 border border-forest-700/50">Travel</span>
                </span>
                <span className="text-[9px] sm:text-[10px] tracking-[0.2em] text-cream-300/70 uppercase font-medium">
                  Similipal & Beyond
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 relative ${
                      isActive
                        ? 'text-white bg-forest-800/80 shadow-md border border-forest-500/30'
                        : 'text-cream-200/80 hover:text-white hover:bg-white/5'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{link.name}</span>
                      {isActive && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-forest-400 rounded-full"
                          transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Desktop Action Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                to="/packages"
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#08140c] bg-gradient-to-r from-cream-100 via-forest-200 to-forest-300 hover:from-white hover:to-forest-200 shadow-lg hover:shadow-forest-500/20 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-forest-800" />
                <span>Explore Tours</span>
              </Link>
            </div>

            {/* Mobile Actions & Hamburger Button */}
            <div className="flex lg:hidden items-center space-x-2">
              <Link
                to="/contact"
                className="p-2 sm:p-2.5 rounded-full bg-forest-900/70 border border-forest-700/50 text-cream-200 hover:text-white touch-manipulation"
                aria-label="Inquire directly"
              >
                <PhoneCall className="w-4 h-4 text-forest-400" />
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 sm:p-2.5 rounded-xl bg-forest-950 border border-forest-700/60 text-cream-200 hover:text-white hover:bg-forest-900 transition-colors touch-manipulation active:scale-95"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Fullscreen Overlay Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[57px] sm:top-[65px] z-40 bg-[#06110a]/98 backdrop-blur-2xl lg:hidden flex flex-col justify-between p-5 sm:p-6 overflow-y-auto border-t border-forest-800/50 h-[calc(100dvh-57px)] sm:h-[calc(100dvh-65px)]"
          >
            <div className="space-y-1.5 pt-2">
              <div className="px-3 pb-2 text-[11px] tracking-widest text-forest-400 uppercase font-semibold">
                Explore Odisha Destinations
              </div>
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-4 py-3.5 rounded-2xl text-base font-medium transition-all touch-manipulation ${
                      isActive
                        ? 'bg-forest-800/80 text-white border border-forest-600/50 shadow-inner'
                        : 'text-cream-200/80 hover:text-white active:bg-white/10'
                    }`
                  }
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-forest-400 font-bold">→</span>
                </NavLink>
              ))}
            </div>

            <div className="pt-5 border-t border-forest-900 space-y-3 shrink-0">
              <div className="bg-forest-950/90 p-3.5 rounded-2xl border border-forest-800/70">
                <p className="text-[11px] text-cream-300/70 mb-0.5">Similipal Tourism 24/7 Helpline</p>
                <a
                  href="tel:+916792252573"
                  className="text-sm font-semibold text-cream-100 flex items-center gap-2 hover:text-forest-300 transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-forest-400" /> +91 (06792) 252 573
                </a>
              </div>
              <Link
                to="/packages"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-forest-500 to-forest-600 text-white font-semibold text-sm tracking-wide shadow-lg touch-manipulation active:scale-[0.98]"
              >
                <Sparkles className="w-4 h-4 text-cream-200" />
                <span>View All Tour Packages</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
