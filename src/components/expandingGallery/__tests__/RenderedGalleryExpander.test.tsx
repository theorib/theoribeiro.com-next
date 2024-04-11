/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  getTestExpandedItemFromSlug,
  render,
  screen,
  waitFor,
} from '@/testUtils/expandingGridGalleryUtils/customRenderExpandingGridGallery';
import { Suspense, useContext, useEffect } from 'react';
import ExpandingGridGallery from '../ExpandingGridGallery';
import { useExpandingGridGallery } from '../contexts/ExpandingGridGalleryContext';
import Image from 'next/image';
import TestSetExpandingGridGalleryState from '@/testUtils/expandingGridGalleryUtils/components/TestSetExpandingGridGalleryState';

function TestGalleryExpander() {
  const { currentUniqueSlug } = useExpandingGridGallery();

  if (!currentUniqueSlug) return null;

  const item = getTestExpandedItemFromSlug(currentUniqueSlug);
  if (!item) return null;

  return (
    <div id={`${currentUniqueSlug}-expanded`}>
      <h1>{item.tile}</h1>
      <Image src={item.image} alt={`${item.tile} Alt`} />
    </div>
  );
}

test('make sure thumbnail is rendered', async () => {
  render(
    <Suspense>
      <TestSetExpandingGridGalleryState currentUniqueSlug="land-of-the-wind" />
      <ExpandingGridGallery.Grid>
        <ExpandingGridGallery.GridExpander>
          {/* <ExpandingGridGallery /> */}
          <TestGalleryExpander />
        </ExpandingGridGallery.GridExpander>
      </ExpandingGridGallery.Grid>
    </Suspense>,
  );
  await waitFor(() => {
    //
  });

  const image = await screen.findByRole('img', {
    name: /land of the wind alt/i,
  });
  expect(image).toBeInTheDocument();

  const heading = screen.getByRole('heading', {
    name: /land of the wind/i,
  });
  expect(heading).toBeInTheDocument();
  screen.debug();
  screen.logTestingPlaygroundURL();
});
