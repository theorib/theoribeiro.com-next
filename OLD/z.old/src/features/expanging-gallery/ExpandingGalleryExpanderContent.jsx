import { useEffect, useRef } from 'react';
import { getGalleryItemRow } from './expandingGalleryHelpers';
import ExpandingGalleryExpanderContentDetails from './ExpandingGalleryExpanderContentDetails';
import ReactPlayer from 'react-player/vimeo';
import PlayIcon from '../../assets/icons/play-icon.svg?react';
import ExpandingGalleryImage from './ExpandingGalleryImage';
import ExpandingGalleryVideoPlayer from './ExpandingGalleryVideoPlayer';

// import { scrollIntoView } from '../../utils/helpers';

function ExpandingGalleryExpanderContent({
  nodeRef,
  currentPortfolioItem,
  portfolioItemsCount,
}) {
  const portfolioItem = useRef(currentPortfolioItem);
  if (currentPortfolioItem !== undefined)
    portfolioItem.current = currentPortfolioItem;

  let title, imageUrl, videoUrl, expanderRowBase, expanderRowSm;

  if (portfolioItem.current) {
    title = portfolioItem.current?.title;
    imageUrl = portfolioItem.current?.imageUrl;
    videoUrl = portfolioItem.current?.videoUrl;
    expanderRowBase = getGalleryItemRow(
      portfolioItem.current?.id,
      portfolioItemsCount,
      1,
    );
    expanderRowSm = getGalleryItemRow(
      portfolioItem.current?.id,
      portfolioItemsCount,
      2,
    );
  }

  // const scrollIntoView = () => {
  //   nodeRef.current.scrollIntoView({
  //     block: 'center',
  //     inline: 'center',
  //     behavior: 'smooth',
  //   });
  // };
  // scrollIntoView();

  return (
    <li
      ref={nodeRef}
      className={`expander col-span-full row-start-${expanderRowBase} sm:row-start-${expanderRowSm}`}
    >
      <div className="expander-child">
        <div className=" flex flex-auto flex-col gap-6  px-16 py-6 sm:flex-row sm:gap-16 sm:py-10">
          <div className="aspect-[16/9] min-h-0 basis-5/12">
            <ReactPlayer
              key={Math.random()}
              url={videoUrl}
              controls={true}
              light={imageUrl}
              width="100%"
              height="100%"
              playIcon={
                <PlayIcon className="h-5 w-5 fill-neutral-200 sm:h-12 sm:w-12" />
              }
            />
          </div>

          <ExpandingGalleryExpanderContentDetails
            portfolioItem={portfolioItem.current}
          />
        </div>
      </div>
    </li>
  );
}

export default ExpandingGalleryExpanderContent;
