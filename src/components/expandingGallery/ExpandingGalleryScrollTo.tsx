'use client';
import { useEffect } from 'react';
import { useExpandingGallery } from './contexts/ExpandingGalleryContext';

export default function ExpandingGalleryScrollTo() {
  const {
    currentUniqueSlug,
    previousScrollPosition,
    // setPreviousScrollPosition,
  } = useExpandingGallery();

  useEffect(() => {
    if (!currentUniqueSlug) return; // guard clause
    // Scroll window to the previous scroll position
    // window.scrollTo(
    //   previousScrollPosition.scrollX,
    //   previousScrollPosition.scrollY,
    // );

    const element = document.getElementById(`${currentUniqueSlug}-expanded`);

    if (!element) return; // guard clause

    const animateScrollToElement = window.requestAnimationFrame(() => {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      });
    });

    return () => cancelAnimationFrame(animateScrollToElement);
  }, [currentUniqueSlug, previousScrollPosition]);

  return null;
}
