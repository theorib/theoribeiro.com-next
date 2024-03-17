import { getGridItemRow } from '../expanging-gallery/expandingGalleryHelpers';

function GalleryExpanderContentContainer({
  nodeRef,
  itemIndex,
  numItems,
  numColsMobile = 1,
  numColsTablet = 2,
  numColsDesktop = 2,
  children,
}) {
  const rowMobile = getGridItemRow(itemIndex, numItems, numColsMobile);
  const rowTablet = getGridItemRow(itemIndex, numItems, numColsTablet);
  const rowDesktop = getGridItemRow(itemIndex, numItems, numColsDesktop);

  return (
    <li
      ref={nodeRef}
      className={`expander col-span-full row-start-${rowMobile} sm:row-start-${rowTablet} lg:row-start-${rowDesktop}`}
    >
      {children}
    </li>
  );
}

export default GalleryExpanderContentContainer;
