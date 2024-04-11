import { useExpandingGridGallery } from '../contexts/ExpandingGridGalleryContext';

export type ButtonTypeLookup = ReturnType<typeof useButtonTypeLookup>;

export default function useButtonTypeLookup() {
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
      onHandleClick: () => {
        if (isCurrentIndex && buttonTypeLookUp.next.isEnabled) {
          setCurrentUniqueSlug(orderedUniqueSlugsArray[currentUniqueIndex + 1]);
        }
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
      onHandleClick: () => {
        if (isCurrentIndex && buttonTypeLookUp.prev.isEnabled) {
          setCurrentUniqueSlug(orderedUniqueSlugsArray[currentUniqueIndex - 1]);
        }
      },
      ariaLabel: 'Go to Previous Gallery Item',
      buttonText: 'Previous',
    },
    close: {
      isEnabled: isCurrentIndex,
      onHandleClick: () => {
        if (buttonTypeLookUp.close.isEnabled) setCurrentUniqueSlug(null);
      },
      ariaLabel: 'Close Gallery Expander',
      buttonText: 'Close',
    },
  };

  return buttonTypeLookUp;
}
