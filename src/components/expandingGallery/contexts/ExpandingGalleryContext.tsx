'use client';

import {
  createContext,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  useContext,
  useState,
} from 'react';

type ScrollPosition = { scrollX: number; scrollY: number };

export type ExpandingGalleryContextValue = {
  previousScrollPosition: ScrollPosition;
  setPreviousScrollPosition: Dispatch<SetStateAction<ScrollPosition>>;
  currentExpandedIndex: CurrentExpandedIndex;
  setCurrentExpandedIndex: Dispatch<SetStateAction<CurrentExpandedIndex>>;
  currentExpandedSlug: CurrentExpandedSlug;
  setCurrentExpandedSlug: Dispatch<SetStateAction<CurrentExpandedSlug>>;
};

type CurrentExpandedIndex = number | null;
type CurrentExpandedSlug = string | null;

export const ExpandingGalleryContext =
  createContext<ExpandingGalleryContextValue | null>(null);

type ExpandingGalleryProviderProps = {
  children: ReactNode;
};

const initialScrollPosition = { scrollX: 0, scrollY: 0 };

function ExpandingGalleryProvider({ children }: ExpandingGalleryProviderProps) {
  const [previousScrollPosition, setPreviousScrollPosition] =
    useState<ScrollPosition>(initialScrollPosition);
  const [currentExpandedIndex, setCurrentExpandedIndex] =
    useState<CurrentExpandedIndex>(null);
  const [currentExpandedSlug, setCurrentExpandedSlug] =
    useState<CurrentExpandedSlug>(null);

  const value = {
    previousScrollPosition,
    setPreviousScrollPosition,
    currentExpandedIndex,
    setCurrentExpandedIndex,
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
