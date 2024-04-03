'use client';
import { ReactNode, useEffect } from 'react';
import { useHash } from './hooks/useHash';
import useExpandingGalleryStore from './useExpandingGalleryStore';

interface ExpandingGalleryScrollToProps {
  children: ReactNode;
}

export default function ExpandingGalleryScrollTo({
  children,
}: ExpandingGalleryScrollToProps) {
  const hash = useHash() || undefined;
  const { store } = useExpandingGalleryStore();

  useEffect(() => {
    // Scroll window to the previous scroll position
    const previousScrollPosition = store.previousScrollPosition;
    window.scrollTo(previousScrollPosition.x, previousScrollPosition.y);

    if (!hash) return; // guard clause

    const element = document.getElementById(hash);
    if (!element) return; // guard clause

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
  }, [hash, store.previousScrollPosition]);

  return <>{children}</>;
}
