'use client';

import { ReactNode, useEffect } from 'react';
import { useHash } from 'react-hash-control';
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
    const previousScrollPosition = store.previousScrollPosition;
    window.scrollTo(previousScrollPosition.x, previousScrollPosition.y);

    if (!hash) return;
    const element = document.getElementById(hash);
    if (!element) return;

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
  }, [hash, store.previousScrollPosition]);

  return <>{children}</>;
}
