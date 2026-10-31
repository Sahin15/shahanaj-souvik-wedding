import React, { useState, useEffect, useCallback } from 'react';
import {
  Share2,
  Check,
  CalendarPlus,
  MessageCircle,
  MailOpen,
  Sparkles,
  X,
  RotateCcw,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import { weddingConfig } from '../data/weddingConfig';
import {
  CrescentStarMotif,
  ArabesqueCorner,
  OrnamentalDivider,
} from './OrnamentalMotifs';

/**
 * Helper to trigger the animated Invitation Letter from anywhere (Header, Hero, etc.)
 */
export function triggerInvitationLetterModal() {
  window.dispatchEvent(new CustomEvent('open-royal-invitation-letter'));
}

export function InvitationSection() {
  const { language, t } = useLanguage();
  const [revealRef, isVisible] = useRevealOnScroll();
  const [copied, setCopied] = useState(false);

  // Inline section state: 'sealed' | 'opening' | 'opened'
  const [sectionState, setSectionState] = useState('sealed');

  // Global modal state triggered by Header "Invitation" or Hero "Open Invitation" buttons
  const [modalState, setModalState] = useState('closed'); // 'closed' | 'opening' | 'opened'

  const handleOpenInlineEnvelope = () => {
    if (sectionState !== 'sealed') return;
    setSectionState('opening');
    window.setTimeout(() => {
      setSectionState('opened');
    }, 750);
  };

  const handleResetInlineEnvelope = () => {
    setSectionState('sealed');
  };

  const closeModal = useCallback(() => {
    setModalState('closed');
  }, []);

  useEffect(() => {
    let timerId;
    const handleGlobalTrigger = () => {
      setModalState('opening');
      timerId = window.setTimeout(() => {
        setModalState('opened');
      }, 750);
    };

    window.addEventListener('open-royal-invitation-letter', handleGlobalTrigger);
    return () => {
      window.removeEventListener(
        'open-royal-invitation-letter',
        handleGlobalTrigger
      );
      if (timerId) window.clearTimeout(timerId);
    };
  }, []);

  useEffect(() => {
    if (modalState === 'closed') return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [modalState, closeModal]);

  const handleShareOrCopy = async () => {
    const shareTitle = t.meta.title;
    const shareText = `${t.invitation.paragraph1} (${weddingConfig.weddingDate.displayDate[language]} • ${weddingConfig.venue.shortAddress[language]})`;
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
      window.setTimeout(() => setCopied(false), 2800);
    } catch {
      setCopied(false);
    }
  };

  const whatsappShareUrl = () => {
    const mapLine = weddingConfig.venue.directionsUrl
      ? `\n🗺️ Google Maps: ${weddingConfig.venue.directionsUrl}`
      : '';
    const text = `${t.invitation.paragraph1}\n\n📅 ${t.invitation.dateHighlight}\n📍 ${t.invitation.venueHighlight}${mapLine}\n✨ ${t.invitation.hostsLabel}: ${t.invitation.hostsNames}\n\n${window.location.href}`;
    return `https://wa.me/?text=${encodeURIComponent(text)}`;
  };

  const googleCalendarUrl = () => {
    const title = encodeURIComponent(t.meta.title);
    const details = encodeURIComponent(
      `${t.invitation.paragraph1} Hosted by ${t.invitation.hostsNames}.`
    );
    const location = encodeURIComponent(weddingConfig.venue.fullAddress.en);
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=20261128/20261201&details=${details}&location=${location}`;
  };

  /**
   * Renders the Unfolded Royal Wedding Invitation Letter Content
   * - Stays anchored in its exact final position (no upward overshoot or post-animation shift)
   */
  const renderInvitationLetterCard = ({
    isModal = false,
    showUnsealingOverlay = false,
  } = {}) => (
    <div className="relative rounded-2xl sm:rounded-3xl bg-ivory text-ink p-4 sm:p-7 md:p-9 border-2 border-gold shadow-royal-lg overflow-hidden animate-letter-rise">
      {/* =====================================================================
          OPTIONAL 3D ENVELOPE UNSEALING OVERLAY (Used in Modal so size/position
          is 100% locked from frame 0 with zero jumping or re-adjusting)
         ===================================================================== */}
      {showUnsealingOverlay && (
        <div
          className="pointer-events-none absolute inset-0 z-40 overflow-hidden rounded-2xl sm:rounded-3xl"
          aria-hidden="true"
        >
          {/* Bottom Envelope Pocket Sliding Down */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#5E0B1D] via-burgundy-deep to-[#3A0611] border-2 border-gold animate-envelope-pocket" />

          {/* Top Envelope Flap Unsealing */}
          <svg
            viewBox="0 0 600 210"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="
              absolute top-0 left-0 right-0 w-full z-20 animate-envelope-flap
            "
          >
            <polygon
              points="0,0 600,0 300,195"
              fill="#790F22"
              stroke="#C6A15B"
              strokeWidth="3"
            />
            <polygon
              points="24,6 576,6 300,180"
              fill="none"
              stroke="#C6A15B"
              strokeWidth="1.2"
              strokeDasharray="4 4"
              strokeOpacity="0.65"
            />
          </svg>

          {/* Center Golden Wax Seal Unlocking */}
          <div className="absolute inset-0 z-30 flex items-center justify-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-gold-light via-gold to-gold-dark border-4 border-ivory shadow-2xl flex flex-col items-center justify-center animate-wax-seal">
              <CrescentStarMotif className="w-8 h-8 sm:w-9 sm:h-9" color="#4B0918" />
              <span className="font-regal text-xs font-bold text-burgundy-deep tracking-widest">
                {weddingConfig.couple.monogram[language]}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Inner Double Gold Border */}
      <div
        className="pointer-events-none absolute inset-2 sm:inset-3 rounded-xl sm:rounded-2xl border border-gold/45"
        aria-hidden="true"
      />

      {/* Four Arabesque Corners */}
      <ArabesqueCorner
        position="top-left"
        className="pointer-events-none absolute top-2.5 left-2.5 sm:top-3.5 sm:left-3.5 w-7 h-7 sm:w-10 sm:h-10"
      />
      <ArabesqueCorner
        position="top-right"
        className="pointer-events-none absolute top-2.5 right-2.5 sm:top-3.5 sm:right-3.5 w-7 h-7 sm:w-10 sm:h-10"
      />
      <ArabesqueCorner
        position="bottom-left"
        className="pointer-events-none absolute bottom-2.5 left-2.5 sm:bottom-3.5 sm:left-3.5 w-7 h-7 sm:w-10 sm:h-10"
      />
      <ArabesqueCorner
        position="bottom-right"
        className="pointer-events-none absolute bottom-2.5 right-2.5 sm:bottom-3.5 sm:right-3.5 w-7 h-7 sm:w-10 sm:h-10"
      />

      {/* Top-Right Close or Fold Back Button */}
      <div className="relative z-20 flex justify-end -mb-1 sm:-mb-2">
        {isModal ? (
          <button
            type="button"
            onClick={closeModal}
            aria-label={t.invitation.closeLetterLabel}
            className="inline-flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-burgundy text-ivory hover:bg-gold hover:text-burgundy-deep border border-gold transition-colors shadow-sm"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
        ) : (
          <button
            type="button"
            onClick={handleResetInlineEnvelope}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-champagne/55 hover:bg-champagne text-burgundy text-[11px] sm:text-xs font-medium border border-gold/60 transition-colors"
          >
            <RotateCcw className="w-3 h-3" aria-hidden="true" />
            <span>{t.invitation.foldBackBtn}</span>
          </button>
        )}
      </div>

      <div className="relative z-10 text-center flex flex-col items-center">
        {/* Bismillah & Header */}
        <div className="inline-flex items-center gap-1.5 mb-1">
          <CrescentStarMotif className="w-6 h-6 sm:w-7 sm:h-7" color="#C6A15B" />
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.16em] text-gold-dark font-semibold">
            {t.invitation.bismillah}
          </p>
        </div>

        <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-burgundy">
          {t.invitation.title}
        </h3>

        <div className="my-1.5 sm:my-2">
          <OrnamentalDivider variant="star" className="w-44 sm:w-52 h-4 sm:h-5" />
        </div>

        {/* Invitation Paragraph 1 & 2 */}
        <p className="max-w-3xl font-heading text-base sm:text-xl md:text-2xl text-burgundy font-medium leading-snug">
          {t.invitation.paragraph1}
        </p>

        <p className="mt-2 max-w-2xl text-xs sm:text-sm text-ink/85 leading-relaxed">
          {t.invitation.paragraph2}
        </p>

        {/* Three-Day Event Summary Strip inside Letter */}
        <div className="mt-3.5 sm:mt-4 w-full grid grid-cols-1 sm:grid-cols-3 gap-2 text-center">
          {weddingConfig.events.map((ev) => (
            <div
              key={ev.id}
              className="rounded-xl bg-ivory-soft border border-gold/50 px-3 py-2"
            >
              <span className="block font-heading text-base sm:text-lg font-bold text-burgundy leading-tight">
                {t.events.items[ev.id].name}
              </span>
              <span className="block text-[11px] sm:text-xs font-semibold text-ink/85 mt-0.5">
                {ev.date[language]} ({ev.day[language]})
              </span>
              <span className="block text-[10px] sm:text-[11px] text-gold-dark font-medium">
                {ev.confirmedTime[language]}
              </span>
            </div>
          ))}
        </div>

        {/* Side-by-Side 2-Column Grid for Hosts & Couple Sign-off */}
        <div className="mt-3.5 sm:mt-4 w-full grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3.5 text-left">
          {/* Left Box: Wedding Hosts */}
          <div className="rounded-xl sm:rounded-2xl bg-champagne/40 border border-gold/60 px-3.5 py-2.5 sm:px-4 sm:py-3 flex flex-col justify-center">
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.15em] text-gold-dark font-semibold">
              {t.invitation.hostsLabel}
            </p>
            <p className="mt-0.5 font-heading text-lg sm:text-2xl font-bold text-burgundy leading-tight">
              {t.invitation.hostsNames}
            </p>
            <p className="mt-0.5 text-[11px] sm:text-xs text-ink/85 font-medium leading-snug">
              {t.invitation.hostsRelation}
            </p>
          </div>

          {/* Right Box: Couple Sign-Off & Date/Venue */}
          <div className="rounded-xl sm:rounded-2xl bg-ivory-soft border border-gold/55 px-3.5 py-2.5 sm:px-4 sm:py-3 flex items-center gap-3">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-burgundy border-2 border-gold shadow-sm flex items-center justify-center shrink-0">
              <span className="font-regal text-[11px] sm:text-xs font-bold text-gold-light">
                {weddingConfig.couple.monogram[language]}
              </span>
            </div>
            <div>
              <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.15em] text-gold-dark font-semibold">
                {t.invitation.signoffLabel}
              </p>
              <p className="font-heading text-lg sm:text-2xl font-bold text-burgundy leading-tight">
                {t.invitation.signoffNames}
              </p>
              <p className="mt-0.5 text-[11px] sm:text-xs text-ink/80 font-medium">
                {t.invitation.dateHighlight} • {weddingConfig.venue.shortAddress[language]}
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons Row */}
        <div className="mt-3.5 sm:mt-4 pt-3 border-t border-gold/35 w-full flex flex-wrap items-center justify-center gap-2">
          <a
            href={whatsappShareUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-emerald-accent hover:bg-emerald-deep text-ivory text-xs font-medium border border-gold/60 shadow-sm transition-all duration-200"
          >
            <MessageCircle className="w-3.5 h-3.5 text-gold-light" aria-hidden="true" />
            <span>{t.invitation.whatsappBtn}</span>
          </a>

          <button
            type="button"
            onClick={handleShareOrCopy}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-burgundy hover:bg-burgundy-deep text-ivory text-xs font-medium border border-gold/70 shadow-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-gold-light" aria-hidden="true" />
                <span>{t.invitation.copiedBtn}</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5 text-gold-light" aria-hidden="true" />
                <span>{t.invitation.shareBtn}</span>
              </>
            )}
          </button>

          <a
            href={googleCalendarUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-ivory hover:bg-champagne/55 text-burgundy text-xs font-medium border border-gold/70 shadow-sm transition-all duration-200"
          >
            <CalendarPlus className="w-3.5 h-3.5 text-gold-dark" aria-hidden="true" />
            <span>{t.events.addToCalendarBtn}</span>
          </a>
        </div>
      </div>
    </div>
  );

  /**
   * Renders the Interactive 3D Sealed / Unsealing Royal Envelope for the Inline Section
   */
  const renderEnvelopeStage = ({ isOpening = false, onOpenClick }) => (
    <div className="max-w-2xl mx-auto">
      <div
        role="button"
        tabIndex={0}
        onClick={onOpenClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onOpenClick();
          }
        }}
        aria-label={t.invitation.tapToOpenBtn}
        className="group cursor-pointer relative rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#5E0B1D] via-burgundy-deep to-[#3A0611] border-2 border-gold shadow-2xl p-5 sm:p-8 overflow-hidden transition-all duration-300 hover:border-gold-light focus:outline-none focus-visible:ring-4 focus-visible:ring-gold"
      >
        {/* Top Envelope Triangular Flap SVG */}
        <svg
          viewBox="0 0 600 190"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`pointer-events-none absolute top-0 left-0 right-0 w-full z-20 ${
            isOpening ? 'animate-envelope-flap' : ''
          }`}
          aria-hidden="true"
        >
          <polygon
            points="0,0 600,0 300,175"
            fill="#790F22"
            stroke="#C6A15B"
            strokeWidth="2.5"
          />
          <polygon
            points="24,6 576,6 300,162"
            fill="none"
            stroke="#C6A15B"
            strokeWidth="1"
            strokeDasharray="4 4"
            strokeOpacity="0.65"
          />
        </svg>

        {/* Bottom Envelope Pocket Diagonal Lines */}
        <svg
          viewBox="0 0 600 260"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none absolute inset-0 w-full h-full opacity-35"
          aria-hidden="true"
        >
          <line x1="0" y1="260" x2="230" y2="120" stroke="#C6A15B" strokeWidth="1.2" />
          <line x1="600" y1="260" x2="370" y2="120" stroke="#C6A15B" strokeWidth="1.2" />
        </svg>

        {/* Four Corner Ornaments */}
        <ArabesqueCorner
          position="top-left"
          className="pointer-events-none absolute top-2.5 left-2.5 w-8 h-8 opacity-80 z-30"
        />
        <ArabesqueCorner
          position="top-right"
          className="pointer-events-none absolute top-2.5 right-2.5 w-8 h-8 opacity-80 z-30"
        />
        <ArabesqueCorner
          position="bottom-left"
          className="pointer-events-none absolute bottom-2.5 left-2.5 w-8 h-8 opacity-80 z-30"
        />
        <ArabesqueCorner
          position="bottom-right"
          className="pointer-events-none absolute bottom-2.5 right-2.5 w-8 h-8 opacity-80 z-30"
        />

        {/* Peek of Ivory Parchment Card Inside Envelope (Stays centered, no upward jump) */}
        <div
          className={`relative z-10 mx-auto max-w-md rounded-2xl bg-ivory/95 text-ink px-4 py-3.5 border border-gold shadow-md text-center transition-transform duration-300 ${
            isOpening ? 'scale-[1.02]' : 'group-hover:scale-[1.01]'
          }`}
        >
          <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-gold-dark font-bold">
            <Sparkles className="w-3 h-3" aria-hidden="true" />
            {t.invitation.envelopeBadge}
          </span>
          <p className="mt-0.5 font-heading text-2xl sm:text-3xl font-bold text-burgundy">
            {weddingConfig.couple.displayName[language]}
          </p>
          <p className="text-xs text-ink/75 font-medium">
            {t.invitation.dateHighlight} • {weddingConfig.venue.shortAddress[language]}
          </p>
        </div>

        {/* Center Interactive Golden Wax Seal */}
        <div className="relative z-30 my-4 flex flex-col items-center justify-center">
          <div
            className={`w-18 h-18 sm:w-20 sm:h-20 p-3.5 rounded-full bg-gradient-to-br from-gold-light via-gold to-gold-dark border-4 border-ivory flex flex-col items-center justify-center transition-transform duration-300 group-hover:scale-105 ${
              isOpening ? 'animate-wax-seal' : 'animate-wax-pulse'
            }`}
          >
            <CrescentStarMotif className="w-7 h-7 sm:w-8 sm:h-8" color="#4B0918" />
            <span className="font-regal text-[11px] font-bold text-burgundy-deep tracking-widest">
              {weddingConfig.couple.monogram[language]}
            </span>
          </div>
        </div>

        {/* Addressed To / From & Open Prompt */}
        <div className="relative z-20 text-center space-y-1">
          <p className="font-heading text-base sm:text-xl text-champagne font-medium">
            {t.invitation.envelopeToLine}
          </p>
          <p className="text-xs sm:text-sm text-gold-light font-semibold tracking-wide">
            {t.invitation.envelopeFromLine}
          </p>

          <div className="pt-2.5">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gold group-hover:bg-gold-light text-burgundy-deep text-xs sm:text-sm font-bold shadow-md transition-all">
              <MailOpen className="w-4 h-4" aria-hidden="true" />
              <span>
                {isOpening ? t.invitation.openingText : t.invitation.tapToOpenBtn}
              </span>
              <span aria-hidden="true">✦</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <section
        id="invitation"
        className="relative py-12 sm:py-16 bg-gradient-to-b from-burgundy-deep via-burgundy to-burgundy-deep text-ivory overflow-hidden bg-islamic-pattern-gold"
      >
        <div
          ref={revealRef}
          className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 reveal-up ${
            isVisible ? 'is-visible' : ''
          }`}
        >
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-gold-light font-semibold">
              {t.invitation.eyebrow}
            </p>
            <h2 className="mt-1 font-heading text-2xl sm:text-4xl md:text-5xl font-bold text-ivory">
              {t.invitation.title}
            </h2>
          </div>

          {/* Interactive Envelope (when sealed) OR Unfolded Invitation Letter with 3D Unsealing Overlay */}
          {sectionState === 'sealed'
            ? renderEnvelopeStage({
                isOpening: false,
                onOpenClick: handleOpenInlineEnvelope,
              })
            : renderInvitationLetterCard({
                isModal: false,
                showUnsealingOverlay: sectionState === 'opening',
              })}
        </div>
      </section>

      {/* =====================================================================
          FULL-SCREEN ANIMATED INVITATION LETTER MODAL
          (Triggered when clicking "Invitation" in Header or "Open Invitation" in Hero)
          Renders the Letter immediately in its final centered position while the
          3D Royal Envelope Overlay unseals directly over it — zero layout shift!
         ===================================================================== */}
      {modalState !== 'closed' && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={t.invitation.title}
          className="fixed inset-0 z-[95] bg-burgundy-deep/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          onClick={closeModal}
        >
          <div
            className="max-w-3xl w-full my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {renderInvitationLetterCard({
              isModal: true,
              showUnsealingOverlay: modalState === 'opening',
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default InvitationSection;
