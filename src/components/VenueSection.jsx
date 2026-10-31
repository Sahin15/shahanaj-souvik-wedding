import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Navigation,
  Calendar,
  Copy,
  Check,
  Compass,
  Home as HomeIcon,
  Maximize2,
  X,
  Sparkles,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import { weddingConfig } from '../data/weddingConfig';
import {
  OrnamentalDivider,
  ArabesqueCorner,
  CrescentStarMotif,
} from './OrnamentalMotifs';

export function VenueSection() {
  const { language, t } = useLanguage();
  const [revealRef, isVisible] = useRevealOnScroll();
  const [venueImgError, setVenueImgError] = useState(false);
  const [addressCopied, setAddressCopied] = useState(false);
  const [isVenueModalOpen, setIsVenueModalOpen] = useState(false);

  const hasDirectionsUrl = Boolean(
    weddingConfig.venue.directionsUrl &&
      weddingConfig.venue.directionsUrl.trim().startsWith('http')
  );
  const hasEmbedUrl = Boolean(
    weddingConfig.venue.embedUrl &&
      weddingConfig.venue.embedUrl.trim().startsWith('http')
  );

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(t.venue.addressFull);
      setAddressCopied(true);
      window.setTimeout(() => setAddressCopied(false), 2600);
    } catch {
      setAddressCopied(false);
    }
  };

  useEffect(() => {
    if (!isVenueModalOpen) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsVenueModalOpen(false);
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isVenueModalOpen]);

  return (
    <section
      id="venue"
      className="relative py-12 sm:py-20 bg-gradient-to-b from-ivory via-champagne/35 to-ivory bg-islamic-pattern"
    >
      <div
        ref={revealRef}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal-up ${
          isVisible ? 'is-visible' : ''
        }`}
      >
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex justify-center mb-2">
            <OrnamentalDivider variant="crescent" className="w-48 sm:w-64 h-6 sm:h-7" />
          </div>

          <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-gold-dark font-semibold">
            {t.venue.eyebrow}
          </p>

          <h2 className="mt-1 font-heading text-2xl sm:text-4xl md:text-5xl font-bold text-burgundy">
            {t.venue.title}
          </h2>

          <p className="mt-2 text-xs sm:text-base text-ink/80 leading-relaxed">
            {t.venue.subtitle}
          </p>
        </div>

        {/* Venue Content Grid */}
        <div className="mt-7 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-stretch">
          {/* Left Column: Venue Details & Get Directions Card */}
          <div className="lg:col-span-6 flex">
            <div className="relative w-full rounded-2xl sm:rounded-3xl bg-ivory border-2 border-gold/70 shadow-royal-lg p-5 sm:p-8 flex flex-col justify-between overflow-hidden">
              <ArabesqueCorner
                position="top-left"
                className="pointer-events-none absolute top-3.5 left-3.5 w-11 h-11"
              />
              <ArabesqueCorner
                position="top-right"
                className="pointer-events-none absolute top-3.5 right-3.5 w-11 h-11"
              />
              <ArabesqueCorner
                position="bottom-left"
                className="pointer-events-none absolute bottom-3.5 left-3.5 w-11 h-11"
              />
              <ArabesqueCorner
                position="bottom-right"
                className="pointer-events-none absolute bottom-3.5 right-3.5 w-11 h-11"
              />

              <div className="relative z-10">
                {/* Decorative Location-Pin Icon Emblem */}
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-burgundy text-gold-light border border-gold flex items-center justify-center shadow-md">
                    <MapPin className="w-6 h-6 sm:w-7 sm:h-7" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-[0.18em] text-gold-dark font-semibold">
                      {t.venue.venueLabel}
                    </span>
                    <span className="text-xs sm:text-sm text-emerald-accent font-medium">
                      {t.venue.localityTag}
                    </span>
                  </div>
                </div>

                {/* Venue Name: "Our Home" / "নিজ বাসস্থান" */}
                <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-burgundy">
                  {t.venue.venueName}
                </h3>
                <p className="mt-1 text-sm sm:text-base font-medium text-gold-dark">
                  {t.venue.hostsLine}
                </p>

                {/* Full Address Block */}
                <div className="mt-5 rounded-2xl bg-champagne/35 border border-gold/50 p-4 sm:p-5">
                  <div className="flex items-start gap-3">
                    <HomeIcon
                      className="w-5 h-5 text-burgundy shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <span className="block text-xs uppercase tracking-[0.16em] text-gold-dark font-semibold">
                        {t.venue.addressLabel}
                      </span>
                      <p className="mt-1 font-heading text-xl sm:text-2xl font-semibold text-ink leading-snug">
                        {t.venue.addressFull}
                      </p>
                      <p className="mt-1 text-xs text-ink/75">
                        {t.venue.districtValue}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Celebration Dates Summary */}
                <div className="mt-3.5 rounded-2xl bg-ivory-soft border border-gold/40 p-4 sm:p-5 flex items-center gap-3">
                  <Calendar
                    className="w-5 h-5 text-burgundy shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <span className="block text-xs uppercase tracking-[0.16em] text-gold-dark font-semibold">
                      {t.venue.datesLabel}
                    </span>
                    <p className="text-sm sm:text-base font-medium text-ink mt-0.5">
                      {t.venue.datesValue}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Get Directions + Copy Address + View Full House Modal */}
              <div className="relative z-10 mt-6 pt-5 border-t border-gold/35 space-y-2.5">
                <div className="flex flex-col sm:flex-row gap-2.5">
                  {hasDirectionsUrl ? (
                    <a
                      href={weddingConfig.venue.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-burgundy hover:bg-burgundy-deep text-ivory font-medium text-xs sm:text-sm border border-gold/70 shadow-royal transition-all"
                    >
                      <Navigation className="w-4 h-4 text-gold-light" aria-hidden="true" />
                      <span>{t.venue.getDirectionsBtn}</span>
                    </a>
                  ) : (
                    <button
                      type="button"
                      disabled
                      aria-disabled="true"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-burgundy/40 text-ivory/90 font-medium text-xs sm:text-sm border border-gold/40 cursor-not-allowed select-none"
                    >
                      <Navigation className="w-4 h-4 text-gold-light" aria-hidden="true" />
                      <span>{t.venue.getDirectionsBtn}</span>
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={handleCopyAddress}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-ivory hover:bg-champagne/45 text-burgundy font-medium text-xs sm:text-sm border border-gold/70 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy"
                  >
                    {addressCopied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-accent" aria-hidden="true" />
                        <span>{t.venue.addressCopiedBtn}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-gold-dark" aria-hidden="true" />
                        <span>{t.venue.copyAddressBtn}</span>
                      </>
                    )}
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setIsVenueModalOpen(true)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-champagne/50 hover:bg-champagne text-burgundy font-semibold text-xs sm:text-sm border border-gold/65 transition-colors"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-burgundy" aria-hidden="true" />
                  <span>{t.venue.viewFullHouseBtn}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Clickable Venue Photograph & Configurable Map Card */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            {/* Clickable Illuminated Family Home Venue Photograph */}
            <button
              type="button"
              onClick={() => setIsVenueModalOpen(true)}
              aria-label={t.venue.viewFullHouseBtn}
              className="group relative text-left w-full rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-gold/80 bg-burgundy-deep shadow-royal-lg h-64 sm:h-80 focus:outline-none focus-visible:ring-4 focus-visible:ring-gold"
            >
              {!venueImgError ? (
                <img
                  src={weddingConfig.venue.venueImage}
                  alt={`${t.venue.venueName} — ${t.venue.addressFull}`}
                  loading="lazy"
                  onError={() => setVenueImgError(true)}
                  className="w-full h-full object-cover object-[center_35%] transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-burgundy-deep to-burgundy text-ivory">
                  <CrescentStarMotif className="w-14 h-14 mb-2" color="#C6A15B" />
                  <p className="font-heading text-2xl font-bold">{t.venue.venueName}</p>
                </div>
              )}

              {/* Top-Right Expand Badge */}
              <span className="absolute top-3.5 right-3.5 z-20 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-burgundy-deep/85 group-hover:bg-gold text-ivory group-hover:text-burgundy-deep border border-gold/70 text-[11px] font-semibold shadow-md transition-colors">
                <Maximize2 className="w-3.5 h-3.5" aria-hidden="true" />
                <span className="hidden xs:inline">{t.venue.venueName}</span>
              </span>

              <div className="absolute inset-0 bg-gradient-to-t from-burgundy-deep/95 via-burgundy-deep/35 to-transparent flex items-end justify-between p-4 sm:p-6">
                <div className="text-ivory">
                  <span className="inline-block px-3 py-0.5 rounded-full bg-gold text-burgundy-deep text-xs font-bold uppercase tracking-wider mb-1">
                    {t.venue.venueName}
                  </span>
                  <p className="font-heading text-lg sm:text-xl font-semibold text-ivory leading-snug">
                    {t.venue.addressFull}
                  </p>
                  <p className="mt-1 inline-flex items-center gap-1.5 text-[11px] sm:text-xs text-gold-light font-medium">
                    <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>{t.venue.viewFullHouseBtn}</span>
                  </p>
                </div>
              </div>
            </button>

            {/* Configurable Google Maps Embed */}
            <div className="flex-1 rounded-2xl sm:rounded-3xl overflow-hidden border border-gold/65 bg-ivory shadow-royal flex flex-col justify-center">
              {hasEmbedUrl ? (
                <iframe
                  title={`${t.venue.venueName} — Google Maps`}
                  src={weddingConfig.venue.embedUrl}
                  className="w-full h-full min-h-[220px] border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <div className="p-6 sm:p-8 text-center flex flex-col items-center justify-center bg-gradient-to-b from-ivory to-champagne/30 h-full min-h-[220px]">
                  <div className="w-12 h-12 rounded-full bg-champagne/65 border border-gold flex items-center justify-center text-burgundy mb-3">
                    <Compass className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h4 className="font-heading text-xl sm:text-2xl font-bold text-burgundy">
                    {t.venue.mapPlaceholderTitle}
                  </h4>
                  <p className="mt-2 max-w-md text-xs sm:text-sm text-ink/80 leading-relaxed">
                    {t.venue.mapPlaceholderBody}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================================
          FULL HOUSE PHOTOGRAPH & COMPLETE LOCATION DETAILS MODAL
         ===================================================================== */}
      {isVenueModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${t.venue.venueName} — ${t.venue.addressFull}`}
          className="fixed inset-0 z-[90] bg-burgundy-deep/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          onClick={() => setIsVenueModalOpen(false)}
        >
          <div
            className="relative max-w-5xl w-full my-auto rounded-3xl bg-ivory border-2 border-gold shadow-2xl overflow-hidden animate-letter-rise"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsVenueModalOpen(false)}
              aria-label={t.venue.closeModalLabel}
              className="absolute top-3.5 right-3.5 z-30 inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-burgundy text-ivory hover:bg-gold hover:text-burgundy-deep border border-gold transition-colors shadow-lg"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[90vh] overflow-y-auto">
              {/* Left Column: Full Uncropped Portrait of Our Home */}
              <div className="lg:col-span-5 bg-burgundy-deep flex items-center justify-center p-3 sm:p-5 border-b lg:border-b-0 lg:border-r border-gold/45">
                <div className="relative w-full max-w-sm rounded-2xl overflow-hidden border-2 border-gold shadow-2xl bg-burgundy-deep">
                  <img
                    src={weddingConfig.venue.venueImage}
                    alt={`${t.venue.venueName} — ${t.venue.addressFull}`}
                    className="w-full h-auto max-h-[65vh] lg:max-h-[78vh] object-contain mx-auto"
                  />
                  <div className="bg-gradient-to-t from-burgundy-deep via-burgundy-deep/90 to-transparent p-3.5 text-center border-t border-gold/40">
                    <span className="inline-block px-3 py-0.5 rounded-full bg-gold text-burgundy-deep text-[11px] font-bold uppercase tracking-wider">
                      {t.venue.venueName}
                    </span>
                    <p className="mt-1 font-heading text-base sm:text-lg font-semibold text-gold-light">
                      {t.venue.hostsLine}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Complete Address, Exact Coordinates & Interactive Map */}
              <div className="lg:col-span-7 p-5 sm:p-7 md:p-8 flex flex-col justify-between bg-ivory text-ink">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-champagne/60 border border-gold/60 text-burgundy text-xs font-bold uppercase tracking-wider">
                    <MapPin className="w-3.5 h-3.5 text-burgundy" aria-hidden="true" />
                    <span>{t.venue.venueLabel}</span>
                  </div>

                  <h3 className="mt-2 font-heading text-3xl sm:text-4xl font-bold text-burgundy">
                    {t.venue.venueName}
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-gold-dark">
                    {t.venue.hostsLine}
                  </p>

                  {/* Full Address Card */}
                  <div className="mt-4 rounded-2xl bg-champagne/40 border border-gold/60 p-4">
                    <span className="block text-[11px] uppercase tracking-[0.16em] text-gold-dark font-bold">
                      {t.venue.detailedBreakdownTitle}
                    </span>
                    <p className="mt-1 font-heading text-xl sm:text-2xl font-bold text-burgundy leading-snug">
                      {t.venue.addressFull}
                    </p>

                    <div className="mt-3 pt-3 border-t border-gold/35 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm">
                      <div>
                        <span className="block text-[10px] uppercase tracking-wider text-gold-dark font-semibold">
                          {t.venue.villageLabel}
                        </span>
                        <span className="font-semibold text-ink">
                          {t.venue.villageValue}
                        </span>
                      </div>

                      <div>
                        <span className="block text-[10px] uppercase tracking-wider text-gold-dark font-semibold">
                          {t.venue.localityLabel}
                        </span>
                        <span className="font-semibold text-ink">
                          {t.venue.localityValue}
                        </span>
                      </div>

                      <div>
                        <span className="block text-[10px] uppercase tracking-wider text-gold-dark font-semibold">
                          {t.venue.districtLabel}
                        </span>
                        <span className="font-semibold text-ink">
                          {t.venue.districtValue}
                        </span>
                      </div>

                      <div>
                        <span className="block text-[10px] uppercase tracking-wider text-gold-dark font-semibold">
                          {t.venue.coordinatesLabel}
                        </span>
                        <span className="font-mono text-xs font-semibold text-burgundy">
                          {t.venue.coordinatesValue}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* All Ceremonies Note */}
                  <p className="mt-3 text-xs sm:text-sm text-ink/85 leading-relaxed bg-ivory-soft border border-gold/45 rounded-xl p-3">
                    {t.venue.allCeremoniesNote}
                  </p>

                  {/* Embedded Interactive Map inside Modal */}
                  {hasEmbedUrl && (
                    <div className="mt-3.5 rounded-2xl overflow-hidden border border-gold/65 h-40 sm:h-44 bg-champagne/25">
                      <iframe
                        title={`${t.venue.venueName} — Exact Map Pin`}
                        src={weddingConfig.venue.embedUrl}
                        className="w-full h-full border-0"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  )}
                </div>

                {/* Modal Action Buttons */}
                <div className="mt-5 pt-4 border-t border-gold/35 flex flex-wrap items-center gap-2.5">
                  {hasDirectionsUrl && (
                    <a
                      href={weddingConfig.venue.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-burgundy hover:bg-burgundy-deep text-ivory font-semibold text-xs sm:text-sm border border-gold shadow-royal transition-all"
                    >
                      <Navigation className="w-4 h-4 text-gold-light" aria-hidden="true" />
                      <span>{t.venue.getDirectionsBtn}</span>
                    </a>
                  )}

                  <button
                    type="button"
                    onClick={handleCopyAddress}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-ivory hover:bg-champagne/50 text-burgundy font-semibold text-xs sm:text-sm border border-gold/70 transition-colors"
                  >
                    {addressCopied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-accent" aria-hidden="true" />
                        <span>{t.venue.addressCopiedBtn}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-gold-dark" aria-hidden="true" />
                        <span>{t.venue.copyAddressBtn}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default VenueSection;
