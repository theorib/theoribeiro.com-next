import portfolioActions from '@/services/portfolio/actions';
import RenderedExpandingGalleryHome from '@/features/expandingGallery/components/RenderedExpandingGallery';
import paths from '@/shared/lib/paths';
import { type Metadata } from 'next';

type GenerateMetadataProps = {
  params: { slug: string };
};

export async function generateMetadata({
  params,
}: GenerateMetadataProps): Promise<Metadata> {
  // read route params
  const { slug } = params;
  const portfolioItem = portfolioActions.getPortfolioItemBySlug(slug);
  if (!portfolioItem) {
    throw new Error('No portfolio item found');
  }

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${portfolioItem.title}`,
    description: `${portfolioItem.description}`,
    alternates: {
      canonical: paths.showReelItemPage(slug),
    },

    openGraph: {
      title: `${portfolioItem.title}`,
      description: `${portfolioItem.description}`,

      images: [
        {
          url: `/${paths.showReelItemPage(slug)}/opengraph-custom.png`,
          alt: portfolioItem.thumbAlt,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default function ShowReelItemPage() {
  return (
    <>
      <h1 className="sr-only">Theo Ribeiro Cinematography Show Reel</h1>
      <RenderedExpandingGalleryHome />
    </>
  );
}

export async function generateStaticParams() {
  const slugs = portfolioActions.getPortfolioSlugs();
  return slugs.map(slug => ({ slug }));
}
