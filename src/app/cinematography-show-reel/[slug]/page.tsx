import RenderedExpangingGallery from '@/components/expandingGallery/RenderedExpangingGallery';
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

  return <RenderedExpangingGallery slug={slug} />;
}
