'use client';

import Image from 'next-export-optimize-images/image';
import { Suspense } from 'react';
import { RenderPhotoProps } from 'react-photo-album';
import ThumbnailSkeleton from './ThumbnailSkeleton';
import { StillsPortfolioItem } from '@/data/stillsPortfolio';

function roundUp(num: number, margin?: number) {
  return Math.ceil(margin ? num * margin : num);
}

function NextJsGalleryImage({
  photo,
  imageProps: { alt, title, sizes, className, onClick },
  wrapperStyle,
  layout,
}: RenderPhotoProps<StillsPortfolioItem>): React.ReactNode {
  return (
    <div style={{ ...wrapperStyle, position: 'relative' }}>
      <Suspense fallback={<ThumbnailSkeleton />}>
        <Image
          quality={60}
          height={roundUp(layout.height)}
          width={roundUp(layout.width)}
          src={photo}
          placeholder={'blurDataURL' in photo ? 'blur' : undefined}
          {...{ alt, title, sizes, className, onClick }}
        />
      </Suspense>
    </div>
  );
}

export default NextJsGalleryImage;
