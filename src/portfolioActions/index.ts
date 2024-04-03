import { portfolio } from '../data/portfolio';

export type PortfolioSlug = string;

export interface PortfolioThumbnail {
  id: number;
  slug: string;
  imageUrl: string;
  title: string;
}

export interface PortfolioItem extends PortfolioThumbnail {
  uniqueId: string;
  videoSource: string;
  videoUrl: string;
  projectType: string;
  role: string;
  description: string;
  director: string;
  producer: string;
  productionCompany: string;
  originalImageUrl: string;
}

const getPortfolioSlugs = async (): Promise<PortfolioSlug[]> => {
  const slugs = portfolio.map(item => item.slug);
  return slugs;
};

const getPortfolioThumbnails = async (): Promise<PortfolioThumbnail[]> => {
  const portfolioThumbnails = portfolio.map(item => {
    return {
      id: item.id,
      slug: item.slug,
      imageUrl: item.imageUrl,
      title: item.title,
    };
  });
  return portfolioThumbnails;
};

const getPortfolioItemBySlug = async (slug: string): Promise<PortfolioItem> => {
  const portfolioItem = portfolio.find(item => item.slug === slug);
  if (!portfolioItem) {
    throw new Error('Portfolio item not found');
  }
  return portfolioItem;
};

const getPortfolioItems = async (): Promise<PortfolioItem[]> => {
  return portfolio;
};

const portfolioActions = {
  getPortfolioSlugs,
  getPortfolioThumbnails,
  getPortfolioItemBySlug,
  getPortfolioItems,
};

export default portfolioActions;
