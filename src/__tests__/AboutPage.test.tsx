/* eslint-disable @typescript-eslint/no-unused-vars */
import AboutPage from '@/app/about-theo-ribeiro/page';
import { render, screen, waitFor } from '@testing-library/react';

test('About Page', async () => {
  render(<AboutPage />);

  const img = await screen.findByRole('img', {
    name: /portrait of theo ribeiro/i,
  });
  expect(img).toBeInTheDocument();

  const heading = screen.getByRole('heading', {
    name: /about theo ribeiro - director of photography/i,
  });
  expect(heading).toBeInTheDocument();

  // screen.logTestingPlaygroundURL();
});
