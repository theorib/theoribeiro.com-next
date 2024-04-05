import { logRoles, screen, render } from '@testing-library/react';
import renderServerComponent from '@/testUtils/renderServerComponents';
import RootLayout from '@/app/layout';
import HomePage from '@/app/page';
import { Suspense } from 'react';
import RenderedExpandingGallery from '@/components/expandingGallery/RenderedExpandingGallery';

describe('Testing native render function', () => {
  test.skip('Test MockPageSync', () => {
    const { container, debug } = render(
      <Suspense>
        <RootLayout>
          <HomePage />
        </RootLayout>
      </Suspense>,
    );
    // debug();
    // screen.debug();
    logRoles(container);
  });
  test('Test MockPageAsync', async () => {
    const { container, debug } = render(
      <Suspense>
        <RenderedExpandingGallery />
      </Suspense>,
    );
    screen.logTestingPlaygroundURL();
    screen.debug();
    logRoles(container);
  });
});
