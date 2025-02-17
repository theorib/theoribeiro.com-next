import RenderedExpandingGalleryHome from '@/features/expandingGallery/components/RenderedExpandingGallery';
import paths from '@/shared/lib/paths';
import seo from '@/shared/lib/seo';
import { type Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${seo.title} show reel`,
    alternates: {
      canonical: paths.homePage(),
    },
  };
}

export default function HomePage() {
  return (
    <>
      <h1 className="sr-only">
        Theo Ribeiro Cinematography Show Reel Home Page
      </h1>

      <RenderedExpandingGalleryHome />
    </>
  );
}
