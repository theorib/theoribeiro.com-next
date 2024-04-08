import paths from '@/lib/paths';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import MainNav from './MainNav';
import { PiListThin, PiXThin } from 'react-icons/pi';

function HeaderMain() {
  return (
    <header className="mx-auto flex w-full max-w-layout items-start justify-between py-4 sm:pb-5 sm:pt-6 px-5">
      <div className="">
        <p className="mb-1 text-4xl font-light leading-[0.765] transition-all  sm:mb-3 sm:text-5xl sm:leading-[0.765] font-raleway">
          <Link href={paths.homePage()}>Theo Ribeiro</Link>
        </p>
        <p className="text-lg font-light leading-[1.2] transition-all sm:text-xl sm:leading-[1.2]">
          cinematographer
        </p>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="p-2 flex h-[auto] w-[auto] bg-neutral-700"
          >
            <PiListThin className="w-7 h-7 sm:w-10 sm:h-10" />
            <span className="sr-only">Open Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent
          className="dark:bg-neutral-600 p-0 w-full flex flex-col items-stretch gap-0"
          aria-label="Main menu dialogue box"
        >
          <SheetClose className="p-2 my-4 mx-7 self-end rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-neutral-100 dark:ring-offset-neutral-950 dark:focus:ring-neutral-300 dark:data-[state=open]:bg-neutral-800">
            <PiXThin className="w-7 h-7 sm:w-10 sm:h-10" />
            <span className="sr-only">Close Menu</span>
          </SheetClose>
          <MainNav />
        </SheetContent>
      </Sheet>
    </header>
  );
}

export default HeaderMain;
