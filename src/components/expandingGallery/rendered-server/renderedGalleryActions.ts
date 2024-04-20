'use server';

import { redirect } from 'next/navigation';
import { ItemClickHandler } from '../components/GridItem';
import { ButtonClickHandler } from '../components/ButtonComp';

export async function galleryItemAfterHandleClick({
  uniqueSlug,
  currentUniqueSlug,
}: ItemClickHandler) {
  if (uniqueSlug === currentUniqueSlug) redirect('/');
  redirect(`/cinematography-show-reel/${uniqueSlug}`);
}

export async function btnNextPrevAfterHandleClick({
  uniqueSlug,
}: ButtonClickHandler): Promise<void> {
  if (!uniqueSlug) return;
  redirect(`/cinematography-show-reel/${uniqueSlug}`);
}

export async function btnCloseAfterHandleClick(): Promise<void> {
  redirect('/');
}
