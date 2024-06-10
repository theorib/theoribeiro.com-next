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
          className="grow px-8 py-5 transition-colors dark:hover:bg-neutral-700"
        >
          {children}
        </Link>
      </SheetClose>
    </li>
  );
}

export default function MainNav() {
  return (
    <nav aria-label="Main Menu">
      <ul className="flex flex-col divide-y divide-neutral-500 border-b border-t border-neutral-500">
        <MainNavItem href={paths.homePage()}>Home</MainNavItem>
        <MainNavItem href={'/still-photography'}>Still Photography</MainNavItem>
        <MainNavItem href={paths.aboutPage()}>About</MainNavItem>
      </ul>
    </nav>
  );
}
