interface getItemRowPositionProps {
  expanderIndex: number;
  numItems: number;
  numColumns: number;
}

function getItemRowPosition({
  expanderIndex,
  numItems,
  numColumns,
}: getItemRowPositionProps): number {
  // Calculate the row number of the current item
  const itemRow = Math.floor(expanderIndex / numColumns) + 1;

  // Calculate the total number of rows
  const totalRows = Math.ceil(numItems / numColumns);

  // If the item is in the last row, the expander should be in the previous row
  if (itemRow === totalRows) {
    return itemRow;
  }

  // Otherwise, the expander should be in the row after the item
  return itemRow + 1;
}

interface getRowPositionsProps {
  expanderIndex: number | undefined;
  numItems: number;
  numColsMobile: number;
  numColsTablet: number;
  numColsDesktop: number;
}

function getRowPositions({
  expanderIndex,
  numItems,
  numColsMobile,
  numColsTablet,
  numColsDesktop,
}: getRowPositionsProps) {
  if (expanderIndex === undefined) {
    return {
      rowMobile: undefined,
      rowTablet: undefined,
      rowDesktop: undefined,
    };
  }

  const rowMobile = getItemRowPosition({
    expanderIndex,
    numItems,
    numColumns: numColsMobile,
  });
  const rowTablet = getItemRowPosition({
    expanderIndex,
    numItems,
    numColumns: numColsTablet,
  });
  const rowDesktop = getItemRowPosition({
    expanderIndex,
    numItems,
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

export default { rowStartClass, getRowPositions };
