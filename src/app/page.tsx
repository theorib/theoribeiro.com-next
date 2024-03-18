import ExpandingGallery from '@/components/expandingGallery/ExpandingGallery';
import GalleryThumbnail from '@/components/expandingGallery/RenderedGalleryThumbnail';
import RenderedExpangingGallery from '@/components/expandingGallery/RenderedExpangingGallery';
import Portfolio from '@/components/expandingGallery/RenderedExpangingGallery';
import portfolio from '@/portfolio';

export default async function HomePage() {
  return <RenderedExpangingGallery />;
}
