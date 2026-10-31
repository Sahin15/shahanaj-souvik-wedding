import React, { useState } from 'react';
import { MessageCircle, CheckCircle2, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import { weddingConfig } from '../data/weddingConfig';
import { OrnamentalDivider, ArabesqueCorner } from './OrnamentalMotifs';

const RSVP_STORAGE_KEY = 'shahanaj_souvik_rsvp_preview';

export function RSVPSection() {
  const { language, t } = useLanguage();
  const [revealRef, isVisible] = useRevealOnScroll();

  const [formData, setFormData] = useState(() => {
    try {
      const saved = window.localStorage.getItem(RSVP_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // Ignore storage parse errors
    }
    return {
      guestName: '',
      guestsCount: 'two',
      attending: 'yes',
      message: '',
    };
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!weddingConfig.rsvp.enabled) {
    return null;
  }

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (error) setError('');
  };

  const formatGuestName = (rawName) => {
    const trimmed = rawName.trim();
    if (!trimmed) return '';
    return trimmed
      .split(/\s+/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const buildWhatsAppRsvpUrl = () => {
    const phone = weddingConfig.rsvp.whatsappNumber || '919474138682';
    const formattedName = formatGuestName(formData.guestName);
    const guestCountText =
      t.rsvp.guestOptions[formData.guestsCount] || formData.guestsCount;
    const isAttending = formData.attending === 'yes';
    const attendanceText = isAttending
      ? t.rsvp.attendingYes
      : t.rsvp.attendingPrayers;
    const customMessage = formData.message.trim();

    const lines =
      language === 'bn'
        ? [
            `*আসসালামু আলাইকুম নূরজ্জামান মণ্ডল,*`,
            ``,
            isAttending
              ? `*শাহানাজ ও সৌভিকের* শুভ বিবাহের (২৮ – ৩০ নভেম্বর ২০২৬) সাদর আমন্ত্রণের জন্য আন্তরিক ধন্যবাদ। ইনশাআল্লাহ, আমরা আনন্দের সাথে অনুষ্ঠানে উপস্থিত থাকব।`
              : `*শাহানাজ ও সৌভিকের* শুভ বিবাহের (২৮ – ৩০ নভেম্বর ২০২৬) সাদর আমন্ত্রণের জন্য আন্তরিক ধন্যবাদ। আমরা দূর থেকে নবদম্পতির জন্য আন্তরিক দোয়া ও শুভেচ্ছা জানাচ্ছি।`,
            ``,
            `*উপস্থিতির বিবরণ:*`,
            `• *নাম:* ${formattedName}`,
            ...(isAttending ? [`• *অতিথির সংখ্যা:* ${guestCountText}`] : []),
            `• *উপস্থিতি:* ${attendanceText}`,
            ...(customMessage
              ? [``, `*শুভেচ্ছা ও দোয়া:*`, `"${customMessage}"`]
              : []),
            ``,
            `— *${formattedName}*`,
          ]
        : [
            `*Assalamu Alaikum Nurjjaman Mondal,*`,
            ``,
            isAttending
              ? `Thank you for the warm invitation to the wedding of *Shahanaj & Souvik* (28 - 30 November 2026). We are delighted to confirm our attendance, InshaAllah!`
              : `Thank you for the warm invitation to the wedding of *Shahanaj & Souvik* (28 - 30 November 2026). Sending our heartfelt prayers and warm wishes for the couple!`,
            ``,
            `*RSVP Details:*`,
            `• *Guest Name:* ${formattedName}`,
            ...(isAttending ? [`• *Number of Guests:* ${guestCountText}`] : []),
            `• *Attendance:* ${attendanceText}`,
            ...(customMessage
              ? [``, `*Warm Wishes & Dua:*`, `"${customMessage}"`]
              : []),
            ``,
            `Warm regards,`,
            `*${formattedName}*`,
          ];

    return `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(
      lines.join('\n')
    )}`;
  };

  const buildQuickBlessingWhatsAppUrl = () => {
    const phone = weddingConfig.rsvp.whatsappNumber || '919474138682';
    const text =
      language === 'bn'
        ? `*আসসালামু আলাইকুম নূরজ্জামান মণ্ডল,*\n\n*শাহানাজ ও সৌভিকের* শুভ বিবাহ উপলক্ষে আমাদের আন্তরিক দোয়া ও অভিনন্দন রইল। মহান আল্লাহ যেন তাদের দাম্পত্য জীবন সুখ, শান্তি ও বরকতময় করে তোলেন — আমিন।`
        : `*Assalamu Alaikum Nurjjaman Mondal,*\n\nSending our heartfelt congratulations and prayers (Dua) for the wedding of *Shahanaj & Souvik*. May Allah bless their new journey together with endless love, peace, and barakah!`;
    return `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(text)}`;
  };

  const buildQuickRsvpWhatsAppUrl = () => {
    const phone = weddingConfig.rsvp.whatsappNumber || '919474138682';
    const text =
      language === 'bn'
        ? `*আসসালামু আলাইকুম নূরজ্জামান মণ্ডল,*\n\n*শাহানাজ ও সৌভিকের* শুভ বিবাহের (২৮ – ৩০ নভেম্বর ২০২৬) সাদর আমন্ত্রণের জন্য আন্তরিক ধন্যবাদ। ইনশাআল্লাহ, আমরা আনন্দের সাথে অনুষ্ঠানে উপস্থিত থাকব।`
        : `*Assalamu Alaikum Nurjjaman Mondal,*\n\nThank you for the warm invitation to the wedding of *Shahanaj & Souvik* (28 - 30 November 2026). We are delighted to confirm that we will be attending, InshaAllah!`;
    return `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.guestName.trim()) {
      setError(t.rsvp.requiredError);
      return;
    }

    try {
      window.localStorage.setItem(RSVP_STORAGE_KEY, JSON.stringify(formData));
    } catch {
      // Ignore localStorage error
    }

    const whatsappUrl = buildWhatsAppRsvpUrl();
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <section
      id="rsvp"
      className="relative py-12 sm:py-20 bg-ivory overflow-hidden"
    >
      <div
        ref={revealRef}
        className={`max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 reveal-up ${
          isVisible ? 'is-visible' : ''
        }`}
      >
        {/* Section Heading */}
        <div className="text-center">
          <div className="flex justify-center mb-2">
            <OrnamentalDivider variant="crescent" className="w-48 sm:w-64 h-6 sm:h-7" />
          </div>

          <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-gold-dark font-semibold">
            {t.rsvp.eyebrow}
          </p>

          <h2 className="mt-1 font-heading text-2xl sm:text-4xl md:text-5xl font-bold text-burgundy">
            {t.rsvp.title}
          </h2>

          <p className="mt-2 text-xs sm:text-base text-ink/80 leading-relaxed max-w-xl mx-auto">
            {t.rsvp.subtitle}
          </p>
        </div>

        {/* Form Card */}
        <div className="mt-7 sm:mt-10 relative rounded-2xl sm:rounded-3xl bg-ivory-soft border-2 border-gold/70 shadow-royal-lg p-5 sm:p-8 md:p-10 overflow-hidden">
          <ArabesqueCorner
            position="top-left"
            className="pointer-events-none absolute top-3.5 left-3.5 w-10 h-10"
          />
          <ArabesqueCorner
            position="top-right"
            className="pointer-events-none absolute top-3.5 right-3.5 w-10 h-10"
          />
          <ArabesqueCorner
            position="bottom-left"
            className="pointer-events-none absolute bottom-3.5 left-3.5 w-10 h-10"
          />
          <ArabesqueCorner
            position="bottom-right"
            className="pointer-events-none absolute bottom-3.5 right-3.5 w-10 h-10"
          />

          {/* Direct WhatsApp Host Notice Banner */}
          <div className="relative z-10 mb-5 flex items-start gap-2.5 rounded-2xl bg-emerald-accent/10 border border-emerald-accent/40 p-3.5 text-xs sm:text-sm text-ink/90">
            <MessageCircle
              className="w-4 h-4 text-emerald-accent shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <span>{t.rsvp.whatsappBanner}</span>
          </div>

          {/* Two Simple One-Tap WhatsApp Options (Send Blessing OR Quick RSVP) */}
          <div className="relative z-10 mb-6 rounded-2xl bg-champagne/35 border border-gold/55 p-4 sm:p-5">
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.16em] text-gold-dark font-bold text-center mb-3">
              {t.rsvp.quickActionsTitle}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              <a
                href={buildQuickBlessingWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[46px] inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-accent hover:bg-emerald-deep text-ivory font-semibold text-xs sm:text-sm border border-gold/60 shadow-sm transition-all active:scale-95 text-center"
              >
                <MessageCircle className="w-4 h-4 text-gold-light shrink-0" aria-hidden="true" />
                <span>{t.rsvp.quickBlessingBtn}</span>
              </a>

              <a
                href={buildQuickRsvpWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[46px] inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-burgundy hover:bg-burgundy-deep text-ivory font-semibold text-xs sm:text-sm border border-gold/70 shadow-sm transition-all active:scale-95 text-center"
              >
                <Sparkles className="w-4 h-4 text-gold-light shrink-0" aria-hidden="true" />
                <span>{t.rsvp.quickRsvpBtn}</span>
              </a>
            </div>
          </div>

          <p className="relative z-10 text-xs sm:text-sm font-semibold text-burgundy/85 text-center mb-4">
            {t.rsvp.customFormTitle}
          </p>

          {submitted ? (
            <div className="relative z-10 py-6 text-center">
              <div className="w-14 h-14 rounded-full bg-emerald-accent/15 border border-emerald-accent text-emerald-accent flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" aria-hidden="true" />
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-burgundy">
                {t.rsvp.successTitle}
              </h3>

              <p className="mt-2 text-sm sm:text-base text-ink/85 max-w-md mx-auto leading-relaxed">
                {t.rsvp.successMessage}
              </p>

              <div className="mt-5 p-4 rounded-2xl bg-ivory border border-gold/45 max-w-md mx-auto text-left text-xs sm:text-sm space-y-1">
                <p>
                  <strong className="text-burgundy">{t.rsvp.nameLabel}:</strong>{' '}
                  {formData.guestName}
                </p>
                <p>
                  <strong className="text-burgundy">{t.rsvp.guestsLabel}:</strong>{' '}
                  {t.rsvp.guestOptions[formData.guestsCount]}
                </p>
                <p>
                  <strong className="text-burgundy">{t.rsvp.attendanceLabel}:</strong>{' '}
                  {formData.attending === 'yes'
                    ? t.rsvp.attendingYes
                    : t.rsvp.attendingPrayers}
                </p>
                {formData.message && (
                  <p className="pt-1 italic text-ink/80">“{formData.message}”</p>
                )}
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={buildWhatsAppRsvpUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-emerald-accent hover:bg-emerald-deep text-ivory text-xs sm:text-sm font-medium border border-gold/60 shadow-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-gold-light" aria-hidden="true" />
                  <span>{t.rsvp.resendWhatsappBtn}</span>
                </a>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-ivory hover:bg-champagne/50 text-burgundy text-xs sm:text-sm font-medium border border-gold/70 transition-colors"
                >
                  <Sparkles className="w-4 h-4 text-gold-dark" aria-hidden="true" />
                  <span>{t.rsvp.resetBtn}</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="relative z-10 space-y-5" noValidate>
              {/* Guest Name + Number of Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="rsvp-guest-name"
                    className="block text-xs sm:text-sm font-semibold text-burgundy mb-1.5"
                  >
                    {t.rsvp.nameLabel} <span className="text-burgundy-ruby">*</span>
                  </label>
                  <input
                    id="rsvp-guest-name"
                    type="text"
                    required
                    value={formData.guestName}
                    onChange={(e) => handleChange('guestName', e.target.value)}
                    placeholder={t.rsvp.namePlaceholder}
                    className="w-full rounded-xl bg-ivory border border-gold/60 px-4 py-3 text-sm sm:text-base text-ink placeholder:text-ink/45 focus:outline-none focus:ring-2 focus:ring-burgundy focus:border-burgundy"
                  />
                </div>

                <div>
                  <label
                    htmlFor="rsvp-guest-count"
                    className="block text-xs sm:text-sm font-semibold text-burgundy mb-1.5"
                  >
                    {t.rsvp.guestsLabel}
                  </label>
                  <select
                    id="rsvp-guest-count"
                    value={formData.guestsCount}
                    onChange={(e) => handleChange('guestsCount', e.target.value)}
                    className="w-full rounded-xl bg-ivory border border-gold/60 px-4 py-3 text-sm sm:text-base text-ink focus:outline-none focus:ring-2 focus:ring-burgundy focus:border-burgundy"
                  >
                    {Object.entries(t.rsvp.guestOptions).map(([key, label]) => (
                      <option key={key} value={key}>
                        {label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Attendance Confirmation Radio Pills */}
              <fieldset>
                <legend className="block text-xs sm:text-sm font-semibold text-burgundy mb-2">
                  {t.rsvp.attendanceLabel}
                </legend>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label
                    className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                      formData.attending === 'yes'
                        ? 'bg-burgundy text-ivory border-burgundy shadow-sm'
                        : 'bg-ivory text-ink border-gold/55 hover:bg-champagne/30'
                    }`}
                  >
                    <input
                      type="radio"
                      name="attendance"
                      value="yes"
                      checked={formData.attending === 'yes'}
                      onChange={() => handleChange('attending', 'yes')}
                      className="sr-only"
                    />
                    <span
                      className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                        formData.attending === 'yes'
                          ? 'border-gold-light bg-gold'
                          : 'border-gold-dark'
                      }`}
                    />
                    <span className="text-xs sm:text-sm font-medium">
                      {t.rsvp.attendingYes}
                    </span>
                  </label>

                  <label
                    className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                      formData.attending === 'prayers'
                        ? 'bg-burgundy text-ivory border-burgundy shadow-sm'
                        : 'bg-ivory text-ink border-gold/55 hover:bg-champagne/30'
                    }`}
                  >
                    <input
                      type="radio"
                      name="attendance"
                      value="prayers"
                      checked={formData.attending === 'prayers'}
                      onChange={() => handleChange('attending', 'prayers')}
                      className="sr-only"
                    />
                    <span
                      className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                        formData.attending === 'prayers'
                          ? 'border-gold-light bg-gold'
                          : 'border-gold-dark'
                      }`}
                    />
                    <span className="text-xs sm:text-sm font-medium">
                      {t.rsvp.attendingPrayers}
                    </span>
                  </label>
                </div>
              </fieldset>

              {/* Optional Message / Dua */}
              <div>
                <label
                  htmlFor="rsvp-message"
                  className="block text-xs sm:text-sm font-semibold text-burgundy mb-1.5"
                >
                  {t.rsvp.messageLabel}
                </label>
                <textarea
                  id="rsvp-message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  placeholder={t.rsvp.messagePlaceholder}
                  className="w-full rounded-xl bg-ivory border border-gold/60 px-4 py-3 text-sm sm:text-base text-ink placeholder:text-ink/45 focus:outline-none focus:ring-2 focus:ring-burgundy focus:border-burgundy"
                />
              </div>

              {error && (
                <p role="alert" className="text-xs sm:text-sm text-burgundy-ruby font-medium">
                  {error}
                </p>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-burgundy hover:bg-burgundy-deep text-ivory font-medium text-sm sm:text-base border border-gold/70 shadow-royal transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  <MessageCircle className="w-4 h-4 text-gold-light" aria-hidden="true" />
                  <span>{t.rsvp.submitBtn}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default RSVPSection;
