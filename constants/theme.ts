export const colors = {
  // Brand primaries
  primary: '#6C4EF5',
  primaryDeep: '#5B3BF6',
  linguaBlue: '#4D88FF',
  linguaGreen: '#21C168',

  // Semantic
  success: '#21C168',
  warning: '#FFCB00',
  streak: '#FF8A00',
  error: '#FF4D4F',
  info: '#4D88FF',

  // Neutrals
  textPrimary: '#001328',
  textSecondary: '#6B7280',
  border: '#E5E7EB',
  surface: '#F6F7FB',
  background: '#FFFFFF',
} as const;

export const fonts = {
  regular: 'Poppins-Regular',
  medium: 'Poppins-Medium',
  semiBold: 'Poppins-SemiBold',
  bold: 'Poppins-Bold',
} as const;

// Font sizes in pixels
export const fontSize = {
  h1: 32,
  h2: 24,
  h3: 20,
  h4: 16,
  bodyLg: 16,
  bodyMd: 14,
  bodySm: 13,
  caption: 11,
} as const;

// Absolute line heights in pixels (ratio × fontSize)
export const lineHeight = {
  h1: 38,    // 32 × 1.2
  h2: 31,    // 24 × 1.3
  h3: 26,    // 20 × 1.3
  h4: 22,    // 16 × 1.4
  bodyLg: 26, // 16 × 1.6
  bodyMd: 22, // 14 × 1.6
  bodySm: 21, // 13 × 1.6
  caption: 15, // 11 × 1.4
} as const;

export const borderRadius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  full: 9999,
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const;
