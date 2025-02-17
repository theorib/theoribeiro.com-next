/* eslint-disable @typescript-eslint/no-floating-promises */
'use client';
import { notFound } from 'next/navigation';
import paths from '@/lib/paths';
import { setUrlPathName } from '@/components/expandingGallery/rendered/useUrlPathName';
import { ButtonClickHandler } from '@/components/expandingGallery/components/NavBtnComp';
import { ItemClickHandler } from '@/components/expandingGallery/components/GridItem';

function useRenderedGalleryActionsHome() {
  function galleryItemAfterHandleClick({
    uniqueSlug,
    currentUniqueSlug,
  }: ItemClickHandler) {
    if (!uniqueSlug) notFound();

    if (uniqueSlug === currentUniqueSlug) {
      setUrlPathName(paths.homePage());
      return;
    }
    setUrlPathName(paths.showReelItemPage(uniqueSlug));
  }

  function btnNextPrevAfterHandleClick({
    uniqueSlug,
  }: ButtonClickHandler): void {
    if (!uniqueSlug) return;
    setUrlPathName(paths.showReelItemPage(uniqueSlug));
  }

  function btnCloseAfterHandleClick(): void {
    setUrlPathName(paths.homePage());
  }

  return {
    galleryItemAfterHandleClick,
    btnNextPrevAfterHandleClick,
    btnCloseAfterHandleClick,
  };
}
export default useRenderedGalleryActionsHome;
