import { ExpandingGridGalleryProvider } from './contexts/ExpandingGridGalleryContext';
import ButtonNext from './components/ButtonNext';
import ButtonPrev from './components/ButtonPrev';
import ButtonClose from './components/ButtonClose';
import ButtonComp from './components/ButtonComp';
import Grid from './components/Grid';
import GridExpander from './components/GridExpander';
import GridItem from './components/GridItem';
import WithScrollTo from './components/WithScrollTo';
import WithKeyboardShortcuts from './components/WithKeyboardShortcuts';
import { StoreState } from './ExpandingGridGallery.types';
import type { ReactNode } from 'react';

interface ExpandingGalleryProps {
  children: ReactNode;
  storeState?: StoreState;
  orderedUniqueSlugsArray: string[];
}

// Define a generic component
function ExpandingGridGallery({
  children,
  storeState = 'urlHash',
  orderedUniqueSlugsArray,
}: ExpandingGalleryProps) {
  return (
    <ExpandingGridGalleryProvider
      storeState={storeState}
      orderedUniqueSlugsArrayProp={orderedUniqueSlugsArray}
    >
      {children}
    </ExpandingGridGalleryProvider>
  );
}

ExpandingGridGallery.Grid = Grid;
ExpandingGridGallery.GridExpander = GridExpander;
ExpandingGridGallery.GridItem = GridItem;
ExpandingGridGallery.WithScrollTo = WithScrollTo;
ExpandingGridGallery.ButtonNext = ButtonNext;
ExpandingGridGallery.ButtonPrev = ButtonPrev;
ExpandingGridGallery.ButtonClose = ButtonClose;
ExpandingGridGallery.ButtonComp = ButtonComp;
ExpandingGridGallery.WithKeyboardShortcuts = WithKeyboardShortcuts;

export default ExpandingGridGallery;
