import React, { useState } from 'react';
import { Send, CheckCircle2, Info, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import { weddingConfig } from '../data/weddingConfig';
import { OrnamentalDivider, ArabesqueCorner } from './OrnamentalMotifs';

const RSVP_STORAGE_KEY = 'shahanaj_souvik_rsvp_preview';

export function RSVPSection() {
  const { t } = useLanguage();
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

          {/* Clearly Marked Frontend-Only Notice */}
          {!weddingConfig.rsvp.endpointUrl && (
            <div className="relative z-10 mb-6 flex items-start gap-2.5 rounded-2xl bg-champagne/45 border border-gold/55 p-3.5 text-xs sm:text-sm text-ink/85">
              <Info
                className="w-4 h-4 text-burgundy shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <span>{t.rsvp.previewBanner}</span>
            </div>
          )}

          {submitted ? (
            <div className="relative z-10 py-8 text-center">
              <div className="w-14 h-14 rounded-full bg-emerald-accent/15 border border-emerald-accent text-emerald-accent flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" aria-hidden="true" />
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-burgundy">
                {t.rsvp.successTitle}
              </h3>

              <p className="mt-2 text-sm sm:text-base text-ink/85 max-w-md mx-auto leading-relaxed">
                {t.rsvp.successMessage}
              </p>

              <div className="mt-6 p-4 rounded-2xl bg-ivory border border-gold/45 max-w-md mx-auto text-left text-xs sm:text-sm space-y-1">
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

              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-ivory hover:bg-champagne/50 text-burgundy text-xs sm:text-sm font-medium border border-gold/70 transition-colors"
              >
                <Sparkles className="w-4 h-4 text-gold-dark" aria-hidden="true" />
                <span>{t.rsvp.resetBtn}</span>
              </button>
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
                  <Send className="w-4 h-4 text-gold-light" aria-hidden="true" />
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

