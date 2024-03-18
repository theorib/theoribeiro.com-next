'use client';

import { useParams, usePathname, useSearchParams } from 'next/navigation';
import { ReactNode, useEffect } from 'react';

interface ExpandingGalleryScrollToProps {
  children: ReactNode;
}

export default function ExpandingGalleryScrollTo({
  children,
}: ExpandingGalleryScrollToProps) {
  const pathname = usePathname();
  const params = useParams();
  const searchParams = useSearchParams();
  console.log(pathname);
  console.log(params);
  console.log(searchParams);

  // useEffect(() => {}, []);

  return <>{children}</>;
}
