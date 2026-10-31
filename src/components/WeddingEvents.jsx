import React, { useState, useEffect, useCallback } from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Sparkles,
  X,
  ChevronLeft,
  ChevronRight,
  Navigation,
  CalendarPlus,
  CheckCircle2,
  Palette,
  BookOpen,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import { weddingConfig } from '../data/weddingConfig';
import {
  OrnamentalDivider,
  ArabesqueCorner,
  EventIllustration,
  CrescentStarMotif,
} from './OrnamentalMotifs';

export function WeddingEvents() {
  const { language, t } = useLanguage();
  const [revealRef, isVisible] = useRevealOnScroll();
  const [selectedEventIndex, setSelectedEventIndex] = useState(null);
  const [doorAnimationKey, setDoorAnimationKey] = useState(0);

  const isModalOpen = selectedEventIndex !== null;
  const activeEventConfig =
    selectedEventIndex !== null ? weddingConfig.events[selectedEventIndex] : null;
  const activeEventCopy = activeEventConfig
    ? t.events.items[activeEventConfig.id]
    : null;

  const openEventModal = (index) => {
    setDoorAnimationKey((prev) => prev + 1);
    setSelectedEventIndex(index);
  };

  const closeEventModal = useCallback(() => {
    setSelectedEventIndex(null);
  }, []);

  const showPrevEvent = useCallback(() => {
    setDoorAnimationKey((prev) => prev + 1);
    setSelectedEventIndex((prev) =>
      prev === null
        ? null
        : (prev - 1 + weddingConfig.events.length) % weddingConfig.events.length
    );
  }, []);

  const showNextEvent = useCallback(() => {
    setDoorAnimationKey((prev) => prev + 1);
    setSelectedEventIndex((prev) =>
      prev === null ? null : (prev + 1) % weddingConfig.events.length
    );
  }, []);

  useEffect(() => {
    if (!isModalOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeEventModal();
      } else if (e.key === 'ArrowLeft') {
        showPrevEvent();
      } else if (e.key === 'ArrowRight') {
        showNextEvent();
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen, closeEventModal, showPrevEvent, showNextEvent]);

  const buildEventCalendarUrl = (evConfig, evCopy) => {
    const title = encodeURIComponent(
      `${evCopy.name} — ${weddingConfig.couple.displayName[language]}`
    );
    const details = encodeURIComponent(
      `${evCopy.longDescription || evCopy.description}\nHosted by ${weddingConfig.couple.hosts.combined[language]}`
    );
    const location = encodeURIComponent(weddingConfig.venue.fullAddress.en);
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${evConfig.calendarStartUTC}/${evConfig.calendarEndUTC}&details=${details}&location=${location}`;
  };

  const getCardStyle = (theme) => {
    switch (theme) {
      case 'burgundy-plum':
        return {
          wrapper:
            'bg-gradient-to-b from-ivory via-ivory to-[#F7ECEE] border-gold/65 hover:border-burgundy',
          badge: 'bg-burgundy/10 text-burgundy border-burgundy/30',
          title: 'text-burgundy',
          dayPill: 'bg-[#5B1728] text-ivory',
          accentBorder: 'border-burgundy/20',
          footerBg: 'bg-burgundy/5',
          ctaBtn:
            'bg-burgundy text-ivory hover:bg-burgundy-deep border-gold/60',
        };
      case 'champagne-gold':
        return {
          wrapper:
            'bg-gradient-to-b from-ivory via-[#FDF6E2] to-champagne/55 border-gold/80 hover:border-gold-dark',
          badge: 'bg-gold/20 text-ink border-gold/60',
          title: 'text-burgundy',
          dayPill: 'bg-gold-dark text-ivory',
          accentBorder: 'border-gold/35',
          footerBg: 'bg-gold/15',
          ctaBtn:
            'bg-burgundy text-ivory hover:bg-burgundy-deep border-gold/60',
        };
      case 'royal-burgundy':
      default:
        return {
          wrapper:
            'bg-gradient-to-b from-burgundy-deep via-burgundy to-burgundy-deep text-ivory border-2 border-gold shadow-royal-lg ring-1 ring-gold/40',
          badge: 'bg-gold/20 text-gold-light border-gold/60',
          title: 'text-ivory',
          dayPill: 'bg-gold text-burgundy-deep font-bold',
          accentBorder: 'border-gold/30',
          footerBg: 'bg-ivory/10',
          ctaBtn:
            'bg-gold text-burgundy-deep hover:bg-gold-light font-semibold border-ivory/50',
          isDark: true,
        };
    }
  };

  return (
    <section
      id="events"
      className="relative py-12 sm:py-20 bg-gradient-to-b from-ivory via-champagne/35 to-ivory bg-islamic-pattern overflow-hidden"
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
            {t.events.eyebrow}
          </p>

          <h2 className="mt-1 font-heading text-[clamp(1.75rem,5vw,3rem)] font-bold text-burgundy">
            {t.events.title}
          </h2>

          <p className="mt-2 text-xs sm:text-base text-ink/80 leading-relaxed">
            {t.events.subtitle}
          </p>

          {/* Interactive Click Hint Pill */}
          <div className="mt-3.5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-champagne/55 border border-gold/65 text-xs sm:text-sm font-medium text-burgundy shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-gold-dark shrink-0 animate-pulse" aria-hidden="true" />
            <span>{t.events.interactiveHint}</span>
          </div>
        </div>

        {/* =====================================================================
            MOBILE-FIRST VERTICAL WEDDING JOURNEY TIMELINE (<1024px)
            Clean vertical timeline with step medallions — no tiny side-by-side cards
           ===================================================================== */}
        <div className="mt-8 lg:hidden relative pl-6 sm:pl-8 border-l-2 border-gold/75 space-y-6 max-w-xl mx-auto">
          {weddingConfig.events.map((eventItem, index) => {
            const eventCopy = t.events.items[eventItem.id];
            const style = getCardStyle(eventItem.theme);
            const isDark = Boolean(style.isDark);
            const timeText = eventItem.confirmedTime
              ? eventItem.confirmedTime[language]
              : t.events.timeToBeAnnounced;

            return (
              <div key={`mobile-journey-${eventItem.id}`} className="relative">
                {/* Vertical Journey Step Number Medallion */}
                <span
                  className={`absolute -left-[37px] sm:-left-[45px] top-4 w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center font-heading text-xs sm:text-sm font-bold shadow-md ${
                    isDark
                      ? 'bg-gold text-burgundy-deep border-burgundy'
                      : 'bg-burgundy text-gold-light border-gold'
                  }`}
                  aria-hidden="true"
                >
                  {index + 1}
                </span>

                <article
                  role="button"
                  tabIndex={0}
                  onClick={() => openEventModal(index)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      openEventModal(index);
                    }
                  }}
                  aria-label={`${eventCopy.name} — ${t.events.clickToExplore}`}
                  className={`cursor-pointer relative rounded-2xl border p-4 sm:p-5 shadow-royal transition-all overflow-hidden focus:outline-none focus-visible:ring-4 focus-visible:ring-gold ${style.wrapper}`}
                >
                  <div className="flex items-start gap-3.5">
                    <div className="shrink-0">
                      <EventIllustration
                        type={eventItem.iconType}
                        className="w-12 h-12 sm:w-14 sm:h-14"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-medium border ${style.badge}`}
                      >
                        <Sparkles className="w-2.5 h-2.5 shrink-0" aria-hidden="true" />
                        <span className="truncate">{eventCopy.badge}</span>
                      </span>

                      <h3
                        className={`mt-1 font-heading text-xl sm:text-2xl font-bold leading-snug ${style.title}`}
                      >
                        {eventCopy.name}
                      </h3>

                      <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md border text-xs font-semibold ${
                            isDark
                              ? 'bg-ivory/10 border-gold/50 text-ivory'
                              : 'bg-ivory border-gold/50 text-burgundy'
                          }`}
                        >
                          <Calendar className="w-3 h-3 text-gold shrink-0" aria-hidden="true" />
                          {eventCopy.date}
                        </span>
                        <span
                          className={`px-2 py-0.5 rounded-md text-[11px] font-medium ${style.dayPill}`}
                        >
                          {eventCopy.day}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p
                    className={`mt-3 text-xs sm:text-sm leading-relaxed ${
                      isDark ? 'text-champagne/95' : 'text-ink/85'
                    }`}
                  >
                    {eventCopy.description}
                  </p>

                  <div
                    className={`mt-3.5 pt-3 border-t ${style.accentBorder} space-y-2`}
                  >
                    <div
                      className={`flex items-center gap-2 px-3 py-2 rounded-xl ${style.footerBg}`}
                    >
                      <Clock
                        className={`w-4 h-4 shrink-0 ${
                          isDark ? 'text-gold-light' : 'text-burgundy'
                        }`}
                        aria-hidden="true"
                      />
                      <span
                        className={`text-xs sm:text-sm font-semibold ${
                          isDark ? 'text-ivory' : 'text-burgundy'
                        }`}
                      >
                        {timeText}
                      </span>
                    </div>

                    <div
                      className={`flex items-center gap-2 px-3 py-2 rounded-xl ${style.footerBg}`}
                    >
                      <MapPin
                        className={`w-4 h-4 shrink-0 ${
                          isDark ? 'text-gold-light' : 'text-burgundy'
                        }`}
                        aria-hidden="true"
                      />
                      <span
                        className={`text-xs sm:text-sm ${
                          isDark ? 'text-champagne' : 'text-ink/85'
                        }`}
                      >
                        <strong
                          className={isDark ? 'text-gold-light' : 'text-burgundy'}
                        >
                          {t.events.venueLabel}:
                        </strong>{' '}
                        {t.events.venueValue}
                      </span>
                    </div>

                    <div className="pt-1">
                      <span
                        className={`w-full min-h-[42px] inline-flex items-center justify-center gap-2 py-2 px-4 rounded-full text-xs sm:text-sm font-medium border shadow-sm ${style.ctaBtn}`}
                      >
                        <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>{t.events.clickToExplore}</span>
                        <span aria-hidden="true">✦</span>
                      </span>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>

        {/* =====================================================================
            DESKTOP THREE-COLUMN LUXURY STATIONERY CARDS (>=1024px)
           ===================================================================== */}
        <div className="hidden lg:grid mt-10 grid-cols-3 gap-6 items-stretch">
          {weddingConfig.events.map((eventItem, index) => {
            const eventCopy = t.events.items[eventItem.id];
            const style = getCardStyle(eventItem.theme);
            const isDark = Boolean(style.isDark);
            const timeText = eventItem.confirmedTime
              ? eventItem.confirmedTime[language]
              : t.events.timeToBeAnnounced;

            return (
              <article
                key={eventItem.id}
                role="button"
                tabIndex={0}
                onClick={() => openEventModal(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openEventModal(index);
                  }
                }}
                aria-label={`${eventCopy.name} — ${t.events.clickToExplore}`}
                className={`card-shimmer cursor-pointer group relative rounded-2xl border p-5 sm:p-6 flex flex-col justify-between shadow-royal transition-all duration-500 hover:-translate-y-2 hover:shadow-royal-lg overflow-hidden focus:outline-none focus-visible:ring-4 focus-visible:ring-gold ${style.wrapper}`}
              >
                {/* Ornamental Arch Top Watermark for Nikah Card */}
                {isDark && (
                  <svg
                    viewBox="0 0 400 180"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none absolute top-0 left-0 right-0 w-full opacity-25"
                    aria-hidden="true"
                  >
                    <path
                      d="M16 175V90C16 42 108 16 200 6C292 16 384 42 384 90V175"
                      stroke="#C6A15B"
                      strokeWidth="1.5"
                    />
                  </svg>
                )}

                {/* Four Arabesque Corners */}
                <ArabesqueCorner
                  position="top-left"
                  color="#C6A15B"
                  className="pointer-events-none absolute top-2.5 left-2.5 w-7 h-7 opacity-75 group-hover:scale-110 transition-transform"
                />
                <ArabesqueCorner
                  position="top-right"
                  color="#C6A15B"
                  className="pointer-events-none absolute top-2.5 right-2.5 w-7 h-7 opacity-75 group-hover:scale-110 transition-transform"
                />
                <ArabesqueCorner
                  position="bottom-left"
                  color="#C6A15B"
                  className="pointer-events-none absolute bottom-2.5 left-2.5 w-7 h-7 opacity-75 group-hover:scale-110 transition-transform"
                />
                <ArabesqueCorner
                  position="bottom-right"
                  color="#C6A15B"
                  className="pointer-events-none absolute bottom-2.5 right-2.5 w-7 h-7 opacity-75 group-hover:scale-110 transition-transform"
                />

                <div className="relative z-10 flex flex-col items-center text-center">
                  {/* Top Badge */}
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-medium border ${style.badge}`}
                  >
                    <Sparkles className="w-3 h-3" aria-hidden="true" />
                    <span>{eventCopy.badge}</span>
                  </span>

                  {/* Bespoke Event Illustration (Compact) */}
                  <div className="my-2.5 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    <EventIllustration
                      type={eventItem.iconType}
                      className="w-14 h-14 sm:w-16 sm:h-16"
                    />
                  </div>

                  {/* Event Title */}
                  <h3
                    className={`font-heading text-2xl sm:text-[1.75rem] font-bold tracking-tight leading-snug ${style.title}`}
                  >
                    {eventCopy.name}
                  </h3>

                  {/* Date & Day Highlight */}
                  <div className="mt-2.5 flex flex-wrap items-center justify-center gap-2">
                    <div
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg border ${
                        isDark
                          ? 'bg-ivory/10 border-gold/50 text-ivory'
                          : 'bg-ivory border-gold/50 text-burgundy'
                      }`}
                    >
                      <Calendar className="w-3.5 h-3.5 text-gold" aria-hidden="true" />
                      <span className="font-heading font-semibold text-sm sm:text-base">
                        {eventCopy.date}
                      </span>
                    </div>

                    <span
                      className={`px-2.5 py-1 rounded-lg text-xs font-medium ${style.dayPill}`}
                    >
                      {eventCopy.day}
                    </span>
                  </div>

                  {/* Concise 2-Line Description */}
                  <p
                    className={`mt-3 text-xs sm:text-sm leading-relaxed line-clamp-2 ${
                      isDark ? 'text-champagne/95' : 'text-ink/85'
                    }`}
                  >
                    {eventCopy.description}
                  </p>
                </div>

                {/* Compact Bottom Details Box: Confirmed Time, Venue & Interactive Unfold Button */}
                <div
                  className={`relative z-10 mt-4 pt-3.5 border-t ${style.accentBorder} space-y-2 text-left`}
                >
                  {/* Confirmed Ceremony Time (Single Compact Row) */}
                  <div
                    className={`flex items-center gap-2.5 px-3 py-2 rounded-xl ${style.footerBg}`}
                  >
                    <Clock
                      className={`w-4 h-4 shrink-0 ${
                        isDark ? 'text-gold-light' : 'text-burgundy'
                      }`}
                      aria-hidden="true"
                    />
                    <span
                      className={`text-xs sm:text-sm font-semibold ${
                        isDark ? 'text-ivory' : 'text-burgundy'
                      }`}
                    >
                      {timeText}
                    </span>
                  </div>

                  {/* Venue (Compact Row) */}
                  <div
                    className={`flex items-center gap-2.5 px-3 py-2 rounded-xl ${style.footerBg}`}
                  >
                    <MapPin
                      className={`w-4 h-4 shrink-0 ${
                        isDark ? 'text-gold-light' : 'text-burgundy'
                      }`}
                      aria-hidden="true"
                    />
                    <span
                      className={`text-xs sm:text-sm truncate ${
                        isDark ? 'text-champagne' : 'text-ink/85'
                      }`}
                    >
                      <strong
                        className={isDark ? 'text-gold-light' : 'text-burgundy'}
                      >
                        {t.events.venueLabel}:
                      </strong>{' '}
                      {t.events.venueValue}
                    </span>
                  </div>

                  {/* Animated "Unfold Ceremony Details" Button */}
                  <div className="pt-1">
                    <span
                      className={`w-full inline-flex items-center justify-center gap-2 py-2 px-4 rounded-full text-xs sm:text-sm font-medium border shadow-sm transition-all duration-300 group-hover:shadow-md ${style.ctaBtn}`}
                    >
                      <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>{t.events.clickToExplore}</span>
                      <span
                        aria-hidden="true"
                        className="transition-transform group-hover:translate-x-1"
                      >
                        ✦
                      </span>
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* =====================================================================
          MEMORABLE ROYAL PALACE DOORS & UNFOLDING CEREMONY SCROLL MODAL
         ===================================================================== */}
      {isModalOpen && activeEventConfig && activeEventCopy && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeEventCopy.name}
          className="fixed inset-0 z-[90] bg-burgundy-deep/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          onClick={closeEventModal}
        >
          {/* Animated Royal Palace Doors & Golden Wax Seal Overlay (plays on open/switch) */}
          <div
            key={`doors-${doorAnimationKey}`}
            className="pointer-events-none fixed inset-0 z-[95] flex items-center justify-center overflow-hidden"
            aria-hidden="true"
          >
            {/* Left Ornate Palace Door */}
            <div className="w-1/2 h-full bg-gradient-to-r from-burgundy-deep via-burgundy to-burgundy-deep border-r-2 border-gold flex items-center justify-end pr-6 animate-royal-door-left bg-islamic-pattern-gold">
              <div className="w-24 h-48 rounded-l-full border border-gold/50 opacity-50" />
            </div>

            {/* Right Ornate Palace Door */}
            <div className="w-1/2 h-full bg-gradient-to-l from-burgundy-deep via-burgundy to-burgundy-deep border-l-2 border-gold flex items-center justify-start pl-6 animate-royal-door-right bg-islamic-pattern-gold">
              <div className="w-24 h-48 rounded-r-full border border-gold/50 opacity-50" />
            </div>

            {/* Central Golden Wax Seal Unlocking */}
            <div className="absolute w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-gold-light via-gold to-gold-dark border-4 border-ivory shadow-2xl flex flex-col items-center justify-center animate-wax-seal">
              <CrescentStarMotif className="w-10 h-10" color="#4B0918" />
              <span className="font-regal text-xs font-bold text-burgundy-deep tracking-widest">
                {weddingConfig.couple.monogram[language]}
              </span>
            </div>
          </div>

          {/* Unfolded Royal Ceremony Scroll Container */}
          <div
            key={`scroll-${doorAnimationKey}`}
            onClick={(e) => e.stopPropagation()}
            className="relative z-[92] max-w-4xl w-full my-auto rounded-3xl bg-ivory text-ink border-2 border-gold shadow-2xl overflow-hidden animate-royal-scroll max-h-[92vh] flex flex-col"
          >
            {/* Top Royal Burgundy Header Bar with Event Switcher Tabs */}
            <div className="relative bg-burgundy-deep bg-islamic-pattern-gold text-ivory px-4 sm:px-8 pt-5 pb-5 border-b-2 border-gold shrink-0">
              <div className="flex items-center justify-between gap-2 mb-4">
                {/* Event Switcher Pills */}
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                  {weddingConfig.events.map((ev, idx) => {
                    const isCurrent = idx === selectedEventIndex;
                    return (
                      <button
                        key={ev.id}
                        type="button"
                        onClick={() => openEventModal(idx)}
                        className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold border transition-all ${
                          isCurrent
                            ? 'bg-gold text-burgundy-deep border-ivory shadow-md'
                            : 'bg-burgundy text-ivory border-gold/70 hover:bg-gold/25'
                        }`}
                      >
                        {t.events.items[ev.id].name}
                      </button>
                    );
                  })}
                </div>

                {/* Prev / Next / Close Controls */}
                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    type="button"
                    onClick={showPrevEvent}
                    aria-label="Previous ceremony"
                    className="p-2 rounded-full bg-burgundy hover:bg-gold text-ivory hover:text-burgundy-deep border border-gold/80 transition-colors shadow-sm"
                  >
                    <ChevronLeft className="w-4 h-4" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={showNextEvent}
                    aria-label="Next ceremony"
                    className="p-2 rounded-full bg-burgundy hover:bg-gold text-ivory hover:text-burgundy-deep border border-gold/80 transition-colors shadow-sm"
                  >
                    <ChevronRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={closeEventModal}
                    aria-label={t.events.modal.closeLabel}
                    className="p-2 rounded-full bg-gold hover:bg-gold-light text-burgundy-deep border border-ivory/70 transition-colors ml-1 shadow-sm"
                  >
                    <X className="w-5 h-5" aria-hidden="true" />
                  </button>
                </div>
              </div>

              {/* Ceremony Hero Summary inside Modal Header */}
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-ivory border-2 border-gold flex items-center justify-center shrink-0 shadow-lg">
                  <EventIllustration
                    type={activeEventConfig.iconType}
                    className="w-14 h-14 sm:w-16 sm:h-16"
                  />
                </div>

                <div className="flex-1">
                  <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-burgundy border border-gold/80 text-gold-light text-xs font-semibold uppercase tracking-wider">
                    <Sparkles className="w-3 h-3" aria-hidden="true" />
                    <span>{activeEventCopy.badge}</span>
                  </span>

                  <h3 className="mt-1.5 font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-ivory">
                    {activeEventCopy.name}
                  </h3>

                  <div className="mt-2 flex flex-wrap items-center justify-center sm:justify-start gap-2.5 text-xs sm:text-sm">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-burgundy border border-gold/70 text-ivory font-semibold">
                      <Calendar className="w-3.5 h-3.5 text-gold-light" aria-hidden="true" />
                      {activeEventCopy.date} ({activeEventCopy.day})
                    </span>

                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-gold text-burgundy-deep font-bold shadow-sm">
                      <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                      {activeEventConfig.confirmedTime[language]}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Scrollable Body of the Ceremony Scroll */}
            <div className="p-5 sm:p-8 overflow-y-auto space-y-7 bg-ivory">
              {/* Long Poetic Description */}
              <div className="relative rounded-2xl bg-champagne/30 border border-gold/55 p-5 sm:p-6">
                <ArabesqueCorner
                  position="top-left"
                  className="pointer-events-none absolute top-2 left-2 w-8 h-8 opacity-70"
                />
                <ArabesqueCorner
                  position="bottom-right"
                  className="pointer-events-none absolute bottom-2 right-2 w-8 h-8 opacity-70"
                />
                <p className="font-heading text-lg sm:text-xl md:text-2xl text-burgundy leading-relaxed font-medium">
                  {activeEventCopy.longDescription}
                </p>
              </div>

              {/* Two-Column Grid: Step-by-Step Timeline + Highlights & Palette */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
                {/* Left 7 Cols: Step-by-Step Program Timeline */}
                <div className="lg:col-span-7">
                  <h4 className="font-heading text-xl sm:text-2xl font-bold text-burgundy flex items-center gap-2 mb-4">
                    <Clock className="w-5 h-5 text-gold-dark" aria-hidden="true" />
                    <span>{t.events.modal.scheduleTitle}</span>
                  </h4>

                  <div className="relative pl-6 border-l-2 border-gold/60 space-y-5">
                    {activeEventCopy.timeline.map((step, sIdx) => (
                      <div key={sIdx} className="relative group">
                        {/* Glowing Gold Timeline Node */}
                        <span
                          className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-burgundy border-2 border-gold shadow-sm"
                          aria-hidden="true"
                        />

                        <div className="rounded-2xl bg-ivory-soft border border-gold/45 p-4 shadow-sm hover:border-burgundy/50 transition-colors">
                          <span className="inline-block px-2.5 py-0.5 rounded-md bg-burgundy text-gold-light text-xs font-semibold tracking-wide">
                            {step.time}
                          </span>
                          <h5 className="mt-1.5 font-heading text-lg sm:text-xl font-bold text-burgundy">
                            {step.title}
                          </h5>
                          <p className="mt-1 text-xs sm:text-sm text-ink/80 leading-relaxed">
                            {step.detail}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right 5 Cols: Special Highlights, Dress Palette & Hosts Note */}
                <div className="lg:col-span-5 space-y-5">
                  {/* Special Highlights */}
                  <div className="rounded-2xl bg-ivory-soft border border-gold/50 p-5">
                    <h4 className="font-heading text-lg sm:text-xl font-bold text-burgundy flex items-center gap-2 mb-3">
                      <Sparkles className="w-4 h-4 text-gold-dark" aria-hidden="true" />
                      <span>{t.events.modal.highlightsTitle}</span>
                    </h4>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-ink/90">
                      {activeEventCopy.highlights.map((hl, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <CheckCircle2
                            className="w-4 h-4 text-emerald-accent shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Color Palette & Attire Guide */}
                  <div className="rounded-2xl bg-ivory-soft border border-gold/50 p-5">
                    <h4 className="font-heading text-lg sm:text-xl font-bold text-burgundy flex items-center gap-2 mb-2.5">
                      <Palette className="w-4 h-4 text-gold-dark" aria-hidden="true" />
                      <span>{t.events.modal.attireTitle}</span>
                    </h4>

                    {/* Color Swatches */}
                    <div className="flex items-center gap-2.5 my-3">
                      {activeEventConfig.swatches.map((hex, cIdx) => (
                        <span
                          key={cIdx}
                          className="w-8 h-8 rounded-full border-2 border-gold shadow-sm"
                          style={{ backgroundColor: hex }}
                          title={hex}
                        />
                      ))}
                      <span className="text-xs font-medium text-ink/75 ml-1">
                        {activeEventCopy.paletteNote}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-ink/85 leading-relaxed">
                      {activeEventCopy.attireSuggestion}
                    </p>
                  </div>

                  {/* Warm Note from Hosts Nurjjaman Mondal & Sujata Bibi */}
                  <div className="rounded-2xl bg-gradient-to-br from-burgundy-deep to-burgundy text-ivory p-5 border border-gold">
                    <p className="text-xs uppercase tracking-wider text-gold-light font-semibold">
                      {t.events.modal.hostsNoteTitle}
                    </p>
                    <p className="mt-1.5 text-xs sm:text-sm text-champagne leading-relaxed">
                      {t.events.modal.hostsNoteBody}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer: Venue Address + Directions & Add to Calendar Buttons */}
            <div className="px-5 sm:px-8 py-4 bg-champagne/40 border-t border-gold/55 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-ink font-medium">
                <MapPin className="w-4 h-4 text-burgundy shrink-0" aria-hidden="true" />
                <span>{t.events.venueValue}</span>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2.5 w-full sm:w-auto">
                {weddingConfig.venue.directionsUrl && (
                  <a
                    href={weddingConfig.venue.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-burgundy hover:bg-burgundy-deep text-ivory text-xs sm:text-sm font-medium border border-gold/60 shadow-sm transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5 text-gold-light" aria-hidden="true" />
                    <span>{t.events.modal.directionsBtn}</span>
                  </a>
                )}

                <a
                  href={buildEventCalendarUrl(activeEventConfig, activeEventCopy)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-ivory hover:bg-champagne/60 text-burgundy text-xs sm:text-sm font-medium border border-gold/70 shadow-sm transition-colors"
                >
                  <CalendarPlus className="w-3.5 h-3.5 text-gold-dark" aria-hidden="true" />
                  <span>{t.events.modal.calendarBtn}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default WeddingEvents;
