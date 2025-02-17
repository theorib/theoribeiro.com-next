/* eslint-disable @typescript-eslint/no-unused-vars */
import AboutPage from '@/app/about-theo-ribeiro/page';
import { render, screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';

test('About Page', async () => {
  vi.mock('@/shared/lib/paths', () => ({
    default: {
      homePage: () => '/',
      aboutPage: () => '/about-theo-ribeiro',
    },
  }));
  render(<AboutPage />);

  const img = await screen.findByRole('img', {
    name: /portrait of theo ribeiro/i,
  });
  expect(img).toBeInTheDocument();

  const heading = screen.getByRole('heading', {
    name: /about theo ribeiro - director of photography/i,
  });
  expect(heading).toBeInTheDocument();
});
