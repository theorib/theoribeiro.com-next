'use client';
import { ReactNode, useEffect } from 'react';

import useExpandingGalleryStore from './useExpandingGalleryStore';
import { useParams } from 'next/navigation';

interface ExpandingGalleryScrollToProps {
  children: ReactNode;
  urlParam: string;
}

export default function ExpandingGalleryScrollTo({
  urlParam,
  children,
}: ExpandingGalleryScrollToProps) {
  const { store } = useExpandingGalleryStore();
  const params = useParams();
  const slug = params[urlParam];

  useEffect(() => {
    // Scroll window to the previous scroll position
    const previousScrollPosition = store.previousScrollPosition;
    window.scrollTo(previousScrollPosition.x, previousScrollPosition.y);

    if (!slug) return; // guard clause

    const element = document.getElementById(`${slug}-expanded`);
    if (!element) return; // guard clause

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
  }, [slug, store.previousScrollPosition]);

  return <>{children}</>;
}
