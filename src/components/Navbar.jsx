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
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || !isHome
            ? 'bg-[#08140c]/90 backdrop-blur-md border-b border-forest-800/40 shadow-2xl py-3.5'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="group flex items-center space-x-3 text-left">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-forest-600 via-forest-700 to-forest-900 border border-forest-400/30 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                <Compass className="w-5 h-5 sm:w-6 sm:h-6 text-cream-200 group-hover:rotate-45 transition-transform duration-500" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-2xl font-bold tracking-wider text-cream-100 flex items-center gap-1.5">
                  ODISHA <span className="text-forest-400 font-sans text-xs tracking-widest uppercase font-semibold px-1.5 py-0.5 rounded bg-forest-950/60 border border-forest-700/50">Travel</span>
                </span>
                <span className="text-[10px] tracking-[0.25em] text-cream-300/70 uppercase font-medium">
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

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center space-x-3">
              <Link
                to="/contact"
                className="p-2 rounded-full bg-forest-900/60 border border-forest-700/50 text-cream-200 hover:text-white"
                aria-label="Inquire"
              >
                <PhoneCall className="w-4 h-4" />
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-forest-950/80 border border-forest-700/50 text-cream-200 hover:text-white hover:bg-forest-900 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-[65px] z-40 bg-[#06110a]/95 backdrop-blur-xl lg:hidden flex flex-col justify-between p-6 overflow-y-auto border-t border-forest-800/40"
          >
            <div className="space-y-2 pt-4">
              <div className="px-3 pb-3 text-xs tracking-widest text-forest-400 uppercase font-semibold">
                Explore Odisha
              </div>
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-all ${
                      isActive
                        ? 'bg-forest-800/60 text-white border border-forest-600/40 shadow-inner'
                        : 'text-cream-200/80 hover:text-white hover:bg-white/5'
                    }`
                  }
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-forest-400">→</span>
                </NavLink>
              ))}
            </div>

            <div className="pt-6 border-t border-forest-900 space-y-4">
              <div className="bg-forest-950/70 p-4 rounded-2xl border border-forest-800/60">
                <p className="text-xs text-cream-300/70 mb-1">Similipal Tourism Helpdesk</p>
                <p className="text-sm font-semibold text-cream-100 flex items-center gap-2">
                  <PhoneCall className="w-4 h-4 text-forest-400" /> +91 (06792) 252 573
                </p>
              </div>
              <Link
                to="/packages"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-forest-500 to-forest-600 text-white font-semibold text-sm tracking-wide shadow-lg"
              >
                <Sparkles className="w-4 h-4" />
                <span>View All Tour Packages</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
