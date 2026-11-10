import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Send, 
  MessageCircle, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Instagram,
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { servicesData } from '../data/servicesData';

export default function BookingSection({ preSelectedService, preSelectedLook }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceId: 'bridal',
    eventDate: '',
    location: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [inquiryId, setInquiryId] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // Update selected service when prop changes
  useEffect(() => {
    if (preSelectedService) {
      setFormData(prev => ({ ...prev, serviceId: preSelectedService }));
    }
  }, [preSelectedService]);

  // Update notes if a specific look was selected from Lookbook
  useEffect(() => {
    if (preSelectedLook) {
      setFormData(prev => ({
        ...prev,
        message: `Inquiring about aesthetic/look similar to: "${preSelectedLook.title}" (${preSelectedLook.categoryLabel}). \n\nAdditional notes: `
      }));
    }
  }, [preSelectedLook]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setErrorMsg('Please complete all required fields (*)');
      return;
    }
    setErrorMsg('');

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#C7846C', '#D89B84', '#B08E74', '#F0E5CB', '#2F2624']
      });
    } catch (err) {
      // safe fallback if confetti fails
    }

    const randomId = 'KSH-' + Math.floor(100000 + Math.random() * 900000);
    setInquiryId(randomId);
    setSubmitted(true);
  };

  const getWhatsAppMessageUrl = () => {
    const serviceName = servicesData.find(s => s.id === formData.serviceId)?.title || formData.serviceId;
    const text = encodeURIComponent(
      `Hello Kashish! I would like to inquire about a booking.\n\n` +
      `• Name: ${formData.name || 'Inquirer'}\n` +
      `• Service: ${serviceName}\n` +
      `• Date: ${formData.eventDate || 'To be decided'}\n` +
      `• City/Location: ${formData.location || 'Flexible'}\n` +
      `• Vision/Notes: ${formData.message || 'Looking forward to discussing details.'}`
    );
    return `https://wa.me/919876543210?text=${text}`;
  };

  return (
    <section id="booking" className="py-24 bg-sand-50 relative overflow-hidden">
      {/* Background soft glows */}
      <div className="absolute top-1/2 left-10 w-96 h-96 rounded-full bg-roseGold-300/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-champagne-300/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sand-200/80 text-espresso-800 text-[11px] uppercase tracking-[0.25em] font-medium">
            <Sparkles className="w-3.5 h-3.5 text-roseGold-500" />
            <span>Reservations & Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-light text-espresso-950">
            Let's Create <span className="italic font-serif text-roseGold-600">Pure Magic</span>
          </h2>
          <p className="text-sm sm:text-base text-espresso-700 font-sans font-light">
            Whether inquiring for a milestone bridal wedding, runway booking, or international campaign, connect directly below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contacts & Booking Policy */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-3xl p-8 border border-sand-200 shadow-luxury space-y-6">
              <h3 className="font-serif text-2xl font-light text-espresso-950">
                Direct Atelier Contact
              </h3>
              <p className="text-xs text-espresso-600 leading-relaxed">
                We accept limited bridal and editorial commissions per season to ensure uncompromising attention to detail and personal care.
              </p>

              <div className="space-y-4 pt-2">
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 hover:bg-emerald-100/70 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-emerald-800 tracking-wider">
                      Quick WhatsApp Chat
                    </p>
                    <p className="text-sm font-medium text-emerald-950 group-hover:text-emerald-700">
                      +91 98765 43210
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:bookings@kashishstudio.com"
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-sand-50 border border-sand-200 hover:border-sand-300 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-espresso-900 text-white flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-espresso-600 tracking-wider">
                      Management Email
                    </p>
                    <p className="text-sm font-medium text-espresso-900 group-hover:text-roseGold-600">
                      bookings@kashishstudio.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-sand-50 border border-sand-200 hover:border-sand-300 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-roseGold-500 text-white flex items-center justify-center">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-espresso-600 tracking-wider">
                      Instagram Folio
                    </p>
                    <p className="text-sm font-medium text-espresso-900 group-hover:text-roseGold-600">
                      @kashish.atelier
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-sand-50 border border-sand-200">
                  <div className="w-10 h-10 rounded-xl bg-sand-200 text-espresso-800 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-espresso-600 tracking-wider">
                      Studio Bases
                    </p>
                    <p className="text-sm font-medium text-espresso-900">
                      Mumbai &bull; Delhi NCR &bull; Worldwide Travel
                    </p>
                  </div>
                </div>
              </div>

              {/* Booking Notes */}
              <div className="pt-4 border-t border-sand-200 text-xs text-espresso-600 space-y-1.5">
                <div className="flex items-center gap-2 font-medium text-espresso-800">
                  <Clock className="w-3.5 h-3.5 text-roseGold-600" />
                  <span>Response Time: Typically within 12–24 hours</span>
                </div>
                <p className="italic text-[11px] text-espresso-500">
                  * For international destination weddings, flight & accommodation must be arranged separately.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-sand-200 shadow-luxury">
              
              {submitted ? (
                /* Success Confirmation View */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10 space-y-5"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-3xl font-light text-espresso-950">
                    Inquiry Received, {formData.name}!
                  </h3>
                  <p className="text-sm text-espresso-700 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. Your request has been cataloged under reference code:
                  </p>
                  <div className="inline-block py-2 px-6 rounded-xl bg-sand-100 border border-sand-300 font-mono text-sm font-bold text-espresso-900 tracking-wider">
                    {inquiryId}
                  </div>
                  <p className="text-xs text-espresso-600 max-w-sm mx-auto">
                    Kashish's management team will review availability and send full rate cards and contract details to <strong>{formData.email}</strong> shortly.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={getWhatsAppMessageUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs uppercase tracking-wider font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Ping on WhatsApp Directly</span>
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 rounded-full text-xs uppercase tracking-wider font-semibold text-espresso-700 bg-sand-100 hover:bg-sand-200"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </motion.div>
              ) : (
                /* The Booking Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div>
                    <h3 className="font-serif text-2xl font-light text-espresso-950">
                      Reserve Dates & Check Availability
                    </h3>
                    <p className="text-xs text-espresso-600 mt-1">
                      Fill out your event details below or pre-fill a direct WhatsApp chat.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-espresso-700 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="e.g. Maya Deshmukh"
                        className="w-full px-4 py-3 rounded-xl bg-sand-50/80 border border-sand-200 text-espresso-900 text-sm focus:outline-none focus:ring-2 focus:ring-roseGold-400 focus:bg-white transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-espresso-700 mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 98765 00000"
                        className="w-full px-4 py-3 rounded-xl bg-sand-50/80 border border-sand-200 text-espresso-900 text-sm focus:outline-none focus:ring-2 focus:ring-roseGold-400 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Email & Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-espresso-700 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="maya@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-sand-50/80 border border-sand-200 text-espresso-900 text-sm focus:outline-none focus:ring-2 focus:ring-roseGold-400 focus:bg-white transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-espresso-700 mb-1.5">
                        Event / Shoot Date
                      </label>
                      <input
                        type="date"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-sand-50/80 border border-sand-200 text-espresso-900 text-sm focus:outline-none focus:ring-2 focus:ring-roseGold-400 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Service & City */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-espresso-700 mb-1.5">
                        Service of Interest
                      </label>
                      <select
                        name="serviceId"
                        value={formData.serviceId}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-sand-50/80 border border-sand-200 text-espresso-900 text-sm focus:outline-none focus:ring-2 focus:ring-roseGold-400 focus:bg-white transition-all"
                      >
                        {servicesData.map(s => (
                          <option key={s.id} value={s.id}>
                            {s.title}
                          </option>
                        ))}
                        <option value="other">Other / Custom Collaboration</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-espresso-700 mb-1.5">
                        Event City / Destination
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="e.g. Udaipur, Mumbai, Lake Como"
                        className="w-full px-4 py-3 rounded-xl bg-sand-50/80 border border-sand-200 text-espresso-900 text-sm focus:outline-none focus:ring-2 focus:ring-roseGold-400 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-espresso-700 mb-1.5">
                      Your Vision, Timing or Questions
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share outfit colors, moodboard ideas, or number of looks needed..."
                      className="w-full px-4 py-3 rounded-xl bg-sand-50/80 border border-sand-200 text-espresso-900 text-sm focus:outline-none focus:ring-2 focus:ring-roseGold-400 focus:bg-white transition-all"
                    />
                  </div>

                  {/* Submit Actions */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-4 items-center">
                    <button
                      type="submit"
                      className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 py-4 px-8 rounded-full text-xs uppercase tracking-[0.2em] font-semibold text-white bg-espresso-900 hover:bg-roseGold-600 shadow-luxury transition-all duration-300 transform hover:-translate-y-0.5"
                    >
                      <Send className="w-4 h-4 text-champagne-300" />
                      <span>Submit Inquiry Request</span>
                    </button>

                    <a
                      href={getWhatsAppMessageUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-4 px-6 rounded-full text-xs uppercase tracking-wider font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-600" />
                      <span>Chat via WhatsApp</span>
                    </a>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

