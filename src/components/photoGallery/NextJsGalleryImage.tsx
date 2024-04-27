'use client';

import Image from 'next-export-optimize-images/image';
import { Suspense } from 'react';
import { RenderPhotoProps } from 'react-photo-album';
import ThumbnailSkeleton from './ThumbnailSkeleton';

// interface calcImageDimensionsProps {
//   height: number;
//   width: number;
//   targetHeight: number;
// }

// function calcImageDimensions({
//   height,
//   width,
//   targetHeight,
// }: calcImageDimensionsProps): { width: number; height: number } {
//   console.log(height, width, targetHeight);
//   if (targetHeight > height) {
//     return {
//       width: width,
//       height: width / targetHeight,
//     };
//   }

//   const newWidth = (width * targetHeight) / height;

//   return {
//     width: newWidth,
//     height: targetHeight,
//   };
// }
// // const { width, height } = calcImageDimensions({
// //   height: heightAsNum,
// //   width: widthAsNum,
// //   targetHeight: 180,
// // });

function roundUp(num: number, margin?: number) {
  return Math.ceil(margin ? num * margin : num);
}

function NextJsGalleryImage({
  photo,
  imageProps: { alt, title, sizes, className, onClick },
  wrapperStyle,
  layout,
}: RenderPhotoProps) {
  // const useFill = Boolean(!photo.width && !photo.height);
  console.log('layout', layout.width, layout.height);
  console.log('photo', photo.width, photo.height);

  return (
    <div style={{ ...wrapperStyle, position: 'relative' }}>
      <Suspense fallback={<ThumbnailSkeleton />}>
        <Image
          quality={60}
          // fill={useFill}
          // width={!useFill ? photo.width : undefined}
          height={roundUp(layout.height)}
          width={roundUp(layout.width)}
          // height={!useFill ? photo.height : undefined}
          src={photo}
          placeholder={'blurDataURL' in photo ? 'blur' : undefined}
          {...{ alt, title, sizes, className, onClick }}
        />
      </Suspense>
    </div>
  );
}
export default NextJsGalleryImage;
