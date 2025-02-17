'use client';
import NextJsGalleryImage from '@/components/photoGallery/NextJsGalleryImage';
import { stillsPortfolio, StillsPortfolioItem } from '@/data/stillsPortfolio';
import { Suspense, useState } from 'react';
import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import NextJsImageLightboxImage from './NextJsImageLightboxImage';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';

import GallerySkeleton from './GallerySkeleton';
import paths from '@/lib/paths';
import {
  CaptionsHiddenIcon,
  CaptionsVisibleIcon,
  CloseIcon,
  NextIcon,
  PrevIcon,
} from '@/components/expandingGallery/rendered/navIcons';

const stills: Array<StillsPortfolioItem> = stillsPortfolio.map(item => ({
  ...item,
  src: paths.localAssetsPath() + item.src,
}));

function StillPortfolioGallery() {
  const [index, setIndex] = useState(-1);
  const targetRowHeight = 180;

  return (
    <>
      <Suspense fallback={<GallerySkeleton />}>
        <PhotoAlbum
          layout="rows"
          photos={stills}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          renderPhoto={NextJsGalleryImage as any}
          spacing={0}
          targetRowHeight={targetRowHeight}
          onClick={({ index }) => setIndex(index)}
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
export default StillPortfolioGallery;
