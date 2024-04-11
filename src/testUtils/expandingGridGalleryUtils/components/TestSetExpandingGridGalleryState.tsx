import { useExpandingGridGallery } from '@/components/expandingGallery/contexts/ExpandingGridGalleryContext';
import {
  ScrollPosition,
  UniqueSlug,
} from '@/components/expandingGallery/ExpandingGridGallery.types';

interface TestSetGalleryStateProps {
  currentUniqueSlug?: UniqueSlug;
  previousScrollPosition?: ScrollPosition;
  orderedUniqueSlugsArray?: UniqueSlug[];
}

export default function TestSetExpandingGridGalleryState({
  currentUniqueSlug,
  previousScrollPosition,
  orderedUniqueSlugsArray,
}: TestSetGalleryStateProps) {
  // currentUniqueSlug
  // previousScrollPosition
  // orderedUniqueSlugsArray
  const {
    setCurrentUniqueSlug,
    setPreviousScrollPosition,
    setOrderedUniqueSlugsArray,
  } = useExpandingGridGallery();
  currentUniqueSlug ? setCurrentUniqueSlug(currentUniqueSlug) : null;
  previousScrollPosition
    ? setPreviousScrollPosition(previousScrollPosition)
    : null;
  orderedUniqueSlugsArray
    ? setOrderedUniqueSlugsArray(orderedUniqueSlugsArray)
    : null;
  return null;
}
