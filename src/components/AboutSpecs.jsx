import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2, Download, Award, Compass, HeartHandshake, Eye } from 'lucide-react';
import { modelSpecs } from '../data/specsData';

export default function AboutSpecs() {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadCompCard = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3500);
  };

  return (
    <section id="about-specs" className="py-24 bg-nude-100/60 relative overflow-hidden border-y border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sand-200/80 text-espresso-800 text-[11px] uppercase tracking-[0.25em] font-medium">
            <Sparkles className="w-3.5 h-3.5 text-roseGold-500" />
            <span>Profile & Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-light text-espresso-950">
            In Front of the Lens. <br />
            <span className="italic font-serif text-roseGold-600">Behind the Brush.</span>
          </h2>
          <p className="text-sm sm:text-base text-espresso-700 font-sans font-light">
            A rare synthesis of high-fashion editorial modeling and masterclass makeup artistry, creating cohesive visual harmony for global campaigns and intimate bridal celebrations.
          </p>
        </div>

        {/* Dual Bio Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left: Visual Collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              {/* Back Image (Artistry in Action) */}
              <div className="rounded-2xl overflow-hidden shadow-luxury border-4 border-white aspect-[4/5] bg-sand-200">
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80"
                  alt="Kashish - Artistry in Action"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Front Inset Image (Runway Pose) */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 w-3/5 rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[3/4] bg-sand-300">
                <img
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
                  alt="Kashish - Runway Model Walk"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating aesthetic stamp */}
              <div className="absolute -top-4 -left-4 glass-card px-4 py-2 rounded-full border border-sand-300 text-xs font-serif italic text-espresso-900 shadow-md">
                Elegance &bull; Precision &bull; Poise
              </div>
            </div>
          </div>

          {/* Right: Narrative Details */}
          <div className="lg:col-span-7 space-y-6 lg:pl-6">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-espresso-950">
                Crafting Stories Through Bone Structure, Light, and Pigment
              </h3>
              <p className="text-sm sm:text-base text-espresso-700 font-sans font-light leading-relaxed">
                With over eight years walking international runways and gracing editorial spreads, Kashish developed an instinctive comprehension of how camera flashes, soft studio diffusers, and harsh natural sunlight interact with the contours of the human face.
              </p>
              <p className="text-sm sm:text-base text-espresso-700 font-sans font-light leading-relaxed">
                This deep technical awareness evolved naturally into high-demand artistry. When painting a bride or preparing a model for Paris Fashion Week, she approaches makeup not merely as decoration, but as architectural sculpture—enhancing natural individuality with skin-like breathability.
              </p>
            </div>

            {/* Philosophy Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white/80 border border-sand-200/80 shadow-sm">
                <div className="flex items-center gap-2 mb-1.5 text-roseGold-600 font-semibold text-xs uppercase tracking-wider">
                  <Eye className="w-4 h-4" />
                  <span>The Camera-Trained Eye</span>
                </div>
                <p className="text-xs text-espresso-700 leading-relaxed font-sans">
                  Deeply aware of 4K cinema lenses, flash bounce, and how tones translate across film and digital sensors.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/80 border border-sand-200/80 shadow-sm">
                <div className="flex items-center gap-2 mb-1.5 text-roseGold-600 font-semibold text-xs uppercase tracking-wider">
                  <HeartHandshake className="w-4 h-4" />
                  <span>Serene Bridal Presence</span>
                </div>
                <p className="text-xs text-espresso-700 leading-relaxed font-sans">
                  Renowned for calming wedding morning anxieties with poised professionalism and warm emotional reassurance.
                </p>
              </div>
            </div>

            {/* Masterclass & Certifications List */}
            <div className="pt-4 border-t border-sand-200">
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-espresso-800 mb-3 flex items-center gap-2">
                <Award className="w-4 h-4 text-roseGold-600" />
                <span>Accreditations & Training</span>
              </p>
              <ul className="space-y-2">
                {modelSpecs.certifications.map((cert) => (
                  <li key={cert.title} className="flex items-start gap-2 text-xs text-espresso-700">
                    <CheckCircle2 className="w-4 h-4 text-roseGold-500 shrink-0 mt-0.5" />
                    <span>
                      <strong className="font-semibold text-espresso-900">{cert.title}</strong> — {cert.issuer} ({cert.year})
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Modeling Comp Card & Measurements Grid */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-sand-200/90 shadow-luxury">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-sand-200 gap-4">
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-roseGold-600">
                Official Agency Comp Card
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-light text-espresso-950 mt-1">
                Model Measurements & Specs
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleDownloadCompCard}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold text-espresso-900 bg-sand-100 hover:bg-sand-200 border border-sand-300 transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-roseGold-600" />
                <span>Download Comp Card (PDF)</span>
              </button>
            </div>
          </div>

          {/* Download Notification banner */}
          {downloadSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Official Comp Card & High-Res Press Kit package generated successfully!</span>
            </motion.div>
          )}

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 pt-8">
            {modelSpecs.stats.map((stat) => (
              <div
                key={stat.label}
                className="p-4 rounded-xl bg-sand-50/70 border border-sand-200/60 hover:border-sand-300 transition-colors"
              >
                <p className="text-[10px] uppercase tracking-wider font-semibold text-espresso-600 font-sans">
                  {stat.label}
                </p>
                <p className="font-serif text-lg sm:text-xl font-medium text-espresso-950 mt-1">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          {/* Representation & Locations note */}
          <div className="mt-8 pt-6 border-t border-sand-200/70 flex flex-col sm:flex-row items-center justify-between text-xs text-espresso-700 gap-4">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-roseGold-500 shrink-0" />
              <span><strong>Base:</strong> {modelSpecs.location}</span>
            </div>
            <div>
              <span className="text-espresso-600">Representation: </span>
              <strong className="text-espresso-900">{modelSpecs.representation}</strong>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
