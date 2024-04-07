import { type ReactNode } from 'react';

import ExpandingGalleryContainer from './ExpandingGalleryContainer';
import ExpandingGalleryExpander from './ExpandingGalleryExpander';
import ExpandingGalleryItem from './ExpandingGalleryItem';
import {
  ExpandingGalleryProvider,
  type GalleryState,
} from './contexts/ExpandingGalleryContext';
import ExpandingGalleryScrollTo from './ExpandingGalleryScrollTo';
import ExpandingGalleryUseHash from './ExpandingGalleryUseHash';

interface ExpandingGalleryProps {
  children: ReactNode;
  galleryState?: GalleryState;
}

// Define a generic component
function ExpandingGallery({
  children,
  galleryState = 'url',
}: ExpandingGalleryProps) {
  return (
    <ExpandingGalleryProvider galleryState={galleryState}>
      {children}
    </ExpandingGalleryProvider>
  );
}

ExpandingGallery.Container = ExpandingGalleryContainer;
ExpandingGallery.Expander = ExpandingGalleryExpander;
ExpandingGallery.Item = ExpandingGalleryItem;
ExpandingGallery.ScrollTo = ExpandingGalleryScrollTo;
ExpandingGallery.UseHash = ExpandingGalleryUseHash;

export default ExpandingGallery;
