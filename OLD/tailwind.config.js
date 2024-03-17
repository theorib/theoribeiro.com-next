/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

const appBlue = {
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
};

const horizonBlue = {
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
};

const regentGray = {
  50: '#f8fafa',
  100: '#f2f5f5',
  200: '#e7eced',
  300: '#d3dcdf',
  400: '#bac8cb',
  500: '#9dafb5',
  600: '#7c909a',
  700: '#73858e',
  800: '#606f77',
  900: '#505c62',
  950: '#343c41',
};

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
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
          'var(--font-raleway)',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        sans: [
          'var(--font-nunito-sans)',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        pirata: 'var(--font-pirata)',
      },
      colors: {
        'app-blue': appBlue,

        'horizon-blue': horizonBlue,
      },
      // typography: ({ theme }) => ({
      //   DEFAULT: {
      //     css: {
      //       '--tw-prose-body': theme('colors.pink[800]'),
      //       '--tw-prose-headings': theme('colors.pink[900]'),
      //       '--tw-prose-lead': theme('colors.pink[700]'),
      //       '--tw-prose-links': theme('colors.pink[900]'),
      //       '--tw-prose-bold': theme('colors.pink[900]'),
      //       '--tw-prose-counters': theme('colors.pink[600]'),
      //       '--tw-prose-bullets': theme('colors.pink[400]'),
      //       '--tw-prose-hr': theme('colors.pink[300]'),
      //       '--tw-prose-quotes': theme('colors.pink[900]'),
      //       '--tw-prose-quote-borders': theme('colors.pink[300]'),
      //       '--tw-prose-captions': theme('colors.pink[700]'),
      //       '--tw-prose-code': theme('colors.pink[900]'),
      //       '--tw-prose-pre-code': theme('colors.pink[100]'),
      //       '--tw-prose-pre-bg': theme('colors.pink[900]'),
      //       '--tw-prose-th-borders': theme('colors.pink[300]'),
      //       '--tw-prose-td-borders': theme('colors.pink[200]'),
      //       '--tw-prose-invert-body': theme('colors.pink[200]'),
      //       '--tw-prose-invert-headings': theme('colors.white'),
      //       '--tw-prose-invert-lead': theme('colors.pink[300]'),
      //       '--tw-prose-invert-links': theme('colors.white'),
      //       '--tw-prose-invert-bold': theme('colors.white'),
      //       '--tw-prose-invert-counters': theme('colors.pink[400]'),
      //       '--tw-prose-invert-bullets': theme('colors.pink[600]'),
      //       '--tw-prose-invert-hr': theme('colors.pink[700]'),
      //       '--tw-prose-invert-quotes': theme('colors.pink[100]'),
      //       '--tw-prose-invert-quote-borders': theme('colors.pink[700]'),
      //       '--tw-prose-invert-captions': theme('colors.pink[400]'),
      //       '--tw-prose-invert-code': theme('colors.white'),
      //       '--tw-prose-invert-pre-code': theme('colors.pink[300]'),
      //       '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
      //       '--tw-prose-invert-th-borders': theme('colors.pink[600]'),
      //       '--tw-prose-invert-td-borders': theme('colors.pink[700]'),
      //     },
      //   },
      // }),
    },
  },
  daisyui: {
    darkTheme: 'theo', // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ':root', // The element that receives theme color CSS variables
    themes: [
      {
        theo: {
          colors: {
            primary: appBlue,
            secondary: regentGray,
          },
          primary: appBlue[700],
          'primary-content': colors['neutral'][100], // Will be a readable tone of primary if not specified

          secondary: colors['neutral'][500],
          'secondary-content': colors['neutral'][100], //Will be a readable tone of secondary if not specified

          accent: appBlue[300],
          // 'accent-content': colors['neutral'][100], //Will be a readable tone of accent if not specified

          neutral: colors['neutral'][600],
          'neutral-content': '#fff', //Will be a readable tone of neutral if not specified

          'base-100': colors['neutral'][900],
          'base-200': colors['neutral'][700], //Will be a darker tone of base-100 if not specified
          'base-300': colors['neutral'][600], //Will be a darker tone of base-200 if not specified
          'base-content': colors['neutral'][100], //Will be a readable tone of base-100 if not specified

          info: horizonBlue[600], //Will be a default blue color if not specified
          'info-content': colors['neutral'][100], //Will be a readable tone of info if not specified
          success: '#6bb187',
          // 'success-content': '#00fdc1',
          warning: '#dbae59',
          // 'warning-content': '#00fdc1',
          error: '#ac3e31',
          // 'error-content': colors['neutral'][100],
        },
      },
      'dark',
      'light',
    ],
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
