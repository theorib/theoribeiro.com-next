import ThumbnailSkeleton from '@/components/photoGallery/ThumbnailSkeleton';

function GallerySkeleton() {
  const length = 12;
  const array = Array.from({ length }, (_, index) => index);

  return (
    <div className="flex flex-wrap gap-[2px]">
      {array.map(item => (
        <ThumbnailSkeleton key={item} className="grow" />
      ))}
    </div>
  );
}
export default GallerySkeleton;
