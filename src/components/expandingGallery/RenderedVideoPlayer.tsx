import ReactPlayer from 'react-player/lazy';
import { PiPlayFill } from 'react-icons/pi';
import { Suspense } from 'react';
import VideoPlayerSkeleton from './VideoPlayerSkeleton';

type RenderedVideoPlayerProps = {
  videoUrl: string;
  imageUrl: string;
  controls?: boolean;
};

export default function RenderedVideoPlayer({
  videoUrl,
  imageUrl,
  controls = true,
}: RenderedVideoPlayerProps) {
  return (
    <Suspense fallback={<VideoPlayerSkeleton />}>
      <div className="absolute inset-0 animate-fade-in">
        <ReactPlayer
          width="100%"
          height="100%"
          playing={true}
          url={videoUrl}
          controls={controls}
          light={imageUrl || true}
          playIcon={
            <PiPlayFill className="h-11 w-10 text-neutral-100/60 sm:h-20 sm:w-20" />
          }
        />
      </div>
    </Suspense>
  );
}
