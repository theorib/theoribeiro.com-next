import portfolioActions from '@/actions/portfolioActions';
import ExpandingGallery from './ExpandingGallery';
import RenderedGalleryExpander from './RenderedGalleryExpander';
import RenderedExpandingGalleryThumbnail from './RenderedExpandingGalleryThumbnail';

// interface RenderedExpandingGalleryProps {
//   slug?: string;
// }

export default async function RenderedExpandingGallery() {
  const thumbnails = await portfolioActions.getPortfolioThumbnails();
  const numItems = thumbnails.length;

  // let expanderContent: PortfolioItem | null = null;
  // if (slug) {
  //   expanderContent = await portfolioActions.getPortfolioItemBySlug(slug);
  // }
  // console.log(expanderContent);

  return (
    <ExpandingGallery>
      <ExpandingGallery.ScrollTo />
      <ExpandingGallery.UseHash />
      <ExpandingGallery.Container>
        <ExpandingGallery.Expander numItems={numItems}>
          <RenderedGalleryExpander />
        </ExpandingGallery.Expander>

        {thumbnails.map(item => (
          <ExpandingGallery.Item
            uniqueIndex={item.id}
            key={`${item.slug}-key`}
            slug={item.slug}
          >
            <RenderedExpandingGalleryThumbnail item={item} />
          </ExpandingGallery.Item>
        ))}
      </ExpandingGallery.Container>
    </ExpandingGallery>
  );
}
