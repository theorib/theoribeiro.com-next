import { Separator } from '@/components/ui/separator';

function NotFoundRoot() {
  return (
    <div className="flex flex-col items-center justify-center min-h-full py-12">
      <h1 className="flex items-center text-neutral-300">
        <span className=" text-2xl sm:text-4xl">404</span>
        <Separator
          orientation="vertical"
          className="w-[1px] h-10 sm:h-14 mx-3 sm:mx-5 dark:bg-neutral-500/50"
        />
        <span className="sm:text-xl">This page could not be found.</span>
      </h1>
    </div>
  );
}
export default NotFoundRoot;
