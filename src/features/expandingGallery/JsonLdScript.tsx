'use client';
import { Movie, VideoObject, MusicVideoObject, WithContext } from 'schema-dts';
import usePortfolioItemData from '@/features/expandingGallery/hooks/usePortfolioItemData';
import { PortfolioItem } from '@/services/portfolio/data/portfolio';
import paths from '@/shared/lib/paths';

function generateJsonLd(portfolioData: PortfolioItem) {
  switch (portfolioData.projectType) {
    case 'Music Video': {
      const jsonLdObject: WithContext<MusicVideoObject> = {
        '@context': 'https://schema.org',
        '@type': 'MusicVideoObject',
        name: portfolioData.title,
        description: portfolioData.description,
        // director: portfolioData?.director.split(' and ').map(director => ({
        //   '@type': 'Person',
        //   name: director,
        // })),
        producer: portfolioData?.producer.split(' and ').map(producer => ({
          '@type': 'Person',
          name: producer,
        })),
        thumbnailUrl: paths.remoteAssetsPath + portfolioData.imageUrl,
        image: paths.remoteAssetsPath + portfolioData.imageUrl,
        url: portfolioData.videoUrl,
      };
      return jsonLdObject;
    }

    case 'Documentary Short':
    case 'Drama Short': {
      const jsonLdObject: WithContext<Movie> = {
        '@context': 'https://schema.org',
        '@type': 'Movie',
        name: portfolioData.title,
        description: portfolioData.description,
        director: portfolioData?.director.split(' and ').map(director => ({
          '@type': 'Person',
          name: director,
        })),
        producer: portfolioData?.producer.split(' and ').map(producer => ({
          '@type': 'Person',
          name: producer,
        })),
        thumbnailUrl: paths.remoteAssetsPath() + portfolioData.imageUrl,
        image: paths.remoteAssetsPath() + portfolioData.imageUrl,
        sameAs: [portfolioData.videoUrl],
      };
      return jsonLdObject;
    }

    case 'Mini Doc':
    case 'Promo':
    default: {
      const jsonLdObject: WithContext<VideoObject> = {
        '@context': 'https://schema.org',
        '@type': 'VideoObject',
        name: portfolioData.title,
        description: portfolioData.description,
        director: portfolioData?.director.split(' and ').map(director => ({
          '@type': 'Person',
          name: director,
        })),
        producer: portfolioData?.producer.split(' and ').map(producer => ({
          '@type': 'Person',
          name: producer,
        })),
        thumbnailUrl: paths.remoteAssetsPath() + portfolioData.imageUrl,
        image: paths.remoteAssetsPath() + portfolioData.imageUrl,
        contentUrl: portfolioData.videoUrl,
      };
      return jsonLdObject;
    }
  }
}

function JsonLdScript() {
  const portfolioData = usePortfolioItemData();
  if (!portfolioData) return null;

  const jsonLd = generateJsonLd(portfolioData);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
export default JsonLdScript;
