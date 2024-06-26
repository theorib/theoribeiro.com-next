import portfolioActions from '@/actions/portfolioActions';
import RenderedExpandingGalleryHome from '@/components/expandingGallery/rendered/RenderedExpandingGallery';
import paths from '@/lib/paths';
import { Metadata } from 'next';

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

export default async function ShowReelItemPage() {
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
