import portfolioActions from '@/actions/portfolioActions';
import RenderedExpandingGalleryHome from '@/components/expandingGallery/rendered-home/RenderedExpandingGalleryHome';

export default async function ShowReelItemPage() {
  return (
    <>
      <h1>slug page</h1>
      <RenderedExpandingGalleryHome />
    </>
  );
}

export async function generateStaticParams() {
  const slugs = portfolioActions.getPortfolioSlugs();
  return slugs.map(slug => ({ slug }));
}
