import portfolioActions from '@/actions/portfolioActions';
import ExpandingGallery from './ExpandingGallery';
import RenderedGalleryExpander from './RenderedGalleryExpander';
import RenderedExpandingGalleryThumbnail from './RenderedExpandingGalleryThumbnail';

export default async function RenderedExpandingGallery() {
  const thumbnails = await portfolioActions.getPortfolioThumbnails();
  const orderedUniqueSlugsArray = thumbnails.map(item => item.slug);

  return (
    <ExpandingGallery
      storeState="urlHash"
      orderedUniqueSlugsArray={orderedUniqueSlugsArray}
    >
      <ExpandingGallery.ScrollTo />
      <ExpandingGallery.KeyboardShortcuts />
      <ExpandingGallery.Container>
        <ExpandingGallery.Expander>
          <RenderedGalleryExpander />
        </ExpandingGallery.Expander>
        {thumbnails.map(item => (
          <ExpandingGallery.Item
            key={`${item.slug}-key`}
            uniqueSlug={item.slug}
          >
            <RenderedExpandingGalleryThumbnail item={item} />
          </ExpandingGallery.Item>
        ))}
      </ExpandingGallery.Container>
    </ExpandingGallery>
  );
}
