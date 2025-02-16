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
    <header className="max-w-layout mx-auto flex w-full items-start justify-between px-5 py-4 sm:pt-6 sm:pb-5">
      <div className="">
        <p className="font-primary mb-1 text-4xl leading-[0.765] font-extralight tracking-[0.035em] uppercase transition-all sm:mb-2 sm:text-4xl sm:leading-[0.765]">
          <Link href={paths.homePage()} title="Go to homepage">
            Theo Ribeiro
          </Link>
        </p>
        <p className="text-lg leading-[1.2] font-extralight transition-all sm:text-base sm:leading-[1.2]">
          director of photography
        </p>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="flex h-[auto] w-[auto] bg-neutral-700 p-2"
          >
            <PiListThin className="h-7 w-7 sm:h-10 sm:w-10" />
            <span className="sr-only">Open Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent
          className="flex w-full flex-col items-stretch gap-0 p-0 dark:bg-neutral-600"
          aria-label="Main menu dialogue box"
        >
          <SheetClose className="mx-5 my-4 self-end rounded-sm p-2 opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:ring-0 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-neutral-100 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300 dark:data-[state=open]:bg-neutral-800">
            <PiXThin className="h-7 w-7 sm:h-10 sm:w-10" />
            <span className="sr-only">Close Menu</span>
          </SheetClose>
          <MainNav />
        </SheetContent>
      </Sheet>
    </header>
  );
}

export default HeaderMain;
