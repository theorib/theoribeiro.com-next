import { type ReactNode } from 'react';
import { render, type RenderOptions } from '@testing-library/react';
import { vi } from 'vitest';

import {
  ExpandingGalleryContext,
  type ExpandingGalleryContextValue,
} from '@/components/expandingGallery/contexts/ExpandingGalleryContext';

interface ExpandingGalleryRenderOptions extends RenderOptions {
  expandingGalleryContextValue?: ExpandingGalleryContextValue;
}

export const defaultExpandingGalleryContextValue: ExpandingGalleryContextValue =
  {
    previousScrollPosition: { scrollX: 0, scrollY: 0 },
    setPreviousScrollPosition: () => vi.fn(),
    currentExpandedIndex: null,
    setCurrentExpandedIndex: () => vi.fn(),
    currentExpandedSlug: null,
    setCurrentExpandedSlug: () => vi.fn(),
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
