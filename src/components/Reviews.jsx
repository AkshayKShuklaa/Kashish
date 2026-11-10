import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Sparkles } from 'lucide-react';
import { testimonialsData } from '../data/testimonialsData';
import { modelSpecs } from '../data/specsData';

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-nude-50 relative overflow-hidden border-t border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sand-200/80 text-espresso-800 text-[11px] uppercase tracking-[0.25em] font-medium">
            <Sparkles className="w-3.5 h-3.5 text-roseGold-500" />
            <span>Reputation & Praise</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-light text-espresso-950">
            Kind Words from <span className="italic font-serif text-roseGold-600">Clients & Visionaries</span>
          </h2>
          <p className="text-sm sm:text-base text-espresso-700 font-sans font-light">
            Real experiences from brides on their most cherished days, editorial photographers, and high-fashion creative directors.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {testimonialsData.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-7 sm:p-9 border border-sand-200/90 shadow-luxury flex flex-col justify-between relative group hover:border-sand-300 transition-all"
            >
              {/* Decorative Quote Icon */}
              <div className="absolute top-6 right-6 text-sand-200 group-hover:text-roseGold-300 transition-colors pointer-events-none">
                <Quote className="w-10 h-10 opacity-60" />
              </div>

              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-4 text-amber-500">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-espresso-800 font-serif text-lg sm:text-xl font-light italic leading-relaxed mb-6">
                  "{review.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-sand-200/80 flex items-center gap-4">
                <img
                  src={review.avatar}
                  alt={review.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-roseGold-300/60 shadow-sm"
                />
                <div>
                  <h4 className="font-serif text-base font-medium text-espresso-950">
                    {review.author}
                  </h4>
                  <p className="text-xs text-espresso-600 font-sans">
                    {review.role} &bull; <span className="text-roseGold-600">{review.event}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Brand Collaborations Strip */}
        <div className="pt-12 border-t border-sand-200 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] font-semibold text-espresso-600 mb-8">
            Featured In & Trusted By Industry Giants
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 opacity-75 grayscale hover:grayscale-0 transition-all duration-500">
            {modelSpecs.brandPartners.map((brand) => (
              <span
                key={brand}
                className="font-cinzel text-sm sm:text-base font-semibold tracking-widest text-espresso-800 hover:text-roseGold-600 transition-colors px-3 py-1.5"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
