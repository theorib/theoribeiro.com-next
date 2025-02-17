import type { Dispatch, ReactNode, SetStateAction } from 'react';

export type UniqueSlug = string;
export type StoreState = 'urlHash' | 'local';
export type ScrollPosition = { scrollX: number; scrollY: number };

export type SetOrderedUniqueSlugsArray = (input: Array<UniqueSlug>) => void;
export type SetCurrentUniqueSlug = (input: UniqueSlug | null) => void;
export type SetUniqueSlugArr = Dispatch<SetStateAction<Array<UniqueSlug>>>;
export type StoreStateMapping = {
  currentUniqueSlug: UniqueSlug | null;
  setCurrentUniqueSlug: SetCurrentUniqueSlug;
};

export type UniqueIndex = number | null;

export type ExpandingGridGalleryContextValue = {
  previousScrollPosition: ScrollPosition;
  setPreviousScrollPosition: Dispatch<SetStateAction<ScrollPosition>>;
  currentUniqueSlug: UniqueSlug | null;
  setCurrentUniqueSlug: SetCurrentUniqueSlug;
  orderedUniqueSlugsArray: Array<UniqueSlug>;
  setOrderedUniqueSlugsArray: SetOrderedUniqueSlugsArray;
  currentUniqueIndex: UniqueIndex;
  numberOfUniqueSlugs: number;
};

export type ExpandingGridGalleryProviderProps = {
  children: ReactNode;
  storeState: StoreState;
  orderedUniqueSlugsArrayProp: Array<UniqueSlug>;
};
