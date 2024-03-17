import ExpandingGallery from '@/components/expanding-gallery/ExpandingGallery';
import GalleryThumbnail from '@/components/expanding-gallery/GalleryThumbnail';
import portfolio, { PortfolioItem } from '@/portfolio';
import GalleryExpander from './GalleryExpander';

interface RenderedExpangingGalleryProps {
  slug?: string;
}

export default async function RenderedExpangingGallery({
  slug,
}: RenderedExpangingGalleryProps) {
  const thumbnails = await portfolio.getPortfolioThumbnails();
  type ThumbnailType = (typeof thumbnails)[number];

  let expanderData: PortfolioItem;
  let expanderRender: (() => JSX.Element) | undefined;

  if (slug) {
    expanderData = await portfolio.getPortfolioItemBySlug(slug);
    expanderRender = () => <GalleryExpander expanderData={expanderData} />;
  }

  const thumbnailsRender = (item: ThumbnailType) => (
    <GalleryThumbnail item={item} />
  );

  return (
    <ExpandingGallery
      expanderRender={expanderRender}
      thumbnailsData={thumbnails}
      thumbnailsRender={thumbnailsRender}
    />
  );
}
