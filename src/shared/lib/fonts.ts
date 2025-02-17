import { Lato, Jost } from 'next/font/google';

export const lato = Lato({
  weight: ['100', '300', '400'],
  subsets: ['latin'],
  variable: '--font-lato',
  // display: 'swap',
  // adjustFontFallback: false, // removes the Failed to find font override values for font `Nunito Sans` error
});

export const jost = Jost({
  // weight: ['100', '300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-jost',
  // display: 'swap',
  // adjustFontFallback: false, // removes the Failed to find font override values for font `Nunito Sans` error
});
