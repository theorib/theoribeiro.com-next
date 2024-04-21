'use client';
import type { PortfolioThumbnail } from '@/actions/portfolioActions';
import ExpandingGridGallery from '../ExpandingGridGallery';

import RenderedExpandingGalleryThumbnail from '../rendered/RenderedExpandingGalleryThumbnail';

import { notFound, useParams } from 'next/navigation';

import { UniqueSlug } from '../ExpandingGridGallery.types';
import useRenderedGalleryActions from './useRenderedGalleryActions';
import { PortfolioItem } from '@/data/portfolio';

import RenderedGalleryExpanderNextStatic from './RenderedGalleryExpanderNextStatic';
import WithSetCurrentUniqueSlug from './WithSetCurrentUniqueSlug';

interface RenderedExpandingGalleryServerProps {
  slug?: UniqueSlug | null;
  orderedUniqueSlugsArray: UniqueSlug[];
  thumbnails: PortfolioThumbnail[];
  expanderData?: PortfolioItem | null;
}

export default function RenderedExpandingGalleryNextStatic({
  orderedUniqueSlugsArray,
  thumbnails,
}: RenderedExpandingGalleryServerProps) {
  const params = useParams<{ slug: UniqueSlug }>();
  const { slug } = params;

  if (slug) {
    const slugExists = orderedUniqueSlugsArray.includes(slug);
    if (!slugExists) notFound();
  }

  const { galleryItemAfterHandleClick } = useRenderedGalleryActions();

  return (
    <ExpandingGridGallery
      storeState="local"
      orderedUniqueSlugsArray={orderedUniqueSlugsArray}
    >
      <ExpandingGridGallery.WithScrollTo />
      <WithSetCurrentUniqueSlug />
      <ExpandingGridGallery.WithKeyboardShortcuts />
      <ExpandingGridGallery.Grid>
        <ExpandingGridGallery.GridExpander>
          <RenderedGalleryExpanderNextStatic />
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
