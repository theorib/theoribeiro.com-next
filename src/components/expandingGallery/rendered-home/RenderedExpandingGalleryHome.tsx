'use client';
import ExpandingGridGallery from '../ExpandingGridGallery';
import RenderedExpandingGalleryThumbnail from '../rendered-common/RenderedExpandingGalleryThumbnail';

import WithUrlParamSlug from './WithUrlParamSlug';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import portfolioActions from '@/actions/portfolioActions';
import { notFound, useParams } from 'next/navigation';
import { UniqueSlug } from '../ExpandingGridGallery.types';
import RenderedGalleryExpanderHome from './RenderedGalleryExpanderHome';
import useRenderedGalleryActionsHome from './useRenderedGalleryActionsHome';
import paths from '@/lib/paths';

export default function RenderedExpandingGalleryHome() {
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

  return (
    <ExpandingGridGallery
      storeState="local"
      orderedUniqueSlugsArray={orderedUniqueSlugsArray}
    >
      <ExpandingGridGallery.WithScrollTo />
      <WithUrlParamSlug />
      <ExpandingGridGallery.WithKeyboardShortcuts
        close={{ afterHandleClick: btnCloseAfterHandleClick }}
        next={{ afterHandleClick: btnNextPrevAfterHandleClick }}
        prev={{ afterHandleClick: btnNextPrevAfterHandleClick }}
      />
      <ExpandingGridGallery.Grid ref={animateRef} className="">
        <ExpandingGridGallery.GridExpander>
          <RenderedGalleryExpanderHome />
        </ExpandingGridGallery.GridExpander>
        {thumbnails.map(item => (
          <li key={`${item.slug}-key`}>
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
