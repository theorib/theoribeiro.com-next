import Image from 'next-export-optimize-images/image';
import { AspectRatio } from '../../ui/aspect-ratio';
import { cn } from '@/lib/utils';
import paths from '@/lib/paths';
import { type PortfolioThumbnail } from '@/data/portfolio';

interface RenderedExpandingGalleryThumbnail {
  item: PortfolioThumbnail;
}

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
      className={cn(
        'group-[.expanding-grid-gallery-item--active]/grid-item:opacity-30',
      )}
    >
      <div className="">
        <Image
          src={paths.localAssetsPath() + item.imageUrl}
          alt={item.thumbAlt}
          title={item.thumbTitle}
          fill
          className="object-cover"
          priority={priority}
          sizes="(min-width: 640px)50vw, 100vw"
        />
        <div className={className}>
          <p className="font-primary text-2xl font-extralight uppercase tracking-[0.035em] sm:text-2xl">
            {item.title}
          </p>
        </div>
      </div>
    </AspectRatio>
  );
}
export default RenderedExpandingGalleryThumbnail;
