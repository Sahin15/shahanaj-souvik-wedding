# Shahanaj & Souvik — Bilingual Wedding Invitation Website

A bespoke, responsive bilingual (English & Bengali) wedding invitation website built with React, Vite, Tailwind CSS, and Lucide React for the wedding celebration of **Shahanaj & Souvik** (**শাহানাজ ও সৌভিক**).

## Wedding Overview
- **Couple:** Shahanaj & Souvik (শাহানাজ ও সৌভিক)
- **Mehendi (মেহেন্দি):** 28 November 2026, Saturday (২৮ নভেম্বর ২০২৬, শনিবার)
- **Haldi (হলুদ):** 29 November 2026, Sunday (২৯ নভেম্বর ২০২৬, রবিবার)
- **Wedding / Nikah (বিবাহ / নিকাহ):** 30 November 2026, Monday (৩০ নভেম্বর ২০২৬, সোমবার)
- **Venue:** Our Home (নিজ বাসস্থান) — Purba Kalikapur, Trimohini, Hili, West Bengal, India

---

## Getting Started

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build
```

---

## Customization & Configuration Guide

All customizable wedding data is centralized in `src/data/`:

### 1. Updating the Countdown Time & Event Ceremony Times (`src/data/weddingConfig.js`)
- **Countdown Target:** Edit `weddingConfig.weddingDate.isoTarget` (currently `'2026-11-30T12:00:00+05:30'`). Once the exact time is confirmed, set `provisionalTimeNote: false`.
- **Event Times:** Inside `weddingConfig.events`, each event has `confirmedTime: null` (which displays `"Time to be announced"` / `"সময় পরে জানানো হবে"`). When confirmed, update `confirmedTime`:
  ```js
  confirmedTime: {
    en: '6:30 PM Onwards',
    bn: 'সন্ধ্যা ৬:৩০ ঘটিকা হতে',
  }
  ```

### 2. Configuring Google Maps & Directions (`src/data/weddingConfig.js`)
- Inside `weddingConfig.venue`:
  - Set `directionsUrl` to your verified Google Maps share link (e.g., `'https://maps.app.goo.gl/...'`). The **"Get Directions"** button will automatically enable.
  - Set `embedUrl` to your Google Maps iframe embed URL (`'https://www.google.com/maps/embed?pb=...'`). The interactive map will automatically replace the map placeholder card.

### 3. Replacing Placeholder Photographs (`src/data/weddingConfig.js` & `src/data/galleryImages.js`)
1. Place your personal photographs inside `public/images/` (e.g., `public/images/hero-couple.jpg`).
2. Update `weddingConfig.hero.mainImage`, `weddingConfig.hero.coupleStoryImage`, and `weddingConfig.venue.venueImage` in `src/data/weddingConfig.js`.
3. Update the `src` and `srcSet` paths for each of the 7 gallery items in `src/data/galleryImages.js`.

