import React, { useState } from 'react';
import {
  Calendar,
  CalendarPlus,
  Clock,
  MapPin,
  Check,
  Sparkles,
  Download,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import { weddingConfig } from '../data/weddingConfig';
import { OrnamentalDivider, ArabesqueCorner } from './OrnamentalMotifs';

/**
 * Apple Logo SVG for clear visual recognition on iPhone / iPad / Mac
 */
function AppleIcon({ className = 'w-4 h-4' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.96 6.33c.67-.81 1.12-1.94 1-3.08-.96.04-2.13.64-2.82 1.45-.61.7-.15 1.86-1.03 2.98 1.08.08 2.18-.54 2.85-1.35z" />
    </svg>
  );
}

/**
 * Google Calendar Style Emblem SVG
 */
function GoogleCalendarIcon({ className = 'w-4 h-4' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="18" rx="3" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" />
    </svg>
  );
}

export function SaveTheDateSection() {
  const { language, t } = useLanguage();
  const [revealRef, isVisible] = useRevealOnScroll();
  const [selectedKey, setSelectedKey] = useState('wedding');
  const [icsDownloaded, setIcsDownloaded] = useState(false);

  // Ceremony presets in IST (UTC+05:30) and UTC (for universal .ics compatibility)
  const ceremonyPresets = {
    wedding: {
      id: 'wedding',
      tabLabel: t.saveTheDate.weddingTab,
      title: `${t.events.items.nikah.name} — ${weddingConfig.couple.displayName[language]}`,
      dateDisplay: t.events.items.nikah.fullDateLine,
      timeDisplay: t.events.items.nikah.time,
      description: `${t.events.items.nikah.longDescription}\n\nHosted by: Nurjjaman Mondal & Sujata Bibi (Parents of Shahanaj)\nVenue: ${t.venue.addressFull}\nGoogle Maps: ${weddingConfig.venue.directionsUrl}`,
      // 30 Nov 2026, 2:00 PM IST -> 8:00 PM IST
      googleDates: '20261130T140000/20261130T200000',
      icsEvents: [
        {
          uid: 'shahanaj-souvik-wedding-2026@mondalfamily',
          dtStartUtc: '20261130T083000Z',
          dtEndUtc: '20261130T143000Z',
          summary: `${t.events.items.nikah.name} — ${weddingConfig.couple.displayName[language]}`,
          description: `${t.events.items.nikah.longDescription} | Hosted by Nurjjaman Mondal & Sujata Bibi | Google Maps: ${weddingConfig.venue.directionsUrl}`,
        },
      ],
    },
    all: {
      id: 'all',
      tabLabel: t.saveTheDate.allCeremoniesTab,
      title: `${weddingConfig.couple.displayName[language]} — Wedding Celebrations (Mehendi, Haldi & Wedding)`,
      dateDisplay: `${t.invitation.dateHighlight}`,
      timeDisplay: `${t.events.items.mehendi.name} (4 PM) • ${t.events.items.haldi.name} (12 PM) • ${t.events.items.nikah.name} (2 PM)`,
      description: `Three-Day Wedding Celebrations of Shahanaj & Souvik:\n• 28 Nov 2026 (4:00 PM): Mehendi\n• 29 Nov 2026 (12:00 Noon): Haldi\n• 30 Nov 2026 (2:00 PM): Wedding / Nikah & Biday\n\nHosted by: Nurjjaman Mondal & Sujata Bibi\nVenue: ${t.venue.addressFull}\nGoogle Maps: ${weddingConfig.venue.directionsUrl}`,
      googleDates: '20261128T160000/20261130T200000',
      icsEvents: [
        {
          uid: 'shahanaj-souvik-mehendi-2026@mondalfamily',
          dtStartUtc: '20261128T103000Z',
          dtEndUtc: '20261128T143000Z',
          summary: `${t.events.items.mehendi.name} — ${weddingConfig.couple.displayName[language]}`,
          description: `${t.events.items.mehendi.longDescription} | Google Maps: ${weddingConfig.venue.directionsUrl}`,
        },
        {
          uid: 'shahanaj-souvik-haldi-2026@mondalfamily',
          dtStartUtc: '20261129T063000Z',
          dtEndUtc: '20261129T103000Z',
          summary: `${t.events.items.haldi.name} — ${weddingConfig.couple.displayName[language]}`,
          description: `${t.events.items.haldi.longDescription} | Google Maps: ${weddingConfig.venue.directionsUrl}`,
        },
        {
          uid: 'shahanaj-souvik-wedding-2026@mondalfamily',
          dtStartUtc: '20261130T083000Z',
          dtEndUtc: '20261130T143000Z',
          summary: `${t.events.items.nikah.name} — ${weddingConfig.couple.displayName[language]}`,
          description: `${t.events.items.nikah.longDescription} | Google Maps: ${weddingConfig.venue.directionsUrl}`,
        },
      ],
    },
    mehendi: {
      id: 'mehendi',
      tabLabel: t.saveTheDate.mehendiTab,
      title: `${t.events.items.mehendi.name} — ${weddingConfig.couple.displayName[language]}`,
      dateDisplay: t.events.items.mehendi.fullDateLine,
      timeDisplay: t.events.items.mehendi.time,
      description: `${t.events.items.mehendi.longDescription}\n\nHosted by: Nurjjaman Mondal & Sujata Bibi\nVenue: ${t.venue.addressFull}\nGoogle Maps: ${weddingConfig.venue.directionsUrl}`,
      googleDates: '20261128T160000/20261128T200000',
      icsEvents: [
        {
          uid: 'shahanaj-souvik-mehendi-2026@mondalfamily',
          dtStartUtc: '20261128T103000Z',
          dtEndUtc: '20261128T143000Z',
          summary: `${t.events.items.mehendi.name} — ${weddingConfig.couple.displayName[language]}`,
          description: `${t.events.items.mehendi.longDescription} | Google Maps: ${weddingConfig.venue.directionsUrl}`,
        },
      ],
    },
    haldi: {
      id: 'haldi',
      tabLabel: t.saveTheDate.haldiTab,
      title: `${t.events.items.haldi.name} — ${weddingConfig.couple.displayName[language]}`,
      dateDisplay: t.events.items.haldi.fullDateLine,
      timeDisplay: t.events.items.haldi.time,
      description: `${t.events.items.haldi.longDescription}\n\nHosted by: Nurjjaman Mondal & Sujata Bibi\nVenue: ${t.venue.addressFull}\nGoogle Maps: ${weddingConfig.venue.directionsUrl}`,
      googleDates: '20261129T120000/20261129T160000',
      icsEvents: [
        {
          uid: 'shahanaj-souvik-haldi-2026@mondalfamily',
          dtStartUtc: '20261129T063000Z',
          dtEndUtc: '20261129T103000Z',
          summary: `${t.events.items.haldi.name} — ${weddingConfig.couple.displayName[language]}`,
          description: `${t.events.items.haldi.longDescription} | Google Maps: ${weddingConfig.venue.directionsUrl}`,
        },
      ],
    },
  };

  const currentPreset = ceremonyPresets[selectedKey] || ceremonyPresets.wedding;

  const getGoogleCalendarUrl = () => {
    const location = `${t.venue.venueName}, ${t.venue.addressFull}`;
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      currentPreset.title
    )}&dates=${currentPreset.googleDates}&details=${encodeURIComponent(
      currentPreset.description
    )}&location=${encodeURIComponent(location)}&ctz=Asia/Kolkata`;
  };

  const handleAppleCalendarDownload = () => {
    const location = `${t.venue.venueName}, ${t.venue.addressFull}`;
    const dtStamp = '20260101T000000Z';

    const vevents = currentPreset.icsEvents
      .map((ev) =>
        [
          'BEGIN:VEVENT',
          `UID:${ev.uid}`,
          `DTSTAMP:${dtStamp}`,
          `DTSTART:${ev.dtStartUtc}`,
          `DTEND:${ev.dtEndUtc}`,
          `SUMMARY:${ev.summary}`,
          `DESCRIPTION:${ev.description.replace(/\n/g, '\\n')}`,
          `LOCATION:${location}`,
          `URL:${weddingConfig.venue.directionsUrl || ''}`,
          'STATUS:CONFIRMED',
          'BEGIN:VALARM',
          'TRIGGER:-P1D',
          'ACTION:DISPLAY',
          `DESCRIPTION:Reminder: ${ev.summary} tomorrow`,
          'END:VALARM',
          'BEGIN:VALARM',
          'TRIGGER:-PT2H',
          'ACTION:DISPLAY',
          `DESCRIPTION:Reminder: ${ev.summary} in 2 hours`,
          'END:VALARM',
          'END:VEVENT',
        ].join('\r\n')
      )
      .join('\r\n');

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Shahanaj & Souvik Wedding//Save The Date//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      vevents,
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], {
      type: 'text/calendar;charset=utf-8',
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute(
      'download',
      `shahanaj-souvik-${currentPreset.id}-2026.ics`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.setTimeout(() => URL.revokeObjectURL(url), 2000);

    setIcsDownloaded(true);
    window.setTimeout(() => setIcsDownloaded(false), 3800);
  };

  const tabOrder = ['wedding', 'all', 'mehendi', 'haldi'];

  return (
    <section
      id="save-the-date"
      aria-label={t.saveTheDate.title}
      className="relative py-10 sm:py-16 bg-gradient-to-b from-ivory via-champagne/30 to-ivory bg-islamic-pattern overflow-hidden"
    >
      <div
        ref={revealRef}
        className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 reveal-up ${
          isVisible ? 'is-visible' : ''
        }`}
      >
        <div className="relative rounded-3xl bg-ivory border-2 border-gold/80 shadow-royal-lg p-5 sm:p-8 md:p-10 overflow-hidden">
          <ArabesqueCorner
            position="top-left"
            className="pointer-events-none absolute top-3 left-3 w-8 h-8 sm:w-10 sm:h-10 opacity-75"
          />
          <ArabesqueCorner
            position="top-right"
            className="pointer-events-none absolute top-3 right-3 w-8 h-8 sm:w-10 sm:h-10 opacity-75"
          />
          <ArabesqueCorner
            position="bottom-left"
            className="pointer-events-none absolute bottom-3 left-3 w-8 h-8 sm:w-10 sm:h-10 opacity-75"
          />
          <ArabesqueCorner
            position="bottom-right"
            className="pointer-events-none absolute bottom-3 right-3 w-8 h-8 sm:w-10 sm:h-10 opacity-75"
          />

          {/* Header */}
          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <div className="flex justify-center mb-2">
              <OrnamentalDivider
                variant="crescent"
                className="w-40 sm:w-56 h-5 sm:h-6"
              />
            </div>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-champagne/55 border border-gold/60 text-burgundy text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em]">
              <CalendarPlus className="w-3.5 h-3.5 text-gold-dark" aria-hidden="true" />
              <span>{t.saveTheDate.eyebrow}</span>
            </span>

            <h2 className="mt-2 font-heading text-[clamp(1.65rem,4.5vw,2.6rem)] font-bold text-burgundy leading-tight">
              {t.saveTheDate.title}
            </h2>

            <p className="mt-1.5 text-xs sm:text-sm text-ink/80 leading-relaxed">
              {t.saveTheDate.subtitle}
            </p>
          </div>

          {/* Ceremony Selector Pills */}
          <div className="relative z-10 mt-5 sm:mt-6">
            <p className="text-center text-[10px] sm:text-xs uppercase tracking-[0.16em] text-gold-dark font-bold mb-2.5">
              {t.saveTheDate.selectCeremonyLabel}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
              {tabOrder.map((key) => {
                const preset = ceremonyPresets[key];
                const isActive = selectedKey === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setSelectedKey(key)}
                    aria-pressed={isActive}
                    className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy ${
                      isActive
                        ? 'bg-burgundy text-ivory border-gold shadow-sm'
                        : 'bg-ivory-soft text-ink/85 border-gold/55 hover:border-burgundy/60 hover:text-burgundy'
                    }`}
                  >
                    {preset.tabLabel}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selected Ceremony Preview Card */}
          <div className="relative z-10 mt-5 rounded-2xl bg-gradient-to-r from-burgundy-deep via-burgundy to-burgundy-deep text-ivory p-4 sm:p-5 border border-gold shadow-md">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
              <div>
                <div className="inline-flex items-center gap-1.5 text-gold-light text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  <span>{currentPreset.title}</span>
                </div>
                <p className="mt-1 font-heading text-lg sm:text-2xl font-bold text-ivory">
                  {currentPreset.dateDisplay}
                </p>
                <div className="mt-1.5 flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1 text-xs text-champagne/95">
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-gold-light shrink-0" aria-hidden="true" />
                    {currentPreset.timeDisplay}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-gold-light shrink-0" aria-hidden="true" />
                    {t.saveTheDate.venueNote}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Dual Calendar Buttons: Google Calendar & Apple Calendar */}
          <div className="relative z-10 mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {/* Button 1: Google Calendar */}
            <a
              href={getGoogleCalendarUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-3 rounded-2xl bg-burgundy hover:bg-burgundy-deep text-ivory p-4 border-2 border-gold shadow-royal transition-all hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-11 h-11 rounded-xl bg-gold/20 border border-gold text-gold-light flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <GoogleCalendarIcon className="w-5 h-5" />
                </div>
                <div className="text-left min-w-0">
                  <span className="block font-heading text-lg sm:text-xl font-bold text-ivory leading-tight">
                    {t.saveTheDate.googleCalendarBtn}
                  </span>
                  <span className="block text-[11px] sm:text-xs text-champagne/90 mt-0.5 truncate">
                    {t.saveTheDate.googleCalendarSub}
                  </span>
                </div>
              </div>
              <Calendar className="w-4 h-4 text-gold-light shrink-0" aria-hidden="true" />
            </a>

            {/* Button 2: Apple Calendar (.ics) */}
            <button
              type="button"
              onClick={handleAppleCalendarDownload}
              className="group flex items-center justify-between gap-3 rounded-2xl bg-ivory hover:bg-champagne/40 text-burgundy p-4 border-2 border-gold/85 shadow-royal transition-all hover:-translate-y-0.5 text-left"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-11 h-11 rounded-xl bg-burgundy text-gold-light border border-gold flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <AppleIcon className="w-5 h-5" />
                </div>
                <div className="text-left min-w-0">
                  <span className="block font-heading text-lg sm:text-xl font-bold text-burgundy leading-tight">
                    {t.saveTheDate.appleCalendarBtn}
                  </span>
                  <span className="block text-[11px] sm:text-xs text-ink/75 mt-0.5 truncate">
                    {t.saveTheDate.appleCalendarSub}
                  </span>
                </div>
              </div>
              <Download className="w-4 h-4 text-gold-dark shrink-0" aria-hidden="true" />
            </button>
          </div>

          {/* Apple Calendar (.ics) Download Confirmation Notice */}
          {icsDownloaded && (
            <div
              role="status"
              aria-live="polite"
              className="relative z-10 mt-4 rounded-xl bg-emerald-accent/10 border border-emerald-accent/40 px-4 py-2.5 flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-emerald-accent text-center"
            >
              <Check className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>{t.saveTheDate.downloadedToast}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default SaveTheDateSection;

