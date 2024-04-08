import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

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

const expandingGalleryUtils = {
  rowStartClass,
  getRowPositions,
  scrollToElement,
  findIndexFromSlug,
};

export default expandingGalleryUtils;
