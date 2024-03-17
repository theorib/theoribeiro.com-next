import { portfolio } from './portfolio';

const getPortfolioSlugs = async () => {
  const slugs = portfolio.map(item => item.slug);
  return slugs;
};

const getPortfolioThumbnails = async () => {
  const thumbnails = portfolio.map(item => {
    return {
      id: item.id,
      slug: item.slug,
      imageUrl: item.imageUrl,
      title: item.title,
    };
  });
  return thumbnails;
};

const getPortfolioItemBySlug = async (slug: string) => {
  const item = portfolio.find(item => item.slug === slug);
  if (!item) {
    throw new Error('Portfolio item not found');
  }
  return item;
};

const getPortfolioItems = async () => {
  return portfolio;
};

export type PortfolioSlugs = ReturnType<typeof getPortfolioSlugs>;

// automatically get the type of the return value of getPortfolioThumbnails and for a single item of the array
type PromiseType<T extends Promise<any>> =
  T extends Promise<infer U> ? U : never;
export type PortfolioThumbnail = PromiseType<
  ReturnType<typeof getPortfolioThumbnails>
>[number];

export type PortfolioItems = PromiseType<ReturnType<typeof getPortfolioItems>>;

export type PortfolioItem = PromiseType<
  ReturnType<typeof getPortfolioItemBySlug>
>;

export default {
  getPortfolioSlugs,
  getPortfolioThumbnails,
  getPortfolioItemBySlug,
  getPortfolioItems,
};
