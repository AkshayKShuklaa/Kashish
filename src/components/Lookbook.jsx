import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Sparkles, Filter } from 'lucide-react';
import { portfolioCategories, portfolioItems } from '../data/portfolioData';
import LightboxModal from './LightboxModal';

export default function Lookbook({ onSelectLookForBooking }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  const filteredItems = activeCategory === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  const handleOpenLightbox = (item) => {
    const index = portfolioItems.findIndex(i => i.id === item.id);
    setSelectedItemIndex(index);
  };

  const handlePrev = () => {
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((prev) => (prev > 0 ? prev - 1 : portfolioItems.length - 1));
    }
  };

  const handleNext = () => {
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((prev) => (prev < portfolioItems.length - 1 ? prev + 1 : 0));
    }
  };

  return (
    <section id="lookbook" className="py-24 bg-sand-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sand-200/60 text-espresso-800 text-[11px] uppercase tracking-[0.25em] font-medium">
            <Sparkles className="w-3.5 h-3.5 text-roseGold-500" />
            <span>Curated Archive</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-light text-espresso-950">
            Selected Works & <span className="italic font-serif text-roseGold-600">Lookbook</span>
          </h2>
          <p className="text-sm sm:text-base text-espresso-700 font-sans font-light">
            An editorial anthology spanning high-fashion catwalks, international magazine spreads, and bespoke royal bridal transformations.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12">
          {portfolioCategories.map((cat) => {
            const count = cat.id === 'all'
              ? portfolioItems.length
              : portfolioItems.filter(i => i.category === cat.id).length;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs uppercase tracking-[0.15em] font-medium transition-all duration-300 flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-espresso-900 text-white shadow-md'
                    : 'bg-sand-100 hover:bg-sand-200/80 text-espresso-700 border border-sand-200'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-sand-200 text-espresso-600'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-2xl overflow-hidden bg-sand-200 shadow-luxury cursor-pointer aspect-[3/4]"
                onClick={() => handleOpenLightbox(item)}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Constant Subtle Gradient at Bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/80 via-espresso-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Top Badge: Role */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[10px] uppercase tracking-wider font-semibold px-3 py-1 rounded-full bg-espresso-900/70 text-sand-100 backdrop-blur-md border border-white/10">
                    {item.role}
                  </span>
                </div>

                {/* View Details Eye Icon on Hover */}
                <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-75">
                  <Eye className="w-4 h-4" />
                </div>

                {/* Bottom Content Card */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 text-white transform transition-transform duration-300">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-champagne-300 font-semibold mb-1">
                    {item.categoryLabel} &bull; {item.year}
                  </p>
                  <h3 className="font-serif text-xl sm:text-2xl font-light leading-snug group-hover:text-champagne-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-sand-200/90 font-sans mt-1">
                    Client: {item.client}
                  </p>

                  <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-sand-300">
                    <span>Photo: {item.photographer}</span>
                    <span className="text-champagne-300 group-hover:translate-x-1 transition-transform">
                      View Story &rarr;
                    </span>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        {selectedItemIndex !== null && (
          <LightboxModal
            item={portfolioItems[selectedItemIndex]}
            onClose={() => setSelectedItemIndex(null)}
            onPrev={handlePrev}
            onNext={handleNext}
            onInquireLook={(item) => {
              if (onSelectLookForBooking) {
                onSelectLookForBooking(item);
              }
            }}
          />
        )}

      </div>
    </section>
  );
}

