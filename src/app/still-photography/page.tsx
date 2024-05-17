import StillPortfolioGallery from '@/components/photoGallery/StillPortfolioGallery';
import paths from '@/lib/paths';
import { type Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Still photography portfolio | Theo Ribeiro`,
    alternates: {
      canonical: paths.stillsPhotographyPage(),
    },
  };
}

function StillPhotographyPage() {
  return (
    <>
      <h1 className="sr-only">
        A still photography portfolio gallery by Theo Ribeiro
      </h1>
      <StillPortfolioGallery />
    </>
  );
}
export default StillPhotographyPage;
