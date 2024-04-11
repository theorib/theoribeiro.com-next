import { Raleway, Nunito_Sans } from 'next/font/google';

export const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
});
export const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito-sans',
  adjustFontFallback: false,
});
