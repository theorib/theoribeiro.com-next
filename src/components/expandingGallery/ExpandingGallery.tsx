import { ExpandingGalleryProvider } from './contexts/ExpandingGalleryContext';
import ExpandingGalleryNext from './ExpandingGalleryNext';
import ExpandingGalleryButton from './ExpandingGalleryButton';
import ExpandingGalleryClose from './ExpandingGalleryClose';
import ExpandingGalleryPrev from './ExpandingGalleryPrev';
import ExpandingGalleryContainer from './ExpandingGalleryContainer';
import ExpandingGalleryExpander from './ExpandingGalleryExpander';
import ExpandingGalleryItem from './ExpandingGalleryItem';
import ExpandingGalleryScrollTo from './ExpandingGalleryScrollTo';
import ExpandingGalleryUseKeyboardShortcuts from './ExpandingGalleryUseKeyboardShortcuts';
import { StoreState } from './expandingGallery.types';
import type { ReactNode } from 'react';

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
