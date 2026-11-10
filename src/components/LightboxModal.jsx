import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, User, Camera, Calendar, Briefcase, Sparkles } from 'lucide-react';

export default function LightboxModal({ item, onClose, onPrev, onNext, onInquireLook }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-10 bg-espresso-950/80 backdrop-blur-md">
        
        {/* Backdrop click to close */}
        <div className="absolute inset-0" onClick={onClose} />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 w-full max-w-5xl max-h-[92vh] bg-sand-50 rounded-2xl sm:rounded-3xl shadow-2xl overflow-y-auto lg:overflow-hidden flex flex-col lg:flex-row border border-sand-300"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 p-2 sm:p-2.5 rounded-full bg-espresso-950/80 hover:bg-espresso-900 text-white transition-colors shadow-md"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left: Image Container with Nav Arrows */}
          <div className="relative flex-1 bg-espresso-950 flex items-center justify-center min-h-[260px] sm:min-h-[380px] lg:min-h-[560px] overflow-hidden shrink-0">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover max-h-[55vh] lg:max-h-[85vh]"
            />
            
            {/* Prev Button */}
            <button
              onClick={onPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-sand-50/80 hover:bg-white text-espresso-900 shadow-lg backdrop-blur-sm transition-all"
              aria-label="Previous work"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Next Button */}
            <button
              onClick={onNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-sand-50/80 hover:bg-white text-espresso-900 shadow-lg backdrop-blur-sm transition-all"
              aria-label="Next work"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right: Editorial Metadata & Details */}
          <div className="w-full lg:w-96 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto bg-sand-50">
            <div className="space-y-5">
              {/* Category & Year */}
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-roseGold-600 bg-roseGold-400/10 px-3 py-1 rounded-full">
                  {item.categoryLabel}
                </span>
                <span className="text-xs text-espresso-600 font-medium">
                  {item.year}
                </span>
              </div>

              {/* Title & Role */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-serif font-light text-espresso-950">
                  {item.title}
                </h3>
                <p className="text-xs uppercase tracking-wider font-semibold text-espresso-700 mt-1 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-roseGold-500" />
                  <span>Role: {item.role}</span>
                </p>
              </div>

              {/* Description */}
              <p className="text-sm text-espresso-700 font-sans font-light leading-relaxed">
                {item.description}
              </p>

              {/* Credits Table */}
              <div className="p-4 rounded-xl bg-sand-100/70 border border-sand-200/80 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-espresso-600 flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5" /> Client / Publication:
                  </span>
                  <span className="font-semibold text-espresso-900">{item.client}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-espresso-600 flex items-center gap-1.5">
                    <Camera className="w-3.5 h-3.5" /> Photography:
                  </span>
                  <span className="font-medium text-espresso-900">{item.photographer}</span>
                </div>
              </div>

              {/* Tags */}
              <div>
                <p className="text-[11px] uppercase tracking-wider text-espresso-600 font-semibold mb-2">
                  Aesthetic Elements
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-md text-[11px] bg-white border border-sand-200 text-espresso-700"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Inquire CTA */}
            <div className="pt-6 border-t border-sand-200 mt-6">
              <button
                onClick={() => {
                  onClose();
                  onInquireLook(item);
                }}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-xs uppercase tracking-[0.18em] font-semibold text-white bg-espresso-900 hover:bg-roseGold-600 transition-colors shadow-md"
              >
                <Sparkles className="w-3.5 h-3.5 text-champagne-300" />
                <span>Inquire for Similar Look</span>
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}

