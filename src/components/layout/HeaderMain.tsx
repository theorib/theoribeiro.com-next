import paths from '@/paths';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import MainNav from '../MainNav';
import { PiListThin, PiXThin } from 'react-icons/pi';

function HeaderMain() {
  return (
    <header className="mx-auto flex w-full max-w-layout items-start justify-between pb-3 pt-4 sm:pb-5 sm:pt-6">
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
          <Button variant="ghost" className="p-2 h-max">
            <PiListThin className="w-10 h-10" />
            <span className="sr-only">Open Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent className="dark:bg-neutral-600 pt-12 pr-0 pl-0">
          <SheetClose className="absolute right-4 top-3 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-neutral-100 dark:ring-offset-neutral-950 dark:focus:ring-neutral-300 dark:data-[state=open]:bg-neutral-800">
            <PiXThin className="w-10 h-10" />
            <span className="sr-only">Close Menu</span>
          </SheetClose>
          <MainNav />
        </SheetContent>
      </Sheet>
    </header>
  );
}

export default HeaderMain;
