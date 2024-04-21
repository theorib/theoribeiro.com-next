/* eslint-disable @typescript-eslint/no-floating-promises */
'use client';
import { notFound } from 'next/navigation';
import { ItemClickHandler } from '../components/GridItem';
import { ButtonClickHandler } from '../components/ButtonComp';
import paths from '@/lib/paths';
import { useRouter } from 'next/navigation';

function useRenderedGalleryActions() {
  const router = useRouter();

  function galleryItemAfterHandleClick({
    uniqueSlug,
    currentUniqueSlug,
  }: ItemClickHandler) {
    if (!uniqueSlug) notFound();

    if (uniqueSlug === currentUniqueSlug) {
      router.push(paths.homePage(), { scroll: false });
      return;
    }

    router.push(paths.showReelItemPage(uniqueSlug), { scroll: false });
  }

  function btnNextPrevAfterHandleClick({
    uniqueSlug,
  }: ButtonClickHandler): void {
    if (!uniqueSlug) return;
    router.push(paths.showReelItemPage(uniqueSlug), { scroll: false });
  }

  function btnCloseAfterHandleClick(): void {
    router.push(paths.homePage(), { scroll: false });
  }

  return {
    galleryItemAfterHandleClick,
    btnNextPrevAfterHandleClick,
    btnCloseAfterHandleClick,
  };
}
export default useRenderedGalleryActions;
