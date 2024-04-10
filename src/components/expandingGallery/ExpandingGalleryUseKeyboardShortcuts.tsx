'use client';
import { useHotkeys } from 'react-hotkeys-hook';
import useButtonTypeLookup from './hooks/useButtonTypeLookup';
import { useExpandingGallery } from './contexts/ExpandingGalleryContext';

export default function ExpandingGalleryUseKeyboardShortcuts() {
  const buttonTypeLookUp = useButtonTypeLookup();

  const { currentUniqueSlug } = useExpandingGallery();

  useHotkeys(
    'left',
    () => {
      if (buttonTypeLookUp.prev.isEnabled) {
        buttonTypeLookUp.prev.onHandleClick();
      }
    },
    [buttonTypeLookUp.prev.isEnabled, currentUniqueSlug],
  );
  useHotkeys(
    'right',
    () => {
      if (buttonTypeLookUp.next.isEnabled) {
        buttonTypeLookUp.next.onHandleClick();
      }
    },
    [buttonTypeLookUp.next.isEnabled, currentUniqueSlug],
  );
  useHotkeys(
    'esc',
    () => {
      if (buttonTypeLookUp.close.isEnabled) {
        buttonTypeLookUp.close.onHandleClick();
      }
    },
    [buttonTypeLookUp.close.isEnabled, currentUniqueSlug],
  );

  return null;
}
