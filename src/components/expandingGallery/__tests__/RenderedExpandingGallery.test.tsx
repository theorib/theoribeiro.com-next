/* eslint-disable @typescript-eslint/no-unused-vars */
import { screen, waitFor, render } from '@testing-library/react';

import { Suspense } from 'react';
import RenderedExpandingGallery from '../RenderedExpandingGallery';

import AboutPage from '@/app/about-theo-ribeiro/page';
import HomePage from '@/app/page';

test('Test MockPageAsync', async () => {
  render(
    <Suspense>
      <AboutPage />
    </Suspense>,
  );
  await waitFor(() => {
    //
  });
  // screen.logTestingPlaygroundURL();
  screen.debug();
});
