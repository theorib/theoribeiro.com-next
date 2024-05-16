import { PiPlayFill } from 'react-icons/pi';

export default function VideoPlayerSkeleton() {
  return (
    <div className="flex grow animate-pulse items-center justify-center bg-horizon-blue-900">
      <PiPlayFill className="h-11 w-10 text-neutral-100/60 sm:h-20 sm:w-20" />
    </div>
  );
}
