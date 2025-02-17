'use client';

import {
  stillsPortfolio,
  type StillsPortfolioItem,
} from '@/services/portfolio/data/stillsPortfolio';
import { Suspense, useState } from 'react';
import { RowsPhotoAlbum } from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import Captions from 'yet-another-react-lightbox/plugins/captions';

import 'react-photo-album/rows.css';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';

import paths from '@/shared/lib/paths';
import {
  CaptionsHiddenIcon,
  CaptionsVisibleIcon,
  CloseIcon,
  NextIcon,
  PrevIcon,
} from '@/features/expandingGallery/components/navIcons';
import NextJsImageLightboxImage from '@/features/photoGallery/components/NextJsImageLightboxImage';
import GallerySkeleton from '@/features/photoGallery/components/GallerySkeleton';
import {
  RenderContainer,
  RenderThumbnailImage,
} from '@/features/photoGallery/components/PhotoGalleryRenderComponents';

const stills: Array<StillsPortfolioItem> = stillsPortfolio.map(item => ({
  ...item,
  src: paths.localAssetsPath() + item.src,
}));

function PhotoGallery() {
  const [index, setIndex] = useState<number>(-1);
  const targetRowHeight = 180;

  return (
    <>
      <Suspense fallback={<GallerySkeleton />}>
        <RowsPhotoAlbum
          photos={stills}
          render={{
            container: ({ ...props }) => <RenderContainer {...props} />,
            image: RenderThumbnailImage,
          }}
          spacing={0}
          targetRowHeight={targetRowHeight}
          onClick={({ index }: { index: number }) => setIndex(index)}
        />
      </Suspense>

      <Lightbox
        slides={stills}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        render={{
          slide: NextJsImageLightboxImage,
          iconPrev: () => <PrevIcon />,
          iconNext: () => <NextIcon />,
          iconClose: () => <CloseIcon />,
          iconCaptionsVisible: () => <CaptionsVisibleIcon />,
          iconCaptionsHidden: () => <CaptionsHiddenIcon />,
        }}
        plugins={[Captions]}
        captions={{
          showToggle: true,
          descriptionTextAlign: 'center',
          descriptionMaxLines: 2,
        }}
      />
    </>
  );
}
export default PhotoGallery;
