import { logRoles, screen, render } from '@testing-library/react';
import { Suspense } from 'react';
import RenderedExpandingGallery from '../RenderedExpandingGallery';
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import AboutPage from '@/app/about-theo-ribeiro/page';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

test('Test MockPageAsync', async () => {
  act(() => {
    ReactDOM.createRoot(container).render(
      <Suspense>
        <AboutPage />
      </Suspense>,
    );
  });
  screen.logTestingPlaygroundURL();
  screen.debug();
  // logRoles(container);
});
