import GalleryThumbnail from '../expanging-gallery/GalleryThumbnail';
import GalleryExpander from '../expanging-gallery/GalleryExpander';
import { useParams } from 'react-router-dom';
import { portfolio } from '../../data/portfolio';
import { isPortfolioSlugValid } from '../expanging-gallery/portfolioHelpers';
import GalleryExpanderContentContainer from './GalleryExpanderContentContainer';

function ExpandingGallery() {
  const { expandingGalleryUrlParam } = useParams();

  const galleryItems = portfolio;

  return (
    <ul className="-m-3 grid gap-0 sm:grid-cols-2 sm:gap-0">
      <GalleryExpander expanderTrigger={''}>
        <GalleryExpanderTempalate>{/* content */}</GalleryExpanderTempalate>
      </GalleryExpander>
      <GalleryThumbnails galleryItemsArray={''}>
        <GalleryThumbnailContent>{/* content */}</GalleryThumbnailContent>
      </GalleryThumbnails>

      {galleryItems.map((item) => {
        const isActive = item.slug === expandingGalleryUrlParam;
        return (
          <GalleryThumbnail item={item} isActive={isActive} key={item.id} />
        );
      })}
    </ul>
  );
}

export const loader = function ({ params }) {
  const { expandingGalleryUrlParam } = params;

  const isSlugValid =
    expandingGalleryUrlParam === undefined ||
    isPortfolioSlugValid(portfolio, expandingGalleryUrlParam);

  if (!isSlugValid)
    throw new Response('ExpandingGallery Item not Found', { status: 404 });
  return null;
};

export default ExpandingGallery;
