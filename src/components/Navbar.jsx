import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, MessageCircle } from 'lucide-react';

export default function Navbar({ onBookClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Lookbook', href: '#lookbook' },
    { name: 'About & Specs', href: '#about-specs' },
    { name: 'Services & Rates', href: '#services' },
    { name: 'Testimonials', href: '#reviews' },
    { name: 'Contact', href: '#booking' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-nav shadow-luxury py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="group flex flex-col">
            <span className="font-cinzel text-xl sm:text-2xl font-bold tracking-[0.25em] text-espresso-900 group-hover:text-roseGold-600 transition-colors">
              KASHISH
            </span>
            <span className="text-[10px] uppercase font-sans tracking-[0.3em] text-espresso-600 font-medium">
              Model &bull; Makeup Artist
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-[0.2em] font-medium text-espresso-700 hover:text-roseGold-600 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-roseGold-500 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Quick CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://wa.me/919876543210?text=Hi%20Kashish!%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20booking."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs uppercase tracking-wider font-medium text-espresso-700 hover:text-emerald-700 bg-sand-100 hover:bg-emerald-50 rounded-full border border-sand-200 transition-all duration-300"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp</span>
            </a>
            <button
              onClick={onBookClick}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.15em] font-semibold text-white bg-espresso-900 hover:bg-roseGold-600 shadow-sm hover:shadow-soft-glow transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-champagne-300" />
              <span>Reserve Session</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-espresso-800 hover:text-espresso-950 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav border-t border-sand-200 px-6 py-6 mt-3 space-y-4 shadow-xl animate-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-widest font-medium text-espresso-800 hover:text-roseGold-600 py-1"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-sand-200 flex flex-col gap-3">
            <a
              href="https://wa.me/919876543210?text=Hi%20Kashish!%20I%20would%20love%20to%20inquire%20about%20booking%20a%20session."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs uppercase tracking-wider font-medium text-emerald-800 bg-emerald-50 border border-emerald-200"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Direct WhatsApp Chat</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs uppercase tracking-[0.15em] font-semibold text-white bg-espresso-900 hover:bg-roseGold-600 shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-champagne-300" />
              <span>Reserve Session</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
