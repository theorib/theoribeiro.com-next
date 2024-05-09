import { useExpandingGridGallery } from '../contexts/ExpandingGridGalleryContext';
import { UniqueIndex, UniqueSlug } from '../ExpandingGridGallery.types';

export type ButtonTypeLookup = ReturnType<typeof useNavBtnTypeLookup>;
export interface OnHandleClickReturnValue {
  uniqueIndex: UniqueIndex;
  uniqueSlug: UniqueSlug | null;
}

const onHandleClickNullReturn = { uniqueIndex: null, uniqueSlug: null };

export default function useNavBtnTypeLookup() {
  const {
    numberOfUniqueSlugs,
    currentUniqueIndex,
    orderedUniqueSlugsArray,
    setCurrentUniqueSlug,
  } = useExpandingGridGallery();

  const isCurrentIndex = currentUniqueIndex !== null;

  const buttonTypeLookUp = {
    next: {
      isEnabled:
        isCurrentIndex &&
        currentUniqueIndex !== numberOfUniqueSlugs - 1 &&
        currentUniqueIndex < numberOfUniqueSlugs &&
        currentUniqueIndex >= 0,
      onHandleClick: (): OnHandleClickReturnValue => {
        if (isCurrentIndex && buttonTypeLookUp.next.isEnabled) {
          const nextUniqueIndex = currentUniqueIndex + 1;
          setCurrentUniqueSlug(orderedUniqueSlugsArray[nextUniqueIndex]);
          return {
            uniqueIndex: nextUniqueIndex,
            uniqueSlug: orderedUniqueSlugsArray[nextUniqueIndex],
          };
        }
        return onHandleClickNullReturn;
      },
      ariaLabel: 'Go to Next Gallery Item',
      buttonText: 'Next',
    },
    prev: {
      isEnabled:
        isCurrentIndex &&
        currentUniqueIndex !== 0 &&
        currentUniqueIndex < numberOfUniqueSlugs &&
        currentUniqueIndex >= 0,
      onHandleClick: (): OnHandleClickReturnValue => {
        if (isCurrentIndex && buttonTypeLookUp.prev.isEnabled) {
          const previousUniqueIndex = currentUniqueIndex - 1;
          setCurrentUniqueSlug(orderedUniqueSlugsArray[previousUniqueIndex]);
          return {
            uniqueIndex: previousUniqueIndex,
            uniqueSlug: orderedUniqueSlugsArray[previousUniqueIndex],
          };
        }
        return onHandleClickNullReturn;
      },
      ariaLabel: 'Go to Previous Gallery Item',
      buttonText: 'Previous',
    },
    close: {
      isEnabled: isCurrentIndex,
      onHandleClick: (): OnHandleClickReturnValue => {
        if (buttonTypeLookUp.close.isEnabled) {
          setCurrentUniqueSlug(null);
        }
        return onHandleClickNullReturn;
      },
      ariaLabel: 'Close Gallery Expander',
      buttonText: 'Close',
    },
  };

  return buttonTypeLookUp;
}
