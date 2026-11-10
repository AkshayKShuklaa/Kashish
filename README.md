# Kashish — High-Fashion Model & Bridal Makeup Artist Portfolio

A luxury, editorial-grade web portfolio and client reservation system crafted for a professional **Model & Makeup Artist**. Built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

---

## ✨ Features & Architecture

- **Soft Glam & Warm Neutrals Aesthetic**: Bespoke color palette inspired by haute couture fashion houses (alabaster `#FAF8F5`, champagne `#F0E5CB`, warm espresso `#1E1816`, and rose gold accents `#C7846C`).
- **Editorial Typography**: Styled with Google Fonts *Cinzel*, *Cormorant Garamond*, and *Plus Jakarta Sans*.
- **Interactive Curated Lookbook**:
  - Filterable by categories: *All Works*, *Bridal Glam*, *Editorial & Haute*, *Runway & Fashion Week*, *Modeling & Commercial*, and *Creative & Avant-Garde*.
  - Fullscreen **Lightbox Modal** with high-resolution imagery, shoot descriptions, client/publication names, photographer credits, and an *"Inquire for Similar Look"* action.
- **Model Comp Card & Artistry Credentials**:
  - Agency-standard measurement table (Height, Bust, Waist, Hips, Shoe, Hair, Eyes, Dress size, Passport status).
  - Artistry certifications (London Academy, Temptu Airbrush Mastery, Runway Choreography).
  - One-click *Comp Card (PDF)* download simulation.
- **Tailored Services & Rate Cards**:
  - Haute Bridal Signature Experience, Editorial & Fashion Campaigns, Model Runway Bookings, Red Carpet/Galas, and 1-on-1 Masterclasses.
  - Transparent starting investment ranges and breakdown of inclusions.
  - "Inquire for Package" buttons that auto-populate the booking suite.
- **Interactive Booking & Instant WhatsApp Suite**:
  - Service selection, date picker, event destination, and vision notes.
  - Instant direct **WhatsApp pre-fill** (`https://wa.me/...`) for instant inquiries.
  - Form validation with celebratory confetti and unique inquiry reference code.
- **Client Testimonials & Brand Collaborations**:
  - Reviews from brides, creative directors, and fashion photographers.
  - Brand badges: Vogue India, Elle, Lakmé Fashion Week, Harper's Bazaar, Nykaa Luxe, Sabyasachi.

---

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Start local development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```
Creates an optimized production bundle in the `dist/` directory.

---

## 🛠️ Personalization & Content Customization

All data is decoupled into structured data files inside `src/data/`:

| File | Purpose |
| :--- | :--- |
| `src/data/portfolioData.js` | Update portfolio images, titles, roles, credits, and tags. |
| `src/data/specsData.js` | Change model measurements, certifications, location, and brand partners. |
| `src/data/servicesData.js` | Edit service packages, descriptions, pricing notices, and inclusions. |
| `src/data/testimonialsData.js` | Update bride & photographer reviews, quotes, and avatars. |
| `src/components/BookingSection.jsx` | Update WhatsApp number (`919876543210`), email, and Instagram handles. |

---

## 📦 Deployment

This project is zero-config ready for instant deployment on:
- **Vercel**: Import repository -> Framework preset: `Vite` -> Click Deploy.
- **Netlify**: Connect repo -> Build command: `npm run build` -> Publish directory: `dist`.
