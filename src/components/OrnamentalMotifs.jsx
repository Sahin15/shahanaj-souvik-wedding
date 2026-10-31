import React from 'react';

/**
 * Crescent Moon & Eight-Pointed Star (Rub el Hizb) Ornament
 */
export function CrescentStarMotif({ className = 'w-10 h-10', color = '#C6A15B' }) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Subtle outer halo */}
      <circle
        cx="40"
        cy="40"
        r="34"
        stroke={color}
        strokeWidth="0.75"
        strokeDasharray="2 3"
        strokeOpacity="0.55"
      />
      {/* Crescent Moon */}
      <path
        d="M45.5 16.5C32.2 18.2 22.8 30.4 24.5 43.7C26.2 57 38.4 66.4 51.7 64.7C56.8 64 61.3 61.7 64.8 58.3C59.4 60.4 53.2 60.5 47.4 58.1C36.2 53.4 30.9 40.5 35.6 29.3C37.6 24.4 41.2 20.5 45.8 18.1L45.5 16.5Z"
        fill={color}
      />
      {/* Eight-Pointed Islamic Star */}
      <path
        d="M53 24L55.2 29.8L61 32L55.2 34.2L53 40L50.8 34.2L45 32L50.8 29.8L53 24Z"
        fill={color}
      />
      {/* Small accent stars */}
      <circle cx="62" cy="22" r="1.4" fill={color} fillOpacity="0.8" />
      <circle cx="42" cy="13" r="1.2" fill={color} fillOpacity="0.7" />
    </svg>
  );
}

/**
 * Hanging Golden Fanous Lantern SVG
 */
export function HangingLantern({ className = 'w-12 h-28', delay = '0s' }) {
  return (
    <svg
      viewBox="0 0 64 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`origin-top animate-sway ${className}`}
      style={{ animationDelay: delay }}
      aria-hidden="true"
    >
      {/* Hanging chain */}
      <line x1="32" y1="0" x2="32" y2="38" stroke="#C6A15B" strokeWidth="1.2" strokeDasharray="3 2" />
      <circle cx="32" cy="39" r="3" stroke="#C6A15B" strokeWidth="1.2" fill="#FFF8ED" />
      {/* Top dome */}
      <path
        d="M22 52C22 44 27 41 32 39C37 41 42 44 42 52H22Z"
        fill="#C6A15B"
        fillOpacity="0.25"
        stroke="#C6A15B"
        strokeWidth="1.2"
      />
      <line x1="18" y1="52" x2="46" y2="52" stroke="#C6A15B" strokeWidth="1.5" />
      {/* Lantern body with jaali arches */}
      <path
        d="M20 52L16 86L22 110H42L48 86L44 52H20Z"
        fill="#FFF8ED"
        fillOpacity="0.65"
        stroke="#C6A15B"
        strokeWidth="1.3"
      />
      {/* Warm inner candle glow */}
      <ellipse cx="32" cy="82" rx="9" ry="15" fill="#C6A15B" fillOpacity="0.32" />
      {/* Inner arch lattice */}
      <path
        d="M25 108V76C25 69 28.5 64 32 61C35.5 64 39 69 39 76V108"
        stroke="#790F22"
        strokeWidth="0.9"
        strokeOpacity="0.6"
      />
      <line x1="32" y1="52" x2="32" y2="110" stroke="#C6A15B" strokeWidth="0.8" strokeOpacity="0.6" />
      {/* Base finial */}
      <path d="M22 110L26 118H38L42 110H22Z" fill="#C6A15B" fillOpacity="0.4" stroke="#C6A15B" strokeWidth="1.2" />
      <path d="M32 118V132" stroke="#C6A15B" strokeWidth="1.2" />
      <circle cx="32" cy="135" r="2.5" fill="#C6A15B" />
    </svg>
  );
}

/**
 * Delicate Arabesque Corner Filigree
 */
