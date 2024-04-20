import portfolio from '@/actions/portfolioActions';
import { notFound } from 'next/navigation';
import RenderedExpandingGalleryServer from '@/components/expandingGallery/rendered-server/RenderedExpandingGalleryServer';

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

  return <RenderedExpandingGalleryServer slug={slug} />;
}

export const generateStaticParams = async () => {
  const slugs = await portfolio.getPortfolioSlugs();
  return slugs.map(slug => ({ slug }));
};
