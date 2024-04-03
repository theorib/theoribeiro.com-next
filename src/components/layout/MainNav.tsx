import paths from '@/lib/paths';
import Link from 'next/link';
import { ReactNode } from 'react';
import type { UrlObject } from 'url';
import { SheetClose } from '../ui/sheet';

interface MainNavItemProps {
  children: ReactNode;
  href: string | UrlObject;
}
function MainNavItem({ children, href }: MainNavItemProps) {
  return (
    <li className="flex">
      <SheetClose asChild={true}>
        <Link
          href={href}
          className=" px-8 py-5 grow dark:hover:bg-neutral-700 transition-colors"
        >
          {children}
        </Link>
      </SheetClose>
    </li>
  );
}

export default function MainNav() {
  return (
    <nav className="">
      <ul className="flex flex-col divide-y border-t border-b">
        <MainNavItem href={paths.homePage()}>Home</MainNavItem>
        <MainNavItem href="#">
          Demo Reel canis circensis citus manus joy
        </MainNavItem>
        <MainNavItem href="#">Still Photography</MainNavItem>
        <MainNavItem href={paths.aboutPage()}>About</MainNavItem>
      </ul>
    </nav>
  );
}
