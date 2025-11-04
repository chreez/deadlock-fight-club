/**
 * Theme constants for TypeScript/React usage
 * Mirrors CSS custom properties for programmatic access
 */

export const colors = {
  bg: {
    dark: '#0a0a0b',
    secondary: '#1a1a1f',
  },
  accent: {
    orange: '#ff8c42',
    purple: '#7c4dff',
  },
  text: {
    primary: '#ffffff',
    secondary: '#a0a0a0',
  },
  category: {
    weapon: '#ff8c00',
    vitality: '#4caf50',
    spirit: '#9c27b0',
  },
  tier: {
    1: '#4caf50', // Green
    2: '#2196f3', // Blue
    3: '#9c27b0', // Purple
    4: '#ff9800', // Orange
  },
} as const;

export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '20px',
  xl: '30px',
} as const;

export const borderRadius = {
  default: '4px',
  lg: '8px',
  sm: '2px',
} as const;

export const transitions = {
  fast: '0.15s ease',
  default: '0.3s ease',
  slow: '0.5s ease',
} as const;

export const breakpoints = {
  mobile: 480,
  tablet: 768,
  desktop: 1200,
} as const;

// Helper function to get tier color
export function getTierColor(tier: 1 | 2 | 3 | 4): string {
  return colors.tier[tier];
}

// Helper function to get category color
export function getCategoryColor(category: 'weapon' | 'vitality' | 'spirit'): string {
  return colors.category[category];
}

// Media query helpers
export const media = {
  mobile: `@media (max-width: ${breakpoints.mobile}px)`,
  tablet: `@media (max-width: ${breakpoints.tablet}px)`,
  desktop: `@media (min-width: ${breakpoints.desktop}px)`,
} as const;
