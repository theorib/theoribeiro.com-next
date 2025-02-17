import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import '@/app/globals.css';
import { lato, jost } from '@/shared/lib/fonts';
import HeaderMain from '@/features/HeaderMain/HeaderMain';
import FooterMain from '@/features/footerMain/FooterMain';
import Providers from '@/Providers';
import seo from '@/shared/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  const metadataBase = process.env.METADATA_BASE_URL;
  if (!metadataBase) throw new Error('No metadata base URL');

  return {
    metadataBase: new URL(metadataBase),
    ...seo,
    title: {
      default: `${seo.title}`,
      template: `%s - ${seo.title}`,
    },
    openGraph: {
      title: `${seo.title}`,
      description: `${seo.description}`,

      images: [
        {
          url: `/opengraph-custom-default.png`,
          alt: `${seo.description}`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en-GB"
      className={`${lato.variable} ${jost.variable} dark`}
      // data-theme="theo"
    >
      <body
        className={`overlay-fix font-secondary dark:bg-background dark:text-foreground grid min-h-screen min-w-72 grid-cols-1 grid-rows-[auto_1fr_auto] font-light subpixel-antialiased transition-all`}
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
