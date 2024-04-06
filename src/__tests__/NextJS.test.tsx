import { screen, waitFor } from '@testing-library/react';
import { render as expandingGalleryRender } from '@/testUtils/customRenderExpandingGallery';

import RootLayout from '@/app/layout';
import HomePage from '@/app/page';
import { Suspense } from 'react';
import RenderedExpandingGallery from '@/components/expandingGallery/RenderedExpandingGallery';

describe.skip('Testing native render function', () => {
  test('Test MockPageSync', async () => {
    expandingGalleryRender(
      <Suspense>
        <RootLayout>
          <HomePage />
        </RootLayout>
      </Suspense>,
    );
    await waitFor(() => {
      //
    });
    // screen.debug();
  });
  test('Test MockPageAsync', async () => {
    expandingGalleryRender(
      <Suspense>
        <RenderedExpandingGallery />
      </Suspense>,
    );
    await waitFor(() => {
      //
    });
    screen.debug();
    // screen.logTestingPlaygroundURL();
  });
});
