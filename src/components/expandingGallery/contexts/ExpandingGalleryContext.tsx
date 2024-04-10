'use client';

import { createContext, useContext, useState } from 'react';
import useUrlSlug from '../hooks/useHash';
import useInitExpandingGallery from '../hooks/useInitExpandingGallery';
import utils from '../utils/utils';
import {
  ExpandingGalleryContextValue,
  ExpandingGalleryProviderProps,
  ScrollPosition,
  StoreState,
  StoreStateMapping,
  UniqueSlug,
} from '../expandingGallery.types';

export const ExpandingGalleryContext =
  createContext<ExpandingGalleryContextValue | null>(null);

function ExpandingGalleryProvider({
  children,
  storeState = 'local',
  orderedUniqueSlugsArrayProp,
}: ExpandingGalleryProviderProps) {
  // Init the context States
  const [previousScrollPosition, setPreviousScrollPosition] =
    useState<ScrollPosition>({ scrollX: 0, scrollY: 0 });
  const [hash, setHash] = useUrlSlug();
  const [localUniqueSlug, setLocalUniqueSlug] = useState<UniqueSlug | null>(
    null,
  );
  const [uniqueSlugArr, setUniqueSlugArr] = useState<UniqueSlug[]>([]);

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
  function setOrderedUniqueSlugsArray(input: UniqueSlug[]): void {
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
    <ExpandingGalleryContext.Provider value={value}>
      {children}
    </ExpandingGalleryContext.Provider>
  );
}

/**
 * Custom hook that provides access to the ExpandingGalleryContext.
 * Throws an error if used outside of the ExpandingGalleryProvider or if the context is not properly initialized.
 * @returns The ExpandingGalleryContext value
 */
function useExpandingGallery() {
  const context = useContext(ExpandingGalleryContext);
  if (context === undefined)
    throw new Error(
      `useExpandingGallery was used outside of ExpandingGalleryProvider`,
    );

  if (context === null)
    throw new Error(
      `ExpandingGalleryContext was not properly initialized. It's value is null`,
    );

  return context;
}

export { useExpandingGallery, ExpandingGalleryProvider };
