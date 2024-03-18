import RenderedExpandingGallery from '@/components/expandingGallery/RenderedExpangingGallery';
import portfolio from '@/portfolio';
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

  return <RenderedExpandingGallery slug={slug} />;
}

export const generateStaticParams = async () => {
  const slugs = await portfolio.getPortfolioSlugs();
  return slugs.map(slug => ({ slug }));
};
