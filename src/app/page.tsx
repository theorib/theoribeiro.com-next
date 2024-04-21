import portfolioActions from '@/actions/portfolioActions';
import RenderedExpandingGalleryNextStatic from '@/components/expandingGallery/rendered-server/RenderedExpandingGalleryNextStatic';

export default async function HomePage() {
  const thumbnails = await portfolioActions.getPortfolioThumbnails();
  const orderedUniqueSlugsArray = thumbnails.map(item => item.slug);

  return (
    <>
      <h1 className="sr-only">
        Theo Ribeiro Cinematography Portfolio Home Page //{' '}
      </h1>
      <RenderedExpandingGalleryNextStatic
        thumbnails={thumbnails}
        orderedUniqueSlugsArray={orderedUniqueSlugsArray}
      />
    </>
  );
}
