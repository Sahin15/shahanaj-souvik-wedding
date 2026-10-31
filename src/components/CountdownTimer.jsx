import React from 'react';
import { Clock, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useCountdown } from '../hooks/useCountdown';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import { weddingConfig } from '../data/weddingConfig';
import { OrnamentalDivider, ArabesqueCorner } from './OrnamentalMotifs';

export function CountdownTimer() {
  const { t, formatNum } = useLanguage();
  const { days, hours, minutes, seconds, status } = useCountdown(
    weddingConfig.weddingDate.isoTarget
  );
  const [revealRef, isVisible] = useRevealOnScroll();

  const effectiveStatus = weddingConfig.postWeddingMode?.enabled
    ? 'past'
    : status;

  const units = [
    { key: 'days', value: formatNum(days, 2), label: t.countdown.days },
    { key: 'hours', value: formatNum(hours, 2), label: t.countdown.hours },
    { key: 'minutes', value: formatNum(minutes, 2), label: t.countdown.minutes },
    { key: 'seconds', value: formatNum(seconds, 2), label: t.countdown.seconds },
  ];

  return (
    <section
      aria-label={t.countdown.title}
      className="relative py-10 sm:py-14 bg-gradient-to-b from-champagne/45 via-ivory to-ivory border-y border-gold/35 overflow-hidden"
    >
      <div
        ref={revealRef}
        className={`max-w-5xl mx-auto px-3 sm:px-6 lg:px-8 text-center reveal-up ${
          isVisible ? 'is-visible' : ''
        }`}
      >
        {/* Ornamental Crescent Divider Above Timer */}
        <div className="flex justify-center mb-2">
          <OrnamentalDivider variant="crescent" className="w-48 sm:w-64 h-6 sm:h-7" />
        </div>

        <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-gold-dark font-semibold">
          {t.countdown.eyebrow}
        </p>

        <h2 className="mt-1 font-heading text-[clamp(1.6rem,4.5vw,2.5rem)] font-bold text-burgundy">
          {t.countdown.title}
        </h2>

        <p className="mt-1.5 max-w-2xl mx-auto text-xs sm:text-sm text-ink/80">
          {t.countdown.subtitle}
        </p>

        {effectiveStatus === 'counting' ? (
          <div className="mt-6 sm:mt-8">
            {/* 4 Responsive Countdown Cards in a Single Row on Mobile & Desktop */}
            <div
              className="grid grid-cols-4 gap-2 sm:gap-4 max-w-3xl mx-auto"
              role="timer"
              aria-live="polite"
            >
              {units.map((unit, index) => (
                <div
                  key={unit.key}
                  className="relative group rounded-xl sm:rounded-2xl bg-ivory border border-gold/65 shadow-royal px-1.5 py-3.5 sm:px-5 sm:py-6 flex flex-col items-center justify-center overflow-hidden transition-transform duration-300 hover:-translate-y-1"
                >
                  {/* Subtle inner frame */}
                  <div
                    className="pointer-events-none absolute inset-1 sm:inset-1.5 rounded-lg sm:rounded-xl border border-gold/25"
                    aria-hidden="true"
                  />
                  <ArabesqueCorner
                    position="top-left"
                    className="hidden sm:block pointer-events-none absolute top-1.5 left-1.5 w-5 h-5 opacity-60"
                  />
                  <ArabesqueCorner
                    position="bottom-right"
                    className="hidden sm:block pointer-events-none absolute bottom-1.5 right-1.5 w-5 h-5 opacity-60"
                  />

                  {/* Burgundy Number */}
                  <span className="font-heading text-2xl xs:text-3xl sm:text-5xl font-bold text-burgundy tabular-nums leading-none tracking-tight">
                    {unit.value}
                  </span>

                  {/* Gold Separator Line */}
                  <span
                    className="my-1.5 sm:my-2 w-6 sm:w-10 h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent"
                    aria-hidden="true"
                  />

                  {/* Unit Label */}
                  <span className="text-[9px] xs:text-[10px] sm:text-xs uppercase tracking-[0.1em] sm:tracking-[0.16em] font-semibold text-ink/85 truncate max-w-full">
                    {unit.label}
                  </span>

                  {/* Gold Colon Separator on Desktop */}
                  {index < units.length - 1 && (
                    <span
                      className="hidden sm:block pointer-events-none absolute -right-3 top-1/2 -translate-y-1/2 text-gold font-heading text-xl font-bold"
                      aria-hidden="true"
                    >
                      :
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Target Date & Provisional Time Footnote */}
            <div className="mt-4 sm:mt-5 inline-flex flex-col items-center gap-1 px-3.5 py-1.5 rounded-xl bg-champagne/35 border border-gold/40">
              <div className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-medium text-burgundy">
                <Clock className="w-3.5 h-3.5 text-gold-dark shrink-0" aria-hidden="true" />
                <span>{t.countdown.targetLabel}</span>
              </div>
              {weddingConfig.weddingDate.provisionalTimeNote && (
                <p className="text-[10px] sm:text-xs text-ink/70 max-w-xl">
                  {t.countdown.provisionalNote}
                </p>
              )}
            </div>
          </div>
        ) : (
          /* Celebratory Message on or after 30 November 2026 */
          <div className="mt-8 max-w-2xl mx-auto rounded-2xl bg-burgundy text-ivory p-8 sm:p-10 border-2 border-gold shadow-royal-lg">
            <Sparkles className="w-8 h-8 text-gold-light mx-auto mb-3" aria-hidden="true" />
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-ivory">
              {effectiveStatus === 'wedding-day'
                ? t.countdown.weddingDayTitle
                : t.countdown.pastWeddingTitle}
            </h3>
            <p className="mt-3 text-sm sm:text-base text-champagne leading-relaxed">
              {effectiveStatus === 'wedding-day'
                ? t.countdown.weddingDayMessage
                : t.countdown.pastWeddingMessage}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default CountdownTimer;

