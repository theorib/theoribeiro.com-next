import ExpandingGalleryThumbnail from './ExpandingGalleryThumbnail';
import ExpandingGalleryExpander from './ExpandingGalleryExpander';
import { useParams } from 'react-router-dom';
import { portfolio } from '../../data/portfolio';
import { isGalleryItemSlugValid } from './expandingGalleryHelpers';

function ExpandingGallery() {
  const { expandingGalleryUrlParam } = useParams();

  const galleryItems = portfolio;

  return (
    <ul className="-m-3 grid gap-0 sm:grid-cols-2 sm:gap-0">
      <ExpandingGalleryExpander />

      {galleryItems.map((item) => {
        const isActive = item.slug === expandingGalleryUrlParam;
        return (
          <ExpandingGalleryThumbnail
            item={item}
            isActive={isActive}
            key={item.id}
          />
        );
      })}
    </ul>
  );
}

export const loader = function ({ params }) {
  const { expandingGalleryUrlParam } = params;

  const isSlugValid =
    expandingGalleryUrlParam === undefined ||
    isGalleryItemSlugValid(portfolio, expandingGalleryUrlParam);

  if (!isSlugValid)
    throw new Response('ExpandingGallery Item not Found', { status: 404 });
  return null;
};

export default ExpandingGallery;
