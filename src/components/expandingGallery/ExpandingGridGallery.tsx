import { ExpandingGridGalleryProvider } from './contexts/ExpandingGridGalleryContext';
import ButtonComp from './components/ButtonComp';
import Grid from './components/Grid';
import GridExpander from './components/GridExpander';
import GridItem from './components/GridItem';
import WithScrollTo from './components/WithScrollTo';
import WithKeyboardShortcuts from './components/WithKeyboardShortcuts';
import { StoreState } from './ExpandingGridGallery.types';
import type { ReactNode } from 'react';
import Nav from './components/Nav';
import buttonCompWithButtonType from './components/buttonCompWithButtonType';

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
ExpandingGridGallery.Nav = Nav;
ExpandingGridGallery.NavButtonNext = buttonCompWithButtonType({
  buttonType: 'next',
});
ExpandingGridGallery.NavButtonPrev = buttonCompWithButtonType({
  buttonType: 'prev',
});
ExpandingGridGallery.NavButtonClose = buttonCompWithButtonType({
  buttonType: 'close',
  variant: 'close',
});
ExpandingGridGallery.WithKeyboardShortcuts = WithKeyboardShortcuts;

export default ExpandingGridGallery;
