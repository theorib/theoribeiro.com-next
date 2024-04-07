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

type ScrollPosition = { scrollX: number; scrollY: number };

export type ExpandingGalleryContextValue = {
  previousScrollPosition: ScrollPosition;
  setPreviousScrollPosition: Dispatch<SetStateAction<ScrollPosition>>;
  currentExpandedSlug: CurrentExpandedSlug;
  setCurrentExpandedSlug: Dispatch<SetStateAction<CurrentExpandedSlug>>;
};

type CurrentExpandedSlug = string | null;

export const ExpandingGalleryContext =
  createContext<ExpandingGalleryContextValue | null>(null);

const initialScrollPosition: ScrollPosition = { scrollX: 0, scrollY: 0 };

export type GalleryState = 'url' | 'local';

type ExpandingGalleryProviderProps = {
  children: ReactNode;
  galleryState: GalleryState;
};

function ExpandingGalleryProvider({
  children,
  galleryState,
}: ExpandingGalleryProviderProps) {
  const [previousScrollPosition, setPreviousScrollPosition] =
    useState<ScrollPosition>(initialScrollPosition);

  const [hash, setHash] = useUrlSlug();
  const [localSlug, setLocalSlug] = useState<CurrentExpandedSlug>(null);

  let currentExpandedSlug, setCurrentExpandedSlug;

  switch (galleryState) {
    case 'url':
      currentExpandedSlug = hash;
      setCurrentExpandedSlug = setHash;
      break;
    case 'local':
      currentExpandedSlug = localSlug;
      setCurrentExpandedSlug = setLocalSlug;
      break;
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _exhaustiveCheck: never = galleryState;
      throw new Error(
        `Invalid galleryState value: ${galleryState}. Must be 'url' or 'local'`,
      );
    }
  }

  const value = {
    previousScrollPosition,
    setPreviousScrollPosition,
    currentExpandedSlug,
    setCurrentExpandedSlug,
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
