import { Raleway, Nunito_Sans } from 'next/font/google';

export const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
});
export const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito-sans',
  // display: 'swap',
  adjustFontFallback: false, // removes the Failed to find font override values for font `Nunito Sans` error
});
