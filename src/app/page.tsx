import RenderedExpandingGalleryHome from '@/components/expandingGallery/rendered/RenderedExpandingGallery';
import paths from '@/lib/paths';
import seo from '@/lib/seo';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${seo.title} show reel`,
    alternates: {
      canonical: paths.homePage(),
    },
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
