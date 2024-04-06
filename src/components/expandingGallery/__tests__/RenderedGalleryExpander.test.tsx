import { render, screen } from '@/testUtils/customRenderExpandingGallery';
import { Suspense } from 'react';
import ExpandingGallery from '../ExpandingGallery';
import RenderedGalleryExpander from '../RenderedGalleryExpander';
import { ExpandingGalleryContextValue } from '../contexts/ExpandingGalleryContext';
import { vi } from 'vitest';

const expandingGalleryContextValue: ExpandingGalleryContextValue = {
  previousScrollPosition: { scrollX: 0, scrollY: 0 },
  setPreviousScrollPosition: () => vi.fn(),
  currentExpandedIndex: 1,
  setCurrentExpandedIndex: () => vi.fn(),
  currentExpandedSlug: 'land-of-the-wind',
  setCurrentExpandedSlug: () => vi.fn(),
};
// <RenderedGalleryExpander key="any" />

test('make sure thumbnail is rendered', async () => {
  render(
    <Suspense>
      {/* <ExpandingGallery.ScrollTo /> */}
      {/* <ExpandingGallery.UseHash /> */}
      <ExpandingGallery.Container>
        <ExpandingGallery.Expander numItems={8}>
          <RenderedGalleryExpander />
        </ExpandingGallery.Expander>
      </ExpandingGallery.Container>
    </Suspense>,
    { expandingGalleryContextValue },
  );

  const heading = await screen.findByRole('heading', {
    name: /land of the wind/i,
  });
  expect(heading).toBeInTheDocument();

  // screen.logTestingPlaygroundURL();
});
