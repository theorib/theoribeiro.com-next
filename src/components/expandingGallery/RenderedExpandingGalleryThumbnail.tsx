import Image from 'next/image';
import { AspectRatio } from '../ui/aspect-ratio';
import { type PortfolioThumbnail } from '@/actions/portfolioActions';

type RenderedExpandingGalleryThumbnail = {
  item: PortfolioThumbnail;
};

export default function RenderedExpandingGalleryThumbnail({
  item,
}: RenderedExpandingGalleryThumbnail) {
  return (
    <AspectRatio ratio={2.4 / 1} asChild={true}>
      {/* <Link href={item.imageUrl}> */}
      <div>
        <div className="absolute top-0 bottom-0 left-0 right-0 z-10 flex justify-center items-center bg-neutral-950/50 opacity-0 hover:opacity-90 transition-all duration-200">
          <p className="text-4xl font-extralight">{item.title}</p>
        </div>
        <Image
          src={item.imageUrl}
          alt={item.title}
          fill
          className="object-cover"
        />
      </div>
      {/* </Link> */}
    </AspectRatio>
  );
}
