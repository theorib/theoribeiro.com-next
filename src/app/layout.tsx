import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import '@/app/globals.css';
import { nunitoSans, raleway } from '@/lib/fonts';
import HeaderMain from '@/components/layout/HeaderMain';
import FooterMain from '@/components/layout/FooterMain';
import Providers from '@/Providers';

export const metadata: Metadata = {
  title: 'Theo Ribeiro | Cinematographer',
  description: 'Generated by create next app',
};
interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${raleway.variable} ${nunitoSans.variable} dark`}
      // data-theme="theo"
    >
      <body
        className={`grid min-h-screen min-w-72 grid-cols-1 grid-rows-[auto_1fr_auto] font-sans antialiased transition-all overlay-fix dark:bg-background dark:text-foreground`}
      >
        <Providers>
          <HeaderMain />
          <main>{children}</main>
          <FooterMain />
        </Providers>
      </body>
    </html>
  );
}
