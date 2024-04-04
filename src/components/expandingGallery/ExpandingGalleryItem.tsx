'use client';

import { cn } from '@/lib/utils';
import {
  type ReactNode,
  type ElementType,
  type ComponentPropsWithoutRef,
} from 'react';
import { useExpandingGallery } from './contexts/ExpandingGalleryContext';

export type ExpandingGalleryItemProps<T extends ElementType> = {
  uniqueIndex: number;
  onClick?: () => void;
  slug: string;
  className?: string;
  as?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

// A generic component that can become any HTML element or another ReactComponent
export default function ExpandingGalleryItem<U extends ElementType>({
  uniqueIndex,
  slug,
  onClick,
  as,
  children,
  className,
  ...props
}: ExpandingGalleryItemProps<U>) {
  const Component = as || 'li';
  const {
    currentExpandedIndex,
    setCurrentExpandedIndex,
    setCurrentExpandedSlug,
  } = useExpandingGallery();

  function handleClick() {
    if (currentExpandedIndex === uniqueIndex) {
      setCurrentExpandedIndex(null);
      setCurrentExpandedSlug(null);
      return;
    }
    setCurrentExpandedIndex(uniqueIndex);
    setCurrentExpandedSlug(slug);
  }

  return (
    <Component
      id={slug}
      className={cn('cursor-pointer', className)}
      {...props}
      onClick={onClick ? onClick : handleClick}
    >
      {children}
    </Component>
  );
}
