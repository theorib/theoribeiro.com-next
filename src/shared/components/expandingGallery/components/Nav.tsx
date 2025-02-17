import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/shared/lib/utils';
import type { HTMLAttributes, ReactNode, RefObject } from 'react';

interface NavProps extends HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
  className?: string;
  children: ReactNode;
  ref?: RefObject<HTMLDivElement>;
}

export const navAriaLabel = 'Expanding Grid Gallery Navigation';

function Nav({ children, asChild, className, ref }: NavProps) {
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
}
Nav.displayName = 'Nav';
export default Nav;
