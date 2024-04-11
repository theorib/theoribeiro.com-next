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

    const itemClassName = `expanding-gallery-item cursor-pointer transition-opacity ${isActive ? 'opacity-35 expanding-gallery-item--active' : ''}`;

    function handleClick(e: MouseEvent<HTMLLIElement>) {
      // e.preventDefault();
      // e.stopPropagation();

      // hook to allow for custom behavior at the beginning of the handleClick function
      beforeHandleClick ? beforeHandleClick(e) : '';

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
      afterHandleClick ? afterHandleClick(e) : '';
    }

    return (
      <Comp
        id={uniqueSlug}
        className={cn(itemClassName, className)}
        onClick={handleClick}
        ref={ref}
        {...props}
      />
    );
  },
);
GridItem.displayName = 'GridItem';

export default GridItem;
