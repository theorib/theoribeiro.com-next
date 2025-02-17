import { PlayIcon } from '@/features/expandingGallery/components/navIcons';

export default function VideoPlayerSkeleton() {
  return (
    <div className="bg-horizon-blue-900 flex grow animate-pulse items-center justify-center">
      <PlayIcon />
    </div>
  );
}
