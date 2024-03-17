import ReactPlayer from 'react-player/lazy';
import PlayIcon from '../../assets/icons/play-icon.svg?react';

function ExpandingGalleryVideoPlayer({ videoUrl, imageUrl, controls = true }) {
  console.log('videoUrl down the trees', videoUrl);

  return (
    <>
      <ReactPlayer
        url={videoUrl}
        controls={controls}
        light={imageUrl || true}
        playIcon={
          <PlayIcon className="h-5 w-5 fill-neutral-200 sm:h-12 sm:w-12" />
        }
      />
    </>
  );
}

export default ExpandingGalleryVideoPlayer;
