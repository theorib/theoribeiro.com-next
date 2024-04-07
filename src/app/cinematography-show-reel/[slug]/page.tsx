import RenderedExpandingGallery from '@/components/expandingGallery/RenderedExpandingGallery';
import portfolio from '@/actions/portfolioActions';
import { notFound } from 'next/navigation';

interface ShowReelItemPageProps {
  params: {
    slug: string;
  };
}

export default async function ShowReelItemPage({
  params,
}: ShowReelItemPageProps) {
  const { slug } = params;
  const slugExists = (await portfolio.getPortfolioSlugs()).includes(slug);

  if (!slugExists) notFound();

  return <RenderedExpandingGallery />;
}

export const generateStaticParams = async () => {
  const slugs = await portfolio.getPortfolioSlugs();
  return slugs.map(slug => ({ slug }));
};
