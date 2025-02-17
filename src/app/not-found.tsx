import { Separator } from '@/shared/components/ui/separator';

function NotFoundRoot() {
  return (
    <div className="flex min-h-full flex-col items-center justify-center py-12">
      <h1 className="flex items-center text-neutral-300">
        <span className="text-2xl sm:text-4xl">404</span>
        <Separator
          orientation="vertical"
          className="mx-3 h-10 w-[1px] sm:mx-5 sm:h-14 dark:bg-neutral-500/50"
        />
        <span className="sm:text-xl">This page could not be found.</span>
      </h1>
    </div>
  );
}
export default NotFoundRoot;