export function ArabesqueCorner({ className = 'w-12 h-12', position = 'top-left', color = '#C6A15B' }) {
  const rotationMap = {
    'top-left': 'rotate-0',
    'top-right': 'rotate-90',
    'bottom-right': 'rotate-180',
    'bottom-left': '-rotate-90',
  };

  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${rotationMap[position] || ''} ${className}`}
      aria-hidden="true"
    >
      <path d="M4 60V12C4 7.58 7.58 4 12 4H60" stroke={color} strokeWidth="1.4" />
      <path d="M10 50V16C10 12.68 12.68 10 16 10H50" stroke={color} strokeWidth="0.9" strokeOpacity="0.7" />
      <path
        d="M4 26C14 26 26 14 26 4"
        stroke={color}
        strokeWidth="1.1"
        strokeOpacity="0.8"
      />
      <path
        d="M10 34C21 34 34 21 34 10"
        stroke={color}
        strokeWidth="0.8"
        strokeOpacity="0.55"
      />
      <circle cx="15" cy="15" r="2.2" fill={color} />
      <circle cx="26" cy="10" r="1.3" fill={color} />
      <circle cx="10" cy="26" r="1.3" fill={color} />
    </svg>
  );
}

/**
 * Ornamental Horizontal Divider with Crescent or Geometric Star Centerpiece
 */
export function OrnamentalDivider({
  variant = 'crescent',
  color = '#C6A15B',
  secondaryColor = '#315B46',
  className = 'w-64 h-8',
}) {
  return (
    <svg
      viewBox="0 0 320 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Left tapering line & botanical leaves */}
      <line x1="10" y1="18" x2="122" y2="18" stroke={color} strokeWidth="1" strokeOpacity="0.65" />
      <line x1="40" y1="14" x2="115" y2="14" stroke={color} strokeWidth="0.5" strokeOpacity="0.35" />
      <path
        d="M118 18C112 12 104 12 98 18C104 24 112 24 118 18Z"
        stroke={secondaryColor}
        strokeWidth="1"
        fill={secondaryColor}
        fillOpacity="0.15"
      />
      <circle cx="128" cy="18" r="2" fill={color} />

      {/* Centerpiece */}
      {variant === 'crescent' ? (
        <g transform="translate(142, 0)">
          <path
            d="M21 7C13.8 8 8.6 14.6 9.6 21.8C10.6 29 17.2 34 24.4 33C27 32.6 29.4 31.4 31.2 29.6C28.3 30.7 25 30.7 22 29.4C16 26.8 13.2 19.9 15.8 13.9C16.9 11.3 18.8 9.2 21.2 7.9L21 7Z"
            fill={color}
          />
          <path
            d="M25 11L26.2 14.2L29.5 15.5L26.2 16.8L25 20L23.8 16.8L20.5 15.5L23.8 14.2L25 11Z"
            fill={color}
          />
        </g>
      ) : (
        <g transform="translate(160, 18)">
          <polygon
            points="0,-12 3.5,-3.5 12,0 3.5,3.5 0,12 -3.5,3.5 -12,0 -3.5,-3.5"
            fill={color}
          />
          <circle cx="0" cy="0" r="3" fill="#FFF8ED" />
        </g>
      )}

      {/* Right tapering line & botanical leaves */}
      <circle cx="192" cy="18" r="2" fill={color} />
      <path
        d="M202 18C208 12 216 12 222 18C216 24 208 24 202 18Z"
        stroke={secondaryColor}
        strokeWidth="1"
        fill={secondaryColor}
        fillOpacity="0.15"
      />
      <line x1="198" y1="18" x2="310" y2="18" stroke={color} strokeWidth="1" strokeOpacity="0.65" />
      <line x1="205" y1="14" x2="280" y2="14" stroke={color} strokeWidth="0.5" strokeOpacity="0.35" />
    </svg>
  );
}

/**
 * Custom Event Card Header Illustrations (Mehendi, Haldi, Wedding/Nikah)
 */
export function EventIllustration({ type = 'crescent-arch', className = 'w-20 h-20' }) {
  if (type === 'henna') {
    // Mehendi: Delicate Henna Botanical Paisley & Emerald-Gold Sprigs
    return (
      <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
        <circle cx="48" cy="48" r="42" stroke="#C6A15B" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.5" />
        <circle cx="48" cy="48" r="36" fill="#790F22" fillOpacity="0.07" stroke="#790F22" strokeWidth="1" strokeOpacity="0.25" />
        {/* Paisley Motif */}
        <path
          d="M48 20C34 26 28 42 32 56C35 67 45 73 55 70C65 67 69 55 64 44C60 35 51 34 48 41C46 45 49 51 54 50"
          stroke="#790F22"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M48 26C38 31 34 43 37 54C39 62 46 66 53 64"
          stroke="#C6A15B"
          strokeWidth="1.2"
          strokeDasharray="2 2"
        />
        {/* Botanical Emerald Leaves */}
        <path d="M32 36C25 33 22 26 26 22C31 24 34 30 32 36Z" fill="#315B46" fillOpacity="0.75" />
        <path d="M64 60C71 57 74 50 70 46C65 48 62 54 64 60Z" fill="#315B46" fillOpacity="0.75" />
        {/* Floral Dots */}
        <circle cx="48" cy="16" r="2" fill="#C6A15B" />
        <circle cx="41" cy="18" r="1.5" fill="#C6A15B" />
        <circle cx="55" cy="18" r="1.5" fill="#C6A15B" />
        <circle cx="48" cy="56" r="2.5" fill="#C6A15B" />
      </svg>
    );
  }

  if (type === 'marigold') {
    // Haldi: Festive Golden Marigold Bloom & Garland Motif
    return (
      <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
        <circle cx="48" cy="48" r="42" stroke="#C6A15B" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.6" />
        <circle cx="48" cy="48" r="36" fill="#C6A15B" fillOpacity="0.14" stroke="#C6A15B" strokeWidth="1" strokeOpacity="0.4" />
        {/* Multi-layered Marigold Rosette */}
        <g transform="translate(48, 48)">
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
            <ellipse
              key={deg}
              cx="0"
              cy="-14"
              rx="5.5"
              ry="11"
              transform={`rotate(${deg})`}
              fill="#C6A15B"
              fillOpacity="0.28"
              stroke="#9E7B38"
              strokeWidth="1.1"
            />
          ))}
          <circle cx="0" cy="0" r="8" fill="#C6A15B" stroke="#790F22" strokeWidth="1.2" />
          <circle cx="0" cy="0" r="3" fill="#FFF8ED" />
        </g>
        {/* Emerald Leaf Pair at Base */}
        <path d="M48 76C40 76 33 71 31 65C38 65 44 69 48 76Z" fill="#315B46" fillOpacity="0.8" />
        <path d="M48 76C56 76 63 71 65 65C58 65 52 69 48 76Z" fill="#315B46" fillOpacity="0.8" />
      </svg>
    );
  }

  // Default ('crescent-arch'): Royal Nikah Arch & Crescent Moon
  return (
    <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <circle cx="48" cy="48" r="42" stroke="#C6A15B" strokeWidth="1.2" strokeOpacity="0.65" />
      <circle cx="48" cy="48" r="37" fill="#790F22" fillOpacity="0.1" stroke="#C6A15B" strokeWidth="0.8" strokeDasharray="2 2" />
      {/* Pointed Islamic Arch */}
      <path
        d="M26 72V44C26 30 37 21 48 15C59 21 70 30 70 44V72H26Z"
        fill="#FFF8ED"
        fillOpacity="0.12"
        stroke="#C6A15B"
        strokeWidth="1.5"
      />
      {/* Crescent & Star inside Arch */}
      <path
        d="M50 32C42.8 33 37.8 39.5 38.8 46.7C39.8 53.9 46.3 58.9 53.5 57.9C56.2 57.5 58.6 56.3 60.4 54.5C57.5 55.6 54.2 55.6 51.2 54.3C45.2 51.7 42.4 44.8 45 38.8C46.1 36.2 48 34.1 50.4 32.8L50 32Z"
        fill="#C6A15B"
      />
      <path
        d="M55 36L56.3 39.2L59.5 40.5L56.3 41.8L55 45L53.7 41.8L50.5 40.5L53.7 39.2L55 36Z"
        fill="#C6A15B"
      />
    </svg>
  );
}

