import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';
import { forwardRef } from 'react';
import type { HTMLAttributes } from 'react';

export interface GridProps extends HTMLAttributes<HTMLUListElement> {
  asChild?: boolean;
  className?: string;
}

// A generic component that can become any HTML element or another ReactComponent
const Grid = forwardRef<HTMLUListElement, GridProps>(
  ({ className, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : 'ul';
    return (
      <Comp
        role="list"
        className={cn(
          'grid gap-0 sm:grid-cols-2 sm:gap-0 expanding-gallery-container expanding-gallery-container--expanded',
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Grid.displayName = 'Grid';
export default Grid;
