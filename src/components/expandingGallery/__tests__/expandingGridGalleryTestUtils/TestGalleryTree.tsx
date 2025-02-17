import ExpandingGridGallery from '@/components/expandingGallery/ExpandingGridGallery';
import Image from 'next-export-optimize-images/image';

import { useExpandingGridGallery } from '@/components/expandingGallery/contexts/ExpandingGridGalleryContext';
import {
  getExpandingGalleryTestContentFromSlug,
  ExpandingGalleryTestContentItem,
  expandingGalleryTestContent,
} from '@/components/expandingGallery/__tests__/expandingGridGalleryTestUtils/testData';

function TestGalleryExpander() {
  const { currentUniqueSlug } = useExpandingGridGallery();

  if (!currentUniqueSlug) return null;

  const item = getExpandingGalleryTestContentFromSlug(currentUniqueSlug);
  if (!item) return null;

  return (
    <div id={`${currentUniqueSlug}-expanded`}>
      <h1>{item.title}</h1>
      <p>{item.content}</p>
      <Image src={item.image} alt={`${item.expandedAlt}`} />
    </div>
  );
}

function TestGalleryThumbnail({
  item,
}: {
  item: ExpandingGalleryTestContentItem;
}) {
  return (
    <>
      <p>{item.title}</p>
      <Image src={item.image} alt={`${item.thumbAlt}`} />
    </>
  );
}

export default function TestGalleryTree() {
  const content: ExpandingGalleryTestContentItem[] =
    expandingGalleryTestContent;

  return (
    <>
      <ExpandingGridGallery.WithScrollTo />
      <ExpandingGridGallery.WithKeyboardShortcuts />
      <ExpandingGridGallery.Grid>
        <ExpandingGridGallery.GridExpander>
          <ExpandingGridGallery.Nav>
            <ExpandingGridGallery.NavButtonPrev>
              Prev
            </ExpandingGridGallery.NavButtonPrev>
            <ExpandingGridGallery.NavButtonNext>
              Next
            </ExpandingGridGallery.NavButtonNext>
            <ExpandingGridGallery.NavButtonClose>
              Close
            </ExpandingGridGallery.NavButtonClose>
          </ExpandingGridGallery.Nav>
          <TestGalleryExpander />
        </ExpandingGridGallery.GridExpander>

        {content.map(item => (
          <ExpandingGridGallery.GridItem key={item.slug} uniqueSlug={item.slug}>
            <TestGalleryThumbnail item={item} />
          </ExpandingGridGallery.GridItem>
        ))}
      </ExpandingGridGallery.Grid>
    </>
  );
}
