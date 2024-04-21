'use client';
import { useHotkeys } from 'react-hotkeys-hook';
import useButtonTypeLookup from '../hooks/useButtonTypeLookup';
import { useExpandingGridGallery } from '../contexts/ExpandingGridGalleryContext';

function WithKeyboardShortcuts() {
  const buttonTypeLookUp = useButtonTypeLookup();

  const { currentUniqueSlug } = useExpandingGridGallery();

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
export default WithKeyboardShortcuts;
