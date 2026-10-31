import React, { useState, useRef, useEffect } from 'react';
import {
  Calendar,
  MapPin,
  BookOpen,
  Sparkles,
  Volume2,
  VolumeX,
  Crown,
  Clock,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { weddingConfig } from '../data/weddingConfig';
import { triggerInvitationLetterModal } from './InvitationSection';
import {
  CrescentStarMotif,
  HangingLantern,
  ArabesqueCorner,
  OrnamentalDivider,
} from './OrnamentalMotifs';

const HERO_PORTRAITS = [
  {
    id: 'arch',
    src: '/images/couple-arch-portrait.jpg',
    objectPosition: 'center center',
  },
  {
    id: 'meadow',
    src: '/images/couple-meadow-walk.jpg',
    objectPosition: 'center 25%',
  },
  {
    id: 'moonlight',
    src: '/images/couple-moonlight-silhouette.jpg',
    objectPosition: 'center center',
  },
];

export function Hero() {
  const { language, t } = useLanguage();
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [isPlayingSound, setIsPlayingSound] = useState(false);
  const audioIntervalRef = useRef(null);
  const audioContextRef = useRef(null);

  // Gentle auto-rotation between the 3 real couple portraits every 5.5 seconds
  useEffect(() => {
    const timer = window.setInterval(() => {
      setActivePhotoIdx((prev) => (prev + 1) % HERO_PORTRAITS.length);
    }, 5500);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    return () => {
      if (audioIntervalRef.current) {
        window.clearInterval(audioIntervalRef.current);
      }
      if (audioContextRef.current) {
        audioContextRef.current.close().catch(() => {});
      }
    };
  }, []);

  const toggleAmbientChime = () => {
    if (isPlayingSound) {
      if (audioIntervalRef.current) {
        window.clearInterval(audioIntervalRef.current);
        audioIntervalRef.current = null;
      }
      setIsPlayingSound(false);
      return;
    }

    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;

      if (!audioContextRef.current) {
        audioContextRef.current = new AudioCtx();
      }
      const ctx = audioContextRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const playGentleChord = () => {
        const notes = [261.63, 329.63, 392.0, 523.25];
        notes.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.35);

          gain.gain.setValueAtTime(0.0001, ctx.currentTime + idx * 0.35);
          gain.gain.exponentialRampToValueAtTime(
            0.025,
            ctx.currentTime + idx * 0.35 + 0.25
          );
          gain.gain.exponentialRampToValueAtTime(
            0.0001,
            ctx.currentTime + idx * 0.35 + 3.2
          );

          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(ctx.currentTime + idx * 0.35);
          osc.stop(ctx.currentTime + idx * 0.35 + 3.3);
        });
      };

      playGentleChord();
      audioIntervalRef.current = window.setInterval(playGentleChord, 6500);
      setIsPlayingSound(true);
    } catch {
      setIsPlayingSound(false);
    }
  };

  const currentPortrait = HERO_PORTRAITS[activePhotoIdx] || HERO_PORTRAITS[0];
  const secondaryPortrait =
    HERO_PORTRAITS[(activePhotoIdx + 1) % HERO_PORTRAITS.length];

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] lg:h-[100dvh] lg:max-h-[920px] pt-14 pb-4 sm:pt-16 sm:pb-6 flex items-center justify-center overflow-hidden bg-islamic-pattern-gold text-ivory"
    >
      {/* Rich Royal Radial Golden Glows */}
      <div
        className="pointer-events-none absolute -top-24 left-1/4 w-[32rem] h-[32rem] rounded-full bg-gold/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 right-1/4 w-[36rem] h-[36rem] rounded-full bg-burgundy-ruby/35 blur-3xl"
        aria-hidden="true"
      />

      {/* Hanging Golden Palace Lanterns */}
      <div
        className="pointer-events-none absolute top-11 left-4 xl:left-12 z-10 hidden lg:flex items-start gap-3 opacity-90"
        aria-hidden="true"
      >
        <HangingLantern className="w-10 h-24" delay="0s" />
        <HangingLantern className="w-7 h-18 -mt-2" delay="1.4s" />
      </div>
      <div
        className="pointer-events-none absolute top-11 right-4 xl:right-12 z-10 hidden lg:flex items-start gap-3 opacity-90"
        aria-hidden="true"
      >
        <HangingLantern className="w-7 h-18 -mt-2" delay="0.8s" />
        <HangingLantern className="w-10 h-24" delay="2.1s" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 w-full">
        {/* Royal Palace Stage Frame */}
        <div className="relative rounded-3xl bg-gradient-to-br from-[#5A0B1C]/90 via-[#3F0713]/95 to-[#2B040C]/95 border-2 border-gold/80 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.65)] px-4 py-4 sm:p-7 md:p-8 lg:px-11 lg:py-8 overflow-hidden backdrop-blur-sm">
          {/* Inner Fine Gold Filigree Border */}
          <div
            className="pointer-events-none absolute inset-2 sm:inset-3 rounded-2xl border border-gold/35"
            aria-hidden="true"
          />

          {/* Subtle Shimmering Top Gold Arch Line */}
          <div
            className="pointer-events-none absolute top-0 inset-x-16 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-85"
            aria-hidden="true"
          />

          {/* Four Arabesque Corners */}
          <ArabesqueCorner
            position="top-left"
            className="pointer-events-none absolute top-2.5 left-2.5 sm:top-4 sm:left-4 w-8 h-8 sm:w-11 sm:h-11 opacity-90"
          />
          <ArabesqueCorner
            position="top-right"
            className="pointer-events-none absolute top-2.5 right-2.5 sm:top-4 sm:right-4 w-8 h-8 sm:w-11 sm:h-11 opacity-90"
          />
          <ArabesqueCorner
            position="bottom-left"
            className="pointer-events-none absolute bottom-2.5 left-2.5 sm:bottom-4 sm:left-4 w-8 h-8 sm:w-11 sm:h-11 opacity-90"
          />
          <ArabesqueCorner
            position="bottom-right"
            className="pointer-events-none absolute bottom-2.5 right-2.5 sm:bottom-4 sm:right-4 w-8 h-8 sm:w-11 sm:h-11 opacity-90"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center">
            {/* ===============================================================
                LEFT / MAIN COLUMN: ROYAL GOLD & IVORY INVITATION TYPOGRAPHY
               =============================================================== */}
            <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
              {/* Bismillah, Celebration Pill & Ambient Chime Toggle */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                <CrescentStarMotif className="w-6 h-6 sm:w-7 sm:h-7" color="#C6A15B" />
                <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-gold/20 border border-gold/70 text-gold-light text-[10px] sm:text-xs font-semibold tracking-wider uppercase shadow-sm">
                  <Sparkles className="w-3 h-3 text-gold-light" aria-hidden="true" />
                  {t.hero.nikahBadge}
                </span>

                <button
                  type="button"
                  onClick={toggleAmbientChime}
                  aria-pressed={isPlayingSound}
                  title={isPlayingSound ? t.hero.soundMute : t.hero.soundPlay}
                  className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs text-champagne hover:text-gold-light px-2.5 py-0.5 rounded-full border border-gold/50 bg-burgundy-deep/80 shadow-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  {isPlayingSound ? (
                    <Volume2 className="w-3 h-3 text-gold-light animate-pulse" aria-hidden="true" />
                  ) : (
                    <VolumeX className="w-3 h-3 text-gold" aria-hidden="true" />
                  )}
                  <span className="hidden sm:inline">
                    {isPlayingSound ? t.hero.soundMute : t.hero.soundPlay}
                  </span>
                </button>
              </div>

              <p className="mt-1.5 font-regal text-[10px] sm:text-xs tracking-[0.18em] text-gold-light font-semibold uppercase">
                {t.hero.bismillah}
              </p>

              {/* Mobile-Only Royal Arch Portrait with Switcher Dots */}
              <div className="mt-2.5 mb-1.5 lg:hidden flex flex-col items-center w-full">
                <div className="relative w-40 h-44 sm:w-48 sm:h-52 rounded-t-[5rem] rounded-b-2xl overflow-hidden border-2 border-gold bg-burgundy-deep shadow-[0_0_25px_rgba(198,161,91,0.35)]">
                  {!imageError ? (
                    <img
                      src={currentPortrait.src}
                      alt={weddingConfig.couple.displayName[language]}
                      style={{ objectPosition: currentPortrait.objectPosition }}
                      onError={() => setImageError(true)}
                      className="w-full h-full object-cover transition-all duration-700"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-burgundy-deep">
                      <CrescentStarMotif className="w-12 h-12" color="#C6A15B" />
                    </div>
                  )}
                  <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-burgundy-deep/90 to-transparent flex items-end justify-between px-3 pb-1.5">
                    <span className="font-regal text-[10px] font-bold text-gold-light tracking-widest">
                      {weddingConfig.couple.monogram[language]}
                    </span>
                    <div className="flex items-center gap-1">
                      {HERO_PORTRAITS.map((p, idx) => (
                        <button
                          key={p.id}
                          type="button"
                          onClick={() => setActivePhotoIdx(idx)}
                          aria-label={`Portrait ${idx + 1}`}
                          className={`h-1.5 rounded-full transition-all ${
                            idx === activePhotoIdx
                              ? 'w-4 bg-gold-light'
                              : 'w-1.5 bg-ivory/50'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Invitation Lead */}
              <p className="mt-1 lg:mt-2.5 max-w-xl text-xs sm:text-sm md:text-[15px] text-champagne/95 leading-snug">
                {t.hero.invitationLead}
              </p>

              {/* Couple's Names in Glowing Ivory & Gold */}
              <h1 className="mt-1 sm:mt-2 font-heading text-3xl xs:text-4xl sm:text-5xl md:text-6xl xl:text-[4.1rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-ivory via-[#F5E3C3] to-gold-light leading-[1.1] tracking-tight drop-shadow-[0_2px_12px_rgba(198,161,91,0.28)] py-0.5">
                {t.hero.coupleNames}
              </h1>

              {/* Romantic Tagline + Divider */}
              <div className="mt-0.5 sm:mt-1 flex items-center gap-3">
                <p className="font-heading italic text-sm sm:text-lg md:text-xl text-gold-light">
                  “{t.hero.tagline}”
                </p>
              </div>

              {/* Hosts Plaque: Nurjjaman Mondal & Sujata Bibi */}
              <div className="mt-2 sm:mt-3 inline-flex flex-wrap items-center justify-center lg:justify-start gap-1.5 px-3.5 py-1.5 rounded-xl bg-ivory/10 border border-gold/55 text-[11px] sm:text-xs text-champagne backdrop-blur-sm">
                <Crown className="w-3.5 h-3.5 text-gold-light shrink-0" aria-hidden="true" />
                <span>{t.hero.hostedByLabel}</span>
                <strong className="font-heading text-sm sm:text-base font-bold text-gold-light">
                  {t.hero.hostedByNames}
                </strong>
                <span className="text-champagne/80">{t.hero.hostedByRole}</span>
              </div>

              {/* Date & Venue Ribbon Badges */}
              <div className="mt-2.5 sm:mt-3.5 flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-2.5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-gradient-to-r from-gold via-gold-light to-gold text-burgundy-deep font-bold shadow-md">
                  <Calendar className="w-3.5 h-3.5 text-burgundy-deep shrink-0" aria-hidden="true" />
                  <span className="font-heading text-xs sm:text-sm tracking-wide">
                    {t.hero.date}
                  </span>
                </div>

                <a
                  href="#venue"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-ivory/10 hover:bg-ivory/20 border border-gold/55 text-ivory transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-gold-light shrink-0" aria-hidden="true" />
                  <span className="text-[11px] sm:text-xs font-medium">
                    {t.hero.location}
                  </span>
                </a>
              </div>

              {/* 3-Day Celebration Quick Strip */}
              <div className="mt-2.5 sm:mt-3.5 w-full max-w-xl grid grid-cols-3 gap-1.5 sm:gap-2.5">
                {weddingConfig.events.map((ev) => (
                  <a
                    key={ev.id}
                    href="#events"
                    className={`group rounded-xl px-2 py-1.5 sm:px-3 sm:py-2 border text-center lg:text-left transition-all ${
                      ev.featured
                        ? 'bg-gold/20 border-gold text-ivory shadow-sm'
                        : 'bg-ivory/5 hover:bg-ivory/10 border-gold/40 text-champagne'
                    }`}
                  >
                    <span className="block font-heading text-xs sm:text-sm font-bold text-gold-light truncate">
                      {t.events.items[ev.id].name}
                    </span>
                    <span className="block text-[9px] sm:text-[11px] text-ivory/90 font-medium truncate">
                      {ev.date[language]}
                    </span>
                    <span className="hidden sm:flex items-center gap-1 text-[10px] text-champagne/80 mt-0.5 truncate">
                      <Clock className="w-2.5 h-2.5 text-gold-light shrink-0" aria-hidden="true" />
                      <span className="truncate">{ev.confirmedTime[language]}</span>
                    </span>
                  </a>
                ))}
              </div>

              {/* Action Buttons (Side-by-Side on Mobile & Desktop) */}
              <div className="mt-3.5 sm:mt-5 grid grid-cols-2 sm:flex sm:flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-3.5 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={triggerInvitationLetterModal}
                  className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-gold via-gold-light to-gold hover:brightness-105 text-burgundy-deep font-bold text-xs sm:text-sm tracking-wide border border-ivory/60 shadow-[0_6px_25px_rgba(198,161,91,0.45)] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-ivory"
                >
                  <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-burgundy-deep shrink-0" aria-hidden="true" />
                  <span className="truncate">{t.hero.openInvitationBtn}</span>
                </button>

                <a
                  href="#events"
                  className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-ivory/10 hover:bg-ivory/20 text-ivory font-medium text-xs sm:text-sm tracking-wide border border-gold/75 shadow-sm transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold-light shrink-0" aria-hidden="true" />
                  <span className="truncate">{t.hero.exploreEventsBtn}</span>
                </a>
              </div>
            </div>

            {/* ===============================================================
                RIGHT COLUMN (DESKTOP): ROYAL MUGHAL ARCH PORTRAIT SHOWCASE
               =============================================================== */}
            <div className="hidden lg:flex lg:col-span-5 flex-col items-center justify-center">
              <div className="relative w-full max-w-[330px] xl:max-w-[360px] mx-auto">
                {/* Glowing Golden Aura Behind Arch */}
                <div
                  className="pointer-events-none absolute -inset-4 rounded-t-[12rem] rounded-b-3xl bg-gradient-to-b from-gold/30 via-gold/10 to-transparent blur-md"
                  aria-hidden="true"
                />

                {/* Outer Ornate Gold Frame */}
                <div
                  className="pointer-events-none absolute -inset-2.5 rounded-t-[11rem] rounded-b-3xl border border-gold/70 bg-gradient-to-b from-gold/15 via-transparent to-burgundy-deep/40"
                  aria-hidden="true"
                />

                {/* Main Islamic Multifoil Arch Portrait Frame */}
                <div className="relative rounded-t-[10.5rem] rounded-b-2xl overflow-hidden border-2 border-gold bg-burgundy-deep shadow-[0_20px_50px_rgba(0,0,0,0.65)] h-[380px] xl:h-[420px]">
                  {/* Ornate Golden Arch Crown Overlay */}
                  <svg
                    viewBox="0 0 400 110"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none absolute top-0 left-0 right-0 w-full z-20"
                    aria-hidden="true"
                  >
                    <path
                      d="M0 0H400V80C360 32 285 10 200 2C115 10 40 32 0 80V0Z"
                      fill="#2B040C"
                      fillOpacity="0.55"
                    />
                    <path
                      d="M6 86C48 36 120 14 200 5C280 14 352 36 394 86"
                      stroke="#C6A15B"
                      strokeWidth="2.2"
                      strokeOpacity="0.9"
                    />
                  </svg>

                  {!imageError ? (
                    <img
                      src={currentPortrait.src}
                      alt={`${weddingConfig.couple.displayName[language]} — ${t.hero.portraitCaption}`}
                      style={{ objectPosition: currentPortrait.objectPosition }}
                      onError={() => setImageError(true)}
                      className="w-full h-full object-cover transform hover:scale-105 transition-all duration-700"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-burgundy-deep via-burgundy to-burgundy-deep text-ivory">
                      <CrescentStarMotif className="w-16 h-16 mb-3" color="#C6A15B" />
                      <p className="font-heading text-2xl font-semibold text-ivory">
                        {t.hero.coupleNames}
                      </p>
                    </div>
                  )}

                  {/* Bottom Vignette with Couple Caption & Portrait Switcher */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#2B040C]/95 via-[#2B040C]/55 to-transparent p-4 pt-12 flex items-end justify-between text-ivory">
                    <div>
                      <p className="font-heading text-xl font-bold text-gold-light leading-tight">
                        {t.hero.coupleNames}
                      </p>
                      <p className="text-[11px] text-champagne/90 mt-0.5">
                        {t.hero.portraitCaption}
                      </p>
                      {/* Interactive Portrait Dots */}
                      <div className="mt-2 flex items-center gap-1.5">
                        {HERO_PORTRAITS.map((p, idx) => (
                          <button
                            key={p.id}
                            type="button"
                            onClick={() => setActivePhotoIdx(idx)}
                            aria-label={`Select couple portrait ${idx + 1}`}
                            className={`h-1.5 rounded-full transition-all ${
                              idx === activePhotoIdx
                                ? 'w-5 bg-gold-light'
                                : 'w-2 bg-ivory/45 hover:bg-ivory/80'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Royal Monogram Wax Seal Badge */}
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-gold-light via-gold to-gold-dark border-2 border-ivory flex items-center justify-center shrink-0 shadow-lg">
                      <span className="font-regal text-[11px] font-bold text-burgundy-deep">
                        {weddingConfig.couple.monogram[language]}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
