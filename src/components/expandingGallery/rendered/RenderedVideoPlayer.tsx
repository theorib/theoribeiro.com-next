'use client';
import ReactPlayer from 'react-player/vimeo';
import { Suspense } from 'react';
import VideoPlayerSkeleton from './VideoPlayerSkeleton';
import Image from 'next-export-optimize-images/image';
import { PlayIcon } from '@/components/expandingGallery/rendered/navIcons';

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
    <div className="animate-fade-in absolute inset-0 flex items-center justify-center">
      <Image
        fill
        src={image.imageUrl}
        alt={image.thumbAlt}
        title={image.thumbTitle}
        className="object-cover"
        sizes="(min-width: 768px) 65vw, (min-width: 1024px) 50vw, 100vw"
        quality="65"
      />
      <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-focus-within:bg-neutral-950/50 group-hover:bg-neutral-950/50 hover:bg-neutral-950/50">
        <PlayIcon />
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
      <div className="group animate-fade-in absolute inset-0">
        <ReactPlayer
          width="100%"
          height="100%"
          playing={true}
          url={videoUrl}
          controls={controls}
          light={<VideoImagePreview image={image} />}
          playIcon={<PlayIcon />}
        />
      </div>
    </Suspense>
  );
}
export default RenderedVideoPlayer;
