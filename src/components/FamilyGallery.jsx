import React, { useState, useEffect } from 'react';
import { Users, Crown, Heart, X, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import { familyMembers } from '../data/familyMembers';
import {
  OrnamentalDivider,
  ArabesqueCorner,
  CrescentStarMotif,
} from './OrnamentalMotifs';

export function FamilyGallery() {
  const { language, t, formatNum } = useLanguage();
  const [revealRef, isVisible] = useRevealOnScroll();
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedMember, setSelectedMember] = useState(null);
  const [failedPhotos, setFailedPhotos] = useState({});

  const getCountForCategory = (catId) => {
    if (catId === 'all') return familyMembers.length;
    return familyMembers.filter((m) => m.categories?.includes(catId)).length;
  };

  const filters = [
    { id: 'all', label: t.family.filterAll, count: getCountForCategory('all') },
    {
      id: 'parents',
      label: t.family.filterParents,
      count: getCountForCategory('parents'),
    },
    {
      id: 'brother-family',
      label: t.family.filterBrotherFamily,
      count: getCountForCategory('brother-family'),
    },
  ];

  const topRowMembers = familyMembers.filter((m) =>
    m.categories?.includes('parents')
  );
  const bottomRowMembers = familyMembers.filter((m) =>
    m.categories?.includes('brother-family')
  );

  const filteredMembers =
    activeFilter === 'all'
      ? [...topRowMembers, ...bottomRowMembers]
      : activeFilter === 'parents'
      ? topRowMembers
      : bottomRowMembers;

  const resolvePhoto = (member) => {
    if (member.photo && member.photo.trim() !== '' && !failedPhotos[member.id]) {
      return member.photo;
    }
    return member.fallbackPhoto;
  };

  useEffect(() => {
    if (!selectedMember) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedMember(null);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedMember]);

  const renderMemberCard = (member) => {
    const isBride = Boolean(member.isBride);
    return (
      <article
        key={member.id}
        className={`group relative rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col ${
          isBride
            ? 'bg-ivory border-2 border-gold shadow-royal-lg ring-1 sm:ring-2 ring-gold/50 md:-translate-y-1.5'
            : member.isHost
            ? 'bg-ivory border-2 border-gold/80 shadow-royal hover:shadow-royal-lg'
            : 'bg-ivory border border-gold/65 shadow-royal hover:shadow-royal-lg'
        }`}
      >
        {/* Top Portrait Frame (Compact Responsive Height for Mobile 2-Col & Desktop 3-Col) */}
        <button
          type="button"
          onClick={() => setSelectedMember(member)}
          aria-label={`${t.family.viewProfileLabel}: ${member.name[language]}`}
          className="relative block w-full h-36 xs:h-40 sm:h-48 overflow-hidden bg-burgundy-deep text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy"
        >
          <img
            src={resolvePhoto(member)}
            alt={`${member.name[language]} — ${member.relation[language]}`}
            loading="lazy"
            style={{ objectPosition: member.objectPosition || 'center center' }}
            onError={() =>
              setFailedPhotos((prev) => ({ ...prev, [member.id]: true }))
            }
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Role Badge */}
          <span
            className={`absolute top-2 left-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] xs:text-[10px] sm:text-[11px] font-semibold border backdrop-blur-sm max-w-[90%] truncate ${
              isBride
                ? 'bg-burgundy text-gold-light border-gold shadow-md'
                : member.isHost
                ? 'bg-gold text-burgundy-deep border-ivory/60 shadow-sm'
                : 'bg-burgundy-deep/85 text-gold-light border-gold/55'
            }`}
          >
            {isBride ? (
              <Crown className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-gold-light shrink-0" aria-hidden="true" />
            ) : member.isHost ? (
              <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 shrink-0" aria-hidden="true" />
            ) : (
              <Heart className="w-2.5 h-2.5 sm:w-3 sm:h-3 shrink-0" aria-hidden="true" />
            )}
            <span className="truncate">{member.roleBadge[language]}</span>
          </span>

          {/* Bottom Gradient with Relation Pill */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-burgundy-deep/95 via-burgundy-deep/45 to-transparent p-2 sm:p-2.5 pt-6 flex items-end justify-between">
            <span
              className={`inline-block px-2 py-0.5 rounded-md text-[10px] sm:text-xs font-bold shadow-sm border truncate max-w-full ${
                isBride
                  ? 'bg-gold text-burgundy-deep border-ivory/70'
                  : 'bg-ivory/95 text-burgundy border-gold/40'
              }`}
            >
              {member.relation[language]}
            </span>
          </div>
        </button>

        {/* Card Body: Name & Warm Blessing */}
        <div
          className={`relative p-2.5 xs:p-3 sm:p-4 flex-1 flex flex-col justify-between ${
            isBride ? 'bg-gradient-to-b from-ivory to-champagne/35' : 'bg-ivory'
          }`}
        >
          <ArabesqueCorner
            position="bottom-right"
            className="hidden sm:block pointer-events-none absolute bottom-2 right-2 w-5 h-5 opacity-55"
          />
          <div>
            <h3 className="font-heading text-base xs:text-lg sm:text-2xl font-bold text-burgundy leading-tight">
              {member.name[language]}
            </h3>

            <p className="mt-1 text-[10px] xs:text-[11px] sm:text-xs text-ink/85 leading-snug italic line-clamp-2">
              “{member.blessing[language]}”
            </p>
          </div>
        </div>
      </article>
    );
  };

  return (
    <section
      id="family"
      className="relative py-12 sm:py-20 bg-gradient-to-b from-ivory via-champagne/30 to-ivory bg-islamic-pattern overflow-hidden"
    >
      <div
        ref={revealRef}
        className={`max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 reveal-up ${
          isVisible ? 'is-visible' : ''
        }`}
      >
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex justify-center mb-2">
            <OrnamentalDivider variant="crescent" className="w-48 sm:w-64 h-6 sm:h-7" />
          </div>

          <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-gold-dark font-semibold">
            {t.family.eyebrow}
          </p>

          <h2 className="mt-1 font-heading text-2xl sm:text-4xl md:text-5xl font-bold text-burgundy">
            {t.family.title}
          </h2>

          <p className="mt-2 text-xs sm:text-base text-ink/80 leading-relaxed">
            {t.family.subtitle}
          </p>
        </div>

        {/* Featured Hosts Banner */}
        <div className="mt-6 sm:mt-10 relative rounded-2xl sm:rounded-3xl bg-gradient-to-r from-burgundy-deep via-burgundy to-burgundy-deep text-ivory p-4 sm:p-7 md:p-8 border-2 border-gold shadow-royal-lg overflow-hidden">
          <ArabesqueCorner
            position="top-left"
            className="pointer-events-none absolute top-2.5 left-2.5 w-7 h-7 sm:w-9 sm:h-9 opacity-80"
          />
          <ArabesqueCorner
            position="top-right"
            className="pointer-events-none absolute top-2.5 right-2.5 w-7 h-7 sm:w-9 sm:h-9 opacity-80"
          />
          <ArabesqueCorner
            position="bottom-left"
            className="pointer-events-none absolute bottom-2.5 left-2.5 w-7 h-7 sm:w-9 sm:h-9 opacity-80"
          />
          <ArabesqueCorner
            position="bottom-right"
            className="pointer-events-none absolute bottom-2.5 right-2.5 w-7 h-7 sm:w-9 sm:h-9 opacity-80"
          />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-4 text-center lg:text-left">
            <div className="flex flex-col lg:flex-row items-center gap-3 sm:gap-5">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-ivory/10 border border-gold flex items-center justify-center shrink-0 shadow-gold-glow">
                <CrescentStarMotif className="w-7 h-7 sm:w-9 sm:h-9" color="#C6A15B" />
              </div>

              <div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gold/25 border border-gold/60 text-gold-light text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-1.5">
                  <Crown className="w-3 h-3" aria-hidden="true" />
                  <span>{t.family.hostsHighlightBadge}</span>
                </span>

                <h3 className="font-heading text-xl sm:text-3xl font-bold text-ivory">
                  {t.family.hostsHighlightTitle}
                </h3>

                <p className="mt-1 text-xs sm:text-sm text-champagne/95 max-w-3xl leading-relaxed">
                  {t.family.hostsHighlightText}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                aria-pressed={isActive}
                className={`inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-medium border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy ${
                  isActive
                    ? 'bg-burgundy text-ivory border-gold shadow-sm'
                    : 'bg-ivory text-ink/85 border-gold/55 hover:border-burgundy/60 hover:text-burgundy'
                }`}
              >
                <span>{filter.label}</span>
                <span
                  className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                    isActive
                      ? 'bg-gold text-burgundy-deep'
                      : 'bg-champagne/70 text-burgundy'
                  }`}
                >
                  {formatNum(filter.count, 1)}
                </span>
              </button>
            );
          })}
        </div>

        {/* =====================================================================
            SYMMETRICAL FAMILY GRID:
            - Mobile (<768px): 2 columns x 3 rows (all 6 cards fit cleanly on screen)
            - Desktop (>=768px): 3 columns x 2 rows (Row 1: Father, Bride, Mother; Row 2: Dada, Bhabi, Bhaipo)
           ===================================================================== */}
        <div className="mt-6 sm:mt-9 grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 items-stretch">
          {filteredMembers.map((member) => renderMemberCard(member))}
        </div>

        {/* Helpful Configuration Footnote */}
        <div className="mt-6 text-center">
          <p className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-champagne/40 border border-gold/45 text-[11px] sm:text-xs text-ink/75">
            <Users className="w-3.5 h-3.5 text-burgundy shrink-0" aria-hidden="true" />
            <span>{t.family.configNote}</span>
          </p>
        </div>
      </div>

      {/* Modal for Viewing a Family Member's Full Card */}
      {selectedMember && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedMember.name[language]}
          className="fixed inset-0 z-[80] bg-burgundy-deep/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="relative max-w-lg w-full rounded-3xl bg-ivory border-2 border-gold shadow-royal-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedMember(null)}
              aria-label={t.family.closeModalLabel}
              className="absolute top-3.5 right-3.5 z-20 inline-flex items-center justify-center w-10 h-10 rounded-full bg-burgundy-deep/85 hover:bg-gold text-ivory hover:text-burgundy-deep border border-gold/60 transition-colors"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>

            <div className="max-h-[65vh] w-full bg-burgundy-deep overflow-hidden flex items-center justify-center">
              <img
                src={resolvePhoto(selectedMember)}
                alt={`${selectedMember.name[language]} — ${selectedMember.relation[language]}`}
                className="w-full max-h-[65vh] object-contain"
              />
            </div>

            <div className="p-6 sm:p-8 text-center">
              <span className="inline-block px-3.5 py-1 rounded-full bg-champagne/65 border border-gold/60 text-burgundy text-xs font-bold uppercase tracking-wider">
                {selectedMember.relation[language]}
              </span>
              <h3 className="mt-2 font-heading text-3xl font-bold text-burgundy">
                {selectedMember.name[language]}
              </h3>
              <p className="mt-3 text-sm sm:text-base text-ink/85 leading-relaxed italic">
                “{selectedMember.blessing[language]}”
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default FamilyGallery;
