'use client';

import { useEffect } from 'react';
import { useExpandingGridGallery } from '../contexts/ExpandingGridGalleryContext';
import { useParams } from 'next/navigation';

export default function WithSetCurrentUniqueSlug() {
  const params = useParams<{ slug: string }>();
  const { slug } = params;
  const { setCurrentUniqueSlug } = useExpandingGridGallery();

  useEffect(() => {
    if (!slug) return;

    setCurrentUniqueSlug(slug);
  }, [setCurrentUniqueSlug, slug]);

  return null;
}
