import { logRoles, screen, render } from '@testing-library/react';
import renderServerComponent from '@/testUtils/renderServerComponents';
import RootLayout from '@/app/layout';
import HomePage from '@/app/page';
import { Suspense } from 'react';

describe.skip('Testing native render function', () => {
  test('Test MockPageSync', () => {
    const { container, debug } = render(
      <Suspense>
        <RootLayout>
          <HomePage />
        </RootLayout>
      </Suspense>,
    );

    screen.debug();
    logRoles(container);
  });
});
