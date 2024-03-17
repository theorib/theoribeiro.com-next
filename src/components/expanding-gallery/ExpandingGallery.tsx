import React from 'react';

// Define a generic interface for the component props
interface ExpandingGalleryProps<T> {
  expanderRender?: () => React.JSX.Element;
  thumbnailsData: T[];
  thumbnailsRender: (item: T) => React.JSX.Element;
}

// Define a generic component
const ExpandingGallery = <T,>({
  expanderRender,
  thumbnailsData,
  thumbnailsRender,
}: ExpandingGalleryProps<T>) => {
  const isExpanded = expanderRender !== undefined;

  return (
    <div>
      <ul className="-m-3 grid gap-0 sm:grid-cols-2 sm:gap-0">
        {isExpanded && expanderRender()}
        {thumbnailsData.map(item => thumbnailsRender(item))}
      </ul>
    </div>
  );
};

export default ExpandingGallery;
