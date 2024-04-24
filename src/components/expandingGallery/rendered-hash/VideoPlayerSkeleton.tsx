import { PiPlayFill } from 'react-icons/pi';

export default function VideoPlayerSkeleton() {
  return (
    <div className="flex justify-center items-center grow bg-horizon-blue-900 animate-pulse">
      <PiPlayFill className="h-11 w-10 text-neutral-100/60 sm:h-20 sm:w-20" />
    </div>
  );
}
