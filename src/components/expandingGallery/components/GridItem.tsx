'use client';
import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';
import { useExpandingGridGallery } from '../contexts/ExpandingGridGalleryContext';
import type { ReactNode, MouseEvent, LiHTMLAttributes } from 'react';

interface GridItemProps extends LiHTMLAttributes<HTMLLIElement> {
  uniqueSlug: string;
  afterHandleClick?: (e?: MouseEvent<HTMLLIElement>) => void;
  beforeHandleClick?: (e?: MouseEvent<HTMLLIElement>) => void;
  className?: string;
  asChild?: boolean;
  children: ReactNode;
}

// A generic component that can become any HTML element or another ReactComponent
const GridItem = forwardRef<HTMLLIElement, GridItemProps>(
  (
    {
      uniqueSlug,
      afterHandleClick,
      beforeHandleClick,
      asChild,
      children,
      className,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'li';

    const {
      currentUniqueSlug,
      setCurrentUniqueSlug,
      setPreviousScrollPosition,
    } = useExpandingGridGallery();
    const isActive = currentUniqueSlug === uniqueSlug;

    const stylingClassNames = `transition-opacity ${isActive ? 'opacity-35' : ''}`;
    const accessibilityClassNames = `cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 focus:opacity-35`;
    const userCustomizationClassNames = `expanding-grid-gallery-item ${isActive ? 'expanding-grid-gallery-item--active' : ''}`;

    function handleClick(e: MouseEvent<HTMLLIElement>) {
      // e.preventDefault();
      // e.stopPropagation();

      // hook to allow for custom behavior at the beginning of the handleClick function
      if (beforeHandleClick) beforeHandleClick(e);

      // store the current scroll position
      setPreviousScrollPosition({
        scrollX: window.scrollX,
        scrollY: window.scrollY,
      });

      // if the current unique slug is the same as the one clicked, set it to null
      if (isActive) {
        setCurrentUniqueSlug(null);
        return;
      }
      setCurrentUniqueSlug(uniqueSlug);

      // hook to allow for custom behavior after the handleClick function
      if (afterHandleClick) afterHandleClick(e);
    }

    return (
      <Comp
        aria-label={`Open ${uniqueSlug}`}
        role="button"
        tabIndex={0}
        aria-expanded={isActive}
        id={uniqueSlug}
        className={cn(
          stylingClassNames,
          accessibilityClassNames,
          userCustomizationClassNames,
          className,
        )}
        onClick={handleClick}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);
GridItem.displayName = 'GridItem';

export default GridItem;
