'use client';
import { useEffect } from 'react';
import { useExpandingGallery } from '../contexts/ExpandingGalleryContext';

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
    // console.log('scrolling to', element);
    if (!element) return; // guard clause

    const animate = window.requestAnimationFrame(() => {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      });
    });

    // scrollToElement(element);

    // const timeOut = setTimeout(() => {
    //   element.scrollIntoView({
    //     behavior: 'smooth',
    //     block: 'center',
    //     inline: 'center',
    //   });
    // }, 0);

    // element.scrollIntoView({
    //   behavior: 'smooth',
    //   block: 'center',
    //   inline: 'center',
    // });

    // setPreviousScrollPosition({
    //   scrollX: window.scrollX,
    //   scrollY: window.scrollY,
    // });
    // return () => clearTimeout(timeOut);
    return () => cancelAnimationFrame(animate);
  }, [currentUniqueSlug, previousScrollPosition]);

  return null;
}
