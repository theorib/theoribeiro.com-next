export function getItemRowPosition(index, numItems, numColumns) {
  // Calculate the row number of the current item
  const itemRow = Math.floor(index / numColumns) + 1;

  // Calculate the total number of rows
  const totalRows = Math.ceil(numItems / numColumns);

  // If the item is in the last row, the expander should be in the previous row
  if (itemRow === totalRows) {
    return itemRow;
  }

  // Otherwise, the expander should be in the row after the item
  return itemRow + 1;
}

export function scrollIntoView(elementRef, options = {}) {
  console.log('function running');
  console.log(elementRef.current);

  // Behavior: smooth, auto, instant
  // Block: start, center, end, nearest
  // Inline: start, center, end, nearest

  const { block = 'center', inline = 'center', behavior = 'smooth' } = options;

  if (elementRef.current) {
    console.log('function block running');
    elementRef.current.scrollIntoView({ block, inline, behavior });
  }
}
