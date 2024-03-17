import ExpandingGallery from '@/components/expanding-gallery/ExpandingGallery';
import GalleryThumbnail from '@/components/expanding-gallery/GalleryThumbnail';
import RenderedExpangingGallery from '@/components/expanding-gallery/RenderedExpangingGallery';
import Portfolio from '@/components/expanding-gallery/RenderedExpangingGallery';
import portfolio from '@/portfolio';

export default async function HomePage() {
  return <RenderedExpangingGallery />;
}
