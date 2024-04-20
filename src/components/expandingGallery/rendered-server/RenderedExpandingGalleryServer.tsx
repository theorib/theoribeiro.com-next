import portfolioActions from '@/actions/portfolioActions';
import ExpandingGridGallery from '../ExpandingGridGallery';
import { galleryItemAfterHandleClick } from './renderedGalleryActions';
import RenderedGalleryExpanderServer from './RenderedGalleryExpanderServer';
import RenderedExpandingGalleryThumbnail from '../rendered/RenderedExpandingGalleryThumbnail';
import WithSetCurrentUniqueSlug from './WithSetCurrentUniqueSlug';
import { notFound } from 'next/navigation';

interface RenderedExpandingGalleryServerProps {
  slug?: string | null;
}

export default async function RenderedExpandingGalleryServer({
  slug = null,
}: RenderedExpandingGalleryServerProps) {
  if (slug !== null) {
    const slugExists = (await portfolioActions.getPortfolioSlugs()).includes(
      slug,
    );
    if (!slugExists) notFound();
  }

  const thumbnails = await portfolioActions.getPortfolioThumbnails();
  const orderedUniqueSlugsArray = thumbnails.map(item => item.slug);

  return (
    <ExpandingGridGallery
      storeState="local"
      orderedUniqueSlugsArray={orderedUniqueSlugsArray}
    >
      <WithSetCurrentUniqueSlug uniqueSlug={slug} />
      <ExpandingGridGallery.WithScrollTo />
      {/* <ExpandingGridGallery.WithKeyboardShortcuts /> */}
      <ExpandingGridGallery.Grid>
        <ExpandingGridGallery.GridExpander>
          <RenderedGalleryExpanderServer slug={slug} />
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
