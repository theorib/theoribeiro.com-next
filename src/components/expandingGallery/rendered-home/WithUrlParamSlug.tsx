'use client';

import { useEffect, useRef } from 'react';
import { useExpandingGridGallery } from '../contexts/ExpandingGridGalleryContext';
import { useParams } from 'next/navigation';

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
