import type { Config } from 'tailwindcss';
// import daisyui from 'daisyui';
import colors from 'tailwindcss/colors';
import tailwindTypography from '@tailwindcss/typography';
import tailwindCssAnimate from 'tailwindcss-animate';
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

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // Shadcn
  darkMode: 'class',
  // Shadcn

  safelist: [
    // The following pattern makes tailwind remember all row-start-<size> classes for the portfolio element to use dynamically
    {
      pattern: /row-start-.+/,
      variants: ['sm', 'md', 'lg', 'xl'],
    },
  ],

  theme: {
    extend: {
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
      },
      colors: {
        'app-blue': appBlue,
        'regent-ray': regentGray,
        'horizon-blue': horizonBlue,
        // 'horizon-blue': {
        //   50: 'hsl(var(--horizon-blue-50) / <alpha-value>)',
        //   100: 'hsl(var(--horizon-blue-100) / <alpha-value>)',
        //   200: 'hsl(var(--horizon-blue-200) / <alpha-value>)',
        //   300: 'hsl(var(--horizon-blue-300) / <alpha-value>)',
        //   400: 'hsl(var(--horizon-blue-400) / <alpha-value>)',
        //   500: 'hsl(var(--horizon-blue-500) / <alpha-value>)',
        //   600: 'hsl(var(--horizon-blue-600) / <alpha-value>)',
        //   700: 'hsl(var(--horizon-blue-700) / <alpha-value>)',
        //   800: 'hsl(var(--horizon-blue-800) / <alpha-value>)',
        //   900: 'hsl(var(--horizon-blue-900) / <alpha-value>)',
        //   950: 'hsl(var(--horizon-blue-950) / <alpha-value>)',
        // },

        // Shadcn
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        // background: 'hsl(var(--background))',
        background: colors.neutral[900],
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        // Shadcn
      },

      // Shadcn
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: 'calc(var(--radius) - 4px)',
      },

      keyframes: {
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.37s ease-in',
      },
      // Shadcn
    },
  },
  // daisyui: {
  //   darkTheme: 'theo', // name of one of the included themes for dark mode
  //   base: true, // applies background color and foreground color for root element by default
  //   styled: true, // include daisyUI colors and design decisions for all components
  //   utils: true, // adds responsive and modifier utility classes
  //   prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
  //   logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
  //   themeRoot: ':root', // The element that receives theme color CSS variables
  //   themes: [
  //     {
  //       theo: {
  //         colors: {
  //           primary: appBlue,
  //           secondary: regentGray,
  //         },
  //         primary: appBlue[700],
  //         'primary-content': colors['neutral'][100], // Will be a readable tone of primary if not specified

  //         secondary: colors['neutral'][500],
  //         'secondary-content': colors['neutral'][100], //Will be a readable tone of secondary if not specified

  //         accent: appBlue[300],
  //         // 'accent-content': colors['neutral'][100], //Will be a readable tone of accent if not specified

  //         neutral: colors['neutral'][600],
  //         'neutral-content': '#fff', //Will be a readable tone of neutral if not specified

  //         'base-100': colors['neutral'][900],
  //         'base-200': colors['neutral'][700], //Will be a darker tone of base-100 if not specified
  //         'base-300': colors['neutral'][600], //Will be a darker tone of base-200 if not specified
  //         'base-content': colors['neutral'][100], //Will be a readable tone of base-100 if not specified

  //         info: horizonBlue[600], //Will be a default blue color if not specified
  //         'info-content': colors['neutral'][100], //Will be a readable tone of info if not specified
  //         success: '#6bb187',
  //         // 'success-content': '#00fdc1',
  //         warning: '#dbae59',
  //         // 'warning-content': '#00fdc1',
  //         error: '#ac3e31',
  //         // 'error-content': colors['neutral'][100],
  //       },
  //     },
  //     'dark',
  //     'light',
  //   ],
  // },
  // plugins: [daisyui, tailwindTypography, tailwindCssAnimate],
  plugins: [tailwindTypography, tailwindCssAnimate],
};

export default config;
