import {
  type PortfolioItem,
  type PortfolioSlug,
  type PortfolioThumbnail,
  portfolio,
} from '@/data/portfolio';

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
