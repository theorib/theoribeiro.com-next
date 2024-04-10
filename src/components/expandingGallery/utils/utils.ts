import { clsx, type ClassValue } from 'clsx';
import { type SetStateAction, type Dispatch } from 'react';
import { twMerge } from 'tailwind-merge';
import { UniqueSlug } from '../expandingGallery.types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface getItemRowPositionProps {
  currentUniqueIndex: number;
  numberOfUniqueSlugs: number;
  numColumns: number;
}

function getItemRowPosition({
  currentUniqueIndex,
  numberOfUniqueSlugs,
  numColumns,
}: getItemRowPositionProps): number {
  // Calculate the row number of the current item
  const itemRow = Math.floor(currentUniqueIndex / numColumns) + 1;

  // Calculate the total number of rows
  const totalRows = Math.ceil(numberOfUniqueSlugs / numColumns);

  // If the item is in the last row, the expander should be in the previous row
  if (itemRow === totalRows) {
    return itemRow;
  }

  // Otherwise, the expander should be in the row after the item
  return itemRow + 1;
}

interface getRowPositionsProps {
  currentUniqueIndex: number | null;
  numberOfUniqueSlugs: number;
  numColsMobile: number;
  numColsTablet: number;
  numColsDesktop: number;
}

function getRowPositions({
  currentUniqueIndex,
  numberOfUniqueSlugs,
  numColsMobile,
  numColsTablet,
  numColsDesktop,
}: getRowPositionsProps) {
  if (currentUniqueIndex === null) {
    return {
      rowMobile: undefined,
      rowTablet: undefined,
      rowDesktop: undefined,
    };
  }

  const rowMobile = getItemRowPosition({
    currentUniqueIndex,
    numberOfUniqueSlugs,
    numColumns: numColsMobile,
  });
  const rowTablet = getItemRowPosition({
    currentUniqueIndex,
    numberOfUniqueSlugs,
    numColumns: numColsTablet,
  });
  const rowDesktop = getItemRowPosition({
    currentUniqueIndex,
    numberOfUniqueSlugs,
    numColumns: numColsDesktop,
  });
  return { rowMobile, rowTablet, rowDesktop };
}

const rowStartClass = {
  1: 'row-start-1',
  2: 'row-start-2',
  3: 'row-start-3',
  4: 'row-start-4',
  5: 'row-start-5',
  6: 'row-start-6',
  7: 'row-start-7',
  8: 'row-start-8',
  9: 'row-start-9',
  10: 'row-start-10',
  11: 'row-start-11',
  12: 'row-start-12',
  13: 'row-start-13',
  14: 'row-start-[14]',
  15: 'row-start-[15]',
  16: 'row-start-[16]',
  17: 'row-start-[17]',
  18: 'row-start-[18]',
  19: 'row-start-[19]',
  20: 'row-start-[20]',
};

function scrollToElement(element: HTMLElement): void {
  const rect = element.getBoundingClientRect();
  const elementCenter =
    rect.top + window.pageYOffset - window.innerHeight / 2 + rect.height / 2;

  window.scrollTo({
    top: elementCenter,
    behavior: 'smooth',
  });
}

function findIndexFromSlug(
  array: string[],
  slug: string | null,
): number | null {
  if (slug === null) return null;
  const index = array.indexOf(slug);
  return index !== -1 ? index : null;
}

/**
 * Converts a string into a slug by removing special characters and replacing spaces and underscores with hyphens.
 * @param input - The string to be slugified.
 * @param errorMessage - The error message to be thrown if the input is not a string.
 * @returns The slugified string.
 * @throws {Error} If the input is not a string.
 */
export function slugifyString(
  input: string,
  errorMessage = 'slugifyString input must be a string',
): string {
  if (typeof input !== 'string') throw new Error(errorMessage);
  return input
    .toLowerCase()
    .replace(/\s+|_/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

/**
 * Slugifies an array of strings.
 *
 * Converts an array of strings into a slug format.
 * The slug format is a lowercase string, with spaces and underscores
 * replaced by hyphens. All non-alphanumeric characters are removed.
 *
 * @param input - The array of strings to be slugified.
 * @param errorMessage - The error message to be thrown if the input is not an array of strings.
 * @returns The slugified array of strings.
 * @throws {Error} An error if the input is an array of strings.
 */
export function slugifyArray(
  input: string[],
  errorMessage = 'slugifyArray input must be an array of strings',
): string[] {
  if (!Array.isArray(input)) throw new Error(errorMessage);
  return input.map(string => slugifyString(string, errorMessage));
}

/**
 * Sets the current unique slug state.
 *
 * @param slug - The unique slug value.
 * @param setStateFn - The state setter function.
 * @throws {Error} If the slug is not a string or null.
 */
export function setCurrentUniqueSlugState(
  slug: UniqueSlug | null,
  setStateFn: Dispatch<SetStateAction<UniqueSlug | null>>,
) {
  if (typeof slug !== 'string' && slug !== null)
    throw new Error('uniqueSlug propr must be a string');

  const slugifiedValue = slug ? slugifyString(slug) : null;
  setStateFn(slugifiedValue);
}

/**
 * Sets the state of an ordered and unique slugs array.
 * This function sanitizes the slug array input into a slug format and sets the state.
 *
 * @param slugArr - The array of unique slugs.
 * @param setStateFn - The state setter function.
 * @throws {Error} - Throws an error if the orderedUniqueSlugsArrayProp is not an array of strings.
 */
export function setOrderedUniqueSlugsArrayState(
  slugArr: UniqueSlug[],
  setStateFn: Dispatch<SetStateAction<UniqueSlug[]>>,
) {
  const slugifiedValue = slugArr ? slugifyArray(slugArr) : [];
  if (!slugifiedValue.length)
    throw new Error('orderedUniqueSlugsArrayProp must be an array of strings.');
  setStateFn(slugifiedValue);
}

const utils = {
  rowStartClass,
  getRowPositions,
  scrollToElement,
  findIndexFromSlug,
  slugifyString,
  slugifyArray,
  setCurrentUniqueSlugState,
  setOrderedUniqueSlugsArrayState,
};

export default utils;
