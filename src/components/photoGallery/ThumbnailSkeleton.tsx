import { cn } from '@/lib/utils';

interface ThumbnailSkeletonProps {
  className?: string;
}

function ThumbnailSkeleton({ className }: ThumbnailSkeletonProps) {
  return (
    <div
      className={cn(
        className,
        'h-[180px] w-[320px] animate-pulse bg-neutral-700',
      )}
    ></div>
  );
}
export default ThumbnailSkeleton;
