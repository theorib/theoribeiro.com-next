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
  onClick?: (e: React.MouseEvent<Element, MouseEvent>) => void;
  className?: string;
  as?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

// A generic component that can become any HTML element or another ReactComponent
export default function ExpandingGalleryItem<U extends ElementType>({
  uniqueSlug,
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
    e.preventDefault();
    e.stopPropagation();

    setPreviousScrollPosition({
      scrollX: window.scrollX,
      scrollY: window.scrollY,
    });

    if (currentUniqueSlug === uniqueSlug) {
      setCurrentUniqueSlug(null);
      return;
    }
    setCurrentUniqueSlug(uniqueSlug);
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
