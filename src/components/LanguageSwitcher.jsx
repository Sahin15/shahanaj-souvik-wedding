import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export function LanguageSwitcher({ className = '' }) {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.navigation.switchLanguageLabel}
      className={`inline-flex items-center rounded-full border border-gold/60 bg-ivory/90 p-0.5 shadow-sm backdrop-blur-sm ${className}`}
    >
      <button
        type="button"
        onClick={() => setLanguage('en')}
        aria-pressed={language === 'en'}
        className={`px-2.5 py-1 text-xs sm:text-sm font-medium tracking-wider rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy ${
          language === 'en'
            ? 'bg-burgundy text-ivory shadow-sm font-semibold'
            : 'text-ink/80 hover:text-burgundy'
        }`}
      >
        EN
      </button>
      <span className="text-gold/70 select-none px-0.5 text-xs" aria-hidden="true">
        |
      </span>
      <button
        type="button"
        onClick={() => setLanguage('bn')}
        aria-pressed={language === 'bn'}
        className={`px-2.5 py-1 text-xs sm:text-sm font-bengali-sans font-medium rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy ${
          language === 'bn'
            ? 'bg-burgundy text-ivory shadow-sm font-semibold'
            : 'text-ink/80 hover:text-burgundy'
        }`}
      >
        বাংলা
      </button>
    </div>
  );
}

export default LanguageSwitcher;

