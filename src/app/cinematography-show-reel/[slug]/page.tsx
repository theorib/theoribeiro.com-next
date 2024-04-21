import portfolio from '@/actions/portfolioActions';
import { notFound } from 'next/navigation';
import portfolioActions from '@/actions/portfolioActions';
import RenderedExpandingGalleryNextStatic from '@/components/expandingGallery/rendered-server/RenderedExpandingGalleryNextStatic';

interface ShowReelItemPageProps {
  params: {
    slug: string;
  };
}

export default async function ShowReelItemPage({
  params,
}: ShowReelItemPageProps) {
  const { slug } = params;
  if (!slug) notFound();
  const thumbnails = await portfolioActions.getPortfolioThumbnails();
  const orderedUniqueSlugsArray = thumbnails.map(item => item.slug);
  const expanderData = await portfolioActions.getPortfolioItemBySlug(slug);

  return (
    <RenderedExpandingGalleryNextStatic
      slug={slug}
      thumbnails={thumbnails}
      orderedUniqueSlugsArray={orderedUniqueSlugsArray}
      expanderData={expanderData}
    />
  );
}

export const generateStaticParams = async () => {
  const slugs = await portfolio.getPortfolioSlugs();
  return slugs.map(slug => ({ slug }));
};
