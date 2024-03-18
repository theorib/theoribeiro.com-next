'use client';

import { useParams, usePathname, useSearchParams } from 'next/navigation';
import { ReactNode, useEffect, useMemo, useRef } from 'react';
import { useHash, useHashScrolling } from 'react-hash-control';

interface ExpandingGalleryScrollToProps {
  children: ReactNode;
}

export default function ExpandingGalleryScrollTo({
  children,
}: ExpandingGalleryScrollToProps) {
  const hash = useHash();
  const previousElement = useRef<HTMLElement | null>(null);
  console.log(previousElement.current);
  const prevHash = useRef<string | null>(null);
  useEffect(() => {
    if (!hash) return;
    console.log('old hash', prevHash.current);
    const element = document.getElementById(hash);
    if (!element) return;

    if (previousElement.current) {
      previousElement.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      });
    }
    // window.scrollTo(0, 0);
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
    previousElement.current = element;
    prevHash.current = hash;
    console.log('new hash', prevHash.current);
  }, [hash]);

  return <>{children}</>;
}
