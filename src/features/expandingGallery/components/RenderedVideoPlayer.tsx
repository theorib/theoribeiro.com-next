'use client';
import { Suspense } from 'react';
import MuxPlayer from '@mux/mux-player-react/lazy';
import Image from 'next/image';
import { PlayIcon } from '@/features/expandingGallery/components/navIcons';
import VideoPlayerSkeleton from '@/features/expandingGallery/components/VideoPlayerSkeleton';
import { type PortfolioItem } from '@/services/portfolio/data/portfolio';

interface PlayerImage {
  imageUrl: string;
  thumbAlt: string;
  thumbTitle: string;
}

type RenderedVideoPlayerProps = {
  portfolioItem: PortfolioItem;
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
  portfolioItem,
  controls = true,
}: RenderedVideoPlayerProps) {
  return (
    <Suspense fallback={VideoPlayerSkeleton()}>
      <div className="group animate-fade-in aspect-video w-full">
        <MuxPlayer
          playbackId={portfolioItem.muxPlaybackId}
          // theme="minimal"
          metadata={{
            // video_id: '',
            video_title: portfolioItem.title,
            // viewer_user_id: 'user-id-007',
          }}
          // poster={portfolioItem.imageUrl}
          thumbnailTime={portfolioItem.thumbnailTime}
          style={{ aspectRatio: 16 / 9, width: '100%' }}
          accentColor="#606060"
        />
      </div>
    </Suspense>
  );
}
export default RenderedVideoPlayer;
