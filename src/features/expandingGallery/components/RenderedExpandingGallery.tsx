'use client';

import { useAutoAnimate } from '@formkit/auto-animate/react';
import portfolioActions from '@/services/portfolio/actions';
import { notFound, useParams } from 'next/navigation';

import paths from '@/shared/lib/paths';
import { cn } from '@/shared/lib/utils';
import JsonLdScript from '@/features/expandingGallery/JsonLdScript';
import { UniqueSlug } from '@/shared/components/expandingGallery/ExpandingGridGallery.types';
import RenderedGalleryExpander from '@/features/expandingGallery/components/RenderedGalleryExpander';
import useRenderedGalleryActionsHome from '@/features/expandingGallery/hooks/useRenderedGalleryActionsHome';
import ExpandingGridGallery from '@/shared/components/expandingGallery/ExpandingGridGallery';
import RenderedExpandingGalleryThumbnail from '@/features/expandingGallery/components/RenderedExpandingGalleryThumbnail';
import WithUrlParamSlug from '@/features/expandingGallery/components/WithUrlParamSlug';

export default function RenderedExpandingGallery() {
  const orderedUniqueSlugsArray = portfolioActions.getPortfolioSlugs();
  const thumbnails = portfolioActions.getPortfolioThumbnails();
  const {
    galleryItemAfterHandleClick,
    btnCloseAfterHandleClick,
    btnNextPrevAfterHandleClick,
  } = useRenderedGalleryActionsHome();
  const { slug } = useParams<{ slug: UniqueSlug }>();
  if (slug && !orderedUniqueSlugsArray.includes(slug)) notFound();

  const [animateRef] = useAutoAnimate({ duration: 300 });

  const itemClasses = [''];
  return (
    <ExpandingGridGallery
      storeState="local"
      orderedUniqueSlugsArray={orderedUniqueSlugsArray}
    >
      <JsonLdScript />
      <ExpandingGridGallery.WithScrollTo />
      <WithUrlParamSlug />
      <ExpandingGridGallery.WithKeyboardShortcuts
        close={{ afterHandleClick: btnCloseAfterHandleClick }}
        next={{ afterHandleClick: btnNextPrevAfterHandleClick }}
        prev={{ afterHandleClick: btnNextPrevAfterHandleClick }}
      />

      <ExpandingGridGallery.Grid
        // !Fix
        // @ts-expect-error Type 'RefCallback<Element>' is not assignable to type 'RefObject<HTMLUListElement>' this is due to how the useAutoAnimate library created their ref.
        ref={animateRef}
        className="gap-4 p-4"
      >
        <ExpandingGridGallery.GridExpander>
          <RenderedGalleryExpander />
        </ExpandingGridGallery.GridExpander>
        {thumbnails.map(item => (
          <li key={`${item.slug}-key`} className={cn(itemClasses)}>
            <ExpandingGridGallery.GridItem
              uniqueSlug={item.slug}
              acceptServerActions={true}
              afterHandleClick={galleryItemAfterHandleClick}
              asChild
            >
              <a
                href={paths.showReelItemPage(item.slug)}
                title={`Toggle ${item?.title} (${item?.projectType}) detailed view`}
                aria-label={`Toggle ${item?.title} (${item?.projectType}) detailed view`}
              >
                <RenderedExpandingGalleryThumbnail item={item} />
              </a>
            </ExpandingGridGallery.GridItem>
          </li>
        ))}
      </ExpandingGridGallery.Grid>
    </ExpandingGridGallery>
  );
}
