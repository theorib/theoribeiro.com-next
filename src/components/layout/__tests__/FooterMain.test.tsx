import { render, screen } from '@testing-library/react';
import FooterMain from '../FooterMain';

test('FooterMain', async () => {
  render(<FooterMain />);
  const emailLink = await screen.findByRole('link', {
    name: /theo@theoribeiro\.com/i,
  });
  expect(emailLink).toBeInTheDocument();
  expect(emailLink).toHaveAttribute('href', 'mailto:theo@theoribeiro.com');

  const phoneLink = screen.getByRole('link', {
    name: /\+44 7415 303847/i,
  });
  expect(phoneLink).toBeInTheDocument();

  const copyRight = screen.getByText(
    /©2024 theo ribeiro, all rights reserved\./i,
  );
  expect(copyRight).toBeInTheDocument();

  // screen.logTestingPlaygroundURL();
});
