'use client';

import { cn } from '@/lib/utils';
import {
  type ReactNode,
  type ElementType,
  type ComponentPropsWithoutRef,
} from 'react';
import { useExpandingGallery } from './contexts/ExpandingGalleryContext';

export type ExpandingGalleryItemProps<T extends ElementType> = {
  slug: string;
  onClick?: () => void;
  className?: string;
  as?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

// A generic component that can become any HTML element or another ReactComponent
export default function ExpandingGalleryItem<U extends ElementType>({
  slug,
  onClick,
  as,
  children,
  className,
  ...props
}: ExpandingGalleryItemProps<U>) {
  const Component = as || 'li';
  const { currentExpandedSlug, setCurrentExpandedSlug } = useExpandingGallery();

  function handleClick() {
    if (currentExpandedSlug === slug) {
      setCurrentExpandedSlug(null);
      return;
    }
    setCurrentExpandedSlug(slug);
  }

  return (
    <Component
      id={slug}
      className={cn('cursor-pointer', className)}
      onClick={onClick ? onClick : handleClick}
      {...props}
    >
      {children}
    </Component>
  );
}
