import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import {
  CrescentStarMotif,
  ArabesqueCorner,
  OrnamentalDivider,
} from './OrnamentalMotifs';

export function PersonalInvitationBanner() {
  const { t } = useLanguage();
  const [revealRef, isVisible] = useRevealOnScroll();

  return (
    <section
      aria-label={t.personalMessage.eyebrow}
      className="relative py-10 sm:py-14 bg-ivory bg-islamic-pattern border-b border-gold/30 overflow-hidden"
    >
      <div
        ref={revealRef}
        className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 reveal-up ${
          isVisible ? 'is-visible' : ''
        }`}
      >
        <div className="relative rounded-3xl bg-gradient-to-b from-ivory via-ivory-soft to-champagne/30 border-2 border-gold/70 shadow-royal px-5 py-7 sm:px-10 sm:py-10 text-center overflow-hidden">
          {/* Subtle Inner Stationery Border */}
          <div
            className="pointer-events-none absolute inset-2 sm:inset-3 rounded-2xl border border-gold/35"
            aria-hidden="true"
          />

          {/* Four Arabesque Corners */}
          <ArabesqueCorner
            position="top-left"
            className="pointer-events-none absolute top-2.5 left-2.5 sm:top-3.5 sm:left-3.5 w-8 h-8 sm:w-10 sm:h-10 opacity-80"
          />
          <ArabesqueCorner
            position="top-right"
            className="pointer-events-none absolute top-2.5 right-2.5 sm:top-3.5 sm:right-3.5 w-8 h-8 sm:w-10 sm:h-10 opacity-80"
          />
          <ArabesqueCorner
            position="bottom-left"
            className="pointer-events-none absolute bottom-2.5 left-2.5 sm:bottom-3.5 sm:left-3.5 w-8 h-8 sm:w-10 sm:h-10 opacity-80"
          />
          <ArabesqueCorner
            position="bottom-right"
            className="pointer-events-none absolute bottom-2.5 right-2.5 sm:bottom-3.5 sm:right-3.5 w-8 h-8 sm:w-10 sm:h-10 opacity-80"
          />

          <div className="relative z-10 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 mb-1.5">
              <CrescentStarMotif className="w-6 h-6 sm:w-7 sm:h-7" color="#C6A15B" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-gold-dark font-semibold">
                {t.personalMessage.bismillah}
              </span>
            </div>

            <div className="my-2">
              <OrnamentalDivider variant="crescent" className="w-48 sm:w-60 h-6" />
            </div>

            <blockquote className="max-w-2xl mx-auto font-heading text-[clamp(1.2rem,3.8vw,1.75rem)] text-burgundy font-medium leading-relaxed">
              “{t.personalMessage.body}”
            </blockquote>

            <p className="mt-4 text-xs sm:text-sm font-semibold text-gold-dark tracking-wide">
              — {t.personalMessage.hostsSignoff}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PersonalInvitationBanner;

