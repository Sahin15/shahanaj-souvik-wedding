import React, { useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import { weddingConfig } from '../data/weddingConfig';
import {
  OrnamentalDivider,
  ArabesqueCorner,
  CrescentStarMotif,
} from './OrnamentalMotifs';

export function CoupleStory() {
  const { language, t } = useLanguage();
  const [revealRef, isVisible] = useRevealOnScroll();
  const [imgError1, setImgError1] = useState(false);
  const [imgError2, setImgError2] = useState(false);

  return (
    <section
      id="story"
      className="relative py-12 sm:py-20 bg-ivory overflow-hidden"
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

          <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-emerald-accent font-semibold">
            {t.story.eyebrow}
          </p>

          <h2 className="mt-1 font-heading text-2xl sm:text-4xl md:text-5xl font-bold text-burgundy">
            {t.story.title}
          </h2>
        </div>

        {/* Main Editorial Grid */}
        <div className="mt-7 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          {/* Left: Couple Portrait Composition */}
          <div className="lg:col-span-5 flex flex-col items-center gap-4">
            {/* Primary Frame: Moonlight Bridal & Groom Silhouette */}
            <div className="relative w-full max-w-md">
              <div
                className="pointer-events-none absolute -inset-2 rounded-2xl border border-gold/45 bg-champagne/25 -rotate-1"
                aria-hidden="true"
              />

              <div className="relative rounded-2xl overflow-hidden border-2 border-gold bg-burgundy-deep shadow-royal-lg aspect-[16/10] sm:aspect-[4/3]">
                {!imgError1 ? (
                  <img
                    src={weddingConfig.hero.coupleStoryImage}
                    alt={`${weddingConfig.couple.displayName[language]} — ${t.story.title}`}
                    loading="lazy"
                    onError={() => setImgError1(true)}
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-burgundy-deep to-burgundy text-ivory">
                    <CrescentStarMotif className="w-12 h-12 mb-2" color="#C6A15B" />
                    <p className="font-heading text-2xl font-semibold">
                      {weddingConfig.couple.displayName[language]}
                    </p>
                  </div>
                )}

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-burgundy-deep/90 via-burgundy-deep/35 to-transparent p-3 sm:p-4 text-ivory">
                  <p className="font-heading text-lg sm:text-2xl font-semibold text-gold-light">
                    {weddingConfig.couple.displayName[language]}
                  </p>
                  <p className="text-[11px] sm:text-xs text-champagne/90 mt-0.5">
                    {t.story.portraitNote}
                  </p>
                </div>
              </div>
            </div>

            {/* Secondary Frame: Hand-in-Hand Meadow Walk (Desktop/Tablet) */}
            {weddingConfig.hero.secondaryStoryImage && !imgError2 && (
              <div className="hidden sm:block relative w-full max-w-md rounded-2xl overflow-hidden border-2 border-gold/75 bg-burgundy-deep shadow-royal aspect-[16/9]">
                <img
                  src={weddingConfig.hero.secondaryStoryImage}
                  alt={`${weddingConfig.couple.displayName[language]} walking hand in hand`}
                  loading="lazy"
                  onError={() => setImgError2(true)}
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />
              </div>
            )}
          </div>

          {/* Right: Heartfelt Story Copy & Couple Medallions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="relative rounded-2xl sm:rounded-3xl bg-ivory-soft border border-gold/55 p-4 sm:p-8 md:p-10 shadow-royal">
              <ArabesqueCorner
                position="top-left"
                className="pointer-events-none absolute top-2.5 left-2.5 w-7 h-7 sm:w-9 sm:h-9 opacity-75"
              />
              <ArabesqueCorner
                position="top-right"
                className="pointer-events-none absolute top-2.5 right-2.5 w-7 h-7 sm:w-9 sm:h-9 opacity-75"
              />
              <ArabesqueCorner
                position="bottom-left"
                className="pointer-events-none absolute bottom-2.5 left-2.5 w-7 h-7 sm:w-9 sm:h-9 opacity-75"
              />
              <ArabesqueCorner
                position="bottom-right"
                className="pointer-events-none absolute bottom-2.5 right-2.5 w-7 h-7 sm:w-9 sm:h-9 opacity-75"
              />

              {/* Primary Featured Quote */}
              <blockquote className="font-heading text-lg sm:text-2xl text-burgundy leading-snug sm:leading-relaxed font-medium italic">
                “{t.story.mainQuote}”
              </blockquote>

              <div className="my-3 sm:my-4">
                <OrnamentalDivider variant="star" className="w-40 sm:w-48 h-5" />
              </div>

              {/* Secondary Warm Family Copy */}
              <p className="text-xs sm:text-base text-ink/85 leading-relaxed">
                {t.story.secondaryParagraph}
              </p>

              {/* Bride & Groom Cards (2-column side-by-side even on mobile) */}
              <div className="mt-5 sm:mt-7 grid grid-cols-2 gap-2.5 sm:gap-5">
                {/* Bride Card */}
                <div className="rounded-xl sm:rounded-2xl bg-ivory border border-gold/50 p-3 sm:p-5 shadow-sm hover:border-burgundy/50 transition-colors">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] sm:text-xs uppercase tracking-[0.14em] text-gold-dark font-semibold">
                      {t.story.brideLabel}
                    </span>
                    <Sparkles className="w-3.5 h-3.5 text-gold shrink-0" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-xl sm:text-3xl font-bold text-burgundy leading-tight">
                    {t.story.brideName}
                  </h3>
                  <p className="mt-0.5 text-[10px] sm:text-xs font-semibold text-gold-dark leading-snug">
                    {t.story.brideParentsLine}
                  </p>
                  <p className="mt-1.5 text-[11px] sm:text-xs text-ink/80 leading-snug line-clamp-3 sm:line-clamp-none">
                    {t.story.brideBlessing}
                  </p>
                </div>

                {/* Groom Card */}
                <div className="rounded-xl sm:rounded-2xl bg-ivory border border-gold/50 p-3 sm:p-5 shadow-sm hover:border-burgundy/50 transition-colors">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] sm:text-xs uppercase tracking-[0.14em] text-gold-dark font-semibold">
                      {t.story.groomLabel}
                    </span>
                    <Heart className="w-3.5 h-3.5 text-burgundy/80 shrink-0" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-xl sm:text-3xl font-bold text-burgundy leading-tight">
                    {t.story.groomName}
                  </h3>
                  <p className="mt-0.5 text-[10px] sm:text-xs font-semibold text-gold-dark leading-snug">
                    {t.story.groomParentsLine}
                  </p>
                  <p className="mt-1.5 text-[11px] sm:text-xs text-ink/80 leading-snug line-clamp-3 sm:line-clamp-none">
                    {t.story.groomBlessing}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoupleStory;
