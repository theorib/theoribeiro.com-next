'use client';
import { useHotkeys } from 'react-hotkeys-hook';

import { UniqueSlug } from '@/shared/components/expandingGallery/ExpandingGridGallery.types';
import { useExpandingGridGallery } from '@/shared/components/expandingGallery/contexts/ExpandingGridGalleryContext';
import useNavBtnTypeLookup from '@/shared/components/expandingGallery/hooks/useNavBtnTypeLookup';

interface ClickHandlerProps {
  uniqueSlug?: UniqueSlug | null;
  uniqueIndex?: number | null;
}
interface WithKeyboardShortcutsProps {
  next?: {
    afterHandleClick?: ({ uniqueSlug, uniqueIndex }: ClickHandlerProps) => void;
  };
  prev?: {
    afterHandleClick?: ({ uniqueSlug, uniqueIndex }: ClickHandlerProps) => void;
  };
  close?: {
    afterHandleClick?: () => void;
  };
}

function WithKeyboardShortcuts({
  next,
  prev,
  close,
}: WithKeyboardShortcutsProps) {
  const buttonTypeLookUp = useNavBtnTypeLookup();

  const { currentUniqueSlug } = useExpandingGridGallery();

  useHotkeys(
    'left',
    () => {
      if (buttonTypeLookUp.prev.isEnabled) {
        const { uniqueSlug, uniqueIndex } =
          buttonTypeLookUp.prev.onHandleClick();
        prev?.afterHandleClick?.({
          uniqueSlug,
          uniqueIndex,
        });
      }
    },
    [buttonTypeLookUp.prev.isEnabled, currentUniqueSlug],
  );
  useHotkeys(
    'right',
    () => {
      if (buttonTypeLookUp.next.isEnabled) {
        const { uniqueSlug, uniqueIndex } =
          buttonTypeLookUp.next.onHandleClick();
        next?.afterHandleClick?.({
          uniqueSlug,
          uniqueIndex,
        });
      }
    },
    [buttonTypeLookUp.next.isEnabled, currentUniqueSlug],
  );
  useHotkeys(
    'esc',
    () => {
      if (buttonTypeLookUp.close.isEnabled) {
        buttonTypeLookUp.close.onHandleClick();
        close?.afterHandleClick?.();
      }
    },
    [buttonTypeLookUp.close.isEnabled, currentUniqueSlug],
  );

  return null;
}
export default WithKeyboardShortcuts;
