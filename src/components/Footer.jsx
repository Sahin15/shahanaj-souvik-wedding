import React from 'react';
import { ArrowUp, Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { weddingConfig } from '../data/weddingConfig';
import { CrescentStarMotif, OrnamentalDivider } from './OrnamentalMotifs';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Footer() {
  const { language, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: t.navigation.home, href: '#home' },
    { label: t.navigation.story, href: '#story' },
    { label: t.navigation.family, href: '#family' },
    { label: t.navigation.events, href: '#events' },
    { label: t.navigation.gallery, href: '#gallery' },
    { label: t.navigation.venue, href: '#venue' },
  ];

  return (
    <footer className="relative bg-burgundy-deep text-ivory border-t-2 border-gold overflow-hidden bg-islamic-pattern-gold">
      {/* Subtle Top Gold Filigree Border */}
      <div
        className="h-1.5 w-full bg-gradient-to-r from-burgundy-deep via-gold to-burgundy-deep opacity-80"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        {/* Top Centered Emblem & Required Gratitude Quote */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-burgundy border border-gold/80 flex items-center justify-center shadow-gold-glow mb-3">
            <CrescentStarMotif className="w-8 h-8 sm:w-9 sm:h-9" color="#C6A15B" />
          </div>

          <h2 className="font-heading text-xl sm:text-3xl md:text-4xl font-bold text-ivory leading-snug">
            “{t.footer.gratitudeQuote}”
          </h2>

          <p className="mt-2 text-xs sm:text-base font-medium text-gold-light">
            {t.footer.hostedByFooter}
          </p>

          <div className="my-3.5 sm:my-4">
            <OrnamentalDivider
              variant="crescent"
              color="#C6A15B"
              secondaryColor="#C6A15B"
              className="w-48 sm:w-64 h-6 sm:h-7"
            />
          </div>

          {/* Date & Venue Locality Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[11px] sm:text-sm text-champagne">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ivory/10 border border-gold/45">
              <Calendar className="w-3.5 h-3.5 text-gold-light shrink-0" aria-hidden="true" />
              <span>{t.footer.date}</span>
            </span>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ivory/10 border border-gold/45">
              <MapPin className="w-3.5 h-3.5 text-gold-light shrink-0" aria-hidden="true" />
              <span>{t.footer.locality}</span>
            </span>
          </div>
        </div>

        {/* Middle Footer Grid: Quick Links, Schedule Summary, & Back to Top */}
        <div className="mt-8 sm:mt-10 pt-7 sm:pt-8 border-t border-gold/25 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-start text-center md:text-left">
          {/* Column 1: Quick Navigation Links */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-gold-light font-semibold mb-3.5">
              {t.footer.quickLinksTitle}
            </h3>
            <ul className="flex flex-wrap justify-center md:justify-start gap-x-5 gap-y-2 text-sm text-champagne/90">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-gold-light transition-colors underline-offset-4 hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Three-Day Schedule Summary */}
          <div className="md:text-center">
            <h3 className="text-xs uppercase tracking-[0.2em] text-gold-light font-semibold mb-3.5">
              {t.footer.celebrationSummaryTitle}
            </h3>
            <ul className="space-y-1.5 text-xs sm:text-sm text-champagne/90">
              {weddingConfig.events.map((ev) => (
                <li key={ev.id}>
                  <span className="font-semibold text-ivory">
                    {t.events.items[ev.id].name}:
                  </span>{' '}
                  <span>{ev.shortLine[language]}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Language Switcher & Back-to-Top Button */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <LanguageSwitcher />

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-burgundy hover:bg-ivory text-ivory hover:text-burgundy border border-gold/70 text-xs sm:text-sm font-medium transition-all duration-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <ArrowUp className="w-4 h-4 text-gold-light" aria-hidden="true" />
              <span>{t.footer.backToTop}</span>
            </button>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-10 pt-6 border-t border-gold/20 text-center text-xs text-champagne/75">
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

