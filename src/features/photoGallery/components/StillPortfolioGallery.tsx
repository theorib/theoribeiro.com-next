'use client';
import NextJsGalleryImage from '@/features/photoGallery/components/NextJsGalleryImage';
import {
  stillsPortfolio,
  type StillsPortfolioItem,
} from '@/services/portfolio/data/stillsPortfolio';
import { Suspense, useState } from 'react';
import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import Captions from 'yet-another-react-lightbox/plugins/captions';

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
          renderPhoto={NextJsGalleryImage}
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
