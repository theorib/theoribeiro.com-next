'use client';

import { createContext, useContext, useState } from 'react';

import utils from '@/shared/components/expandingGallery/utils/utils';
import useInitExpandingGallery from '@/shared/components/expandingGallery/hooks/useInitExpandingGallery';
import {
  type ExpandingGridGalleryContextValue,
  type ExpandingGridGalleryProviderProps,
  type ScrollPosition,
  type UniqueSlug,
  type StoreState,
  type StoreStateMapping,
} from '@/shared/components/expandingGallery/ExpandingGridGallery.types';
import useHash from '@/shared/components/expandingGallery/hooks/useHash';

export const ExpandingGridGalleryContext =
  createContext<ExpandingGridGalleryContextValue | null>(null);

function ExpandingGridGalleryProvider({
  children,
  storeState = 'local',
  orderedUniqueSlugsArrayProp,
}: ExpandingGridGalleryProviderProps) {
  // Init the context States
  const [previousScrollPosition, setPreviousScrollPosition] =
    useState<ScrollPosition>({ scrollX: 0, scrollY: 0 });
  const [hash, setHash] = useHash();
  const [localUniqueSlug, setLocalUniqueSlug] = useState<UniqueSlug | null>(
    null,
  );
  const [uniqueSlugArr, setUniqueSlugArr] = useState<Array<UniqueSlug>>([]);

  // Initialize the expanding gallery component
  useInitExpandingGallery(orderedUniqueSlugsArrayProp, setUniqueSlugArr);

  /**
   * Lookup object that maps store states to their corresponding store state mappings.
   */
  const storeStateLookup: Record<StoreState, StoreStateMapping> = {
    urlHash: {
      currentUniqueSlug: hash,
      setCurrentUniqueSlug: (input: UniqueSlug | null) =>
        utils.setCurrentUniqueSlugState(input, setHash),
    },
    local: {
      currentUniqueSlug: localUniqueSlug,
      setCurrentUniqueSlug: (input: UniqueSlug | null) =>
        utils.setCurrentUniqueSlugState(input, setLocalUniqueSlug),
    },
  };

  const currentUniqueSlug = storeStateLookup[storeState].currentUniqueSlug;
  const setCurrentUniqueSlug =
    storeStateLookup[storeState].setCurrentUniqueSlug;
  const orderedUniqueSlugsArray = uniqueSlugArr;
  function setOrderedUniqueSlugsArray(input: Array<UniqueSlug>): void {
    utils.setOrderedUniqueSlugsArrayState(input, setUniqueSlugArr);
  }

  // Derive state of currentUniqueIndex from the currentUniqueSlug from the context
  const currentUniqueIndex = utils.findIndexFromSlug(
    uniqueSlugArr,
    currentUniqueSlug,
  );
  const numberOfUniqueSlugs = uniqueSlugArr.length;

  const value = {
    currentUniqueSlug,
    setCurrentUniqueSlug,
    orderedUniqueSlugsArray,
    setOrderedUniqueSlugsArray,
    previousScrollPosition,
    setPreviousScrollPosition,
    currentUniqueIndex,
    numberOfUniqueSlugs,
  };

  return (
    <ExpandingGridGalleryContext.Provider value={value}>
      {children}
    </ExpandingGridGalleryContext.Provider>
  );
}

/**
 * Custom hook that provides access to the ExpandingGridGalleryContext.
 * Throws an error if used outside of the ExpandingGridGalleryProvider or if the context is not properly initialized.
 * @returns The ExpandingGridGalleryContext value
 */
function useExpandingGridGallery() {
  const context = useContext(ExpandingGridGalleryContext);
  if (context === undefined)
    throw new Error(
      `useExpandingGridGallery was used outside of ExpandingGridGalleryProvider`,
    );

  if (context === null)
    throw new Error(
      `ExpandingGridGalleryContext was not properly initialized. It's value is null`,
    );

  return context;
}

export { useExpandingGridGallery, ExpandingGridGalleryProvider };
