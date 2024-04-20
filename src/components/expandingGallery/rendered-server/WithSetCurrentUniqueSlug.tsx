'use client';

import { useEffect } from 'react';
import { useExpandingGridGallery } from '../contexts/ExpandingGridGalleryContext';
import { UniqueSlug } from '../ExpandingGridGallery.types';

interface WithSetCurrentUniqueSlugProps {
  uniqueSlug: UniqueSlug | null;
}

export default function WithSetCurrentUniqueSlug({
  uniqueSlug,
}: WithSetCurrentUniqueSlugProps) {
  const { setCurrentUniqueSlug } = useExpandingGridGallery();

  useEffect(() => {
    console.log('WithSetCurrentUniqueSlug');

    setCurrentUniqueSlug(uniqueSlug);
  }, [setCurrentUniqueSlug, uniqueSlug]);

  return null;
}
