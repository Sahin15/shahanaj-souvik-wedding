import React, { useState } from 'react';
import { Share2, Check, MessageCircle, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import { weddingConfig } from '../data/weddingConfig';
import {
  CrescentStarMotif,
  ArabesqueCorner,
  OrnamentalDivider,
} from './OrnamentalMotifs';

export function ClosingBlessingSection() {
  const { language, t } = useLanguage();
  const [revealRef, isVisible] = useRevealOnScroll();
  const [copied, setCopied] = useState(false);

  const handleShareInvitation = async () => {
    const shareTitle = t.meta.title;
    const shareText = `${t.personalMessage.body} — ${weddingConfig.couple.displayName[language]} (${weddingConfig.weddingDate.displayDate[language]} • ${weddingConfig.venue.shortAddress[language]})`;
    const shareUrl = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: shareUrl,
        });
        return;
      } catch {
        // Fallback to clipboard copy if user cancels
      }
    }

    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 3200);
    } catch {
      setCopied(false);
    }
  };

  const whatsappShareUrl = () => {
    const mapLine = weddingConfig.venue.directionsUrl
      ? `\n• *Google Maps:* ${weddingConfig.venue.directionsUrl}`
      : '';
    const text = `*${t.invitation.title}*\n\n${t.personalMessage.body}\n\n• *Date:* ${t.invitation.dateHighlight}\n• *Venue:* ${t.invitation.venueHighlight}${mapLine}\n• *Hosted by:* ${t.invitation.hostsNames}\n\n${window.location.href}`;
    return `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
  };

  return (
    <section
      aria-label={t.closing.eyebrow}
      className="relative py-12 sm:py-16 bg-gradient-to-b from-ivory via-champagne/40 to-ivory bg-islamic-pattern border-t border-gold/35 overflow-hidden"
    >
      <div
        ref={revealRef}
        className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 reveal-up ${
          isVisible ? 'is-visible' : ''
        }`}
      >
        <div className="relative rounded-3xl bg-gradient-to-b from-[#5A0B1C] via-burgundy-deep to-[#2B040C] text-ivory border-2 border-gold shadow-royal-lg px-5 py-8 sm:px-10 sm:py-12 text-center overflow-hidden bg-islamic-pattern-gold">
          {/* Subtle Arch Motif in Background */}
          <svg
            viewBox="0 0 600 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="pointer-events-none absolute top-0 inset-x-0 w-full opacity-25"
            aria-hidden="true"
          >
            <path
              d="M40 220V110C40 48 165 18 300 6C435 18 560 48 560 110V220"
              stroke="#C6A15B"
              strokeWidth="1.5"
            />
          </svg>

          {/* Inner Double Gold Border */}
          <div
            className="pointer-events-none absolute inset-2.5 sm:inset-3.5 rounded-2xl border border-gold/40"
            aria-hidden="true"
          />

          {/* Four Arabesque Corners */}
          <ArabesqueCorner
            position="top-left"
            className="pointer-events-none absolute top-3 left-3 sm:top-4 sm:left-4 w-8 h-8 sm:w-10 sm:h-10 opacity-85"
          />
          <ArabesqueCorner
            position="top-right"
            className="pointer-events-none absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 opacity-85"
          />
          <ArabesqueCorner
            position="bottom-left"
            className="pointer-events-none absolute bottom-3 left-3 sm:top-auto sm:bottom-4 sm:left-4 w-8 h-8 sm:w-10 sm:h-10 opacity-85"
          />
          <ArabesqueCorner
            position="bottom-right"
            className="pointer-events-none absolute bottom-3 right-3 sm:top-auto sm:bottom-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 opacity-85"
          />

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-burgundy border-2 border-gold flex items-center justify-center shadow-gold-glow mb-3">
              <CrescentStarMotif className="w-7 h-7 sm:w-8 sm:h-8" color="#C6A15B" />
            </div>

            <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-gold-light font-semibold">
              {t.closing.eyebrow}
            </p>

            {/* Memorable Closing Quote */}
            <blockquote className="mt-2.5 max-w-2xl mx-auto font-heading italic text-[clamp(1.35rem,4.5vw,2.25rem)] text-ivory font-medium leading-snug">
              “{t.closing.quote}”
            </blockquote>

            <div className="my-4">
              <OrnamentalDivider
                variant="crescent"
                color="#C6A15B"
                secondaryColor="#C6A15B"
                className="w-48 sm:w-64 h-6"
              />
            </div>

            {/* Couple Signature */}
            <h2 className="font-heading text-[clamp(1.85rem,5.5vw,3rem)] font-bold text-transparent bg-clip-text bg-gradient-to-r from-ivory via-[#F5E3C3] to-gold-light leading-tight">
              {t.closing.coupleNames}
            </h2>

            <p className="mt-1.5 text-xs sm:text-sm text-champagne/90 font-medium flex items-center justify-center gap-1.5">
              <Heart className="w-3.5 h-3.5 text-gold-light shrink-0" aria-hidden="true" />
              <span>{t.closing.hostsLine}</span>
            </p>

            {/* Prominent Thumb-Friendly Share Invitation Buttons */}
            <div className="mt-6 pt-5 border-t border-gold/30 w-full max-w-md mx-auto flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3">
              <button
                type="button"
                onClick={handleShareInvitation}
                className="w-full sm:w-auto min-h-[46px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-gold via-gold-light to-gold hover:brightness-105 text-burgundy-deep font-bold text-xs sm:text-sm border border-ivory/70 shadow-md transition-all active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-ivory"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-burgundy-deep shrink-0" aria-hidden="true" />
                    <span>{t.closing.copiedToast}</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-4 h-4 text-burgundy-deep shrink-0" aria-hidden="true" />
                    <span>{t.closing.shareBtn}</span>
                  </>
                )}
              </button>

              <a
                href={whatsappShareUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[46px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-emerald-accent hover:bg-emerald-deep text-ivory font-semibold text-xs sm:text-sm border border-gold/70 shadow-md transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4 text-gold-light shrink-0" aria-hidden="true" />
                <span>{t.closing.whatsappShareBtn}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClosingBlessingSection;

