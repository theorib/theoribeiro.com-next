import { Suspense, type ReactNode } from 'react';
import { render, type RenderOptions } from '@testing-library/react';
import { ExpandingGridGalleryContextValue } from '@/components/expandingGallery/ExpandingGridGallery.types';
import ExpandingGridGallery from '@/components/expandingGallery/ExpandingGridGallery';
import { expandingGalleryTestContent } from './testData';

interface ExpandingGalleryRenderOptions extends RenderOptions {
  ExpandingGridGalleryContextValue?: ExpandingGridGalleryContextValue;
}

const orderedUniqueSlugsArray = expandingGalleryTestContent.map(
  item => item.slug,
);

function customRenderGallery(
  ui: React.ReactElement,
  options?: Omit<ExpandingGalleryRenderOptions, 'wrapper'>,
) {
  const Wrapper = ({ children }: { children: ReactNode }) => {
    return (
      <Suspense>
        <ExpandingGridGallery
          orderedUniqueSlugsArray={orderedUniqueSlugsArray}
          storeState="local"
        >
          {children}
        </ExpandingGridGallery>
      </Suspense>
    );
  };

  return render(ui, { wrapper: Wrapper, ...options });
}
export * from '@testing-library/react';
export { customRenderGallery as render };
