'use client';

import { useEffect, useRef } from 'react';

import { useParams } from 'next/navigation';
import { useExpandingGridGallery } from '@/components/expandingGallery/contexts/ExpandingGridGalleryContext';

export default function WithUrlParamSlug() {
  const { slug } = useParams<{ slug: string }>();
  const { setCurrentUniqueSlug } = useExpandingGridGallery();
  const hasInitUrlParamSlug = useRef(false);

  useEffect(() => {
    if (hasInitUrlParamSlug.current) return;
    if (!slug) setCurrentUniqueSlug(null);
    if (slug) setCurrentUniqueSlug(slug);
    hasInitUrlParamSlug.current = true;
  }, [setCurrentUniqueSlug, slug]);

  return null;
}
