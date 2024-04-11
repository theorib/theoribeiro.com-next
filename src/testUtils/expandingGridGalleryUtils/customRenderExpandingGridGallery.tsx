import { type ReactNode } from 'react';
import { render, type RenderOptions } from '@testing-library/react';
// import { vi } from 'vitest';
import { ExpandingGridGalleryContextValue } from '@/components/expandingGallery/ExpandingGridGallery.types';
// import { ExpandingGridGalleryContext } from '@/components/expandingGallery/contexts/ExpandingGridGalleryContext';
import ExpandingGridGallery from '@/components/expandingGallery/ExpandingGridGallery';

interface ExpandingGalleryRenderOptions extends RenderOptions {
  ExpandingGridGalleryContextValue?: ExpandingGridGalleryContextValue;
}

export type TestExpandingGridItem = {
  title: string;
  slug: string;
  content: string;
  expandedAlt: string;
  thumbAlt: string;
  image: string;
};

export const testExpandingGridContent: TestExpandingGridItem[] = [
  {
    title: 'Land of the Wind',
    slug: 'land-of-the-wind',
    content: 'Land of the Wind Content',
    expandedAlt: 'Land of the Wind Expanded Alt',
    thumbAlt: 'Land of the Wind Thumb Alt',
    image: 'https://placehold.co/720x405?text=Land+of+the+Wind+Image',
  },
  {
    title: 'Land of the Water',
    slug: 'land-of-the-water',
    content: 'Land of the Water Content',
    expandedAlt: 'Land of the Water Expanded Alt',
    thumbAlt: 'Land of the Water Thumb Alt',
    image: 'https://placehold.co/720x405?text=Land+of+the+Water+Image',
  },
  {
    title: 'Land of the Fire',
    slug: 'land-of-the-fire',
    content: 'Land of the Fire Content',
    expandedAlt: 'Land of the Fire Expanded Alt',
    thumbAlt: 'Land of the Fire Thumb Alt',
    image: 'https://placehold.co/720x405?text=Land+of+the+Fire+Image',
  },
  {
    title: 'Land of the Earth',
    slug: 'land-of-the-earth',
    content: 'Land of the Earth Content',
    expandedAlt: 'Land of the Earth Expanded Alt',
    thumbAlt: 'Land of the Earth Thumb Alt',
    image: 'https://placehold.co/720x405?text=Land+of+the+Earth+Image',
  },
  {
    title: 'Land of the Void',
    slug: 'land-of-the-void',
    content: 'Land of the Void Content',
    expandedAlt: 'Land of the Void Expanded Alt',
    thumbAlt: 'Land of the Void Thumb Alt',
    image: 'https://placehold.co/720x405?text=Land+of+the+Void+Image',
  },
  {
    title: 'Land of the Sun',
    slug: 'land-of-the-sun',
    content: 'Land of the Sun Content',
    expandedAlt: 'Land of the Sun Expanded Alt',
    thumbAlt: 'Land of the Sun Thumb Alt',
    image: 'https://placehold.co/720x405?text=Land+of+the+Sun+Image',
  },
  {
    title: 'Land of the Moon',
    slug: 'land-of-the-moon',
    content: 'Land of the Moon Content',
    expandedAlt: 'Land of the Moon Expanded Alt',
    thumbAlt: 'Land of the Moon Thumb Alt',
    image: 'https://placehold.co/720x405?text=Land+of+the+Moon+Image',
  },
  {
    title: 'Land of the Stars',
    slug: 'land-of-the-stars',
    content: 'Land of the Stars Content',
    expandedAlt: 'Land of the Stars Expanded Alt',
    thumbAlt: 'Land of the Stars Thumb Alt',
    image: 'https://placehold.co/720x405?text=Land+of+the+Stars+Image',
  },
];

export const getTestExpandedItemFromSlug = (slug: string) => {
  return testExpandingGridContent.find(item => item.slug === slug);
};

const orderedUniqueSlugsArray = testExpandingGridContent.map(item => item.slug);

function customRenderExpandingGridGallery(
  ui: React.ReactElement,
  options?: Omit<ExpandingGalleryRenderOptions, 'wrapper'>,
) {
  const Wrapper = ({ children }: { children: ReactNode }) => {
    return (
      <ExpandingGridGallery
        orderedUniqueSlugsArray={orderedUniqueSlugsArray}
        storeState="local"
      >
        {children}
      </ExpandingGridGallery>
    );
  };

  return render(ui, { wrapper: Wrapper, ...options });
}
export * from '@testing-library/react';
export { customRenderExpandingGridGallery as render };
