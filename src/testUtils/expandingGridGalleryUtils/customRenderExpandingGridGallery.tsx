import { type ReactNode } from 'react';
import { render, type RenderOptions } from '@testing-library/react';
// import { vi } from 'vitest';
import { ExpandingGridGalleryContextValue } from '@/components/expandingGallery/ExpandingGridGallery.types';
// import { ExpandingGridGalleryContext } from '@/components/expandingGallery/contexts/ExpandingGridGalleryContext';
import ExpandingGridGallery from '@/components/expandingGallery/ExpandingGridGallery';

interface ExpandingGalleryRenderOptions extends RenderOptions {
  ExpandingGridGalleryContextValue?: ExpandingGridGalleryContextValue;
}

export const testExpandingGridContent = [
  {
    tile: 'Land of the Wind',
    slug: 'land-of-the-wind',
    image: 'https://placehold.co/720x405?text=Land+of+the+Wind+Image',
  },
  {
    tile: 'Land of the Water',
    slug: 'land-of-the-water',
    image: 'https://placehold.co/720x405?text=Land+of+the+Water+Image',
  },
  {
    tile: 'Land of the Fire',
    slug: 'land-of-the-fire',
    image: 'https://placehold.co/720x405?text=Land+of+the+Fire+Image',
  },
  {
    tile: 'Land of the Earth',
    slug: 'land-of-the-earth',
    image: 'https://placehold.co/720x405?text=Land+of+the+Earth+Image',
  },
  {
    tile: 'Land of the Void',
    slug: 'land-of-the-void',
    image: 'https://placehold.co/720x405?text=Land+of+the+Void+Image',
  },
  {
    tile: 'Land of the Sun',
    slug: 'land-of-the-sun',
    image: 'https://placehold.co/720x405?text=Land+of+the+Sun+Image',
  },
  {
    tile: 'Land of the Moon',
    slug: 'land-of-the-moon',
    image: 'https://placehold.co/720x405?text=Land+of+the+Moon+Image',
  },
  {
    tile: 'Land of the Stars',
    slug: 'land-of-the-stars',
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
    console.log(' Rendering Wrapper');

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
