import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Sparkles, Compass, Award, Calendar } from 'lucide-react';

export default function Hero({ onBookClick }) {
  return (
    <section className="relative min-h-screen pt-28 pb-16 flex items-center warm-gradient-bg overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute top-1/4 right-5 w-96 h-96 rounded-full bg-champagne-200/40 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-5 w-80 h-80 rounded-full bg-roseGold-300/30 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Narrative & Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-sand-200/70 border border-sand-300/80 text-espresso-800 text-[11px] sm:text-xs uppercase tracking-[0.2em] font-medium backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-roseGold-500 animate-pulse" />
              <span>Available for Worldwide Bookings &bull; 2025-2026</span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-serif font-light text-espresso-950 leading-[1.08] tracking-tight">
              Sculpting <span className="italic font-normal font-serif text-roseGold-600">Form</span>,<br />
              Illuminating <span className="font-serif italic font-normal text-espresso-800">Beauty.</span>
            </h1>

            {/* Dual Craft Subheading */}
            <p className="text-base sm:text-lg text-espresso-700 max-w-xl font-sans font-light leading-relaxed">
              Where high-fashion runway discipline meets the delicate mastery of bespoke bridal and editorial makeup artistry. Bringing poise in front of the lens, and transformative grace behind the brush.
            </p>

            {/* Quick Badges / Specialties */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 rounded-md bg-white/70 border border-sand-200 text-espresso-700 text-xs font-medium">
                ✨ HD & Airbrush Bridal
              </span>
              <span className="px-3 py-1 rounded-md bg-white/70 border border-sand-200 text-espresso-700 text-xs font-medium">
                👠 International Runway Model
              </span>
              <span className="px-3 py-1 rounded-md bg-white/70 border border-sand-200 text-espresso-700 text-xs font-medium">
                📸 Vogue & Elle Editorials
              </span>
              <span className="px-3 py-1 rounded-md bg-white/70 border border-sand-200 text-espresso-700 text-xs font-medium">
                💄 Masterclass Educator
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onBookClick}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-semibold text-white bg-espresso-900 hover:bg-roseGold-600 shadow-luxury transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <Calendar className="w-4 h-4 text-champagne-300" />
                <span>Reserve Session</span>
              </button>

              <a
                href="#lookbook"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-semibold text-espresso-800 bg-sand-100 hover:bg-sand-200/80 border border-sand-300 transition-all duration-300"
              >
                <span>Explore Lookbook</span>
                <ArrowDownRight className="w-4 h-4 text-roseGold-600" />
              </a>
            </div>

            {/* Quick Metrics Strip */}
            <div className="pt-8 border-t border-sand-200/80 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-medium text-espresso-900">150+</p>
                <p className="text-[11px] sm:text-xs uppercase tracking-wider text-espresso-600 font-sans mt-0.5">
                  Brides & Events
                </p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-medium text-espresso-900">8+ Yrs</p>
                <p className="text-[11px] sm:text-xs uppercase tracking-wider text-espresso-600 font-sans mt-0.5">
                  Runway & Artistry
                </p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-medium text-espresso-900">40+</p>
                <p className="text-[11px] sm:text-xs uppercase tracking-wider text-espresso-600 font-sans mt-0.5">
                  Campaigns & Covers
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Main Portrait Frame */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative ring */}
              <div className="absolute -inset-3 sm:-inset-4 rounded-3xl border border-sand-300/70 pointer-events-none" />
              
              <div className="relative overflow-hidden rounded-2xl shadow-luxury aspect-square sm:aspect-[4/5] bg-sand-200">
                <img
                  src="/kashish-hero.jpg"
                  alt="Kashish Chainani - Model and Makeup Artist"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/80 via-espresso-950/20 to-transparent" />

                {/* Bottom caption overlay */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-champagne-300 font-semibold">
                    Editorial Feature &bull; 2024
                  </p>
                  <p className="font-serif text-xl sm:text-2xl font-light tracking-wide mt-0.5">
                    Kashish Chainani
                  </p>
                  <p className="text-xs text-sand-200 font-light mt-1 flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-roseGold-400" />
                    <span>Paris &bull; Milan &bull; Mumbai &bull; Dubai</span>
                  </p>
                </div>
              </div>

              {/* Floating Badge 1: Dual Discipline */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -bottom-6 -left-4 sm:-left-8 glass-card rounded-2xl p-4 shadow-luxury max-w-[200px] border border-sand-200"
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="p-1.5 rounded-lg bg-roseGold-500/10 text-roseGold-600">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-espresso-700">
                    Dual Synergy
                  </span>
                </div>
                <p className="text-xs font-serif text-espresso-900 leading-snug">
                  Camera-tested skin chemistry with runway elegance.
                </p>
              </motion.div>

              {/* Floating Badge 2: Certified Pro */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute -top-4 -right-3 sm:-right-6 glass-card rounded-xl px-4 py-3 shadow-luxury border border-sand-200 flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-champagne-300/40 flex items-center justify-center text-espresso-900 font-bold text-xs">
                  <Award className="w-4 h-4 text-espresso-800" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-espresso-900 uppercase tracking-wider">
                    Temptu & London
                  </p>
                  <p className="text-[10px] text-espresso-600">Master Certified Artist</p>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

