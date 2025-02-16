'use client';
import ReactPlayer from 'react-player/vimeo';
import { PiPlayFill } from 'react-icons/pi';
import { Suspense } from 'react';
import VideoPlayerSkeleton from './VideoPlayerSkeleton';
import Image from 'next-export-optimize-images/image';

interface PlayerImage {
  imageUrl: string;
  thumbAlt: string;
  thumbTitle: string;
}

type RenderedVideoPlayerProps = {
  videoUrl: string;
  image: PlayerImage;
  controls?: boolean;
};

function VideoImagePreview({ image }: { image: PlayerImage }) {
  return (
    <div className="absolute inset-0 flex animate-fade-in items-center justify-center">
      <Image
        fill
        src={image.imageUrl}
        alt={image.thumbAlt}
        title={image.thumbTitle}
        className="object-cover"
        sizes="(min-width: 768px) 65vw, (min-width: 1024px) 50vw, 100vw"
        quality="65"
      />
      <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 hover:bg-neutral-950/50 group-focus-within:bg-neutral-950/50 group-hover:bg-neutral-950/50">
        <PiPlayFill className="group-hover: h-11 w-10 text-neutral-100/60 transition-colors duration-300 group-focus-within:text-neutral-100/80 sm:h-20 sm:w-20" />
      </div>
    </div>
  );
}

function RenderedVideoPlayer({
  videoUrl,
  image,
  controls = true,
}: RenderedVideoPlayerProps) {
  return (
    <Suspense fallback={VideoPlayerSkeleton()}>
      <div className="group absolute inset-0 animate-fade-in">
        <ReactPlayer
          width="100%"
          height="100%"
          playing={true}
          url={videoUrl}
          controls={controls}
          light={<VideoImagePreview image={image} />}
          playIcon={
            <PiPlayFill className="h-11 w-10 text-neutral-100/60 sm:h-20 sm:w-20" />
          }
        />
      </div>
    </Suspense>
  );
}
export default RenderedVideoPlayer;
