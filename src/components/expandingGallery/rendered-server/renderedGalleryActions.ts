'use server';

import { notFound, redirect } from 'next/navigation';
import { ItemClickHandler } from '../components/GridItem';
import { ButtonClickHandler } from '../components/ButtonComp';
import paths from '@/lib/paths';

export async function galleryItemAfterHandleClick({
  uniqueSlug,
  currentUniqueSlug,
}: ItemClickHandler) {
  if (!uniqueSlug) notFound();
  if (uniqueSlug === currentUniqueSlug) redirect('/');
  redirect(paths.showReelItemPage(uniqueSlug));
}

export async function btnNextPrevAfterHandleClick({
  uniqueSlug,
}: ButtonClickHandler): Promise<void> {
  if (!uniqueSlug) return;
  redirect(paths.showReelItemPage(uniqueSlug));
}

export async function btnCloseAfterHandleClick(): Promise<void> {
  redirect(paths.homePage());
}
