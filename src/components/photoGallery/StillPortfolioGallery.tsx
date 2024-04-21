'use client';
import NextJsGalleryImage from '@/components/photoGallery/NextJsGalleryImage';
import { stillsPortfolio } from '@/data/stillsPortfolio';
import { useState } from 'react';
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

const iconClassName = 'w-14 h-14 sm:h-20 sm:w-20 p-1 sm:p-2 sm:-mx-5';

function StillPortfolioGallery() {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <PhotoAlbum
        layout="rows"
        photos={stillsPortfolio}
        renderPhoto={NextJsGalleryImage}
        spacing={0}
        targetRowHeight={180}
        onClick={({ index }) => setIndex(index)}
      />

      <Lightbox
        slides={stillsPortfolio}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        render={{
          slide: NextJsImageLightboxImage,
          iconPrev: () => <PiCaretLeftThin className={iconClassName} />,
          iconNext: () => <PiCaretRightThin className={iconClassName} />,
          iconClose: () => (
            <PiXThin className="w-14 h-14 sm:h-14 sm:w-14 p-1 sm:p-2 sm:-mx-2" />
          ),
          iconCaptionsVisible: () => (
            <PiClosedCaptioningThin className="w-14 h-14 sm:h-14 sm:w-14 p-1 sm:p-2" />
          ),
          iconCaptionsHidden: () => (
            <PiClosedCaptioningThin className="w-14 h-14 sm:h-14 sm:w-14 p-1 sm:p-2" />
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
