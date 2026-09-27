import { useState, useEffect } from 'react';

import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Star } from 'lucide-react';
import { BUSINESS_INFO } from '../data/cateringData';

interface NavbarProps {
  onRequestQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menus', path: '/menus' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B140E]/95 backdrop-blur-md py-2.5 sm:py-3 shadow-xl border-b border-[#C5A059]/20'
            : 'bg-[#0B140E] py-3 sm:py-4 md:py-5 border-b border-[#C5A059]/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 sm:gap-3 group shrink-0 min-w-0">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full aspect-square shrink-0 bg-gradient-to-br from-[#D4AF37] to-[#8C6A23] p-[1.5px] flex items-center justify-center shadow-md">
                <div className="w-full h-full rounded-full bg-[#0B140E] flex items-center justify-center">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#C5A059] fill-[#C5A059] transition-transform duration-300 group-hover:scale-110 shrink-0" />
                </div>
              </div>
              <div className="flex flex-col shrink-0">
                <div className="flex items-center gap-1.5">
                  <span className="font-heading text-base sm:text-xl md:text-2xl font-bold tracking-tight text-white whitespace-nowrap leading-tight">
                    The Five Star
                  </span>
                  <div className="hidden sm:flex gap-0.5 text-[#C5A059]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-2.5 h-2.5 fill-[#C5A059]" />
                    ))}
                  </div>
                </div>
                <span className="text-[8.5px] sm:text-[10px] uppercase tracking-[0.16em] sm:tracking-[0.22em] text-[#C5A059] font-medium whitespace-nowrap -mt-0.5">
                  Outdoor Catering Service
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-sm tracking-wide transition-colors relative py-1 ${
                      isActive
                        ? 'text-[#C5A059] font-medium'
                        : 'text-stone-300 hover:text-white'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C5A059] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Right actions: Phone & Quote Button */}
            <div className="hidden md:flex items-center gap-5 lg:gap-6 shrink-0">
              <a
                href={`tel:${BUSINESS_INFO.primaryPhone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 text-stone-300 hover:text-[#C5A059] text-xs lg:text-sm font-medium transition-colors"
              >
                <div className="w-7 h-7 rounded-full bg-stone-800/80 border border-stone-700 flex items-center justify-center text-[#C5A059]">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>{BUSINESS_INFO.primaryPhone}</span>
              </a>

              <button
                onClick={onRequestQuote}
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#C5A059] to-[#B38F36] text-[#0B140E] font-semibold text-xs tracking-wider uppercase hover:shadow-[0_0_20px_rgba(197,160,89,0.4)] hover:brightness-105 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
              >
                Request a Quote
              </button>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden shrink-0">
              <button
                onClick={onRequestQuote}
                className="px-3 py-1.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-[#0B140E] font-bold text-[11px] uppercase tracking-wider whitespace-nowrap shrink-0 hover:brightness-105 active:scale-95 shadow-sm"
              >
                Quote
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 sm:p-2 rounded-lg text-stone-300 hover:text-white hover:bg-stone-800/60 transition-colors shrink-0"
                aria-label="Toggle navigation"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden bg-[#0B140E]/98 pt-24 pb-8 px-6 flex flex-col justify-between overflow-y-auto animate-fadeIn">
          <div className="space-y-4">
            <div className="pb-4 border-b border-stone-800">
              <span className="text-xs uppercase tracking-widest text-[#C5A059] font-medium">Navigation</span>
            </div>
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block py-2.5 text-lg font-heading tracking-wide ${
                    isActive
                      ? 'text-[#C5A059] font-semibold pl-2 border-l-2 border-[#C5A059]'
                      : 'text-stone-300 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-8 border-t border-stone-800 space-y-4">
            <a
              href={`tel:${BUSINESS_INFO.primaryPhone.replace(/\s+/g, '')}`}
              className="flex items-center gap-3 p-3 rounded-xl bg-stone-900/80 border border-stone-800 text-stone-200"
            >
              <div className="w-9 h-9 rounded-full bg-[#C5A059]/20 text-[#C5A059] flex items-center justify-center">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] text-stone-400">Call Us Anytime</p>
                <p className="text-sm font-semibold text-white">{BUSINESS_INFO.primaryPhone}</p>
              </div>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestQuote();
              }}
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#C5A059] to-[#B38F36] text-[#0B140E] font-bold text-sm tracking-wider uppercase shadow-lg text-center"
            >
              Request a Quote
            </button>
          </div>
        </div>
      )}
    </>
  );
};
