import '@csstools/normalize.css';
import { createGlobalStyle } from 'styled-components';

export const brandColors = {
  50: '#fffbeb',
  100: '#fef3c7',
  200: '#fde68a',
  300: '#fcd34d',
  400: '#fbbf24',
  500: '#f59e0b',
  600: '#d97706',
  700: '#b45309',
  800: '#92400e',
  900: '#78350f',
  950: '#451a03',
};

export const secondaryColors = {
  50: '#ecfeff',
  100: '#cffafe',
  200: '#a5f3fc',
  300: '#67e8f9',
  400: '#22d3ee',
  500: '#06b6d4',
  600: '#0891b2',
  700: '#0e7490',
  800: '#155e75',
  900: '#164e63',
  950: '#083344',
};

const GlobalStyles = createGlobalStyle`
:root {
  font-family: Inter, sans-serif;
  font-feature-settings: 'liga' 1, 'calt' 1; /* fix for Chrome */
}

@supports (font-variation-settings: normal) {
  :root { font-family: InterVariable, sans-serif; }
}

:root {
  --color-brand-50: ${brandColors[50]};
  --color-brand-100: ${brandColors[100]};
  --color-brand-200: ${brandColors[200]};
  --color-brand-300: ${brandColors[300]};
  --color-brand-400: ${brandColors[400]};
  --color-brand-500: ${brandColors[500]};
  --color-brand-600: ${brandColors[600]};
  --color-brand-700: ${brandColors[700]};
  --color-brand-800: ${brandColors[800]};
  --color-brand-900: ${brandColors[900]};
  --color-brand-950: ${brandColors[950]};

  --color-secondary-50: ${secondaryColors[50]};
  --color-secondary-100: ${secondaryColors[100]};
  --color-secondary-200: ${secondaryColors[200]};
  --color-secondary-300: ${secondaryColors[300]};
  --color-secondary-400: ${secondaryColors[400]};
  --color-secondary-500: ${secondaryColors[500]};
  --color-secondary-600: ${secondaryColors[600]};
  --color-secondary-700: ${secondaryColors[700]};
  --color-secondary-800: ${secondaryColors[800]};
  --color-secondary-900: ${secondaryColors[900]};
  --color-secondary-950: ${secondaryColors[950]};

  &.dark {
    --dark-color-grey-0: #18212f;
    --dark-color-grey-50: #111827;
    --dark-color-grey-100: #1f2937;
    --dark-color-grey-200: #374151;
    --dark-color-grey-300: #4b5563;
    --dark-color-grey-400: #6b7280;
    --dark-color-grey-500: #9ca3af;
    --dark-color-grey-600: #d1d5db;
    --dark-color-grey-700: #e5e7eb;
    --dark-color-grey-800: #f3f4f6;
    --dark-color-grey-900: #f9fafb;

    --dark-color-grey-0-alpha: rgba(24, 33, 47, 0.8);

    --dark-color-red-100: #fee2e2;
    --dark-color-red-700: #b91c1c;
    --dark-color-red-800: #991b1b;

    --dark-shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
    --dark-shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
    --dark-shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);
  }

  --color-grey-0: var(--dark-color-grey-0, #fff);
  --color-grey-50: var(--dark-color-grey-50, #f9fafb);
  --color-grey-100: var(--dark-color-grey-100, #f3f4f6);
  --color-grey-200: var(--dark-color-grey-200, #e5e7eb);
  --color-grey-300: var(--dark-color-grey-300, #d1d5db);
  --color-grey-400: var(--dark-color-grey-400, #9ca3af);
  --color-grey-500: var(--dark-color-grey-500, #6b7280);
  --color-grey-600: var(--dark-color-grey-600, #4b5563);
  --color-grey-700: var(--dark-color-grey-700, #374151);
  --color-grey-800: var(--dark-color-grey-800, #1f2937);
  --color-grey-900: var(--dark-color-grey-900, #111827);

  --color-grey-0-alpha: var(--dark-color-grey-0-alpha, rgba(255, 255, 255, 0.3));

  --color-red-100: var(--dark-color-red-100, #fee2e2);
  --color-red-700: var(--dark-color-red-700, #b91c1c);
  --color-red-800: var(--dark-color-red-800, #991b1b);

  --shadow-sm: var(--dark-shadow-sm, 0 1px 2px rgba(0, 0, 0, 0.04));
  --shadow-md: var(--dark-shadow-md, 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06));
  --shadow-lg: var(--dark-shadow-lg, 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12));

  --border-radius-tiny: 2px;
  --border-radius-sm: 4px;
  --border-radius-md: 8px;
  --border-radius-lg: 16px;
  --border-radius-xl: 32px;
  --border-radius-full: 9999px;

  --sm-up: 640px;
  --md-up: 768px;
  --lg-up: 1024px;
  --xl-up: 1280px;
  --2xl-up: 1536px;
}

html, body {
  height: 100%;
  min-height: 100%;
  margin: 0;
}

body {
  background-color: var(--color-grey-100);
  color: var(--color-grey-800);
  font-size: 0.875rem;
  margin: 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

p {
  margin: 0;
}

#root {
  height: 100%;
  position: relative;
}
`;

export default GlobalStyles;
