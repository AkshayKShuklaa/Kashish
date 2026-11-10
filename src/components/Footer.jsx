import React from 'react';
import { ArrowUp, Instagram, Mail, Phone, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-espresso-950 text-sand-100 py-16 relative overflow-hidden border-t border-espresso-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-espresso-800/80 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-cinzel text-2xl font-bold tracking-[0.25em] text-white">
              KASHISH
            </span>
            <p className="text-xs uppercase tracking-[0.3em] text-roseGold-400 font-medium">
              High-Fashion Model &bull; Luxury Makeup Artist
            </p>
            <p className="text-xs text-sand-300/80 font-sans font-light max-w-sm leading-relaxed">
              Synthesizing runway discipline with bespoke bridal & editorial beauty artistry. Delivering poise before the lens, transformative glamour behind the brush.
            </p>
            
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-espresso-900 hover:bg-roseGold-600 text-sand-200 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="mailto:bookings@kashishstudio.com"
                className="w-9 h-9 rounded-full bg-espresso-900 hover:bg-roseGold-600 text-sand-200 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-espresso-900 hover:bg-roseGold-600 text-sand-200 hover:text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] font-semibold text-roseGold-300">
              Navigation
            </p>
            <ul className="space-y-2 text-xs text-sand-300 font-light">
              <li>
                <a href="#lookbook" className="hover:text-champagne-300 transition-colors">Curated Lookbook</a>
              </li>
              <li>
                <a href="#about-specs" className="hover:text-champagne-300 transition-colors">Modeling Measurements & Bio</a>
              </li>
              <li>
                <a href="#services" className="hover:text-champagne-300 transition-colors">Bridal & Editorial Rates</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-champagne-300 transition-colors">Client Praises</a>
              </li>
              <li>
                <a href="#booking" className="hover:text-champagne-300 transition-colors">Reserve a Session</a>
              </li>
            </ul>
          </div>

          {/* Locations & Agencies */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] font-semibold text-roseGold-300">
              Agency & Representation
            </p>
            <p className="text-xs text-sand-300 leading-relaxed font-light">
              Open for direct commissions & agency assignments in Mumbai, Delhi NCR, Dubai, London, and Paris.
            </p>
            <div className="pt-2">
              <span className="inline-block py-1 px-3 rounded-full bg-espresso-900 text-[11px] text-champagne-300 border border-espresso-800">
                ✨ Accepting Bookings for 2025/2026
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-sand-400 gap-4">
          <p className="flex items-center gap-1 font-light">
            &copy; {new Date().getFullYear()} Kashish. All rights reserved. Designed with <Heart className="w-3 h-3 text-roseGold-500 fill-roseGold-500" /> for high fashion.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-sand-300 hover:text-white transition-colors text-xs uppercase tracking-wider font-medium"
          >
            <span>Back to top</span>
            <div className="w-7 h-7 rounded-full bg-espresso-900 flex items-center justify-center">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
}
