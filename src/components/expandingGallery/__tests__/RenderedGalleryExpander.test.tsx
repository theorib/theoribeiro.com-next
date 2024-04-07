/* eslint-disable @typescript-eslint/no-unused-vars */
import { render, screen } from '@/testUtils/customRenderExpandingGallery';
import { Suspense } from 'react';
import ExpandingGallery from '../ExpandingGallery';
import RenderedGalleryExpander from '../RenderedGalleryExpander';
import { ExpandingGalleryContextValue } from '../contexts/ExpandingGalleryContext';
import { vi } from 'vitest';
import portfolioActions from '@/actions/portfolioActions';

const expandingGalleryContextValue: ExpandingGalleryContextValue = {
  previousScrollPosition: { scrollX: 0, scrollY: 0 },
  setPreviousScrollPosition: () => vi.fn(),
  currentUniqueSlug: 'land-of-the-wind',
  setCurrentUniqueSlug: () => vi.fn(),
};

const expandingGalleryContent = async () => {
  const thumbnails = await portfolioActions.getPortfolioThumbnails();
  const uniqueSlugsArray = thumbnails.map(item => item.slug);
  return { thumbnails, uniqueSlugsArray };
};

test('make sure thumbnail is rendered', async () => {
  const { thumbnails, uniqueSlugsArray } = await expandingGalleryContent();
  render(
    <Suspense>
      {/* <ExpandingGallery.ScrollTo /> */}
      {/* <ExpandingGallery.UseHash /> */}
      <ExpandingGallery.Container>
        <ExpandingGallery.Expander uniqueSlugsArray={uniqueSlugsArray}>
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
