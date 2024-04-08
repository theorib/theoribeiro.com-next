'use client';

import {
  createContext,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import useUrlSlug from '../hooks/useHash';
import expandingGalleryUtils from '../utils/expandingGalleryUtils';

export type ScrollPosition = { scrollX: number; scrollY: number };

export type ExpandingGalleryContextValue = {
  previousScrollPosition: ScrollPosition;
  setPreviousScrollPosition: Dispatch<SetStateAction<ScrollPosition>>;
  currentUniqueSlug: UniqueSlug | null;
  setCurrentUniqueSlug: Dispatch<SetStateAction<UniqueSlug | null>>;
  orderedUniqueSlugsArray: UniqueSlug[];
  setOrderedUniqueSlugsArray: Dispatch<SetStateAction<UniqueSlug[]>>;
  currentUniqueIndex: number | null;
  numberOfUniqueSlugs: number;
};

export type UniqueSlug = string;

export const ExpandingGalleryContext =
  createContext<ExpandingGalleryContextValue | null>(null);

const initialScrollPosition: ScrollPosition = { scrollX: 0, scrollY: 0 };

export type StoreState = 'urlHash' | 'local';

type ExpandingGalleryProviderProps = {
  children: ReactNode;
  storeState: StoreState;
  orderedUniqueSlugsArrayProp: UniqueSlug[];
};

function ExpandingGalleryProvider({
  children,
  storeState,
  orderedUniqueSlugsArrayProp,
}: ExpandingGalleryProviderProps) {
  const [previousScrollPosition, setPreviousScrollPosition] =
    useState<ScrollPosition>(initialScrollPosition);

  const [hash, setHash] = useUrlSlug();
  const [localUnique, setLocalUniqueSlug] = useState<UniqueSlug | null>(null);

  // Todo - do we need this to be stateful?
  const [orderedUniqueSlugsArray, setOrderedUniqueSlugsArray] = useState<
    UniqueSlug[]
  >([]);
  useEffect(() => {
    setOrderedUniqueSlugsArray(orderedUniqueSlugsArrayProp);
  }, [orderedUniqueSlugsArrayProp]);

  // ! This is a bit of a mess. We should probably refactor this to be more readable
  let currentUniqueSlug: UniqueSlug | null;
  let setCurrentUniqueSlug: Dispatch<SetStateAction<UniqueSlug | null>>;

  switch (storeState) {
    case 'urlHash':
      currentUniqueSlug = hash;
      setCurrentUniqueSlug = setHash;
      break;
    case 'local':
      currentUniqueSlug = localUnique;
      setCurrentUniqueSlug = setLocalUniqueSlug;
      break;
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _exhaustiveCheck: never = storeState;
      throw new Error(
        `Invalid storeState value: ${storeState}. Must be 'urlHash' or 'local'`,
      );
    }
  }

  // Derive state of currentUniqueIndex from the currentUniqueSlug from the context
  const currentUniqueIndex = expandingGalleryUtils.findIndexFromSlug(
    orderedUniqueSlugsArray,
    currentUniqueSlug,
  );
  const numberOfUniqueSlugs = orderedUniqueSlugsArray.length;

  const value = {
    previousScrollPosition,
    setPreviousScrollPosition,
    currentUniqueSlug,
    setCurrentUniqueSlug,
    orderedUniqueSlugsArray,
    setOrderedUniqueSlugsArray,
    currentUniqueIndex,
    numberOfUniqueSlugs,
  };

  return (
    <ExpandingGalleryContext.Provider value={value}>
      {children}
    </ExpandingGalleryContext.Provider>
  );
}

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
