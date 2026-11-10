import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Compass, Award, Calendar, Sparkles } from 'lucide-react';

export default function Hero({ onBookClick }) {
  return (
    <section className="relative min-h-[90vh] pt-24 sm:pt-28 pb-12 sm:pb-16 flex items-center warm-gradient-bg overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 right-5 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-champagne-200/40 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-5 w-60 sm:w-80 h-60 sm:h-80 rounded-full bg-roseGold-300/30 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Narrative & Headline */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left"
          >
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sand-200/80 border border-sand-300 text-espresso-800 text-[10px] sm:text-xs uppercase tracking-[0.18em] font-medium backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-roseGold-500 animate-pulse" />
              <span>Available for Bookings &bull; Lucknow &bull; Delhi NCR &bull; Worldwide</span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-serif font-light text-espresso-950 leading-[1.12] tracking-tight">
              Sculpting <span className="italic font-normal font-serif text-roseGold-600">Form</span>,<br />
              Illuminating <span className="font-serif italic font-normal text-espresso-800">Beauty.</span>
            </h1>

            {/* Dual Craft Subheading */}
            <p className="text-sm sm:text-base md:text-lg text-espresso-700 max-w-xl mx-auto lg:mx-0 font-sans font-light leading-relaxed">
              Where runway elegance meets the fine art of bridal and party makeup. Bringing poise in front of the camera, and transformative grace behind the brush.
            </p>

            {/* Specialties & Dual Synergy Highlights */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 pt-1">
              <span className="px-3 py-1 rounded-full bg-white/90 border border-sand-200 text-espresso-800 text-xs font-medium shadow-sm">
                ✨ Bridal & Occasion Glam
              </span>
              <span className="px-3 py-1 rounded-full bg-white/90 border border-sand-200 text-espresso-800 text-xs font-medium shadow-sm">
                👠 High-Fashion Model
              </span>
              <span className="px-3 py-1 rounded-full bg-white/90 border border-sand-200 text-espresso-800 text-xs font-medium shadow-sm">
                🌿 Party Mehandi Artistry
              </span>
              <span className="px-3 py-1 rounded-full bg-white/90 border border-sand-200 text-espresso-800 text-xs font-medium shadow-sm">
                💄 Starting @ only ₹1,500
              </span>
            </div>

            {/* Dual Synergy callout (inline and clean, NOT covering the image) */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/70 border border-sand-200/90 text-left max-w-lg mx-auto lg:mx-0 shadow-sm">
              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="w-4 h-4 text-roseGold-600" />
                <span className="text-[11px] uppercase font-bold tracking-wider text-espresso-800">
                  Dual Synergy: Model & Makeup Artist
                </span>
              </div>
              <p className="text-xs text-espresso-600 leading-relaxed font-sans">
                Camera-tested skin chemistry with runway elegance. Understanding how studio strobes, flash bounce, and daylight interact with facial contours.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <button
                onClick={onBookClick}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:py-4 rounded-full text-xs uppercase tracking-[0.18em] font-semibold text-white bg-espresso-900 hover:bg-roseGold-600 shadow-luxury transition-all duration-300 transform active:scale-95"
              >
                <Calendar className="w-4 h-4 text-champagne-300" />
                <span>Reserve Session</span>
              </button>

              <a
                href="#lookbook"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-full text-xs uppercase tracking-[0.18em] font-semibold text-espresso-800 bg-sand-100 hover:bg-sand-200/80 border border-sand-300 transition-all duration-300 active:scale-95"
              >
                <span>Explore Lookbook</span>
                <ArrowDownRight className="w-4 h-4 text-roseGold-600" />
              </a>
            </div>

            {/* Metrics Strip */}
            <div className="pt-6 border-t border-sand-200/80 grid grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <p className="font-serif text-2xl sm:text-3xl font-medium text-espresso-900">150+</p>
                <p className="text-[10px] sm:text-xs uppercase tracking-wider text-espresso-600 font-sans mt-0.5">
                  Brides & Events
                </p>
              </div>
              <div className="text-center lg:text-left">
                <p className="font-serif text-2xl sm:text-3xl font-medium text-espresso-900">8+ Yrs</p>
                <p className="text-[10px] sm:text-xs uppercase tracking-wider text-espresso-600 font-sans mt-0.5">
                  Artistry & Model
                </p>
              </div>
              <div className="text-center lg:text-left">
                <p className="font-serif text-2xl sm:text-3xl font-medium text-espresso-900">100%</p>
                <p className="text-[10px] sm:text-xs uppercase tracking-wider text-espresso-600 font-sans mt-0.5">
                  Client Radiance
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Clean Unobstructed Photo Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 w-full max-w-md mx-auto"
          >
            {/* Clean Framed Card - Zero Badges Overlapping the Picture */}
            <div className="bg-white rounded-3xl p-3 sm:p-4 shadow-luxury border border-sand-200">
              
              {/* Picture Frame */}
              <div className="overflow-hidden rounded-2xl bg-sand-100">
                <img
                  src="/kashish-hero.jpg"
                  alt="Kashish Chainani - Model and Makeup Artist"
                  className="w-full h-auto object-contain block hover:scale-102 transition-transform duration-500"
                />
              </div>

              {/* Dedicated Editorial Label Bar (Right Below the Image, Never Overlapping It) */}
              <div className="mt-3.5 px-3 py-3 rounded-xl bg-sand-100/80 border border-sand-200 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-roseGold-600 font-semibold truncate">
                    Editorial Feature &bull; 2024
                  </p>
                  <p className="font-serif text-base sm:text-lg font-medium text-espresso-950 truncate">
                    Kashish Chainani
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-[10px] sm:text-xs text-espresso-600 font-light flex items-center justify-end gap-1">
                    <Compass className="w-3.5 h-3.5 text-roseGold-500" />
                    <span>Paris &bull; Milan &bull; Mumbai &bull; Dubai</span>
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
