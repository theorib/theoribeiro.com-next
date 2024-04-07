import portfolioActions from '@/actions/portfolioActions';
import ExpandingGallery from './ExpandingGallery';
import RenderedGalleryExpander from './RenderedGalleryExpander';
import RenderedExpandingGalleryThumbnail from './RenderedExpandingGalleryThumbnail';

export default async function RenderedExpandingGallery() {
  const thumbnails = await portfolioActions.getPortfolioThumbnails();
  const slugsArray = thumbnails.map(item => item.slug);

  return (
    <ExpandingGallery>
      <ExpandingGallery.ScrollTo />
      <ExpandingGallery.Container>
        <ExpandingGallery.Expander slugsArray={slugsArray}>
          <RenderedGalleryExpander />
        </ExpandingGallery.Expander>
        {thumbnails.map(item => (
          <ExpandingGallery.Item key={`${item.slug}-key`} slug={item.slug}>
            <RenderedExpandingGalleryThumbnail item={item} />
          </ExpandingGallery.Item>
        ))}
      </ExpandingGallery.Container>
    </ExpandingGallery>
  );
}
