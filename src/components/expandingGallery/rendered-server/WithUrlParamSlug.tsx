'use client';

import { useEffect, useRef } from 'react';
import { useExpandingGridGallery } from '../contexts/ExpandingGridGalleryContext';
import { useParams } from 'next/navigation';

export default function WithUrlParamSlug() {
  const params = useParams<{ slug: string }>();
  const { slug } = params;
  const { setCurrentUniqueSlug, orderedUniqueSlugsArray } =
    useExpandingGridGallery();
  const hasInitUrlParamSlug = useRef(false);

  useEffect(() => {
    if (hasInitUrlParamSlug.current) return;
    if (!slug) return setCurrentUniqueSlug(null);
    if (slug) return setCurrentUniqueSlug(slug);
  }, [setCurrentUniqueSlug, slug, orderedUniqueSlugsArray]);

  return null;
}
