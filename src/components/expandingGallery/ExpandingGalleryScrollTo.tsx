'use client';

import { ReactNode, useEffect, useMemo, useRef } from 'react';
import { useHash } from 'react-hash-control';
import useExpandingGalleryStore from './useExpandingGalleryStore';

interface ExpandingGalleryScrollToProps {
  children: ReactNode;
}

export default function ExpandingGalleryScrollTo({
  children,
}: ExpandingGalleryScrollToProps) {
  const hash = useHash() || undefined;
  const { useStore } = useExpandingGalleryStore();
  const store = useStore();

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

    // const previousScrollPosition = store.previousScrollPosition;
    // if (previousScrollPosition) {
    //   window.scrollTo({
    //     left: previousScrollPosition.x,
    //     top: previousScrollPosition.y,
    //     behavior: 'smooth',
    //   });
    // }

    // const boundingRect = element.getBoundingClientRect();
    // // an object with x and y properties that represent the middle of the element
    // const currentScrollPosition = {
    //   x: boundingRect.left + boundingRect.width / 2,
    //   y: boundingRect.top + boundingRect.height / 2,
    // };

    // window.scrollTo({
    //   left: currentScrollPosition.x,
    //   top: currentScrollPosition.y,
    //   behavior: 'smooth',
    // });

    // window.scrollTo({ behavior: 'smooth', top: 0, left: 0 });

    // const previousHash = store.previousItemHash;
    // if (previousHash) {
    //   console.log('scrolling to previous hash');

    //   const prevElement = document.getElementById(previousHash);
    //   prevElement?.scrollIntoView({
    //     behavior: 'smooth',
    //     block: 'center',
    //     inline: 'center',
    //   });
    // }
  }, [hash]);

  return <>{children}</>;
}
