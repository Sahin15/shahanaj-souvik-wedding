/**
 * Centralized Bilingual Translation Dictionary (English & Bengali)
 * ----------------------------------------------------------------
 * Organized by section:
 * navigation, hero, countdown, story, family, events, gallery, venue,
 * invitation, rsvp, footer, accessibility
 */

const BENGALI_DIGITS = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];

/**
 * Converts a number or numeric string into padded 2-digit English or Bengali numerals.
 */
export function formatLocalizedNumber(value, language = 'en', padLength = 2) {
  const padded = String(Math.max(0, Number(value) || 0)).padStart(padLength, '0');
  if (language === 'bn') {
    return padded.replace(/\d/g, (digit) => BENGALI_DIGITS[Number(digit)]);
  }
  return padded;
}

export const translations = {
  en: {
    meta: {
      title: 'Shahanaj & Souvik | Wedding Invitation',
    },
    navigation: {
      home: 'Home',
      story: 'Our Story',
      family: 'Family',
      events: 'Events',
      gallery: 'Gallery',
      venue: 'Venue',
      invitationBtn: 'Invitation',
      rsvpBtn: 'Send Wishes',
      openMenu: 'Open navigation menu',
      closeMenu: 'Close navigation menu',
      switchLanguageLabel: 'Switch website language',
    },
    hero: {
      bismillah: 'IN THE NAME OF ALLAH, THE MOST MERCIFUL',
      hostedByLabel: 'Hosted with love & blessings by',
      hostedByNames: 'Nurjjaman Mondal & Sujata Bibi',
      hostedByRole: '(Parents of Shahanaj)',
      invitationLead:
        'With joy in our hearts and blessings from our families, we invite you to celebrate the wedding & bridal farewell (Biday) of',
      coupleNames: 'Shahanaj & Souvik',
      brideName: 'Shahanaj',
      groomName: 'Souvik',
      tagline: 'Two hearts, one beautiful journey.',
      date: '30 November 2026',
      location: 'Purba Kalikapur, Trimohini, Hili',
      openInvitationBtn: 'Open Invitation',
      exploreEventsBtn: 'Explore Wedding Events',
      nikahBadge: 'Wedding & Bridal Farewell (Biday)',
      portraitCaption: 'Two hearts, one sacred bond • 30 November 2026',
      soundPlay: 'Play Gentle Ambient Chime',
      soundMute: 'Mute Ambient Chime',
    },
    countdown: {
      eyebrow: 'Counting Every Blessed Moment',
      title: 'Counting down to a beautiful new beginning',
      subtitle:
        'Join us as we count down to the auspicious day in Purba Kalikapur, Trimohini, Hili.',
      days: 'Days',
      hours: 'Hours',
      minutes: 'Minutes',
      seconds: 'Seconds',
      targetLabel: '30 November 2026 • 2:00 PM IST',
      provisionalNote:
        'Ceremony countdown set to 2:00 PM IST.',
      weddingDayTitle: 'Today is the day. Please keep us in your prayers.',
      weddingDayMessage:
        'Today we celebrate the union of Shahanaj & Souvik surrounded by the love and prayers of our families.',
      pastWeddingTitle: 'Thank you for being part of our beautiful beginning.',
      pastWeddingMessage:
        'Thank you for keeping Shahanaj & Souvik in your heartfelt prayers and warm wishes.',
    },
    saveTheDate: {
      eyebrow: 'Mark Your Calendar',
      title: 'Save the Date',
      subtitle:
        'Add Shahanaj & Souvik’s wedding celebrations directly to your Google Calendar or Apple Calendar with automatic reminders.',
      selectCeremonyLabel: 'Choose Ceremony to Save',
      allCeremoniesTab: 'All 3 Days (28–30 Nov)',
      weddingTab: 'Wedding & Biday (30 Nov)',
      mehendiTab: 'Mehendi (28 Nov)',
      haldiTab: 'Haldi (29 Nov)',
      googleCalendarBtn: 'Add to Google Calendar',
      appleCalendarBtn: 'Add to Apple Calendar',
      appleCalendarSub: 'Works on iPhone, iPad, Mac & Outlook (.ics)',
      googleCalendarSub: 'Opens directly in Google Calendar',
      downloadedToast: 'Calendar file (.ics) ready! Open it to add to Apple Calendar.',
      venueNote: 'Our Home • Purba Kalikapur, Trimohini, Hili, West Bengal',
    },
    welcomeScreen: {
      bismillahArabic: 'بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ',
      bismillah: 'Bismillahir Rahmanir Rahim',
      quote: 'A beautiful beginning, blessed with love and prayers.',
      invitedBy: 'Hosted with love by Nurjjaman Mondal & Sujata Bibi',
      dateLocation: '30 November 2026 • Purba Kalikapur, Trimohini, Hili',
      openBtn: 'Open Invitation',
      skipBtn: 'Skip Intro',
    },
    personalMessage: {
      eyebrow: 'Heartfelt Invitation',
      bismillah: 'Bismillahir Rahmanir Rahim',
      body: 'With the blessings of Allah and the love of our families, we warmly invite you to celebrate this beautiful new chapter with us. Your presence and prayers will make our special day even more memorable.',
      hostsSignoff: 'Nurjjaman Mondal & Sujata Bibi (Parents of Shahanaj)',
    },
    story: {
      eyebrow: 'Two Hearts, One Sacred Bond',
      title: 'Meet the Bride & Groom',
      subtitle:
        'Stepping into a blessed lifelong journey together with the prayers of our families.',
      mainQuote:
        'Some journeys are made more beautiful when two hearts choose to walk together. With the blessings of Allah and the love of our families, we look forward to beginning this wonderful new chapter.',
      secondaryParagraph:
        'Guided by faith, mutual respect, and the warmth of our homes, we step toward a lifetime of companionship. Nothing brings us greater happiness than sharing the joy of these sacred days with our cherished relatives, friends, and loved ones.',
      brideLabel: 'The Bride',
      brideName: 'Shahanaj',
      brideParentsLine: 'Beloved daughter of Nurjjaman Mondal (Baba) & Sujata Bibi (Maa)',
      brideFamilyLine: 'Sister of Sahin Mondal (Dada) & Surovi Najmin (Bhabi) • Fupi of Arhan',
      brideBlessing:
        'Stepping into a new chapter with grace, gratitude, and the endless love of my family. Please keep us in your heartfelt prayers.',
      groomLabel: 'The Groom',
      groomName: 'Souvik',
      groomParentsLine: 'Stepping forward with love, honour, and family blessings',
      groomFamilyLine: 'Welcomed with warmth and joy by the entire Mondal family',
      groomBlessing:
        'Beginning a lifelong promise of love, mutual respect, warmth, and togetherness with Shahanaj.',
      viewPortraitHint: 'Tap portrait to view full photo',
      portraitNote: 'Together in love, faith, and family blessings • Shahanaj & Souvik',
    },
    family: {
      eyebrow: 'Hearts Behind the Celebration',
      title: 'Our Beloved Family Gallery',
      subtitle:
        'Meet Shahanaj’s loving parents, elder brother (Dada), Bhabi, and adorable Bhaipo.',
      hostsHighlightBadge: 'Gracious Wedding Hosts & Family',
      hostsHighlightTitle: 'Arranged by Nurjjaman Mondal & Sujata Bibi',
      hostsHighlightText:
        'Together with Elder Brother (Dada) Sahin Mondal, Bhabi Surovi Najmin, and little Bhaipo Arhan Mondal, parents Nurjjaman Mondal and Sujata Bibi warmly welcome you to Our Home in Purba Kalikapur, Trimohini, Hili.',
      filterAll: 'All Family',
      filterParents: 'Parents',
      filterBride: 'The Bride',
      filterBrotherFamily: 'Dada, Bhabi & Bhaipo',
      viewProfileLabel: 'View family portrait & message',
      closeModalLabel: 'Close family portrait viewer',
      configNote:
        'Click any family portrait above to view the full photograph and personal blessing.',
    },
    events: {
      eyebrow: 'Three Days of Joy & Blessings',
      title: 'Our Wedding Events',
      subtitle:
        'Each gathering is crafted with warmth, tradition, and heartfelt hospitality at our family home.',
      interactiveHint:
        'Click any ceremony card below to unlock the royal scroll & view the full celebration timeline',
      clickToExplore: 'Unfold Ceremony Details',
      timeLabel: 'Ceremony Time',
      timeToBeAnnounced: 'Time to be announced',
      venueLabel: 'Venue',
      venueValue: 'Our Home, Purba Kalikapur, Trimohini, Hili',
      addToCalendarBtn: 'Save to Google Calendar',
      modal: {
        scheduleTitle: 'Ceremony Schedule & Moments',
        highlightsTitle: 'Special Highlights',
        attireTitle: 'Suggested Palette & Atmosphere',
        hostsNoteTitle: 'A Warm Welcome from the Hosts',
        hostsNoteBody:
          'Nurjjaman Mondal & Sujata Bibi (Parents of Shahanaj) cordially invite you and your family to grace this auspicious occasion with your presence and prayers.',
        directionsBtn: 'Get Directions to Venue',
        calendarBtn: 'Add Ceremony to Calendar',
        closeLabel: 'Close ceremony scroll',
      },
      items: {
        mehendi: {
          name: 'Mehendi',
          badge: 'Day One • Afternoon of Henna',
          date: '28 November 2026',
          day: 'Saturday',
          time: 'Afternoon 4:00 PM Onwards',
          fullDateLine: '28 November 2026, Saturday • 4:00 PM',
          description:
            'An intimate celebration of intricate henna artistry, joyful family melodies, and warm laughter as the wedding festivities begin.',
          longDescription:
            'Our three-day wedding festivities begin on Saturday afternoon as hands are adorned with fragrant henna patterns. Surrounded by sisters, cousins, and cherished relatives, the courtyard comes alive with folk melodies, laughter, and traditional Bengali hospitality.',
          paletteNote: 'Emerald greens, deep plum & festive florals',
          attireSuggestion:
            'Festive ethnic wear in shades of emerald green, mehendi olive, plum, or gold.',
          highlights: [
            'Intricate Bridal & Guest Henna Artistry',
            'Traditional Family Songs & Adda',
            'Evening Tea & Festive Delicacies',
          ],
          timeline: [
            {
              time: '4:00 PM',
              title: 'Guest Welcome & Courtyard Gathering',
              detail: 'Warm welcome with refreshments at Our Home in Purba Kalikapur.',
            },
            {
              time: '4:30 PM',
              title: 'Bridal Mehendi & Henna Ceremony',
              detail: 'Adorning Shahanaj’s hands with intricate bridal henna designs.',
            },
            {
              time: '6:00 PM',
              title: 'Musical Evening & Family Feast',
              detail: 'Joyful songs, family photographs, and evening hospitality.',
            },
          ],
        },
        haldi: {
          name: 'Haldi',
          badge: 'Day Two • Golden Noon Blessings',
          date: '29 November 2026',
          day: 'Sunday',
          time: '12:00 Noon Onwards',
          fullDateLine: '29 November 2026, Sunday • 12:00 Noon',
          description:
            'A radiant noon of elders’ blessings, fragrant marigold garlands, and sunlit family traditions welcoming prosperity and joy.',
          longDescription:
            'Under the golden midday sun on Sunday, elders, parents, and loved ones gather to bless Shahanaj with auspicious turmeric, fragrant marigold petals, and heartfelt prayers for a radiant life ahead.',
          paletteNote: 'Warm marigold, champagne & antique gold',
          attireSuggestion:
            'Sunlit shades of mustard yellow, marigold, warm ivory, or champagne gold.',
          highlights: [
            'Traditional Gaye Holud & Elders’ Blessings',
            'Marigold & Jasmine Floral Decor',
            'Festive Midday Family Dawat',
          ],
          timeline: [
            {
              time: '12:00 Noon',
              title: 'Gathering of Elders & Relatives',
              detail: 'Welcoming family and friends into the marigold-draped courtyard.',
            },
            {
              time: '12:30 PM',
              title: 'Auspicious Haldi (Gaye Holud) Ritual',
              detail: 'Blessings from parents Nurjjaman Mondal & Sujata Bibi and family elders.',
            },
            {
              time: '2:00 PM',
              title: 'Festive Afternoon Hospitality',
              detail: 'Traditional Bengali lunch and joyful family portraits.',
            },
          ],
        },
        nikah: {
          name: 'Wedding / Nikah & Biday',
          badge: 'Main Ceremony • Sacred Union & Biday',
          date: '30 November 2026',
          day: 'Monday',
          time: 'Afternoon 2:00 PM Onwards',
          fullDateLine: '30 November 2026, Monday • 2:00 PM Onwards',
          description:
            'The auspicious Wedding, Nikah & Bridal Farewell (Biday) celebration as Shahanaj begins her new journey with Souvik, surrounded by family prayers and hospitality.',
          longDescription:
            'Starting at 2:00 PM on Monday at Our Home, our families unite in prayer, celebration, and a grand wedding feast — culminating in the heartfelt Bridal Farewell (Biday Onushthan) as Shahanaj & Souvik step into their new life together.',
          paletteNote: 'Royal burgundy, warm ivory & antique gold',
          attireSuggestion:
            'Royal traditional attire in burgundy, crimson, champagne ivory, or antique gold.',
          highlights: [
            'Grand Welcome & Guest Reception',
            'Sacred Blessings, Dua & Couple Reception',
            'Shahi Wedding Dawat (Feast)',
            'Heartfelt Biday Onushthan (Bridal Farewell)',
          ],
          timeline: [
            {
              time: '2:00 PM',
              title: 'Grand Welcome & Guest Reception',
              detail: 'Receiving the groom’s party and honoured guests at Our Home.',
            },
            {
              time: '3:00 PM',
              title: 'Sacred Ceremony, Dua & Blessings',
              detail: 'Heartfelt prayers and blessings for Shahanaj & Souvik’s union.',
            },
            {
              time: '4:00 PM',
              title: 'Grand Wedding Dawat (Feast)',
              detail: 'A celebratory wedding feast hosted by Nurjjaman Mondal & Sujata Bibi.',
            },
            {
              time: '5:30 PM',
              title: 'Biday Onushthan (Bridal Send-Off)',
              detail: 'An emotional farewell filled with parents’ prayers and family blessings.',
            },
          ],
        },
      },
    },
    invitation: {
      eyebrow: 'Cordial Invitation',
      title: 'Wedding & Bridal Farewell (Biday) Invitation',
      bismillah: 'In the Name of Allah, the Entirely Merciful, the Especially Merciful',
      envelopeBadge: 'Sealed Royal Invitation',
      envelopeToLine: 'To Our Honoured Guests, Family & Friends',
      envelopeFromLine: 'From: Nurjjaman Mondal & Sujata Bibi',
      tapToOpenBtn: 'Tap the Golden Seal to Open Invitation Letter',
      openingText: 'Unsealing Royal Invitation...',
      foldBackBtn: 'Seal Back in Envelope',
      closeLetterLabel: 'Close invitation letter',
      hostsIntro:
        'Mrs. Sujata Bibi & Mr. Nurjjaman Mondal cordially request the honour of your presence and blessings',
      paragraph1:
        'Together with the blessings of Allah and the love of our families, we warmly invite you to join us as we celebrate the Wedding & Bridal Farewell (Biday) of Shahanaj & Souvik.',
      paragraph2:
        'Your presence, prayers, and blessings will make our special day even more meaningful.',
      hostsLabel: 'With Best Compliments & Warm Regards From',
      hostsNames: 'Nurjjaman Mondal & Sujata Bibi',
      hostsRelation:
        'Parents of Shahanaj • Dada Sahin Mondal, Bhabi Surovi Najmin, Little Bhaipo Arhan Mondal & Entire Mondal Family',
      signoffLabel: 'Awaiting your gracious presence',
      signoffNames: 'Shahanaj & Souvik',
      dateHighlight: '28 – 30 November 2026',
      venueHighlight: 'Our Home • Purba Kalikapur, Trimohini, Hili, West Bengal',
      shareBtn: 'Share Invitation',
      whatsappBtn: 'Share on WhatsApp',
      copiedBtn: 'Invitation Link Copied!',
    },
    gallery: {
      eyebrow: 'Cherished Moments Together',
      title: 'Beautiful Memories',
      subtitle:
        'Special wedding portraits and cherished moments of Shahanaj & Souvik.',
      placeholderNotice:
        'Tap any photograph to open full screen • Swipe left or right on mobile.',
      filterAll: 'All Moments',
      featuredBadge: 'Featured Frame',
      openLightboxLabel: 'View full-size photograph',
      lightboxClose: 'Close gallery viewer',
      lightboxPrev: 'Previous photograph',
      lightboxNext: 'Next photograph',
      lightboxCounter: 'Photograph',
      of: 'of',
      swipeHint: 'Swipe left or right to browse photos',
    },
    venue: {
      eyebrow: 'Destination & Hospitality',
      title: 'Where We Celebrate',
      subtitle:
        'We look forward to welcoming you with open hearts at our family residence in Hili, West Bengal.',
      venueLabel: 'Celebration Venue',
      venueName: 'Our Home',
      hostsLine: 'Residence of Nurjjaman Mondal & Sujata Bibi',
      addressLabel: 'Address',
      addressFull: 'Purba Kalikapur, Trimohini, Hili, West Bengal, India',
      localityTag: 'Purba Kalikapur • Trimohini • Hili',
      datesLabel: 'Celebration Dates',
      datesValue: '28, 29 & 30 November 2026',
      getDirectionsBtn: 'Open in Google Maps',
      directionsPendingNote:
        'Exact map coordinates and live Google Maps directions will be activated here once verified.',
      mapPlaceholderTitle: 'Interactive Map & Exact Pin Coming Soon',
      mapPlaceholderBody:
        'The celebration will take place at Our Home in Purba Kalikapur, Trimohini, Hili, West Bengal, India. A verified Google Maps pin will be linked here prior to the wedding dates.',
      copyAddressBtn: 'Copy Address',
      addressCopiedBtn: 'Address Copied!',
      viewFullHouseBtn: 'Tap to View Full House & Exact Location Details',
      closeModalLabel: 'Close venue details',
      detailedBreakdownTitle: 'Complete Address & Location Breakdown',
      villageLabel: 'Village / Area',
      villageValue: 'Purba Kalikapur',
      localityLabel: 'Locality / Landmark',
      localityValue: 'Trimohini, Hili',
      districtLabel: 'District & State',
      districtValue: 'Dakshin Dinajpur, West Bengal, India',
      coordinatesLabel: 'Exact GPS Coordinates',
      coordinatesValue: '25.294086° N, 88.958289° E',
      allCeremoniesNote:
        'All three ceremonies — Mehendi (28 Nov), Haldi (29 Nov), and Wedding / Nikah & Biday (30 Nov) — will be celebrated here at Our Home.',
    },
    rsvp: {
      eyebrow: 'Blessings & Attendance',
      title: 'Send Your Blessings',
      subtitle:
        'Send a heartfelt prayer (Dua) or let us know if you can join us in person via WhatsApp.',
      whatsappBanner:
        'Direct WhatsApp RSVP: Your wishes and attendance details are sent directly on WhatsApp to Wedding Host Nurjjaman Mondal (+91 94741 38682).',
      quickActionsTitle: 'Quick One-Tap WhatsApp Options',
      quickBlessingBtn: 'Send a Blessing via WhatsApp',
      quickRsvpBtn: 'RSVP / Let Us Know If You Can Join',
      customFormTitle: 'Or Personalize Your RSVP & Message Below',
      nameLabel: 'Your Full Name',
      namePlaceholder: 'Enter your name',
      guestsLabel: 'Number of Guests',
      guestOptions: {
        one: '1 Guest',
        two: '2 Guests',
        three: '3 Guests',
        four: '4 Guests',
        family: '5+ (Family)',
      },
      attendanceLabel: 'Will You Be Attending?',
      attendingYes: 'Joyfully Attending',
      attendingPrayers: 'Sending Blessings & Prayers from Afar',
      messageLabel: 'Your Blessings or Message (Optional)',
      messagePlaceholder: 'Write a warm note or prayer for Shahanaj & Souvik...',
      submitBtn: 'Send Wishes & RSVP on WhatsApp',
      resendWhatsappBtn: 'Open in WhatsApp Again',
      successTitle: 'JazakAllah Khair — Opening WhatsApp!',
      successMessage:
        'Your RSVP and warm wishes have been prepared for Nurjjaman Mondal (+91 94741 38682) on WhatsApp. Please tap Send in WhatsApp to complete!',
      resetBtn: 'Edit Response',
      requiredError: 'Please enter your name before submitting.',
    },
    closing: {
      eyebrow: 'With Heartfelt Gratitude',
      quote: 'Your presence and prayers are the greatest gift we could ask for.',
      coupleNames: 'Shahanaj & Souvik',
      hostsLine: 'Nurjjaman Mondal & Sujata Bibi and the Entire Mondal Family',
      shareBtn: 'Share Invitation',
      whatsappShareBtn: 'Share on WhatsApp',
      copiedToast: 'Invitation link copied to clipboard!',
    },
    footer: {
      gratitudeQuote: 'With love and gratitude, Shahanaj & Souvik',
      hostedByFooter: 'Hosted by Nurjjaman Mondal & Sujata Bibi (Parents of Shahanaj)',
      coupleNames: 'Shahanaj & Souvik',
      date: '30 November 2026',
      locality: 'Our Home • Purba Kalikapur, Trimohini, Hili, West Bengal, India',
      quickLinksTitle: 'Quick Navigation',
      celebrationSummaryTitle: 'Celebration Schedule',
      backToTop: 'Back to Top',
      copyright: 'Crafted with love for the wedding of Shahanaj & Souvik • 2026',
    },
    accessibility: {
      skipToContent: 'Skip to main content',
      decorativeMotif: 'Decorative Islamic geometric and floral ornament',
    },
  },

  bn: {
    meta: {
      title: 'শাহানাজ ও সৌভিক | বিবাহের আমন্ত্রণপত্র',
    },
    navigation: {
      home: 'প্রথম পাতা',
      story: 'আমাদের কথা',
      family: 'পরিবার পরিচিতি',
      events: 'অনুষ্ঠানসূচি',
      gallery: 'ছবিঘর',
      venue: 'অনুষ্ঠানস্থল',
      invitationBtn: 'আমন্ত্রণপত্র',
      rsvpBtn: 'শুভেচ্ছা ও উপস্থিতি',
      openMenu: 'নেভিগেশন মেনু খুলুন',
      closeMenu: 'নেভিগেশন মেনু বন্ধ করুন',
      switchLanguageLabel: 'ওয়েবসাইটের ভাষা পরিবর্তন করুন',
    },
    hero: {
      bismillah: 'পরম করুণাময় ও অসীম দয়ালু আল্লাহর নামে',
      hostedByLabel: 'সাদর আমন্ত্রণে ও সার্বিক আয়োজনে',
      hostedByNames: 'নূরজ্জামান মণ্ডল ও সুজাতা বিবি',
      hostedByRole: '(শাহানাজের পিতা ও মাতা)',
      invitationLead:
        'হৃদয়ভরা আনন্দ এবং পরিবারের দোয়া ও ভালোবাসাকে সঙ্গে নিয়ে আমরা আপনাদের সাদর আমন্ত্রণ জানাচ্ছি শুভ বিবাহ ও বিদায় অনুষ্ঠানে',
      coupleNames: 'শাহানাজ ও সৌভিক',
      brideName: 'শাহানাজ',
      groomName: 'সৌভিক',
      tagline: 'দুটি হৃদয়, এক সুন্দর পথচলা।',
      date: '৩০ নভেম্বর ২০২৬',
      location: 'পূর্ব কালিকাপুর, ত্রিমোহিনী, হিলি',
      openInvitationBtn: 'আমন্ত্রণপত্র খুলুন',
      exploreEventsBtn: 'অনুষ্ঠানসূচি দেখুন',
      nikahBadge: 'শুভ বিবাহ ও বিদায় অনুষ্ঠান',
      portraitCaption: 'দুটি হৃদয়, এক পবিত্র বন্ধন • ৩০ নভেম্বর ২০২৬',
      soundPlay: 'মৃদু আবহ সুর চালু করুন',
      soundMute: 'আবহ সুর বন্ধ করুন',
    },
    countdown: {
      eyebrow: 'শুভক্ষণের প্রতীক্ষা',
      title: 'একটি সুন্দর নতুন সূচনার ক্ষণগণনা',
      subtitle:
        'পূর্ব কালিকাপুর, ত্রিমোহিনী, হিলিতে আমাদের এই আনন্দঘন দিনের ক্ষণগণনায় শামিল হোন।',
      days: 'দিন',
      hours: 'ঘণ্টা',
      minutes: 'মিনিট',
      seconds: 'সেকেন্ড',
      targetLabel: '৩০ নভেম্বর ২০২৬ • দুপুর ২:০০ ঘটিকা (IST)',
      provisionalNote:
        'ক্ষণগণনাটি দুপুর ২:০০ ঘটিকা (IST) অনুযায়ী নির্ধারিত।',
      weddingDayTitle: 'আজ সেই শুভ দিন। আমাদের জন্য আপনাদের আন্তরিক দোয়া কামনা করি।',
      weddingDayMessage:
        'পরিবারের দোয়া ও ভালোবাসায় আজ আমরা শাহানাজ ও সৌভিকের শুভ পরিণয় উদযাপন করছি।',
      pastWeddingTitle: 'আমাদের এই সুন্দর সূচনার অংশীদার হওয়ার জন্য আপনাদের আন্তরিক ধন্যবাদ।',
      pastWeddingMessage:
        'শাহানাজ ও সৌভিককে আপনাদের আন্তরিক দোয়া ও ভালোবাসায় রাখার জন্য অশেষ কৃতজ্ঞতা।',
    },
    saveTheDate: {
      eyebrow: 'দিনটি স্মরণে রাখুন',
      title: 'ক্যালেন্ডারে দিনটি সংরক্ষণ করুন (Save the Date)',
      subtitle:
        'স্বয়ংক্রিয় রিমাইন্ডারসহ শাহানাজ ও সৌভিকের বিবাহের অনুষ্ঠানসূচি আপনার গুগল ক্যালেন্ডার অথবা অ্যাপল ক্যালেন্ডারে যুক্ত করুন।',
      selectCeremonyLabel: 'কোন অনুষ্ঠানটি সংরক্ষণ করতে চান নির্বাচন করুন',
      allCeremoniesTab: 'সম্পূর্ণ ৩ দিন (২৮–৩০ নভেম্বর)',
      weddingTab: 'বিবাহ ও বিদায় (৩০ নভেম্বর)',
      mehendiTab: 'মেহেন্দি (২৮ নভেম্বর)',
      haldiTab: 'হলুদ (২৯ নভেম্বর)',
      googleCalendarBtn: 'গুগল ক্যালেন্ডারে যুক্ত করুন',
      appleCalendarBtn: 'অ্যাপল ক্যালেন্ডারে যুক্ত করুন',
      appleCalendarSub: 'আইফোন, আইপ্যাড, ম্যাক ও আউটলুকে সমর্থিত (.ics)',
      googleCalendarSub: 'সরাসরি গুগল ক্যালেন্ডার অ্যাপে খুলবে',
      downloadedToast: 'ক্যালেন্ডার ফাইল (.ics) ডাউনলোড হয়েছে! অ্যাপল ক্যালেন্ডারে যোগ করতে ফাইলটি খুলুন।',
      venueNote: 'নিজ বাসস্থান • পূর্ব কালিকাপুর, ত্রিমোহিনী, হিলি, পশ্চিমবঙ্গ',
    },
    welcomeScreen: {
      bismillahArabic: 'بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ',
      bismillah: 'বিসমিল্লাহির রাহমানির রাহিম',
      quote: 'ভালোবাসা ও দোয়ার আশীর্বাদে শুরু হোক নতুন এক পথচলা।',
      invitedBy: 'সাদর আমন্ত্রণে: নূরজ্জামান মণ্ডল ও সুজাতা বিবি',
      dateLocation: '৩০ নভেম্বর ২০২৬ • পূর্ব কালিকাপুর, ত্রিমোহিনী, হিলি',
      openBtn: 'আমন্ত্রণপত্র খুলুন',
      skipBtn: 'সরাসরি প্রবেশ করুন',
    },
    personalMessage: {
      eyebrow: 'আন্তরিক আমন্ত্রণ',
      bismillah: 'বিসমিল্লাহির রাহমানির রাহিম',
      body: 'আল্লাহর অশেষ রহমত ও আমাদের পরিবারের ভালোবাসায় শুরু হতে যাচ্ছে জীবনের নতুন এক অধ্যায়। আপনাদের উপস্থিতি ও দোয়া আমাদের এই বিশেষ দিনকে আরও আনন্দময় করে তুলবে।',
      hostsSignoff: 'নূরজ্জামান মণ্ডল ও সুজাতা বিবি (শাহানাজের পিতা ও মাতা)',
    },
    story: {
      eyebrow: 'দুটি হৃদয়, এক পবিত্র বন্ধন',
      title: 'কনে ও বরের পরিচিতি',
      subtitle:
        'পরিবারের দোয়া ও ভালোবাসাকে পাথেয় করে নতুন জীবনের পথে শাহানাজ ও সৌভিক।',
      mainQuote:
        'কিছু পথচলা আরও সুন্দর হয়ে ওঠে যখন দুটি হৃদয় একসাথে চলার অঙ্গীকার করে। আল্লাহর অশেষ রহমত এবং আমাদের দুই পরিবারের ভালোবাসাকে পাথেয় করে আমরা জীবনের এই নতুন অধ্যায় শুরু করতে চলেছি।',
      secondaryParagraph:
        'বিশ্বাস, পারস্পরিক শ্রদ্ধা এবং পারিবারিক স্নেহের ছায়ায় আমরা এক নতুন জীবনের পথে পা বাড়াচ্ছি। আমাদের এই পবিত্র ও আনন্দময় মুহূর্তগুলো আত্মীয়-স্বজন, বন্ধু-বান্ধব এবং প্রিয়জনদের সঙ্গে ভাগ করে নেওয়ার চেয়ে বড় আনন্দ আর কিছু হতে পারে না।',
      brideLabel: 'বিবাহের কনে',
      brideName: 'শাহানাজ',
      brideParentsLine: 'নূরজ্জামান মণ্ডল (বাবা) ও সুজাতা বিবি (মা)-এর আদরের কন্যা',
      brideFamilyLine: 'সাহিন মণ্ডল (দাদা) ও সুরভী নাজমিন (ভাবি)-এর স্নেহের বোন • ছোট্ট আরহানের ফুপি',
      brideBlessing:
        'পরিবারের সকলের অকৃত্রিম ভালোবাসা ও দোয়া নিয়ে জীবনের নতুন অধ্যায়ে পা রাখছি। আমাদের জন্য দোয়া করবেন।',
      groomLabel: 'বিবাহের বর',
      groomName: 'সৌভিক',
      groomParentsLine: 'ভালোবাসা, শ্রদ্ধা ও পরিবারের আশীর্বাদে নতুন জীবনের পথে',
      groomFamilyLine: 'সমগ্র মণ্ডল পরিবারের স্নেহ ও আন্তরিকতায় বরণীয়',
      groomBlessing:
        'ভালোবাসা, পারস্পরিক শ্রদ্ধা ও আজীবন একসাথে পথ চলার পবিত্র অঙ্গীকার নিয়ে নতুন জীবন শুরু।',
      viewPortraitHint: 'সম্পূর্ণ ছবি দেখতে ক্লিক করুন',
      portraitNote: 'ভালোবাসা, বিশ্বাস ও পরিবারের দোয়ায় একসাথে • শাহানাজ ও সৌভিক',
    },
    family: {
      eyebrow: 'আমাদের প্রিয়জন ও অভিভাবকবৃন্দ',
      title: 'আমাদের পারিবারিক অ্যালবাম',
      subtitle:
        'শাহানাজের পিতা-মাতা, বড় ভাই (দাদা) সাহিন মণ্ডল, ভাবি সুরভী নাজমিন এবং আদরের ভাইপো আরহান মণ্ডলের পরিচিতি।',
      hostsHighlightBadge: 'প্রধান আমন্ত্রণকারী ও পরিবার',
      hostsHighlightTitle: 'আয়োজনে: নূরজ্জামান মণ্ডল ও সুজাতা বিবি',
      hostsHighlightText:
        'পিতা নূরজ্জামান মণ্ডল ও মাতা সুজাতা বিবি-র সাথে বড় ভাই (দাদা) সাহিন মণ্ডল, ভাবি সুরভী নাজমিন এবং ছোট্ট ভাইপো আরহান মণ্ডল — পূর্ব কালিকাপুর, ত্রিমোহিনী, হিলির নিজ বাসস্থানে আপনাদের সকলকে সপরিবারে সাদর আমন্ত্রণ জানাচ্ছেন।',
      filterAll: 'সকল সদস্য',
      filterParents: 'পিতা ও মাতা',
      filterBride: 'কনে (শাহানাজ)',
      filterBrotherFamily: 'দাদা, ভাবি ও ভাইপো',
      viewProfileLabel: 'পরিবারের সদস্যের ছবি ও বার্তা দেখুন',
      closeModalLabel: 'উইন্ডো বন্ধ করুন',
      configNote:
        'যেকোনো ছবিতে ক্লিক করে পরিবারের সদস্যের সম্পূর্ণ ছবি ও শুভেচ্ছা বার্তা দেখুন।',
    },
    events: {
      eyebrow: 'তিন দিনের আনন্দ ও দোয়ার আয়োজন',
      title: 'আমাদের বিবাহের অনুষ্ঠানসূচি',
      subtitle:
        'আমাদের নিজ বাসস্থানে ঐতিহ্য, আন্তরিকতা ও স্নেহের ছোঁয়ায় সাজানো হয়েছে প্রতিটি পর্ব।',
      interactiveHint:
        'যেকোনো অনুষ্ঠান কার্ডে ক্লিক করে রাজকীয় আমন্ত্রণপত্রটি খুলুন এবং বিস্তারিত সময়সূচি ও বিশেষ আকর্ষণ দেখুন',
      clickToExplore: 'অনুষ্ঠানের বিস্তারিত দেখুন',
      timeLabel: 'অনুষ্ঠানের সময়',
      timeToBeAnnounced: 'সময় পরে জানানো হবে',
      venueLabel: 'স্থান',
      venueValue: 'নিজ বাসস্থান, পূর্ব কালিকাপুর, ত্রিমোহিনী, হিলি',
      addToCalendarBtn: 'গুগল ক্যালেন্ডারে যুক্ত করুন',
      modal: {
        scheduleTitle: 'অনুষ্ঠানের বিস্তারিত সময়সূচি',
        highlightsTitle: 'অনুষ্ঠানের বিশেষ আকর্ষণ',
        attireTitle: 'রঙের আবহ ও পোশাকের অনুপ্রেরণা',
        hostsNoteTitle: 'আমন্ত্রণকারীদের আন্তরিক বার্তা',
        hostsNoteBody:
          'নূরজ্জামান মণ্ডল ও সুজাতা বিবি (শাহানাজের পিতা ও মাতা) আপনাদের সকলকে সপরিবারে উপস্থিত থেকে এই আনন্দঘন মুহূর্তগুলোকে সার্থক ও বরকতময় করে তোলার জন্য বিনীত অনুরোধ জানাচ্ছেন।',
        directionsBtn: 'অনুষ্ঠানস্থলের দিকনির্দেশনা',
        calendarBtn: 'ক্যালেন্ডারে যুক্ত করুন',
        closeLabel: 'বিস্তারিত ভিউ বন্ধ করুন',
      },
      items: {
        mehendi: {
          name: 'মেহেন্দি',
          badge: 'প্রথম দিন • মেহেন্দি বিকেল ও সন্ধ্যা',
          date: '২৮ নভেম্বর ২০২৬',
          day: 'শনিবার',
          time: 'বিকেল ৪:০০ ঘটিকা হতে',
          fullDateLine: '২৮ নভেম্বর ২০২৬, শনিবার • বিকেল ৪:০০টা',
          description:
            'হাতে মেহেন্দির আলপনা, পরিবারের প্রিয়জনদের হাসিমুখ আর আনন্দঘন গানের সুরে আমাদের বিবাহ উৎসবের শুভ সূচনা।',
          longDescription:
            'শনিবার বিকেল ৪:০০ ঘটিকা হতে আমাদের তিন দিনের বিবাহ উৎসবের সূচনা হবে। মেহেন্দির রঙিন আলপনা, ভাই-বোন ও আত্মীয়দের প্রাণখোলা হাসি-আনন্দ এবং ঘরোয়া আপ্যায়নে মুখরিত হয়ে উঠবে আমাদের বাড়ির আঙিনা।',
          paletteNote: 'মেহেন্দি সবুজ, গাঢ় মেরুন ও পুষ্পসজ্জা',
          attireSuggestion:
            'পোশাকের রঙ হিসেবে মেহেন্দি সবুজ, পান্না সবুজ, মেরুন বা সোনালী রঙ বেছে নিতে পারেন।',
          highlights: [
            'কনে ও অতিথিদের হাতে মেহেন্দির আলপনা',
            'পারিবারিক আনন্দ আড্ডা ও সুরের আসর',
            'বিকেলের চা ও উৎসবের মিষ্টিমুখ',
          ],
          timeline: [
            {
              time: 'বিকেল ৪:০০টা',
              title: 'অতিথি অভ্যর্থনা ও শুভেচ্ছা বিনিময়',
              detail: 'পূর্ব কালিকাপুরের নিজ বাসস্থানে প্রিয়জনদের স্বাগত জানানো ও আপ্যায়ন।',
            },
            {
              time: 'বিকেল ৪:৩০টা',
              title: 'কনের মেহেন্দি ও আলপনা পর্ব',
              detail: 'শাহানাজের হাতে নিখুঁত মেহেন্দির নকশা ও আনন্দঘন মুহূর্ত।',
            },
            {
              time: 'সন্ধ্যা ৬:০০টা',
              title: 'গানের আসর ও সান্ধ্য প্রীতিভোজ',
              detail: 'পরিবারের সকলের সাথে ছবি তোলা, গান ও সান্ধ্যকালীন আপ্যায়ন।',
            },
          ],
        },
        haldi: {
          name: 'হলুদ',
          badge: 'দ্বিতীয় দিন • গায়ে হলুদ ও আশীর্বাদ',
          date: '২৯ নভেম্বর ২০২৬',
          day: 'রবিবার',
          time: 'দুপুর ১২:০০ ঘটিকা হতে',
          fullDateLine: '২৯ নভেম্বর ২০২৬, রবিবার • দুপুর ১২:০০টা',
          description:
            'গুরুজনদের স্নেহমাখা দোয়া, গাঁদা ফুলের মালা এবং উজ্জ্বল পারিবারিক ঐতিহ্যে ভরা এক আনন্দমুখর দুপুর।',
          longDescription:
            'রবিবার দুপুর ১২:০০ ঘটিকায় মিষ্টি রোদে গাঁদা ফুলের মালা ও কাঁচা হলুদের ছোঁয়ায় শুরু হবে গায়ে হলুদ পর্ব। পিতা-মাতা ও মুরুব্বিদের স্নেহমাখা দোয়া ও আশীর্বাদে উজ্জ্বল হয়ে উঠবে এই বিশেষ দিনটি।',
          paletteNote: 'কাঁচা হলুদ, শ্যাম্পেইন ও অ্যান্টিক গোল্ড',
          attireSuggestion:
            'পোশাকের রঙ হিসেবে বাসন্তী হলুদ, গাঁদা ফুলের রঙ, আইভরি বা সোনালী রঙ বেছে নিতে পারেন।',
          highlights: [
            'ঐতিহ্যবাহী গায়ে হলুদ ও গুরুজনদের দোয়া',
            'গাঁদা ও বেলি ফুলের নান্দনিক সাজসজ্জা',
            'দুপুরের পারিবারিক প্রীতিভোজ ও আনন্দোৎসব',
          ],
          timeline: [
            {
              time: 'দুপুর ১২:০০টা',
              title: 'মুরুব্বি ও আত্মীয়-স্বজনের আগমন',
              detail: 'ফুল দিয়ে সাজানো বিবাহ প্রাঙ্গণে অতিথিদের সাদর অভ্যর্থনা।',
            },
            {
              time: 'দুপুর ১২:৩০টা',
              title: 'শুভ গায়ে হলুদ ও দোয়া পর্ব',
              detail: 'পিতা নূরজ্জামান মণ্ডল, মাতা সুজাতা বিবি এবং গুরুজনদের স্নেহের আশীর্বাদ।',
            },
            {
              time: 'দুপুর ২:০০টা',
              title: 'দুপুরের প্রীতিভোজ ও ফটোসেশন',
              detail: 'সকল আত্মীয় ও প্রিয়জনদের সাথে আনন্দমুখর মধ্যাহ্নভোজ।',
            },
          ],
        },
        nikah: {
          name: 'বিবাহ / নিকাহ ও বিদায় অনুষ্ঠান',
          badge: 'মূল অনুষ্ঠান • পবিত্র নিকাহ ও বিদায়',
          date: '৩০ নভেম্বর ২০২৬',
          day: 'সোমবার',
          time: 'দুপুর ২:০০ ঘটিকা হতে',
          fullDateLine: '৩০ নভেম্বর ২০২৬, সোমবার • দুপুর ২:০০টা হতে',
          description:
            'পরিবার ও প্রিয়জনদের স্নেহ, ভালোবাসা ও নেক দোয়ার ছায়ায় শাহানাজ ও সৌভিকের শুভ বিবাহ, নিকাহ ও বিদায় অনুষ্ঠান।',
          longDescription:
            'সোমবার দুপুর ২:০০ ঘটিকা হতে আমাদের নিজ বাসস্থানে শুরু হবে মূল বিবাহ, নিকাহ ও বিদায় অনুষ্ঠান। বরযাত্রী অভ্যর্থনা, বিশেষ দোয়া ও শাহী দাওয়াতের পর পিতা-মাতার অশ্রুসিক্ত দোয়া ও ভালোবাসায় সম্পন্ন হবে কনের বিদায় অনুষ্ঠান।',
          paletteNote: 'রাজকীয় বারগান্ডি, উষ্ণ আইভরি ও অ্যান্টিক গোল্ড',
          attireSuggestion:
            'রাজকীয় বারগান্ডি, গাঢ় মেরুন, শ্যাম্পেইন আইভরি ও সোনালী ঐতিহ্যবাহী পোশাক।',
          highlights: [
            'বরযাত্রী ও অতিথিদের রাজকীয় অভ্যর্থনা',
            'পবিত্র নিকাহ, দোয়া ও নবদম্পতিকে আশীর্বাদ',
            'শাহী প্রীতিভোজ ও দাওয়াত',
            'আবেগঘন বিদায় অনুষ্ঠান ও নতুন জীবনের পথচলা',
          ],
          timeline: [
            {
              time: 'দুপুর ২:০০টা',
              title: 'বরযাত্রী ও অতিথি অভ্যর্থনা',
              detail: 'পূর্ব কালিকাপুরের নিজ বাসস্থানে বর ও আমন্ত্রিত অতিথিদের সাদর বরণ।',
            },
            {
              time: 'দুপুর ৩:০০টা',
              title: 'পবিত্র নিকাহ, দোয়া ও শুভেচ্ছা বিনিময়',
              detail: 'শাহানাজ ও সৌভিকের দাম্পত্য জীবনের কল্যাণ কামনায় বিশেষ দোয়া।',
            },
            {
              time: 'বিকেল ৪:০০টা',
              title: 'শাহী প্রীতিভোজ (দাওয়াত)',
              detail: 'নূরজ্জামান মণ্ডল ও সুজাতা বিবির আতিথেয়তায় প্রীতিভোজ।',
            },
            {
              time: 'বিকেল ৫:৩০টা',
              title: 'শুভ বিদায় অনুষ্ঠান',
              detail: 'পিতা-মাতা ও পরিবারের অশ্রুসিক্ত দোয়া ও ভালোবাসার সাথে কনের বিদায় পর্ব।',
            },
          ],
        },
      },
    },
    invitation: {
      eyebrow: 'সাদর আমন্ত্রণ',
      title: 'শুভ বিবাহ ও বিদায় অনুষ্ঠানের আমন্ত্রণ',
      bismillah: 'পরম করুণাময় ও অসীম দয়ালু আল্লাহর নামে শুরু করছি',
      envelopeBadge: 'রাজকীয় সিলমোহরযুক্ত আমন্ত্রণপত্র',
      envelopeToLine: 'শ্রদ্ধেয় অতিথি, আত্মীয়-স্বজন ও প্রিয়জনদের প্রতি',
      envelopeFromLine: 'প্রেরক: নূরজ্জামান মণ্ডল ও সুজাতা বিবি',
      tapToOpenBtn: 'সোনালী সিলমোহরে ক্লিক করে আমন্ত্রণপত্রটি খুলুন',
      openingText: 'রাজকীয় আমন্ত্রণপত্র খোলা হচ্ছে...',
      foldBackBtn: 'আবার খামে ভাঁজ করে রাখুন',
      closeLetterLabel: 'আমন্ত্রণপত্র বন্ধ করুন',
      hostsIntro:
        'জনাব নূরজ্জামান মণ্ডল ও মোসাম্মৎ সুজাতা বিবি-র পক্ষ থেকে সাদর আমন্ত্রণ ও দোয়ার আবেদন',
      paragraph1:
        'আল্লাহর রহমত ও পরিবারের ভালোবাসাকে সঙ্গে নিয়ে আমরা শাহানাজ ও সৌভিকের শুভ বিবাহ ও বিদায় অনুষ্ঠানে আপনাদের সাদর আমন্ত্রণ জানাচ্ছি।',
      paragraph2:
        'আপনাদের উপস্থিতি, দোয়া ও আশীর্বাদ আমাদের এই বিশেষ দিনটিকে আরও আনন্দময় করে তুলবে।',
      hostsLabel: 'বিনীত নিবেদক ও আমন্ত্রণকারী',
      hostsNames: 'নূরজ্জামান মণ্ডল ও সুজাতা বিবি',
      hostsRelation:
        'শাহানাজের পিতা ও মাতা • দাদা সাহিন মণ্ডল, ভাবি সুরভী নাজমিন, ছোট্ট ভাইপো আরহান মণ্ডল ও সমগ্র মণ্ডল পরিবার',
      signoffLabel: 'আপনাদের শুভ আগমনের প্রতীক্ষায়',
      signoffNames: 'শাহানাজ ও সৌভিক',
      dateHighlight: '২৮ – ৩০ নভেম্বর ২০২৬',
      venueHighlight: 'নিজ বাসস্থান • পূর্ব কালিকাপুর, ত্রিমোহিনী, হিলি, পশ্চিমবঙ্গ',
      shareBtn: 'আমন্ত্রণ লিংক কপি করুন',
      whatsappBtn: 'হোয়াটসঅ্যাপে আমন্ত্রণ পাঠান',
      copiedBtn: 'আমন্ত্রণ লিংক কপি হয়েছে!',
    },
    gallery: {
      eyebrow: 'ভালোবাসা ও স্মৃতির অ্যালবাম',
      title: 'মধুর স্মৃতিসমূহ',
      subtitle:
        'শাহানাজ ও সৌভিকের বিবাহের বিশেষ মুহূর্ত ও আলোকচিত্র।',
      placeholderNotice:
        'যেকোনো ছবির ওপর ট্যাপ করে পূর্ণ পর্দায় দেখুন • মোবাইলে ডানে বা বামে সোয়াইপ করুন।',
      filterAll: 'সকল মুহূর্ত',
      featuredBadge: 'বিশেষ আলোকচিত্র',
      openLightboxLabel: 'বড় করে ছবি দেখুন',
      lightboxClose: 'ছবিঘর ভিউয়ার বন্ধ করুন',
      lightboxPrev: 'পূর্ববর্তী ছবি',
      lightboxNext: 'পরবর্তী ছবি',
      lightboxCounter: 'আলোকচিত্র',
      of: '/',
      swipeHint: 'পরবর্তী ছবি দেখতে ডানে বা বামে সোয়াইপ করুন',
    },
    venue: {
      eyebrow: 'ঠিকানা ও আতিথেয়তা',
      title: 'অনুষ্ঠানস্থল',
      subtitle:
        'পশ্চিমবঙ্গের হিলিতে আমাদের নিজ বাসস্থানে আপনাদের সাদর অভ্যর্থনা জানাতে আমরা অধীর আগ্রহে অপেক্ষা করছি।',
      venueLabel: 'অনুষ্ঠানস্থল',
      venueName: 'নিজ বাসস্থান',
      hostsLine: 'নূরজ্জামান মণ্ডল ও সুজাতা বিবির বাসভবন',
      addressLabel: 'ঠিকানা',
      addressFull: 'পূর্ব কালিকাপুর, ত্রিমোহিনী, হিলি, পশ্চিমবঙ্গ',
      localityTag: 'পূর্ব কালিকাপুর • ত্রিমোহিনী • হিলি',
      datesLabel: 'অনুষ্ঠানের তারিখ',
      datesValue: '২৮, ২৯ ও ৩০ নভেম্বর ২০২৬',
      getDirectionsBtn: 'গুগল ম্যাপসে খুলুন',
      directionsPendingNote:
        'যাচাইকৃত গুগল ম্যাপস লোকেশন সংযোজিত হলেই এখান থেকে সরাসরি দিকনির্দেশনা দেখা যাবে।',
      mapPlaceholderTitle: 'গুগল ম্যাপস লোকেশন শীঘ্রই যুক্ত হবে',
      mapPlaceholderBody:
        'বিবাহের সকল অনুষ্ঠান আমাদের নিজ বাসস্থান — পূর্ব কালিকাপুর, ত্রিমোহিনী, হিলি, পশ্চিমবঙ্গ-এ অনুষ্ঠিত হবে। অনুষ্ঠানের পূর্বে এখানে নির্ভুল ম্যাপ লোকেশন যুক্ত করা হবে।',
      copyAddressBtn: 'ঠিকানা কপি করুন',
      addressCopiedBtn: 'ঠিকানা কপি হয়েছে!',
      viewFullHouseBtn: 'বাড়ির সম্পূর্ণ ছবি ও বিস্তারিত ঠিকানা দেখতে ক্লিক করুন',
      closeModalLabel: 'বিস্তারিত ভিউ বন্ধ করুন',
      detailedBreakdownTitle: 'সম্পূর্ণ ঠিকানা ও লোকেশন বিবরণ',
      villageLabel: 'গ্রাম / এলাকা',
      villageValue: 'পূর্ব কালিকাপুর',
      localityLabel: 'স্থান / বাজার',
      localityValue: 'ত্রিমোহিনী, হিলি',
      districtLabel: 'জেলা ও রাজ্য',
      districtValue: 'দক্ষিণ দিনাজপুর, পশ্চিমবঙ্গ, ভারত',
      coordinatesLabel: 'সঠিক জিপিএস (GPS) স্থানাঙ্ক',
      coordinatesValue: '25.294086° N, 88.958289° E',
      allCeremoniesNote:
        'মেহেন্দি (২৮ নভেম্বর), হলুদ (২৯ নভেম্বর) এবং মূল বিবাহ ও বিদায় অনুষ্ঠান (৩০ নভেম্বর) — সকল আয়োজন আমাদের এই নিজ বাসস্থানেই অনুষ্ঠিত হবে।',
    },
    rsvp: {
      eyebrow: 'শুভেচ্ছা ও উপস্থিতি নিশ্চিতকরণ',
      title: 'আপনার দোয়া ও শুভেচ্ছা পাঠান',
      subtitle:
        'শাহানাজ ও সৌভিকের জন্য আপনার আন্তরিক দোয়া পাঠান অথবা আপনি সশরীরে উপস্থিত থাকছেন কি না তা হোয়াটসঅ্যাপে জানান।',
      whatsappBanner:
        'সরাসরি হোয়াটসঅ্যাপ বার্তা: আপনার শুভেচ্ছা ও উপস্থিতির তথ্য সরাসরি কনের পিতা নূরজ্জামান মণ্ডলের হোয়াটসঅ্যাপে (+91 94741 38682) পৌঁছে যাবে।',
      quickActionsTitle: 'এক ট্যাপে হোয়াটসঅ্যাপে পাঠান',
      quickBlessingBtn: 'হোয়াটসঅ্যাপে দোয়া ও শুভেচ্ছা পাঠান',
      quickRsvpBtn: 'উপস্থিতি নিশ্চিত করুন (RSVP)',
      customFormTitle: 'অথবা নিচে আপনার নাম ও বার্তা লিখে পাঠান',
      nameLabel: 'আপনার সম্পূর্ণ নাম',
      namePlaceholder: 'আপনার নাম লিখুন',
      guestsLabel: 'অতিথির সংখ্যা',
      guestOptions: {
        one: '১ জন অতিথি',
        two: '২ জন অতিথি',
        three: '৩ জন অতিথি',
        four: '৪ জন অতিথি',
        family: '৫+ জন (সপরিবারে)',
      },
      attendanceLabel: 'আপনি কি উপস্থিত থাকতে পারবেন?',
      attendingYes: 'আনন্দের সাথে উপস্থিত থাকব, ইনশাআল্লাহ',
      attendingPrayers: 'দূর থেকে আন্তরিক দোয়া ও শুভেচ্ছা জানাচ্ছি',
      messageLabel: 'আপনার দোয়া বা শুভেচ্ছা বার্তা (ঐচ্ছিক)',
      messagePlaceholder: 'শাহানাজ ও সৌভিকের নতুন জীবনের জন্য আপনার দোয়া বা বার্তা লিখুন...',
      submitBtn: 'হোয়াটসঅ্যাপে শুভেচ্ছা ও উপস্থিতি পাঠান',
      resendWhatsappBtn: 'আবার হোয়াটসঅ্যাপ খুলুন',
      successTitle: 'জাযাকাল্লাহু খাইরান — হোয়াটসঅ্যাপ খোলা হচ্ছে!',
      successMessage:
        'আপনার শুভেচ্ছা বার্তাটি নূরজ্জামান মণ্ডলের হোয়াটসঅ্যাপে (+91 94741 38682) পাঠানোর জন্য প্রস্তুত হয়েছে। হোয়াটসঅ্যাপে Send বাটনে ক্লিক করে বার্তাটি পাঠিয়ে দিন!',
      resetBtn: 'বার্তা সম্পাদনা করুন',
      requiredError: 'অনুগ্রহ করে জমা দেওয়ার আগে আপনার নাম লিখুন।',
    },
    closing: {
      eyebrow: 'আন্তরিক কৃতজ্ঞতা ও ভালোবাসা',
      quote: 'আপনাদের উপস্থিতি ও দোয়াই আমাদের জন্য সবচেয়ে বড় উপহার।',
      coupleNames: 'শাহানাজ ও সৌভিক',
      hostsLine: 'নূরজ্জামান মণ্ডল ও সুজাতা বিবি এবং সমগ্র মণ্ডল পরিবার',
      shareBtn: 'আমন্ত্রণপত্র শেয়ার করুন',
      whatsappShareBtn: 'হোয়াটসঅ্যাপে শেয়ার করুন',
      copiedToast: 'আমন্ত্রণ লিংক কপি হয়েছে!',
    },
    footer: {
      gratitudeQuote: 'ভালোবাসা ও কৃতজ্ঞতায়, শাহানাজ ও সৌভিক',
      hostedByFooter: 'আমন্ত্রণে: নূরজ্জামান মণ্ডল ও সুজাতা বিবি (শাহানাজের পিতা ও মাতা)',
      coupleNames: 'শাহানাজ ও সৌভিক',
      date: '৩০ নভেম্বর ২০২৬',
      locality: 'নিজ বাসস্থান • পূর্ব কালিকাপুর, ত্রিমোহিনী, হিলি, পশ্চিমবঙ্গ',
      quickLinksTitle: 'দ্রুত নেভিগেশন',
      celebrationSummaryTitle: 'অনুষ্ঠান সূচি',
      backToTop: 'উপরে ফিরে যান',
      copyright: 'শাহানাজ ও সৌভিকের শুভ বিবাহ উপলক্ষে ভালোবাসায় নির্মিত • ২০২৬',
    },
    accessibility: {
      skipToContent: 'মূল বিষয়বস্তুতে যান',
      decorativeMotif: 'ইসলামিক জ্যামিতিক ও পুষ্পশোভিত অলংকরণ',
    },
  },
};

export default translations;
