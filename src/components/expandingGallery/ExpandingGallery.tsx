import React from 'react';
import expandingGallery from '.';

// Define a generic interface for the component props

export interface thumbnailsRenderProps<T> {
  item: T;
  expanderIndex: number | undefined;
}

interface ExpandingGalleryProps<T> {
  numColsMobile?: number;
  numColsTablet?: number;
  numColsDesktop?: number;
  expanderIndex?: number;
  expanderRender?: () => React.JSX.Element; // Added type argument T to ExpanderRenderProps
  thumbnailsData: T[];
  thumbnailsRender: ({
    item,
    expanderIndex,
  }: thumbnailsRenderProps<T>) => React.JSX.Element;
}

// Define a generic component
const ExpandingGallery = <T,>({
  numColsMobile = 1,
  numColsTablet = 2,
  numColsDesktop = 2,
  expanderIndex,
  expanderRender,
  thumbnailsData,
  thumbnailsRender,
}: ExpandingGalleryProps<T>) => {
  const isExpanded =
    expanderIndex !== undefined && expanderRender !== undefined;
  const numItems = thumbnailsData.length;
  const { rowMobile, rowTablet, rowDesktop } = expandingGallery.getRowPositions(
    {
      expanderIndex: expanderIndex ?? undefined,
      numItems,
      numColsMobile,
      numColsTablet,
      numColsDesktop,
    },
  );

  return (
    <div>
      <ul className="-m-3 grid gap-0 sm:grid-cols-2 sm:gap-0">
        {isExpanded && (
          <li
            className={`col-span-full ${expandingGallery.rowStartClass[rowMobile as keyof typeof expandingGallery.rowStartClass]} sm:${expandingGallery.rowStartClass[rowTablet as keyof typeof expandingGallery.rowStartClass]} md:${expandingGallery.rowStartClass[rowDesktop as keyof typeof expandingGallery.rowStartClass]}`}
          >
            {expanderRender()}
          </li>
        )}
        {thumbnailsData.map(item => thumbnailsRender({ item, expanderIndex }))}
      </ul>
    </div>
  );
};

export default ExpandingGallery;
