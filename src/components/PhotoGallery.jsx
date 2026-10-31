import React, { useState, useEffect, useCallback } from 'react';
import {
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Camera,
  Sparkles,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import { galleryImages } from '../data/galleryImages';
import { OrnamentalDivider, ArabesqueCorner } from './OrnamentalMotifs';

export function PhotoGallery() {
  const { language, t, formatNum } = useLanguage();
  const [revealRef, isVisible] = useRevealOnScroll();
  const [activeIndex, setActiveIndex] = useState(null);
  const [failedIds, setFailedIds] = useState({});

  const isLightboxOpen = activeIndex !== null;

  const handleImageError = (id) => {
    setFailedIds((prev) => ({ ...prev, [id]: true }));
  };

  const openLightbox = (index) => {
    setActiveIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const showPrevious = useCallback(() => {
    setActiveIndex((prev) =>
      prev === null ? null : (prev - 1 + galleryImages.length) % galleryImages.length
    );
  }, []);

  const showNext = useCallback(() => {
    setActiveIndex((prev) =>
      prev === null ? null : (prev + 1) % galleryImages.length
    );
  }, []);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        showPrevious();
      } else if (e.key === 'ArrowRight') {
        showNext();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isLightboxOpen, closeLightbox, showPrevious, showNext]);

  const featuredItem = galleryImages[0];
  const gridItems = galleryImages;
  const currentLightboxItem =
    activeIndex !== null ? galleryImages[activeIndex] : null;

  const resolveSrc = (item) =>
    failedIds[item.id] ? item.fallbackSrc : item.src;

  return (
    <section
      id="gallery"
      className="relative py-12 sm:py-20 bg-ivory overflow-hidden"
    >
      <div
        ref={revealRef}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal-up ${
          isVisible ? 'is-visible' : ''
        }`}
      >
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex justify-center mb-2">
            <OrnamentalDivider variant="crescent" className="w-48 sm:w-64 h-6 sm:h-7" />
          </div>

          <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-gold-dark font-semibold">
            {t.gallery.eyebrow}
          </p>

          <h2 className="mt-1 font-heading text-2xl sm:text-4xl md:text-5xl font-bold text-burgundy">
            {t.gallery.title}
          </h2>

          <p className="mt-2 text-xs sm:text-base text-ink/80 leading-relaxed">
            {t.gallery.subtitle}
          </p>

          {/* Transparent Placeholder Disclaimer */}
          <div className="mt-3 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-champagne/40 border border-gold/45 text-[11px] sm:text-xs text-ink/80">
            <Camera className="w-3.5 h-3.5 text-burgundy shrink-0" aria-hidden="true" />
            <span>{t.gallery.placeholderNotice}</span>
          </div>
        </div>

        {/* Balanced 3-Column Wedding Photo Grid */}
        <div className="mt-6 sm:mt-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {gridItems.map((item, idx) => {
            const galleryIdx = idx;
            return (
              <div
                key={item.id}
                className="group relative rounded-2xl overflow-hidden border border-gold/65 bg-ivory-soft shadow-royal hover:shadow-royal-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <button
                  type="button"
                  onClick={() => openLightbox(galleryIdx)}
                  aria-label={`${t.gallery.openLightboxLabel}: ${item.title[language]}`}
                  className="relative block w-full h-48 sm:h-56 overflow-hidden bg-burgundy-deep focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy"
                >
                  <img
                    src={resolveSrc(item)}
                    srcSet={!failedIds[item.id] ? item.srcSet : undefined}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                    alt={item.alt[language]}
                    loading="lazy"
                    onError={() => handleImageError(item.id)}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Category Badge */}
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-burgundy-deep/85 backdrop-blur-sm border border-gold/50 text-gold-light text-[11px] font-medium">
                    {item.category[language]}
                  </span>

                  {/* Expand Icon on Hover */}
                  <span className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-burgundy-deep/80 group-hover:bg-gold text-ivory group-hover:text-burgundy-deep border border-gold/60 flex items-center justify-center transition-colors">
                    <Maximize2 className="w-3.5 h-3.5" aria-hidden="true" />
                  </span>
                </button>

                {/* Caption Card Footer */}
                <div className="p-4 flex-1 flex flex-col justify-between bg-ivory border-t border-gold/30">
                  <div>
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-burgundy group-hover:text-burgundy-ruby transition-colors">
                      {item.title[language]}
                    </h3>
                    <p className="mt-1 text-xs text-ink/80 leading-snug line-clamp-2">
                      {item.caption[language]}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Full-Screen Accessible Lightbox Modal */}
      {isLightboxOpen && currentLightboxItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={currentLightboxItem.title[language]}
          className="fixed inset-0 z-[80] bg-burgundy-deep/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 md:p-10 animate-fadeIn"
          onClick={closeLightbox}
        >
          {/* Top Bar: Counter & Close Button */}
          <div
            className="flex items-center justify-between max-w-6xl w-full mx-auto z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ivory/10 border border-gold/40 text-ivory text-xs sm:text-sm">
              <span className="text-gold-light font-semibold">
                {currentLightboxItem.category[language]}
              </span>
              <span aria-hidden="true">•</span>
              <span>
                {t.gallery.lightboxCounter}{' '}
                {formatNum(activeIndex + 1, 1)} {t.gallery.of}{' '}
                {formatNum(galleryImages.length, 1)}
              </span>
            </div>

            <button
              type="button"
              onClick={closeLightbox}
              aria-label={t.gallery.lightboxClose}
              className="inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-ivory/15 hover:bg-gold text-ivory hover:text-burgundy-deep border border-gold/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>

          {/* Center Image Stage with Prev/Next Controls */}
          <div
            className="relative flex-1 flex items-center justify-center my-4 max-w-5xl w-full mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={showPrevious}
              aria-label={t.gallery.lightboxPrev}
              className="absolute left-1 sm:-left-4 z-20 inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-burgundy-deep/85 hover:bg-gold text-ivory hover:text-burgundy-deep border border-gold/70 shadow-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <ChevronLeft className="w-6 h-6" aria-hidden="true" />
            </button>

            <div className="relative rounded-2xl overflow-hidden border-2 border-gold shadow-2xl bg-burgundy-deep max-h-[70vh] flex items-center justify-center">
              <img
                src={resolveSrc(currentLightboxItem)}
                alt={currentLightboxItem.alt[language]}
                onError={() => handleImageError(currentLightboxItem.id)}
                className="max-h-[68vh] w-auto max-w-full object-contain"
              />
            </div>

            <button
              type="button"
              onClick={showNext}
              aria-label={t.gallery.lightboxNext}
              className="absolute right-1 sm:-right-4 z-20 inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-burgundy-deep/85 hover:bg-gold text-ivory hover:text-burgundy-deep border border-gold/70 shadow-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <ChevronRight className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>

          {/* Bottom Caption Bar */}
          <div
            className="max-w-3xl w-full mx-auto text-center z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-gold-light">
              {currentLightboxItem.title[language]}
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-champagne">
              {currentLightboxItem.caption[language]}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default PhotoGallery;

