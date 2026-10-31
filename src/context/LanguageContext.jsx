import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { translations, formatLocalizedNumber } from '../data/translations';

const STORAGE_KEY = 'wedding_lang';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === 'en' || saved === 'bn') {
        return saved;
      }
    } catch {
      // Ignore storage access errors in restricted browsing modes
    }
    return 'en';
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // Ignore storage write errors
    }
    document.documentElement.lang = language;
    if (translations[language]?.meta?.title) {
      document.title = translations[language].meta.title;
    }
  }, [language]);

  const setLanguage = (lang) => {
    if (lang === 'en' || lang === 'bn') {
      setLanguageState(lang);
    }
  };

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'en' ? 'bn' : 'en'));
  };

  const value = useMemo(() => {
    const t = translations[language] || translations.en;
    const formatNum = (val, pad = 2) => formatLocalizedNumber(val, language, pad);
    return {
      language,
      isBengali: language === 'bn',
      setLanguage,
      toggleLanguage,
      t,
      formatNum,
    };
  }, [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

