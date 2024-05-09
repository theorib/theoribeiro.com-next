import { portfolio } from '@/data/portfolio';

export type PortfolioSlug = string;

export interface PortfolioThumbnail {
  id: number;
  slug: string;
  imageUrl: string;
  title: string;
  thumbAlt: string;
  thumbTitle: string;
  projectType: string;
}

export interface PortfolioItem extends PortfolioThumbnail {
  uniqueId: string;
  videoSource: string;
  videoUrl: string;

  role: string;
  description: string;
  director: string;
  producer: string;
  productionCompany: string;
  originalImageUrl: string;
  thumbAlt: string;
  thumbTitle: string;
}

const getPortfolioSlugs = (): PortfolioSlug[] => {
  const slugs = portfolio.map(item => item.slug);
  return slugs;
};

const getPortfolioThumbnails = (): PortfolioThumbnail[] => {
  const portfolioThumbnails = portfolio.map(item => {
    return {
      id: item.id,
      slug: item.slug,
      imageUrl: item.imageUrl,
      title: item.title,
      projectType: item.projectType,
      thumbAlt: item.thumbAlt,
      thumbTitle: item.thumbTitle,
    };
  });
  return portfolioThumbnails;
};

const getPortfolioItemBySlug = (slug: string): PortfolioItem | null => {
  const portfolioItem = portfolio.find(item => item.slug === slug);
  if (!portfolioItem) return null;
  return portfolioItem;
};

const getPortfolioItems = (): PortfolioItem[] => {
  return portfolio;
};

const portfolioActions = {
  getPortfolioSlugs,
  getPortfolioThumbnails,
  getPortfolioItemBySlug,
  getPortfolioItems,
};

export default portfolioActions;
