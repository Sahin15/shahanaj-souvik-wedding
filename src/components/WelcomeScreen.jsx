import React, { useState, useEffect } from 'react';
import { BookOpen, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { weddingConfig } from '../data/weddingConfig';
import { LanguageSwitcher } from './LanguageSwitcher';
import {
  CrescentStarMotif,
  ArabesqueCorner,
  OrnamentalDivider,
} from './OrnamentalMotifs';

const WELCOME_STORAGE_KEY = 'shahanaj_souvik_welcome_seen_v1';

export function WelcomeScreen() {
  const { language, t } = useLanguage();
  const [visible, setVisible] = useState(() => {
    try {
      return window.sessionStorage.getItem(WELCOME_STORAGE_KEY) !== '1';
    } catch {
      return true;
    }
  });
  const [isOpening, setIsOpening] = useState(false);

  useEffect(() => {
    if (!visible) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [visible]);

  const handleEnter = () => {
    setIsOpening(true);
    try {
      window.sessionStorage.setItem(WELCOME_STORAGE_KEY, '1');
    } catch {
      // Ignore sessionStorage error
    }
    window.setTimeout(() => {
      setVisible(false);
    }, 520);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={t.welcomeScreen.bismillah}
      className={`fixed inset-0 z-[110] flex flex-col items-center justify-between p-4 sm:p-8 bg-burgundy-deep bg-islamic-pattern-gold text-ivory overflow-y-auto transition-all duration-500 ${
        isOpening ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Top Bar: One-Tap Language Switcher & Quick Skip */}
      <div className="relative z-20 w-full max-w-xl flex items-center justify-between gap-2 pt-1">
        <LanguageSwitcher />
        <button
          type="button"
          onClick={handleEnter}
          className="px-3.5 py-1.5 rounded-full text-xs font-medium text-champagne/90 hover:text-gold-light border border-gold/40 bg-ivory/5 hover:bg-ivory/10 transition-colors min-h-[38px]"
        >
          {t.welcomeScreen.skipBtn}
        </button>
      </div>

      {/* Central Royal Invitation Cover Card */}
      <div className="relative z-10 w-full max-w-lg my-auto rounded-3xl bg-gradient-to-b from-[#5A0B1C]/95 via-[#3F0713]/95 to-[#2B040C]/95 border-2 border-gold shadow-[0_25px_70px_rgba(0,0,0,0.75)] px-5 py-7 sm:px-9 sm:py-10 text-center overflow-hidden">
        {/* Inner Fine Gold Frame */}
        <div
          className="pointer-events-none absolute inset-2.5 sm:inset-3.5 rounded-2xl border border-gold/40"
          aria-hidden="true"
        />

        {/* Four Arabesque Corners */}
        <ArabesqueCorner
          position="top-left"
          className="pointer-events-none absolute top-3 left-3 w-8 h-8 sm:w-10 sm:h-10 opacity-85"
        />
        <ArabesqueCorner
          position="top-right"
          className="pointer-events-none absolute top-3 right-3 w-8 h-8 sm:w-10 sm:h-10 opacity-85"
        />
        <ArabesqueCorner
          position="bottom-left"
          className="pointer-events-none absolute bottom-3 left-3 w-8 h-8 sm:w-10 sm:h-10 opacity-85"
        />
        <ArabesqueCorner
          position="bottom-right"
          className="pointer-events-none absolute bottom-3 right-3 w-8 h-8 sm:w-10 sm:h-10 opacity-85"
        />

        {/* Golden Crescent Emblem */}
        <div className="mx-auto w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-burgundy border-2 border-gold flex items-center justify-center shadow-gold-glow mb-3">
          <CrescentStarMotif className="w-8 h-8 sm:w-9 sm:h-9" color="#C6A15B" />
        </div>

        {/* Bismillahir Rahmanir Rahim */}
        <p
          className="font-heading text-lg sm:text-xl text-gold-light tracking-wide"
          dir="rtl"
          lang="ar"
        >
          {t.welcomeScreen.bismillahArabic}
        </p>
        <p className="mt-1 font-regal text-xs sm:text-sm uppercase tracking-[0.18em] text-gold-light font-semibold">
          {t.welcomeScreen.bismillah}
        </p>

        <div className="my-3 flex justify-center">
          <OrnamentalDivider
            variant="star"
            color="#C6A15B"
            secondaryColor="#C6A15B"
            className="w-44 sm:w-52 h-5"
          />
        </div>

        {/* Couple Names */}
        <h1 className="font-heading text-[clamp(2rem,7vw,3.4rem)] font-bold text-transparent bg-clip-text bg-gradient-to-r from-ivory via-[#F5E3C3] to-gold-light leading-tight py-0.5">
          {weddingConfig.couple.displayName[language]}
        </h1>

        {/* Welcome Blessing Quote */}
        <p className="mt-2.5 max-w-md mx-auto font-heading italic text-[clamp(1.05rem,3.6vw,1.35rem)] text-champagne leading-relaxed">
          “{t.welcomeScreen.quote}”
        </p>

        {/* Hosts & Date Info */}
        <div className="mt-4 pt-3.5 border-t border-gold/30 space-y-1 text-xs sm:text-sm text-champagne/90">
          <p className="font-medium text-gold-light">{t.welcomeScreen.invitedBy}</p>
          <p className="text-xs text-ivory/80">{t.welcomeScreen.dateLocation}</p>
        </div>

        {/* Prominent Thumb-Friendly "Open Invitation" Button */}
        <div className="mt-6">
          <button
            type="button"
            onClick={handleEnter}
            className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-gold via-gold-light to-gold hover:brightness-105 text-burgundy-deep font-bold text-sm sm:text-base tracking-wide border-2 border-ivory/75 shadow-[0_8px_30px_rgba(198,161,91,0.5)] transition-all duration-300 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-ivory"
          >
            <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-burgundy-deep shrink-0" aria-hidden="true" />
            <span>{t.welcomeScreen.openBtn}</span>
            <Sparkles className="w-4 h-4 text-burgundy-deep shrink-0" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Bottom Spacer */}
      <div className="h-2" aria-hidden="true" />
    </div>
  );
}

export default WelcomeScreen;

