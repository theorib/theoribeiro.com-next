'use client';

import { cn } from '@/lib/utils';
import {
  type ReactNode,
  type ElementType,
  type ComponentPropsWithoutRef,
} from 'react';
import { useExpandingGallery } from './contexts/ExpandingGalleryContext';

export type ExpandingGalleryItemProps<T extends ElementType> = {
  uniqueSlug: string;
  onClick?: (e?: React.MouseEvent<Element, MouseEvent>) => void;
  afterHandleClick?: (e?: React.MouseEvent<Element, MouseEvent>) => void;
  beforeHandleClick?: (e?: React.MouseEvent<Element, MouseEvent>) => void;
  onHandleClick?: (e?: React.MouseEvent<Element, MouseEvent>) => void;
  className?: string;
  as?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

// A generic component that can become any HTML element or another ReactComponent
export default function ExpandingGalleryItem<U extends ElementType>({
  uniqueSlug,
  afterHandleClick = () => {
    /**/
  },
  beforeHandleClick = () => {
    /**/
  },
  onHandleClick = () => {
    /**/
  },
  onClick,
  as,
  children,
  className,
  ...props
}: ExpandingGalleryItemProps<U>) {
  const GenericComponent = as || 'li';
  const { currentUniqueSlug, setCurrentUniqueSlug, setPreviousScrollPosition } =
    useExpandingGallery();

  function handleClick(e: React.MouseEvent<Element, MouseEvent>) {
    // hook to allow for custom behavior at the beginning of the handleClick function
    beforeHandleClick(e);

    // prevent the default behavior of the click event
    e.preventDefault();
    e.stopPropagation();

    // hook to allow for custom behavior at the end of the handleClick function
    onHandleClick(e);

    // store the current scroll position
    setPreviousScrollPosition({
      scrollX: window.scrollX,
      scrollY: window.scrollY,
    });

    // if the current unique slug is the same as the one clicked, set it to null
    if (currentUniqueSlug === uniqueSlug) {
      setCurrentUniqueSlug(null);
      return;
    }
    setCurrentUniqueSlug(uniqueSlug);

    // hook to allow for custom behavior after the handleClick function
    afterHandleClick(e);
  }

  return (
    <GenericComponent
      id={uniqueSlug}
      className={cn('cursor-pointer', className)}
      onClick={onClick ? onClick : handleClick}
      {...props}
    >
      {children}
    </GenericComponent>
  );
}
