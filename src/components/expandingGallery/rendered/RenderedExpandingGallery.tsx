import portfolioActions from '@/actions/portfolioActions';
import ExpandingGridGallery from '../ExpandingGridGallery';
import RenderedGalleryExpander from './RenderedGalleryExpander';
import RenderedExpandingGalleryThumbnail from './RenderedExpandingGalleryThumbnail';

export default async function RenderedExpandingGallery() {
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
          // <li key={`${item.slug}-key`}>
          <ExpandingGridGallery.GridItem
            key={`${item.slug}-key`}
            uniqueSlug={item.slug}
            // asChild
          >
            {/* <button className="w-full block"> */}
            <RenderedExpandingGalleryThumbnail item={item} />
            {/* </button> */}
          </ExpandingGridGallery.GridItem>
          // </li>
        ))}
      </ExpandingGridGallery.Grid>
    </ExpandingGridGallery>
  );
}
