'use client';

import Image from 'next-export-optimize-images/image';
import { RenderPhotoProps } from 'react-photo-album';

function NextJsGalleryImage({
  photo,
  imageProps: { alt, title, sizes, className, onClick, width, height },
  wrapperStyle,
}: RenderPhotoProps) {
  const useFill = Boolean(width && height);

  return (
    <div style={{ ...wrapperStyle, position: 'relative' }}>
      <Image
        fill={useFill}
        width={!useFill ? photo.width : undefined}
        height={!useFill ? photo.height : undefined}
        src={photo}
        placeholder={'blurDataURL' in photo ? 'blur' : undefined}
        {...{ alt, title, sizes, className, onClick }}
      />
    </div>
  );
}
export default NextJsGalleryImage;
