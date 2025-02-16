import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HeaderMain from '../HeaderMain';
import { Suspense } from 'react';
import { vi } from 'vitest';

test('HeaderMain', async () => {
  vi.mock('@/lib/paths', () => ({
    default: {
      homePage: () => '/',
      aboutPage: () => '/about-theo-ribeiro',
    },
  }));

  const user = userEvent.setup();
  render(
    <Suspense>
      <HeaderMain />
    </Suspense>,
  );
  const link = await screen.findByRole('link', {
    name: /theo ribeiro/i,
  });
  expect(link).toBeInTheDocument();
  const menuOpenButton = screen.getByRole('button', {
    name: /open menu/i,
  });
  expect(menuOpenButton).toBeInTheDocument();
  await user.click(menuOpenButton);
  const dialog = await screen.findByRole('dialog', {
    name: /main menu/i,
  });
  expect(dialog).toBeInTheDocument();
  const menuCloseButton = screen.getByRole('button', {
    name: /close menu/i,
  });
  expect(menuCloseButton).toBeInTheDocument();
  const mainNav = screen.getByRole('navigation', {
    name: /main menu/i,
  });
  expect(mainNav).toBeInTheDocument();
  expect(mainNav).not.toBeEmptyDOMElement();
  await user.click(menuCloseButton);
  expect(dialog).not.toBeInTheDocument();
  expect(menuCloseButton).not.toBeInTheDocument();
  expect(mainNav).not.toBeInTheDocument();
  expect(menuOpenButton).toBeInTheDocument();
});
