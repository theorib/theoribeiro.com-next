import { type ReactNode } from 'react';

import ExpandingGalleryContainer from './ExpandingGalleryContainer';
import ExpandingGalleryExpander from './ExpandingGalleryExpander';
import ExpandingGalleryItem from './ExpandingGalleryItem';
import {
  ExpandingGalleryProvider,
  type StoreState,
} from './contexts/ExpandingGalleryContext';
import ExpandingGalleryScrollTo from './ExpandingGalleryScrollTo';

interface ExpandingGalleryProps {
  children: ReactNode;
  storeState?: StoreState;
  orderedUniqueSlugsArray: string[];
}

// Define a generic component
function ExpandingGallery({
  children,
  storeState = 'urlHash',
  orderedUniqueSlugsArray,
}: ExpandingGalleryProps) {
  return (
    <ExpandingGalleryProvider
      storeState={storeState}
      orderedUniqueSlugsArrayProp={orderedUniqueSlugsArray}
    >
      {children}
    </ExpandingGalleryProvider>
  );
}

ExpandingGallery.Container = ExpandingGalleryContainer;
ExpandingGallery.Expander = ExpandingGalleryExpander;
ExpandingGallery.Item = ExpandingGalleryItem;
ExpandingGallery.ScrollTo = ExpandingGalleryScrollTo;

export default ExpandingGallery;
