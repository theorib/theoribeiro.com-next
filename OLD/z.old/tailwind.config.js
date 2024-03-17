/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    // The following pattern makes tailwind remember all row-start-<size> classes for the portfolio element to use dynamically
    {
      pattern: /row-start-.+/,
      variants: ['sm', 'md', 'lg', 'xl'],
    },
  ],
  theme: {
    extend: {
      height: {
        screen: '100dvh',
      },
      maxWidth: {
        layout: '64rem',
      },
      fontFamily: {
        raleway: [
          'Raleway',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        sans: [
          'Nunito Sans',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      colors: {
        'link-blue': {
          50: '#ebf2f9',
          100: '#e0ecf5',
          200: '#c2daea',
          300: '#95bfdb',
          400: '#62a1c6',
          500: '#4182aa',
          600: '#2f77a7',
          700: '#26597d',
          800: '#234a67',
          900: '#224058',
          950: '#172a3b',
        },

        'horizon-blue': {
          50: 'hsl(193, 26%, 93%)',
          100: 'hsl(201, 21%, 87%)',
          200: 'hsl(201, 21%, 79%)',
          300: 'hsl(202, 22%, 66%)',
          400: 'hsl(202, 21%, 50%)',
          500: 'hsl(203, 24%, 43%)',
          600: 'hsl(206, 23%, 36%)',
          700: 'hsl(208, 20%, 31%)',
          800: 'hsl(210, 17%, 27%)',
          900: 'hsl(210, 16%, 24%)',
          950: 'hsl(210, 18%, 15%)',
        },
      },
    },
  },
  corePlugins: {
    // aspectRatio: false,
  },
  plugins: [],
  // plugins: [require('@tailwindcss/aspect-ratio')],
};
