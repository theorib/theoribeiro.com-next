import ExpandingGallery from '@/components/expandingGallery/ExpandingGallery';
import RenderedGalleryThumbnail from '@/components/expandingGallery/RenderedGalleryThumbnail';
import portfolio, { PortfolioItem, PortfolioThumbnail } from '@/portfolio';
import RenderedGalleryExpander from './RenderedGalleryExpander';

interface RenderedExpangingGalleryProps {
  slug?: string;
}
interface thumbnailsRenderProps {
  item: PortfolioThumbnail;
  expanderIndex: number | undefined;
}

export default async function RenderedExpangingGallery({
  slug,
}: RenderedExpangingGalleryProps) {
  const thumbnails = await portfolio.getPortfolioThumbnails();

  let expanderData: PortfolioItem;
  let expanderRender: (() => JSX.Element) | undefined;
  let expanderIndex: number | undefined;

  if (slug) {
    expanderData = await portfolio.getPortfolioItemBySlug(slug);
    expanderIndex =
      thumbnails.find(item => item.slug === slug)?.id ?? undefined;
    expanderRender = () => (
      <RenderedGalleryExpander expanderData={expanderData} />
    );
  }

  const thumbnailsRender = ({ item, expanderIndex }: thumbnailsRenderProps) => (
    <RenderedGalleryThumbnail
      key={item.id}
      item={item}
      expanderIndex={expanderIndex}
    />
  );

  return (
    <ExpandingGallery
      expanderIndex={expanderIndex}
      expanderRender={expanderRender}
      thumbnailsData={thumbnails}
      thumbnailsRender={thumbnailsRender}
    />
  );
}
