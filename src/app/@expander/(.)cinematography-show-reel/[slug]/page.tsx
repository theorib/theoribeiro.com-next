import portfolioActions from '@/actions/portfolioActions';
import RenderedExpandingGalleryNextStatic from '@/components/expandingGallery/rendered-server/RenderedExpandingGalleryNextStatic';

export default async function ShowReelItemPageIntercepted() {
  return (
    <>
      <h1>intercepted @expander</h1>
      <RenderedExpandingGalleryNextStatic withUrlParamSlug={true} />;
    </>
  );
}

export async function generateStaticParams() {
  const slugs = portfolioActions.getPortfolioSlugs();
  return slugs.map(slug => ({ slug }));
}
