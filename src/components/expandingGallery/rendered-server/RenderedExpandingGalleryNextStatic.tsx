'use client';
import ExpandingGridGallery from '../ExpandingGridGallery';
import RenderedExpandingGalleryThumbnail from '../rendered-common/RenderedExpandingGalleryThumbnail';
import useRenderedGalleryActions from './useRenderedGalleryActions';
import RenderedGalleryExpanderNextStatic from './RenderedGalleryExpanderNextStatic';
import WithUrlParamSlug from './WithUrlParamSlug';
// import { useAutoAnimate } from '@formkit/auto-animate/react';
import portfolioActions from '@/actions/portfolioActions';
import { notFound, useParams } from 'next/navigation';
import { UniqueSlug } from '../ExpandingGridGallery.types';

interface RenderedExpandingGalleryNextStaticProps {
  withUrlParamSlug?: boolean;
}

export default function RenderedExpandingGalleryNextStatic({
  withUrlParamSlug = false,
}: RenderedExpandingGalleryNextStaticProps) {
  const orderedUniqueSlugsArray = portfolioActions.getPortfolioSlugs();
  const thumbnails = portfolioActions.getPortfolioThumbnails();
  const {
    galleryItemAfterHandleClick,
    btnCloseAfterHandleClick,
    btnNextPrevAfterHandleClick,
  } = useRenderedGalleryActions();
  const { slug } = useParams<{ slug: UniqueSlug }>();
  if (slug && !orderedUniqueSlugsArray.includes(slug)) notFound();

  // const [ref] = useAutoAnimate({ duration: 200 });

  return (
    <ExpandingGridGallery
      storeState="local"
      orderedUniqueSlugsArray={orderedUniqueSlugsArray}
    >
      <ExpandingGridGallery.WithScrollTo />
      {withUrlParamSlug ? <WithUrlParamSlug /> : null}
      <ExpandingGridGallery.WithKeyboardShortcuts
        close={{ afterHandleClick: btnCloseAfterHandleClick }}
        next={{ afterHandleClick: btnNextPrevAfterHandleClick }}
        prev={{ afterHandleClick: btnNextPrevAfterHandleClick }}
      />
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
