import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { CrescentStarMotif } from './OrnamentalMotifs';
import { weddingConfig } from '../data/weddingConfig';
import { triggerInvitationLetterModal } from './InvitationSection';

export function Header() {
  const { language, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navItems = [
    { id: 'home', label: t.navigation.home, href: '#home' },
    { id: 'story', label: t.navigation.story, href: '#story' },
    { id: 'family', label: t.navigation.family, href: '#family' },
    { id: 'events', label: t.navigation.events, href: '#events' },
    { id: 'gallery', label: t.navigation.gallery, href: '#gallery' },
    { id: 'venue', label: t.navigation.venue, href: '#venue' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-burgundy focus:text-ivory focus:px-4 focus:py-2 focus:rounded-md focus:shadow-lg"
      >
        {t.accessibility.skipToContent}
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || mobileMenuOpen
            ? 'bg-ivory/95 backdrop-blur-md shadow-royal border-b border-gold/45 py-2'
            : 'bg-ivory/85 backdrop-blur-sm border-b border-gold/25 py-2 sm:py-2.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2">
            {/* Brand Wordmark & Ornamental Crescent */}
            <a
              href="#home"
              className="group flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy rounded-md min-w-0"
            >
              <div className="relative flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-burgundy border border-gold/80 shadow-sm shrink-0 group-hover:scale-105 transition-transform">
                <CrescentStarMotif className="w-5 h-5 sm:w-6 sm:h-6" color="#C6A15B" />
              </div>
              <div className="flex flex-col truncate">
                <span className="font-heading text-base sm:text-xl font-bold text-burgundy tracking-wide leading-tight truncate">
                  {weddingConfig.couple.displayName[language]}
                </span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-gold-dark font-semibold leading-none">
                  {weddingConfig.weddingDate.displayDate[language]}
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav
              aria-label="Primary Navigation"
              className="hidden lg:flex items-center gap-6 xl:gap-7"
            >
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="relative text-sm font-medium text-ink hover:text-burgundy transition-colors py-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:w-0 after:bg-gold hover:after:w-full after:transition-all after:duration-300"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Right Controls: Language Switcher + Invitation CTA + Mobile Menu Button */}
            <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
              <LanguageSwitcher />

              <button
                type="button"
                onClick={triggerInvitationLetterModal}
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-burgundy hover:bg-burgundy-deep text-ivory text-xs sm:text-sm font-medium tracking-wide border border-gold/70 shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                <Sparkles className="w-3.5 h-3.5 text-gold-light" aria-hidden="true" />
                <span>{t.navigation.invitationBtn}</span>
              </button>

              {/* Mobile Menu Toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation-drawer"
                aria-label={
                  mobileMenuOpen ? t.navigation.closeMenu : t.navigation.openMenu
                }
                className="lg:hidden inline-flex items-center justify-center w-9 h-9 rounded-full border border-gold/60 bg-ivory text-burgundy hover:bg-champagne/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy"
              >
                {mobileMenuOpen ? (
                  <X className="w-4 h-4" aria-hidden="true" />
                ) : (
                  <Menu className="w-4 h-4" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Collapsible Mobile Navigation Menu */}
        <div
          id="mobile-navigation-drawer"
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-[420px] opacity-100 mt-2' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="mx-3 mb-2 rounded-2xl bg-ivory border border-gold/60 shadow-royal-lg p-3.5 space-y-2">
            <nav aria-label="Mobile Navigation" className="grid grid-cols-2 gap-1.5">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={handleNavClick}
                  className="py-2 px-3 text-sm font-medium text-ink hover:text-burgundy bg-champagne/25 hover:bg-champagne/50 rounded-xl transition-colors flex items-center justify-between border border-gold/30"
                >
                  <span>{item.label}</span>
                  <span className="text-gold text-[10px]" aria-hidden="true">✦</span>
                </a>
              ))}
            </nav>

            <div className="pt-1 flex gap-2">
              <button
                type="button"
                onClick={() => {
                  handleNavClick();
                  triggerInvitationLetterModal();
                }}
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-full bg-burgundy text-ivory font-medium text-xs sm:text-sm border border-gold/70 shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5 text-gold-light" aria-hidden="true" />
                <span>{t.navigation.invitationBtn}</span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
