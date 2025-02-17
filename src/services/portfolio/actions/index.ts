import {
  type PortfolioItem,
  type PortfolioSlug,
  type PortfolioThumbnail,
  portfolio,
} from '@/services/portfolio/data/portfolio';

const getPortfolioSlugs = (): Array<PortfolioSlug> => {
  const slugs = portfolio.map(item => item.slug);
  return slugs;
};

const getPortfolioThumbnails = (): Array<PortfolioThumbnail> => {
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

const getPortfolioItems = (): Array<PortfolioItem> => {
  return portfolio;
};

const portfolioActions = {
  getPortfolioSlugs,
  getPortfolioThumbnails,
  getPortfolioItemBySlug,
  getPortfolioItems,
};

export default portfolioActions;
