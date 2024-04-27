import portfolioActions from '@/actions/portfolioActions';
import ExpandingGridGallery from '../ExpandingGridGallery';
import RenderedGalleryExpander from './RenderedGalleryExpander';
import RenderedExpandingGalleryThumbnail from '../rendered-common/RenderedExpandingGalleryThumbnail';

export default async function RenderedExpandingGalleryHash() {
  const thumbnails = await portfolioActions.getPortfolioThumbnails();
  const orderedUniqueSlugsArray = thumbnails.map(item => item.slug);

  return (
    <ExpandingGridGallery
      storeState="urlHash"
      orderedUniqueSlugsArray={orderedUniqueSlugsArray}
    >
      <ExpandingGridGallery.WithScrollTo />
      <ExpandingGridGallery.WithKeyboardShortcuts />
      <ExpandingGridGallery.Grid>
        <ExpandingGridGallery.GridExpander>
          <RenderedGalleryExpander />
        </ExpandingGridGallery.GridExpander>
        {thumbnails.map(item => (
          <ExpandingGridGallery.GridItem
            key={`${item.slug}-key`}
            uniqueSlug={item.slug}
            acceptServerActions={true}
          >
            <RenderedExpandingGalleryThumbnail item={item} />
          </ExpandingGridGallery.GridItem>
        ))}
      </ExpandingGridGallery.Grid>
    </ExpandingGridGallery>
  );
}
