import portfolioActions from '@/actions/portfolioActions';
import ExpandingGridGallery from '../ExpandingGridGallery';
import RenderedGalleryExpander from './RenderedGalleryExpander';
import RenderedExpandingGalleryThumbnail from './RenderedExpandingGalleryThumbnail';
import { notFound, redirect } from 'next/navigation';
import paths from '@/lib/paths';
import { ItemClickHandler } from '../components/GridItem';

export default async function RenderedExpandingGallery() {
  const thumbnails = await portfolioActions.getPortfolioThumbnails();
  const orderedUniqueSlugsArray = thumbnails.map(item => item.slug);

  function galleryItemAfterHandleClick({
    uniqueSlug,
    currentUniqueSlug,
  }: ItemClickHandler) {
    if (!uniqueSlug) notFound();
    if (uniqueSlug === currentUniqueSlug) redirect('/');
    redirect(paths.showReelItemPage(uniqueSlug));
  }

  return (
    <ExpandingGridGallery
      storeState="local"
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
            afterHandleClick={galleryItemAfterHandleClick}
          >
            <RenderedExpandingGalleryThumbnail item={item} />
          </ExpandingGridGallery.GridItem>
        ))}
      </ExpandingGridGallery.Grid>
    </ExpandingGridGallery>
  );
}
