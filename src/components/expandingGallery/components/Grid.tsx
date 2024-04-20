import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';
import { forwardRef } from 'react';
import type { ForwardedRef, HTMLAttributes } from 'react';

export interface GridProps extends HTMLAttributes<HTMLUListElement> {
  asChild?: boolean;
  className?: string;
}

export const gridAriaLabel = 'Expanding Grid Gallery Items';

// A generic component that can become any HTML element or another ReactComponent
function Grid(
  { className, asChild, ...props }: GridProps,
  ref: ForwardedRef<HTMLUListElement>,
) {
  const Comp = asChild ? Slot : 'ul';
  return (
    <Comp
      role="list"
      aria-label={gridAriaLabel}
      className={cn(
        'grid gap-0 sm:grid-cols-2 sm:gap-0 expanding-gallery-container expanding-gallery-container--expanded',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
}

Grid.displayName = 'Grid';
export default forwardRef(Grid);
