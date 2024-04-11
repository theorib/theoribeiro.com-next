import { Suspense } from 'react';

import ExpandingGridGallery from '@/components/expandingGallery/ExpandingGridGallery';
import Image from 'next/image';
import {
  getTestExpandedItemFromSlug,
  testExpandingGridContent,
  TestExpandingGridItem,
} from '../customRenderExpandingGridGallery';
import { useExpandingGridGallery } from '@/components/expandingGallery/contexts/ExpandingGridGalleryContext';

function TestGalleryExpander() {
  const { currentUniqueSlug } = useExpandingGridGallery();

  if (!currentUniqueSlug) return null;

  const item = getTestExpandedItemFromSlug(currentUniqueSlug);
  if (!item) return null;

  return (
    <div id={`${currentUniqueSlug}-expanded`}>
      <h1>{item.title}</h1>
      <p>{item.content}</p>
      <Image src={item.image} alt={`${item.expandedAlt}`} />
    </div>
  );
}

function TestGalleryThumbnail({ item }: { item: TestExpandingGridItem }) {
  return (
    <>
      <p>{item.title}</p>
      <Image src={item.image} alt={`${item.thumbAlt}`} />
    </>
  );
}

export default function ExpandingGridGalleryTestTree() {
  const content: TestExpandingGridItem[] = testExpandingGridContent;

  return (
    <Suspense>
      {/* <ExpandingGridGallery.WithScrollTo /> */}
      {/* <ExpandingGridGallery.WithKeyboardShortcuts /> */}
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
    </Suspense>
  );
}
