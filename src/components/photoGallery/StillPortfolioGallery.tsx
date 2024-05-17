'use client';
import NextJsGalleryImage from '@/components/photoGallery/NextJsGalleryImage';
import { stillsPortfolio } from '@/data/stillsPortfolio';
import { Suspense, useState } from 'react';
import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import NextJsImageLightboxImage from './NextJsImageLightboxImage';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import {
  PiCaretLeftThin,
  PiCaretRightThin,
  PiClosedCaptioningThin,
  PiXThin,
} from 'react-icons/pi';
import GallerySkeleton from './GallerySkeleton';
import paths from '@/lib/paths';

const iconClassName = 'w-14 h-14 sm:h-20 sm:w-20 p-1 sm:p-2 sm:-mx-5';

const stills = stillsPortfolio.map(item => ({
  ...item,
  src: paths.localAssetsPath + item.src,
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
          iconPrev: () => <PiCaretLeftThin className={iconClassName} />,
          iconNext: () => <PiCaretRightThin className={iconClassName} />,
          iconClose: () => (
            <PiXThin className="h-14 w-14 p-1 sm:-mx-2 sm:h-14 sm:w-14 sm:p-2" />
          ),
          iconCaptionsVisible: () => (
            <PiClosedCaptioningThin className="h-14 w-14 p-1 sm:h-14 sm:w-14 sm:p-2" />
          ),
          iconCaptionsHidden: () => (
            <PiClosedCaptioningThin className="h-14 w-14 p-1 sm:h-14 sm:w-14 sm:p-2" />
          ),
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
