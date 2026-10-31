/**
 * Family Members Data for Shahanaj's Family Gallery
 * -------------------------------------------------
 * Features all 6 core family members in a symmetrical 3 x 2 layout:
 *   Row 1 (Parents & The Bride in the Center — 3 cards):
 *     1. Father: Nurjjaman Mondal (নূরজ্জামান মণ্ডল)
 *     2. The Bride: Shahanaj (শাহানাজ)
 *     3. Mother: Sujata Bibi (সুজাতা বিবি)
 *   Row 2 (Elder Brother's Family — 3 cards):
 *     4. Elder Brother (Dada): Sahin Mondal (সাহিন মণ্ডল)
 *     5. Sister-in-Law (Bhabi): Surovi Najmin (সুরভী নাজমিন)
 *     6. Nephew (Bhaipo): Arhan Mondal (আরহান মণ্ডল)
 *
 * To add a real photograph for any member, place the image inside
 * `public/images/family/` and set `photo: '/images/family/filename.jpg'`.
 */

const createFamilyPlaceholderSvg = (
  initials,
  subtitle,
  bgPrimary,
  bgSecondary,
  accent = '#C6A15B'
) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 480" width="600" height="480">
    <defs>
      <linearGradient id="fg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${bgPrimary}"/>
        <stop offset="100%" stop-color="${bgSecondary}"/>
      </linearGradient>
      <radialGradient id="glow" cx="50%" cy="46%" r="48%">
        <stop offset="0%" stop-color="${accent}" stop-opacity="0.24"/>
        <stop offset="100%" stop-color="${accent}" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="600" height="480" fill="url(#fg)"/>
    <rect width="600" height="480" fill="url(#glow)"/>
    <rect x="20" y="20" width="560" height="440" rx="16" fill="none" stroke="${accent}" stroke-width="1.2" stroke-opacity="0.45"/>
    <rect x="30" y="30" width="540" height="420" rx="12" fill="none" stroke="${accent}" stroke-width="0.7" stroke-opacity="0.25"/>
    <!-- Pointed Islamic Arch Frame -->
    <path d="M135,450 L135,185 C135,105 215,58 300,34 C385,58 465,105 465,185 L465,450" fill="none" stroke="${accent}" stroke-width="1.5" stroke-opacity="0.55"/>
    <!-- Decorative Eight-Pointed Star Halo -->
    <polygon points="300,118 322,188 392,210 322,232 300,302 278,232 208,210 278,188" fill="none" stroke="${accent}" stroke-width="0.9" stroke-opacity="0.35"/>
    <!-- Medallion Circle -->
    <circle cx="300" cy="210" r="68" fill="#FFF8ED" fill-opacity="0.1" stroke="${accent}" stroke-width="1.8"/>
    <circle cx="300" cy="210" r="59" fill="none" stroke="${accent}" stroke-width="0.9" stroke-dasharray="4 4" stroke-opacity="0.75"/>
    <!-- Initials -->
    <text x="300" y="226" text-anchor="middle" fill="#FFF8ED" font-family="Georgia, serif" font-size="44" font-weight="bold" letter-spacing="2">${initials}</text>
    <!-- Role Subtitle -->
    <text x="300" y="328" text-anchor="middle" fill="${accent}" font-family="Georgia, serif" font-size="14" letter-spacing="3" opacity="0.95">${subtitle}</text>
    <!-- Crescent at Top of Arch -->
    <path d="M305 68 A14 14 0 1 0 318 89 A11.5 11.5 0 1 1 305 68 Z" fill="${accent}" fill-opacity="0.9"/>
    <circle cx="316" cy="74" r="2" fill="#FFF8ED"/>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

