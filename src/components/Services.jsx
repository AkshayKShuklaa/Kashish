import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Check, Clock, ArrowRight } from 'lucide-react';
import { servicesData } from '../data/servicesData';

export default function Services({ onSelectService }) {
  return (
    <section id="services" className="py-24 bg-sand-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sand-200/80 text-espresso-800 text-[11px] uppercase tracking-[0.25em] font-medium">
            <Sparkles className="w-3.5 h-3.5 text-roseGold-500" />
            <span>Offerings & Packages</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-light text-espresso-950">
            Tailored Experiences & <span className="italic font-serif text-roseGold-600">Rate Cards</span>
          </h2>
          <p className="text-sm sm:text-base text-espresso-700 font-sans font-light">
            Every session is customized with precision pigment formulation, skin preparation, and dedicated artistic focus.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const isFeatured = service.popular;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-luxury ${
                  isFeatured
                    ? 'bg-gradient-to-b from-white via-sand-50 to-sand-100 border-2 border-roseGold-400 shadow-soft-glow'
                    : 'bg-white/80 border border-sand-200 hover:border-sand-300'
                }`}
              >
                {/* Popular Pill */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-roseGold-500 text-white text-[10px] uppercase tracking-[0.2em] font-bold shadow-md">
                    Signature Most Requested
                  </div>
                )}

                <div className="space-y-5">
                  {/* Category & Duration */}
                  <div className="flex items-center justify-between text-xs text-espresso-600">
                    <span className="uppercase tracking-wider font-semibold text-roseGold-600">
                      {service.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {service.duration}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="font-serif text-2xl font-light text-espresso-950">
                      {service.title}
                    </h3>
                    <p className="text-xs text-espresso-600 font-sans mt-2 leading-relaxed">
                      {service.tagline}
                    </p>
                  </div>

                  {/* Pricing Notice */}
                  <div className="py-3 px-4 rounded-xl bg-sand-100/70 border border-sand-200">
                    <p className="text-[11px] uppercase tracking-wider text-espresso-600 font-semibold">
                      Investment
                    </p>
                    <p className="font-serif text-lg font-medium text-espresso-900 mt-0.5">
                      {service.priceNotice}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2.5 pt-2">
                    <p className="text-[11px] uppercase tracking-wider font-bold text-espresso-700">
                      Included in this Experience:
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-espresso-700">
                          <Check className="w-4 h-4 text-roseGold-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-6 mt-6 border-t border-sand-200">
                  <p className="text-[11px] text-espresso-500 mb-3 italic">
                    Ideal for: {service.idealFor}
                  </p>
                  <button
                    onClick={() => onSelectService(service.id)}
                    className={`w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full text-xs uppercase tracking-[0.18em] font-semibold transition-all duration-300 ${
                      isFeatured
                        ? 'bg-espresso-900 hover:bg-roseGold-600 text-white shadow-md'
                        : 'bg-sand-100 hover:bg-sand-200 text-espresso-900 border border-sand-300'
                    }`}
                  >
                    <span>Inquire for Package</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Custom inquiry note */}
        <div className="mt-12 text-center text-xs text-espresso-600 max-w-2xl mx-auto">
          Need a combined package for both modeling & on-set makeup direction, or a multi-day destination wedding? 
          <a href="#booking" className="text-roseGold-600 font-semibold underline underline-offset-4 ml-1">
            Request a bespoke tailored quotation &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
