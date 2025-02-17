import { ButtonTypeLookup } from '@/components/expandingGallery/hooks/useNavBtnTypeLookup';
import { useHotkeys } from 'react-hotkeys-hook';

export default function useKeyboardShortcuts(
  buttonTypeLookUp: ButtonTypeLookup,
): void {
  useHotkeys(
    'left',
    () => {
      if (buttonTypeLookUp.prev.isEnabled) {
        buttonTypeLookUp.prev.onHandleClick();
      }
    },
    [buttonTypeLookUp.prev.isEnabled],
  );
  useHotkeys(
    'right',
    () => {
      if (buttonTypeLookUp.next.isEnabled) {
        buttonTypeLookUp.next.onHandleClick();
      }
    },
    [buttonTypeLookUp.next.isEnabled],
  );
  useHotkeys(
    'esc',
    () => {
      if (buttonTypeLookUp.close.isEnabled) {
        buttonTypeLookUp.close.onHandleClick();
      }
    },
    [buttonTypeLookUp.close.isEnabled],
  );

  return;
}
