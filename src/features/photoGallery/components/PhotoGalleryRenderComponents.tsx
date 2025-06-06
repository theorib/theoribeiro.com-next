import ThumbnailSkeleton from '@/features/photoGallery/components/ThumbnailSkeleton';
import { StillsPortfolioItemSchema } from '@/services/portfolio/data/stillsPortfolio';
import { AspectRatio } from '@/shared/components/ui/aspect-ratio';
import { cn } from '@/shared/lib/utils';
import { type StillsPortfolioItem } from 'export-images.config.cjs';
// import Image from 'next-export-optimize-images/image';
import Image from 'next/image';
import { Suspense, type JSX } from 'react';
import type { RenderImageContext, RenderImageProps } from 'react-photo-album';
// import { Suspense } from 'react';

export function RenderContainer({
  children,
  ...props
}: React.ComponentProps<'div'>) {
  return <div {...props}>{children}</div>;
}

// type RenderPhotoProps = {};

export function RenderThumbnailImage(
  { sizes }: RenderImageProps,
  { photo, width, height }: RenderImageContext<StillsPortfolioItem>,
): JSX.Element {
  const { data, error } = StillsPortfolioItemSchema.safeParse(photo);

  if (error || !data) {
    return (
      <AspectRatio ratio={width / height}>
        <ThumbnailSkeleton />
      </AspectRatio>
    );
  }

  return (
    <AspectRatio ratio={width / height}>
      <Suspense fallback={<ThumbnailSkeleton />}>
        <Image
          quality={60}
          fill
          src={data.src}
          alt={data.alt}
          title={data.description ?? ''}
          sizes={sizes as string}
          className={cn('object-cover')}
          placeholder={'blurDataURL' in photo ? 'blur' : undefined}
        />
      </Suspense>
    </AspectRatio>
  );
}
