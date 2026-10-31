/**
 * Wedding Photo Album for Shahanaj & Souvik
 * -----------------------------------------
 * Displays the real wedding & couple photographs of Shahanaj & Souvik.
 * To add more wedding photos later, place them in `public/images/` and
 * add an entry to the `galleryImages` array below.
 */

const createSvgFallback = (title, bgPrimary, bgSecondary, accent) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${bgPrimary}"/>
        <stop offset="100%" stop-color="${bgSecondary}"/>
      </linearGradient>
    </defs>
    <rect width="800" height="600" fill="url(#g)"/>
    <rect x="28" y="28" width="744" height="544" rx="16" fill="none" stroke="${accent}" stroke-width="1.5" stroke-opacity="0.5"/>
    <text x="400" y="310" text-anchor="middle" fill="#FFF8ED" font-family="Georgia, serif" font-size="30">${title}</text>
    <text x="400" y="350" text-anchor="middle" fill="${accent}" font-family="Georgia, serif" font-size="16" letter-spacing="3">SHAHANAJ &amp; SOUVIK</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

export const galleryImages = [
  {
    id: 'couple-meadow-walk',
    featured: true,
    categoryKey: 'couplePortrait',
    src: '/images/couple-meadow-walk.jpg',
    fallbackSrc: createSvgFallback('Shahanaj & Souvik', '#4B0918', '#790F22', '#C6A15B'),
    aspect: 'wide',
    category: {
      en: 'Wedding Portrait',
      bn: 'বিশেষ মুহূর্ত',
    },
    title: {
      en: 'Stepping Towards a Blessed New Chapter',
      bn: 'নতুন জীবনের শুভ সূচনা',
    },
    caption: {
      en: 'Walking together into a blessed new chapter with family prayers — Shahanaj & Souvik.',
      bn: 'পরিবারের দোয়াকে সাথে নিয়ে নতুন জীবনের সুন্দর পথে পা বাড়ানো — শাহানাজ ও সৌভিক।',
    },
    alt: {
      en: 'Shahanaj and Souvik walking together across a golden meadow',
      bn: 'নতুন জীবনের পথে এগিয়ে চলেছেন শাহানাজ এবং সৌভিক',
    },
  },
  {
    id: 'couple-moonlight-silhouette',
    featured: false,
    categoryKey: 'weddingMoments',
    src: '/images/couple-moonlight-silhouette.jpg',
    fallbackSrc: createSvgFallback('Wedding Silhouette', '#4B0918', '#790F22', '#C6A15B'),
    aspect: 'landscape',
    category: {
      en: 'Wedding Memories',
      bn: 'বিবাহের স্মৃতি',
    },
    title: {
      en: 'Under the Glowing Moonlight Arch',
      bn: 'চাঁদের আলো ও পুষ্পমণ্ডিত খিলানের নিচে',
    },
    caption: {
      en: 'Shahanaj & Souvik in traditional wedding attire framed by warm lights and floral garlands.',
      bn: 'ঐতিহ্যবাহী বিয়ের সাজে উষ্ণ আলোকছটা ও ফুলের মালায় ঘেরা শাহানাজ ও সৌভিক।',
    },
    alt: {
      en: 'Romantic silhouette of Shahanaj and Souvik in traditional wedding attire against a glowing circular floral backdrop',
      bn: 'ঐতিহ্যবাহী বিয়ের পোশাকে আলোকউজ্জ্বল গোলাকার পুষ্প খিলানের সামনে শাহানাজ ও সৌভিক',
    },
  },
  {
    id: 'couple-arch-portrait',
    featured: false,
    categoryKey: 'goldenHour',
    src: '/images/couple-arch-portrait.jpg',
    fallbackSrc: createSvgFallback('Golden Hour Arch', '#790F22', '#4B0918', '#C6A15B'),
    aspect: 'portrait',
    category: {
      en: 'Sacred Bond',
      bn: 'পবিত্র বন্ধন',
    },
    title: {
      en: 'Blessings Beneath the Royal Arch',
      bn: 'দোয়া ও আশীর্বাদের পবিত্র বন্ধন',
    },
    caption: {
      en: 'A blessed moment of companionship and family prayers beneath classic arches at sunset.',
      bn: 'গোধূলি বেলায় পরিবারের দোয়া ও আশীর্বাদকে সাথে নিয়ে এক সুন্দর মুহূর্ত।',
    },
    alt: {
      en: 'Golden hour portrait of Shahanaj and Souvik beneath an ornate Mughal multifoil arch',
      bn: 'সোনালী বিকেলে রাজকীয় খিলানের নিচে শাহানাজ ও সৌভিক',
    },
  },
];

export default galleryImages;
