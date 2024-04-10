import { type ReactNode } from 'react';
import { render, type RenderOptions } from '@testing-library/react';
import { vi } from 'vitest';

import { ExpandingGalleryContext } from '@/components/expandingGallery/contexts/ExpandingGalleryContext';
import { ExpandingGalleryContextValue } from '@/components/expandingGallery/expandingGallery.types';

interface ExpandingGalleryRenderOptions extends RenderOptions {
  expandingGalleryContextValue?: ExpandingGalleryContextValue;
}

const uniqueSlugsArr = [
  'slug1',
  'slug2',
  'slug3',
  'slug4',
  'slug5',
  'slug6',
  'slug7',
  'slug8',
  'slug9',
  'slug10',
];

export const defaultExpandingGalleryContextValue: ExpandingGalleryContextValue =
  {
    previousScrollPosition: { scrollX: 0, scrollY: 0 },
    setPreviousScrollPosition: () => vi.fn(),
    currentUniqueSlug: null,
    setCurrentUniqueSlug: () => vi.fn(),
    currentUniqueIndex: null,
    orderedUniqueSlugsArray: uniqueSlugsArr,
    setOrderedUniqueSlugsArray: () => vi.fn(),
    numberOfUniqueSlugs: 0,
  };

function customRenderExpandingGallery(
  ui: React.ReactElement,
  options?: Omit<ExpandingGalleryRenderOptions, 'wrapper'>,
) {
  const Wrapper = ({ children }: { children: ReactNode }) => {
    return (
      <ExpandingGalleryContext.Provider
        value={
          options?.expandingGalleryContextValue ??
          defaultExpandingGalleryContextValue
        }
      >
        {children}
      </ExpandingGalleryContext.Provider>
    );
  };

  return render(ui, { wrapper: Wrapper, ...options });
}
export * from '@testing-library/react';
export { customRenderExpandingGallery as render };
