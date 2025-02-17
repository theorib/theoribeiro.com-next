import {
  type UniqueSlug,
  type SetUniqueSlugArr,
} from '@/shared/components/expandingGallery/ExpandingGridGallery.types';
import utils from '@/shared/components/expandingGallery/utils/utils';
import { useEffect } from 'react';

/**
 * Custom hook to initialize the expanding gallery component.
 * It sets the ordered unique slugs array state.
 * @param orderedUniqueSlugsArray - An array of unique slugs in it's intended display order.
 */
export default function useInitExpandingGallery(
  orderedUniqueSlugsArray: Array<UniqueSlug>,
  setUniqueSlugArr: SetUniqueSlugArr,
) {
  useEffect(() => {
    utils.setOrderedUniqueSlugsArrayState(
      orderedUniqueSlugsArray,
      setUniqueSlugArr,
    );
  }, [orderedUniqueSlugsArray, setUniqueSlugArr]);
}
