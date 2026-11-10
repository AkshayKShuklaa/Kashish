import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Lookbook from './components/Lookbook';
import AboutSpecs from './components/AboutSpecs';
import Services from './components/Services';
import Reviews from './components/Reviews';
import BookingSection from './components/BookingSection';
import Footer from './components/Footer';

export default function App() {
  const [selectedService, setSelectedService] = useState('bridal');
  const [selectedLook, setSelectedLook] = useState(null);

  const scrollToBooking = () => {
    const el = document.getElementById('booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceId) => {
    setSelectedService(serviceId);
    scrollToBooking();
  };

  const handleSelectLookForBooking = (lookItem) => {
    setSelectedLook(lookItem);
    // If the look has a category matching our services, select it
    if (lookItem.category === 'bridal') {
      setSelectedService('bridal');
    } else if (lookItem.category === 'editorial' || lookItem.category === 'sfx') {
      setSelectedService('editorial');
    } else if (lookItem.category === 'runway' || lookItem.category === 'modeling') {
      setSelectedService('modeling');
    }
    scrollToBooking();
  };

  return (
    <div className="min-h-screen bg-sand-50 text-espresso-900 font-sans selection:bg-roseGold-400/25 selection:text-espresso-950">
      {/* Sticky frosted navigation */}
      <Navbar onBookClick={scrollToBooking} />

      {/* Hero section */}
      <main>
        <Hero onBookClick={scrollToBooking} />

        {/* Curated Archive & Filterable Lookbook */}
        <Lookbook onSelectLookForBooking={handleSelectLookForBooking} />

        {/* Narrative, Model Measurements & Artistry Accreditations */}
        <AboutSpecs />

        {/* Bespoke Experiences, Packages & Transparent Rates */}
        <Services onSelectService={handleSelectService} />

        {/* Testimonials & Brand Collaborations */}
        <Reviews />

        {/* Interactive Booking & WhatsApp Inquiry Suite */}
        <BookingSection
          preSelectedService={selectedService}
          preSelectedLook={selectedLook}
        />
      </main>

      {/* Editorial Footer */}
      <Footer />
    </div>
  );
}
