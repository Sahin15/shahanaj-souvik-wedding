import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, Crown, Maximize2, X } from 'lucide-react';
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
  const [brideImgError, setBrideImgError] = useState(false);
  const [groomImgError, setGroomImgError] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);

  useEffect(() => {
    if (!selectedProfile) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProfile(null);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedProfile]);

  const brideData = {
    id: 'bride',
    badge: t.story.brideLabel,
    name: t.story.brideName,
    parentsLine: t.story.brideParentsLine,
    familyLine: t.story.brideFamilyLine,
    blessing: t.story.brideBlessing,
    photo: weddingConfig.couple.bridePhoto || '/images/family/shahanaj.jpg',
    objectPosition: 'center 25%',
    isBride: true,
  };

  const groomData = {
    id: 'groom',
    badge: t.story.groomLabel,
    name: t.story.groomName,
    parentsLine: t.story.groomParentsLine,
    familyLine: t.story.groomFamilyLine,
    blessing: t.story.groomBlessing,
    photo: weddingConfig.couple.groomPhoto || '/images/family/souvik.jpg',
    objectPosition: 'center 15%',
    isBride: false,
  };

  const renderProfileCard = (person, hasError, onError) => {
    const isBride = person.isBride;
    return (
      <article
        key={person.id}
        className="group relative rounded-3xl bg-ivory border-2 border-gold shadow-royal-lg overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
      >
        <ArabesqueCorner
          position="top-left"
          className="pointer-events-none absolute top-3 left-3 z-20 w-7 h-7 sm:w-8 sm:h-8 opacity-80"
        />
        <ArabesqueCorner
          position="top-right"
          className="pointer-events-none absolute top-3 right-3 z-20 w-7 h-7 sm:w-8 sm:h-8 opacity-80"
        />

        {/* Top Royal Arched Portrait Section */}
        <div className="relative bg-gradient-to-b from-burgundy-deep via-burgundy to-burgundy-deep pt-6 pb-5 px-5 sm:px-7 flex flex-col items-center text-center bg-islamic-pattern-gold border-b-2 border-gold">
          {/* Role Badge Pill */}
          <span
            className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-[0.16em] border shadow-sm mb-4 ${
              isBride
                ? 'bg-gold text-burgundy-deep border-ivory'
                : 'bg-ivory/95 text-burgundy-deep border-gold'
            }`}
          >
            {isBride ? (
              <Crown className="w-3.5 h-3.5 text-burgundy-deep shrink-0" aria-hidden="true" />
            ) : (
              <Sparkles className="w-3.5 h-3.5 text-burgundy shrink-0" aria-hidden="true" />
            )}
            <span>{person.badge}</span>
          </span>

          {/* Arched Portrait Frame */}
          <button
            type="button"
            onClick={() => setSelectedProfile(person)}
            aria-label={`${person.name} — ${t.story.viewPortraitHint}`}
            className="relative w-48 h-60 xs:w-56 xs:h-68 sm:w-64 sm:h-76 rounded-t-full rounded-b-2xl p-1.5 bg-gradient-to-b from-gold-light via-gold to-gold-dark shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-ivory group/photo"
          >
            <div className="relative w-full h-full rounded-t-full rounded-b-xl overflow-hidden bg-burgundy-deep border border-ivory/40">
              {!hasError ? (
                <img
                  src={person.photo}
                  alt={`${person.name} — ${person.badge}`}
                  loading="lazy"
                  style={{ objectPosition: person.objectPosition }}
                  onError={onError}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/photo:scale-105"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-4 text-ivory">
                  <CrescentStarMotif className="w-12 h-12 mb-2" color="#C6A15B" />
                  <span className="font-heading text-2xl font-bold">{person.name}</span>
                </div>
              )}

              {/* Subtle Hover / Tap Hint Badge */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-burgundy-deep/90 via-burgundy-deep/35 to-transparent p-2.5 flex items-center justify-center gap-1 text-[10px] sm:text-xs font-medium text-gold-light">
                <Maximize2 className="w-3 h-3 shrink-0" aria-hidden="true" />
                <span>{t.story.viewPortraitHint}</span>
              </div>
            </div>
          </button>

          {/* Name & Parents Line */}
          <h3 className="mt-4 font-heading text-3xl sm:text-4xl font-bold text-ivory tracking-wide">
            {person.name}
          </h3>
          <p className="mt-1 text-xs sm:text-sm font-semibold text-gold-light leading-snug max-w-sm">
            {person.parentsLine}
          </p>
          {person.familyLine && (
            <p className="mt-1 text-[11px] sm:text-xs text-champagne/90 leading-snug max-w-sm">
              {person.familyLine}
            </p>
          )}
        </div>

        {/* Bottom Blessing Quote Body */}
        <div className="relative p-5 sm:p-6 bg-gradient-to-b from-ivory to-champagne/30 flex-1 flex flex-col justify-center text-center">
          <ArabesqueCorner
            position="bottom-left"
            className="pointer-events-none absolute bottom-2.5 left-2.5 w-6 h-6 opacity-60"
          />
          <ArabesqueCorner
            position="bottom-right"
            className="pointer-events-none absolute bottom-2.5 right-2.5 w-6 h-6 opacity-60"
          />
          <p className="font-heading text-base sm:text-lg text-burgundy italic leading-relaxed">
            “{person.blessing}”
          </p>
        </div>
      </article>
    );
  };

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

          {t.story.subtitle && (
            <p className="mt-2 text-xs sm:text-base text-ink/80 leading-relaxed">
              {t.story.subtitle}
            </p>
          )}
        </div>

        {/* =====================================================================
            FEATURED BRIDE & GROOM INTRODUCTION CARDS WITH PORTRAITS
           ===================================================================== */}
        <div className="mt-8 sm:mt-12 relative grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-stretch max-w-5xl mx-auto">
          {/* The Bride Card (Shahanaj) */}
          {renderProfileCard(brideData, brideImgError, () =>
            setBrideImgError(true)
          )}

          {/* Central Golden Heart Emblem on Desktop between Bride & Groom */}
          <div
            aria-hidden="true"
            className="hidden md:flex pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-gradient-to-br from-gold-light via-gold to-gold-dark border-4 border-ivory shadow-2xl items-center justify-center"
          >
            <Heart className="w-6 h-6 text-burgundy-deep fill-burgundy-deep" />
          </div>

          {/* The Groom Card (Souvik) */}
          {renderProfileCard(groomData, groomImgError, () =>
            setGroomImgError(true)
          )}
        </div>

        {/* =====================================================================
            COUPLE STORY & TOGETHER PORTRAITS
           ===================================================================== */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center max-w-6xl mx-auto">
          {/* Left: Couple Portrait Composition */}
          <div className="lg:col-span-5 flex flex-col items-center gap-4">
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

          {/* Right: Heartfelt Story Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="relative rounded-2xl sm:rounded-3xl bg-ivory-soft border border-gold/55 p-5 sm:p-8 md:p-10 shadow-royal">
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

              <blockquote className="font-heading text-lg sm:text-2xl text-burgundy leading-snug sm:leading-relaxed font-medium italic">
                “{t.story.mainQuote}”
              </blockquote>

              <div className="my-3.5 sm:my-4">
                <OrnamentalDivider variant="star" className="w-40 sm:w-48 h-5" />
              </div>

              <p className="text-xs sm:text-base text-ink/85 leading-relaxed">
                {t.story.secondaryParagraph}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Screen Portrait Lightbox Modal for Bride / Groom */}
      {selectedProfile && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedProfile.name}
          className="fixed inset-0 z-[85] bg-burgundy-deep/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedProfile(null)}
        >
          <div
            className="relative max-w-lg w-full max-h-[90vh] overflow-y-auto rounded-3xl bg-ivory border-2 border-gold shadow-royal-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProfile(null)}
              aria-label="Close portrait viewer"
              className="absolute top-3.5 right-3.5 z-20 inline-flex items-center justify-center w-10 h-10 rounded-full bg-burgundy-deep/85 hover:bg-gold text-ivory hover:text-burgundy-deep border border-gold/60 transition-colors"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>

            <div className="max-h-[62vh] w-full bg-burgundy-deep overflow-hidden flex items-center justify-center">
              <img
                src={selectedProfile.photo}
                alt={`${selectedProfile.name} — ${selectedProfile.badge}`}
                className="w-full max-h-[62vh] object-contain"
              />
            </div>

            <div className="p-6 sm:p-8 text-center">
              <span className="inline-block px-3.5 py-1 rounded-full bg-champagne/65 border border-gold/60 text-burgundy text-xs font-bold uppercase tracking-wider">
                {selectedProfile.badge}
              </span>
              <h3 className="mt-2 font-heading text-3xl sm:text-4xl font-bold text-burgundy">
                {selectedProfile.name}
              </h3>
              <p className="mt-1 text-xs sm:text-sm font-semibold text-gold-dark">
                {selectedProfile.parentsLine}
              </p>
              {selectedProfile.familyLine && (
                <p className="mt-0.5 text-xs text-ink/75">
                  {selectedProfile.familyLine}
                </p>
              )}
              <p className="mt-3 text-sm sm:text-base text-ink/85 leading-relaxed italic">
                “{selectedProfile.blessing}”
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default CoupleStory;
