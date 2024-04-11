import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';
import { forwardRef } from 'react';
import type { HTMLAttributes, ReactNode } from 'react';

interface NavProps extends HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
  className?: string;
  children: ReactNode;
}

export const navAriaLabel = 'Expanding Grid Gallery Navigation';

const Nav = forwardRef<HTMLDivElement, NavProps>(
  ({ children, asChild, className }: NavProps, ref) => {
    const Comp = asChild ? Slot : 'nav';
    return (
      <Comp
        className={cn('expanding-grid-gallery-nav', className)}
        ref={ref}
        aria-label={navAriaLabel}
      >
        {children}
      </Comp>
    );
  },
);
Nav.displayName = 'Nav';
export default Nav;