export const familyMembers = [
  // ===========================================================================
  // ROW 1: FATHER, THE BRIDE (SHAHANAJ), AND MOTHER (3 CARDS)
  // ===========================================================================
  {
    id: 'nurjjaman-mondal',
    categories: ['parents'],
    tier: 'top',
    isHost: true,
    photo: '/images/family/nurjjaman-mondal.jpg',
    objectPosition: 'center 16%',
    fallbackPhoto: createFamilyPlaceholderSvg('NM', 'FATHER OF THE BRIDE', '#4B0918', '#790F22'),
    name: {
      en: 'Nurjjaman Mondal',
      bn: 'নূরজ্জামান মণ্ডল',
    },
    relation: {
      en: 'Father of the Bride (Baba)',
      bn: 'কনের পিতা (বাবা)',
    },
    roleBadge: {
      en: 'Wedding Host',
      bn: 'প্রধান আমন্ত্রণকারী',
    },
    blessing: {
      en: 'With immense gratitude to Allah, I warmly welcome you and your family to bless Shahanaj & Souvik on their sacred day.',
      bn: 'মহান আল্লাহর শোকরিয়া আদায় করে শাহানাজ ও সৌভিকের শুভ বিবাহ ও বিদায় অনুষ্ঠানে আপনাদের সপরিবারে সাদর আমন্ত্রণ জানাচ্ছি।',
    },
  },
  {
    id: 'shahanaj-bride',
    categories: ['parents'],
    tier: 'top',
    isHost: true,
    isBride: true,
    photo: '/images/family/shahanaj.jpg',
    objectPosition: 'center 30%',
    fallbackPhoto: createFamilyPlaceholderSvg('S', 'THE BRIDE • SHAHANAJ', '#A51D32', '#4B0918'),
    name: {
      en: 'Shahanaj',
      bn: 'শাহানাজ',
    },
    relation: {
      en: 'The Bride • Beloved Daughter & Sister',
      bn: 'কনে • আদরের কন্যা ও বোন',
    },
    roleBadge: {
      en: 'The Bride',
      bn: 'বিবাহের কনে',
    },
    blessing: {
      en: 'Stepping into a new chapter with the endless love of my Baba, Maa, Dada, Bhabi, and little Arhan. Please keep us in your prayers.',
      bn: 'বাবা, মা, দাদা, ভাবি ও ছোট্ট আরহানের অফুরন্ত ভালোবাসা নিয়ে নতুন জীবনে পা রাখছি। আমাদের জন্য দোয়া করবেন।',
    },
  },
  {
    id: 'sujata-bibi',
    categories: ['parents'],
    tier: 'top',
    isHost: true,
    photo: '/images/family/sujata-bibi.jpg',
    objectPosition: 'center 18%',
    fallbackPhoto: createFamilyPlaceholderSvg('SB', 'MOTHER OF THE BRIDE', '#790F22', '#4B0918'),
    name: {
      en: 'Sujata Bibi',
      bn: 'সুজাতা বিবি',
    },
    relation: {
      en: 'Mother of the Bride (Maa)',
      bn: 'কনের মাতা (মা)',
    },
    roleBadge: {
      en: 'Wedding Host',
      bn: 'আমন্ত্রণকারী',
    },
    blessing: {
      en: 'Our home is filled with joy as our beloved daughter Shahanaj begins her new journey. Your presence and prayers mean the world to us.',
      bn: 'আমাদের আদরের কন্যা শাহানাজের নতুন জীবনের সূচনায় আপনাদের উপস্থিতি ও দোয়া আমাদের একান্ত কাম্য।',
    },
  },

  // ===========================================================================
  // ROW 2: ELDER BROTHER (DADA), BHABI & NEPHEW (BHAIPO) (3 CARDS)
  // ===========================================================================
  {
    id: 'sahin-mondal',
    categories: ['brother-family'],
    tier: 'bottom',
    isHost: true,
    photo: '/images/family/sahin-mondal.jpg',
    objectPosition: 'center 16%',
    fallbackPhoto: createFamilyPlaceholderSvg('SM', 'ELDER BROTHER (DADA)', '#315B46', '#203F30'),
    name: {
      en: 'Sahin Mondal',
      bn: 'সাহিন মণ্ডল',
    },
    relation: {
      en: 'Elder Brother (Dada)',
      bn: 'কনের বড় ভাই (দাদা)',
    },
    roleBadge: {
      en: 'Proud Elder Brother',
      bn: 'স্নেহের দাদা ও আয়োজক',
    },
    blessing: {
      en: 'Watching my sister Shahanaj step into this beautiful new chapter fills my heart with pride and joy. Warmest welcome to everyone!',
      bn: 'আদরের বোন শাহানাজের জীবনের এই বিশেষ দিনে আপনাদের সকলকে আমাদের বাড়িতে স্বাগত জানাতে পেরে আমি অত্যন্ত আনন্দিত।',
    },
  },
  {
    id: 'surovi-najmin',
    categories: ['brother-family'],
    tier: 'bottom',
    isHost: true,
    photo: '/images/family/surovi-najmin.jpg',
    objectPosition: 'center 20%',
    fallbackPhoto: createFamilyPlaceholderSvg('SN', 'SISTER-IN-LAW (BHABI)', '#790F22', '#382322'),
    name: {
      en: 'Surovi Najmin',
      bn: 'সুরভী নাজমিন',
    },
    relation: {
      en: 'Sister-in-Law (Bhabi)',
      bn: 'কনের ভাবি',
    },
    roleBadge: {
      en: 'Beloved Bhabi',
      bn: 'স্নেহময়ী ভাবি',
    },
    blessing: {
      en: 'From Mehendi to the Wedding celebration, we cannot wait to celebrate every joyful moment together with all of you!',
      bn: 'মেহেন্দি, হলুদ থেকে বিদায় অনুষ্ঠান — প্রতিটি মুহূর্ত আপনাদের সকলের সাথে আনন্দ করে কাটাতে আমরা অধীর আগ্রহে অপেক্ষা করছি!',
    },
  },
  {
    id: 'arhan-mondal',
    categories: ['brother-family'],
    tier: 'bottom',
    isHost: false,
    photo: '/images/family/arhan-mondal.jpg',
    objectPosition: 'center 15%',
    fallbackPhoto: createFamilyPlaceholderSvg('AM', 'NEPHEW (BHAIPO)', '#4B0918', '#315B46'),
    name: {
      en: 'Arhan Mondal',
      bn: 'আরহান মণ্ডল',
    },
    relation: {
      en: 'Beloved Nephew (Bhaipo)',
      bn: 'আদরের ভাইপো',
    },
    roleBadge: {
      en: 'Little Star of the Family',
      bn: 'পরিবারের ছোট্টমণি',
    },
    blessing: {
      en: 'Please come to my Fupi’s wedding! I am ready with my best outfit and biggest smile to welcome you all!',
      bn: 'আমার ফুপির বিয়েতে আপনারা সবাই আসবেন কিন্তু! আমি নতুন জামা পরে আপনাদের স্বাগত জানানোর জন্য তৈরি আছি!',
    },
  },
];

export default familyMembers;
