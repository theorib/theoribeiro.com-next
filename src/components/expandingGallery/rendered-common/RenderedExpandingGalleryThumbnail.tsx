import Image from 'next-export-optimize-images/image';
import { AspectRatio } from '../../ui/aspect-ratio';
import { type PortfolioThumbnail } from '@/actions/portfolioActions';
import { cn } from '@/lib/utils';

type RenderedExpandingGalleryThumbnail = {
  item: PortfolioThumbnail;
};

function RenderedExpandingGalleryThumbnail({
  item,
}: RenderedExpandingGalleryThumbnail) {
  const priority = item.id <= 3 ? true : false;

  const className = cn([
    'group-[.expanding-grid-gallery-item--active]/grid-item:text-neutral-0 absolute inset-0 flex items-center justify-center bg-neutral-950/50 opacity-0 transition-all duration-200 group-focus-within/grid-item:opacity-90 group-hover/grid-item:opacity-90 group-[.expanding-grid-gallery-item--active]/grid-item:bg-neutral-950/85',
  ]);

  return (
    <AspectRatio
      ratio={2.4 / 1}
      asChild={true}
      className={
        'group-[.expanding-grid-gallery-item--active]/grid-item:opacity-30'
      }
    >
      {/* <Link href={item.imageUrl}> */}
      <div className="">
        <Image
          src={item.imageUrl}
          alt={item.thumbAlt}
          title={item.thumbTitle}
          fill
          className="object-cover"
          priority={priority}
          sizes="(min-width: 640px)50vw, 100vw"
        />
        <div className={className}>
          <p className="text-4xl font-extralight">{item.title}</p>
        </div>
      </div>
      {/* </Link> */}
    </AspectRatio>
  );
}
export default RenderedExpandingGalleryThumbnail;
