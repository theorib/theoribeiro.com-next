import { type ReactNode } from 'react';

import ExpandingGalleryContainer from './ExpandingGalleryContainer';
import ExpandingGalleryExpander from './ExpandingGalleryExpander';
import ExpandingGalleryItem from './ExpandingGalleryItem';
import {
  ExpandingGalleryProvider,
  type StoreState,
} from './contexts/ExpandingGalleryContext';
import ExpandingGalleryScrollTo from './ExpandingGalleryScrollTo';
import { ExpandingGalleryNext } from './ExpandingGalleryNext';
import { ExpandingGalleryButton } from './ExpandingGalleryButton';
import { ExpandingGalleryClose } from './ExpandingGalleryClose';
import { ExpandingGalleryPrev } from './ExpandingGalleryPrev';
import ExpandingGalleryUseKeyboardShortcuts from './ExpandingGalleryUseKeyboardShortcuts';

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
ExpandingGallery.Next = ExpandingGalleryNext;
ExpandingGallery.Prev = ExpandingGalleryPrev;
ExpandingGallery.Close = ExpandingGalleryClose;
ExpandingGallery.Button = ExpandingGalleryButton;
ExpandingGallery.KeyboardShortcuts = ExpandingGalleryUseKeyboardShortcuts;

export default ExpandingGallery;
