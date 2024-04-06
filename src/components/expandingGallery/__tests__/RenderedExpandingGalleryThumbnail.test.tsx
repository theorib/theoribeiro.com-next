import { screen, render } from '@testing-library/react';
import { Suspense } from 'react';
import RenderedExpandingGalleryThumbnail from '../RenderedExpandingGalleryThumbnail';
import { type PortfolioThumbnail } from '@/actions/portfolioActions';

const portfolioThumbnail: PortfolioThumbnail = {
  id: 1,
  slug: 'portfolio-item-slug',
  imageUrl: 'https://picsum.photos/1280/720',
  title: 'portfolio-item-title',
};

test('make sure thumbnail is rendered', () => {
  render(
    <Suspense>
      <RenderedExpandingGalleryThumbnail item={portfolioThumbnail} />
    </Suspense>,
  );
  const image = screen.getByRole('img');
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute('src', portfolioThumbnail.imageUrl);
  expect(image).toHaveAttribute('alt', portfolioThumbnail.title);

  const title = screen.getByText(portfolioThumbnail.title);
  expect(title).toBeInTheDocument();
});
