import { useEffect } from 'react';
import type { SetUniqueSlugArr, UniqueSlug } from '../expandingGallery.types';
import utils from '../utils/utils';

/**
 * Custom hook to initialize the expanding gallery component.
 * It sets the ordered unique slugs array state.
 * @param orderedUniqueSlugsArray - An array of unique slugs in a specific order.
 */

export default function useInitExpandingGallery(
  orderedUniqueSlugsArray: UniqueSlug[],
  setUniqueSlugArr: SetUniqueSlugArr,
) {
  useEffect(() => {
    utils.setOrderedUniqueSlugsArrayState(
      orderedUniqueSlugsArray,
      setUniqueSlugArr,
    );
  }, [orderedUniqueSlugsArray, setUniqueSlugArr]);
}
