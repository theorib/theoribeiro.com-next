import ExpandingGallery from '@/components/expandingGallery/ExpandingGallery';
import RenderedGalleryThumbnail from '@/components/expandingGallery/RenderedGalleryThumbnail';
// import portfolioActions, {
//   type PortfolioItem,
//   type PortfolioThumbnail,
// } from '@/portfolioActions';
import RenderedGalleryExpander from './RenderedGalleryExpander';
import portfolioActions, {
  type PortfolioItem,
  type PortfolioThumbnail,
} from '@/actions/portfolioActions';

interface RenderedExpandingGalleryProps {
  slug?: string;
}
interface thumbnailsRenderProps {
  item: PortfolioThumbnail;
  expanderIndex: number | undefined;
}

export default async function RenderedExpandingGallery({
  slug,
}: RenderedExpandingGalleryProps) {
  const thumbnails = await portfolioActions.getPortfolioThumbnails();

  let expanderData: PortfolioItem;
  let expanderRender: (() => JSX.Element) | undefined;
  let expanderIndex: number | undefined;

  if (slug) {
    expanderData = await portfolioActions.getPortfolioItemBySlug(slug);
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
