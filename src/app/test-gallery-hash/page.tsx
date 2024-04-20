import portfolioActions from '@/actions/portfolioActions';
import ExpandingGridGallery from '@/components/expandingGallery/ExpandingGridGallery';
import RenderedExpandingGalleryThumbnail from '@/components/expandingGallery/rendered/RenderedExpandingGalleryThumbnail';
import RenderedGalleryExpander from '@/components/expandingGallery/rendered/RenderedGalleryExpander';

export default async function TestGalleryPage() {
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
