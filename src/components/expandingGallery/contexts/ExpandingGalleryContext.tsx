'use client';

import {
  createContext,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  useContext,
  useState,
} from 'react';
import useUrlSlug from '../hooks/useHash';

export type ScrollPosition = { scrollX: number; scrollY: number };

export type ExpandingGalleryContextValue = {
  previousScrollPosition: ScrollPosition;
  setPreviousScrollPosition: Dispatch<SetStateAction<ScrollPosition>>;
  currentUniqueSlug: CurrentUniqueSlug;
  setCurrentUniqueSlug: Dispatch<SetStateAction<CurrentUniqueSlug>>;
};

type CurrentUniqueSlug = string | null;

export const ExpandingGalleryContext =
  createContext<ExpandingGalleryContextValue | null>(null);

const initialScrollPosition: ScrollPosition = { scrollX: 0, scrollY: 0 };

export type StoreState = 'urlHash' | 'local';

type ExpandingGalleryProviderProps = {
  children: ReactNode;
  storeState: StoreState;
};

function ExpandingGalleryProvider({
  children,
  storeState,
}: ExpandingGalleryProviderProps) {
  const [previousScrollPosition, setPreviousScrollPosition] =
    useState<ScrollPosition>(initialScrollPosition);

  const [hash, setHash] = useUrlSlug();
  const [localSlug, setLocalSlug] = useState<CurrentUniqueSlug>(null);

  let currentUniqueSlug, setCurrentUniqueSlug;

  switch (storeState) {
    case 'urlHash':
      currentUniqueSlug = hash;
      setCurrentUniqueSlug = setHash;
      break;
    case 'local':
      currentUniqueSlug = localSlug;
      setCurrentUniqueSlug = setLocalSlug;
      break;
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _exhaustiveCheck: never = storeState;
      throw new Error(
        `Invalid storeState value: ${storeState}. Must be 'urlHash' or 'local'`,
      );
    }
  }

  const value = {
    previousScrollPosition,
    setPreviousScrollPosition,
    currentUniqueSlug,
    setCurrentUniqueSlug,
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
