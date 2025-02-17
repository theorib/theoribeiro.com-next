import Grid from '@/components/expandingGallery/components/Grid';
import GridExpander from '@/components/expandingGallery/components/GridExpander';
import GridItem from '@/components/expandingGallery/components/GridItem';
import Nav from '@/components/expandingGallery/components/Nav';
import navBtnCompWithBtnType from '@/components/expandingGallery/components/navBtnCompWithBtnType';
import WithKeyboardShortcuts from '@/components/expandingGallery/components/WithKeyboardShortcuts';
import WithScrollTo from '@/components/expandingGallery/components/WithScrollTo';
import { ExpandingGridGalleryProvider } from '@/components/expandingGallery/contexts/ExpandingGridGalleryContext';
import { StoreState } from '@/components/expandingGallery/ExpandingGridGallery.types';
import { ReactNode } from 'react';

type ExpandingGalleryProps = {
  children: ReactNode;
  storeState?: StoreState;
  orderedUniqueSlugsArray: string[];
};

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
ExpandingGridGallery.NavButtonNext = navBtnCompWithBtnType({
  buttonType: 'next',
});
ExpandingGridGallery.NavButtonNext.displayName = 'NavButtonNext';
ExpandingGridGallery.NavButtonPrev = navBtnCompWithBtnType({
  buttonType: 'prev',
});
ExpandingGridGallery.NavButtonPrev.displayName = 'NavButtonPrev';
ExpandingGridGallery.NavButtonClose = navBtnCompWithBtnType({
  buttonType: 'close',
  variant: 'close',
});
ExpandingGridGallery.NavButtonClose.displayName = 'NavButtonClose';
ExpandingGridGallery.WithKeyboardShortcuts = WithKeyboardShortcuts;

export default ExpandingGridGallery;
