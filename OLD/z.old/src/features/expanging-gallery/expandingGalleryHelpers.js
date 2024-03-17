export const getCurrentGalleryItemBySlug = (galleryItems, slug) =>
  galleryItems.find((item) => item.slug === slug);
export const isGalleryItemSlugValid = (galleryItems, slug) =>
  galleryItems.some((item) => item.slug === slug);

export function getGalleryItemRow(itemIndex, numItems, numColumns) {
  // Calculate the row number of the current item
  const itemRow = Math.floor(itemIndex / numColumns) + 1;

  // Calculate the total number of rows
  const totalRows = Math.ceil(numItems / numColumns);

  // If the item is in the last row, the expander should be in the previous row
  if (itemRow === totalRows) {
    return itemRow;
  }

  // Otherwise, the expander should be in the row after the item
  return itemRow + 1;
}
