import RenderedExpandingGalleryHome from '@/components/expandingGallery/rendered-home/RenderedExpandingGalleryHome';
import paths from '@/lib/paths';
import seo from '@/lib/seo';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${seo.title} show reel`,
    // description: `${portfolioItem.description}`,
    alternates: {
      canonical: paths.homePage(),
    },

    // openGraph: {
    //   images: ['/some-specific-page-image.jpg', ...previousImages],
    // },
  };
}

export default async function HomePage() {
  return (
    <>
      <h1 className="sr-only">
        Theo Ribeiro Cinematography Show Reel Home Page
      </h1>

      <RenderedExpandingGalleryHome />
    </>
  );
}
