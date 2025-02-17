import paths from '@/shared/lib/paths';
import Link from 'next/link';
import { Button } from '@/shared/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/shared/components/ui/sheet';

import { Menu, X } from 'lucide-react';
import MainNav from '@/features/mainNav/MainNav';

function HeaderMain() {
  return (
    <header className="max-w-layout mx-auto flex w-full items-start justify-between px-5 py-4 sm:pt-6 sm:pb-5">
      <div className="">
        <p className="font-primary mb-1 text-4xl leading-[0.765] font-extralight tracking-[0.035em] uppercase transition-all sm:mb-2 sm:text-4xl sm:leading-[0.765]">
          <Link href={paths.homePage()} title="Go to homepage">
            Theo Ribeiro
          </Link>
        </p>
        <p className="text-lg leading-[1.2] transition-all sm:text-base sm:leading-[1.2]">
          director of photography
        </p>
      </div>
      <Sheet>
        <SheetTrigger className="cursor-pointer hover:text-neutral-400">
          <Menu size={48} strokeWidth={0.5} className="size-10" />
          <span className="sr-only">Open Menu</span>
        </SheetTrigger>
        <SheetContent
          className="flex w-full flex-col items-stretch gap-0 p-0 dark:bg-neutral-600"
          aria-label="main menu dialog box"
        >
          <SheetClose asChild>
            <Button
              variant="ghost"
              size="icon"
              className="size-14 cursor-pointer self-end hover:bg-transparent hover:text-neutral-400"
            >
              <X size={48} strokeWidth={0.5} className="size-10" />
              <span className="sr-only">Close Menu</span>
            </Button>
          </SheetClose>
          <SheetTitle className="sr-only">Main Menu</SheetTitle>
          <MainNav />
        </SheetContent>
      </Sheet>
    </header>
  );
}

export default HeaderMain;
