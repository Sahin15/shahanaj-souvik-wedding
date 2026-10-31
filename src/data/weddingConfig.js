/**
 * Central Configuration for Shahanaj & Souvik's Wedding Invitation Website
 * -------------------------------------------------------------------------
 */

export const weddingConfig = {
  couple: {
    // IMPORTANT NAMING RULE: Always display the bride's name as "Shahanaj" only.
    bride: {
      en: 'Shahanaj',
      bn: 'শাহানাজ',
    },
    groom: {
      en: 'Souvik',
      bn: 'সৌভিক',
    },
    displayName: {
      en: 'Shahanaj & Souvik',
      bn: 'শাহানাজ ও সৌভিক',
    },
    monogram: {
      en: 'S & S',
      bn: 'শা ও সৌ',
    },
    hosts: {
      father: {
        en: 'Nurjjaman Mondal',
        bn: 'নূরজ্জামান মণ্ডল',
      },
      mother: {
        en: 'Sujata Bibi',
        bn: 'সুজাতা বিবি',
      },
      combined: {
        en: 'Nurjjaman Mondal & Sujata Bibi',
        bn: 'নূরজ্জামান মণ্ডল ও সুজাতা বিবি',
      },
      relationNote: {
        en: 'Parents of Shahanaj',
        bn: 'শাহানাজের পিতা ও মাতা',
      },
    },
  },

  weddingDate: {
    /**
     * Target date-time for the live countdown timer:
     * 30 November 2026 at 2:00 PM India Standard Time (Asia/Kolkata).
     */
    isoTarget: '2026-11-30T14:00:00+05:30',
    timezone: 'Asia/Kolkata',
    provisionalTimeNote: false,
    displayDate: {
      en: '30 November 2026',
      bn: '৩০ নভেম্বর ২০২৬',
    },
    displayDay: {
      en: 'Monday',
      bn: 'সোমবার',
    },
  },

  events: [
    {
      id: 'mehendi',
      theme: 'burgundy-plum',
      iconType: 'henna',
      dateISO: '2026-11-28',
      calendarStartUTC: '20261128T103000Z', // 4:00 PM IST
      calendarEndUTC: '20261128T153000Z',
      confirmedTime: {
        en: 'Afternoon 4:00 PM Onwards',
        bn: 'বিকেল ৪:০০ ঘটিকা হতে',
      },
      date: {
        en: '28 November 2026',
        bn: '২৮ নভেম্বর ২০২৬',
      },
      day: {
        en: 'Saturday',
        bn: 'শনিবার',
      },
      shortLine: {
        en: '28 November 2026, Saturday • 4:00 PM',
        bn: '২৮ নভেম্বর ২০২৬, শনিবার • বিকেল ৪:০০টা',
      },
      swatches: ['#315B46', '#790F22', '#C6A15B', '#5B1728'],
    },
    {
      id: 'haldi',
      theme: 'champagne-gold',
      iconType: 'marigold',
      dateISO: '2026-11-29',
      calendarStartUTC: '20261129T063000Z', // 12:00 Noon IST
      calendarEndUTC: '20261129T113000Z',
      confirmedTime: {
        en: '12:00 Noon Onwards',
        bn: 'দুপুর ১২:০০ ঘটিকা হতে',
      },
      date: {
        en: '29 November 2026',
        bn: '২৯ নভেম্বর ২০২৬',
      },
      day: {
        en: 'Sunday',
        bn: 'রবিবার',
      },
      shortLine: {
        en: '29 November 2026, Sunday • 12:00 Noon',
        bn: '২৯ নভেম্বর ২০২৬, রবিবার • দুপুর ১২:০০টা',
      },
      swatches: ['#D99B26', '#C6A15B', '#E8D6B5', '#790F22'],
    },
    {
      id: 'nikah',
      theme: 'royal-burgundy',
      iconType: 'crescent-arch',
      dateISO: '2026-11-30',
      calendarStartUTC: '20261130T083000Z', // 2:00 PM IST
      calendarEndUTC: '20261130T153000Z',
      confirmedTime: {
        en: 'Afternoon 2:00 PM Onwards',
        bn: 'দুপুর ২:০০ ঘটিকা হতে',
      },
      featured: true,
      date: {
        en: '30 November 2026',
        bn: '৩০ নভেম্বর ২০২৬',
      },
      day: {
        en: 'Monday',
        bn: 'সোমবার',
      },
      shortLine: {
        en: '30 November 2026, Monday • 2:00 PM',
        bn: '৩০ নভেম্বর ২০২৬, সোমবার • দুপুর ২:০০টা',
      },
      swatches: ['#790F22', '#4B0918', '#C6A15B', '#FFF8ED'],
    },
  ],

  venue: {
    name: {
      en: 'Our Home',
      bn: 'নিজ বাসস্থান',
    },
    shortAddress: {
      en: 'Purba Kalikapur, Trimohini, Hili',
      bn: 'পূর্ব কালিকাপুর, ত্রিমোহিনী, হিলি',
    },
    fullAddress: {
      en: 'Purba Kalikapur, Trimohini, Hili, West Bengal, India',
      bn: 'পূর্ব কালিকাপুর, ত্রিমোহিনী, হিলি, পশ্চিমবঙ্গ',
    },
    region: {
      en: 'Dakshin Dinajpur, West Bengal, India',
      bn: 'দক্ষিণ দিনাজপুর, পশ্চিমবঙ্গ, ভারত',
    },
    directionsUrl: 'https://maps.app.goo.gl/X5NC9adsPJTJ6Q5s9',
    embedUrl:
      'https://maps.google.com/maps?q=25.294086,88.958289&z=17&output=embed',
    venueImage: '/images/our-home-venue.jpg',
  },

  hero: {
    mainImage: '/images/couple-arch-portrait.jpg',
    coupleStoryImage: '/images/couple-moonlight-silhouette.jpg',
    secondaryStoryImage: '/images/couple-meadow-walk.jpg',
    isPlaceholderPhoto: false,
  },

  rsvp: {
    enabled: true,
    /**
     * Family Contact WhatsApp Number (International format without '+' or spaces)
     * Configured for: Nurjjaman Mondal (Father of the Bride) — 9474138682
     */
    whatsappNumber: '919474138682',
    whatsappDisplay: '+91 94741 38682',
    recipientName: {
      en: 'Nurjjaman Mondal (Father of the Bride)',
      bn: 'নূরজ্জামান মণ্ডল (কনের পিতা)',
    },
    endpointUrl: '',
  },

  /**
   * Post-Wedding Memory Mode Configuration:
   * Set `enabled: true` after 30 November 2026 to force the post-wedding thank-you
   * and digital memory book experience (also activates automatically after the wedding date).
   */
  postWeddingMode: {
    enabled: false,
  },
};

export default weddingConfig;
