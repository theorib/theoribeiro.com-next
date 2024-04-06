'use client';
import { cn } from '@/lib/utils';
import {
  type ReactNode,
  type ElementType,
  type ComponentPropsWithoutRef,
} from 'react';
import expandingGalleryUtils from './utils/expandingGalleryUtils';
import { useExpandingGallery } from './contexts/ExpandingGalleryContext';

export type ExpandingGalleryExpanderProps<T extends ElementType> = {
  numItems: number;
  numColsMobile?: number;
  numColsTablet?: number;
  numColsDesktop?: number;
  as?: T;
  className?: string;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

// A generic component that can become any HTML element or another ReactComponent
export default function ExpandingGalleryExpander<U extends ElementType>({
  as,
  children,
  className,
  numItems,
  numColsMobile = 1,
  numColsTablet = 2,
  numColsDesktop = 2,
  ...props
}: ExpandingGalleryExpanderProps<U>) {
  const Component = as || 'li';
  const { currentExpandedIndex, currentExpandedSlug } = useExpandingGallery();

  if (currentExpandedIndex === null) return null;

  const { rowMobile, rowTablet, rowDesktop } =
    expandingGalleryUtils.getRowPositions({
      expanderIndex: currentExpandedIndex,
      numItems,
      numColsMobile,
      numColsTablet,
      numColsDesktop,
    });

  const expanderGridClassNames = `col-span-full ${expandingGalleryUtils.rowStartClass[rowMobile as keyof typeof expandingGalleryUtils.rowStartClass]} sm:${expandingGalleryUtils.rowStartClass[rowTablet as keyof typeof expandingGalleryUtils.rowStartClass]} md:${expandingGalleryUtils.rowStartClass[rowDesktop as keyof typeof expandingGalleryUtils.rowStartClass]}`;

  return (
    <Component
      id={`${currentExpandedSlug}-expanded`}
      className={cn(expanderGridClassNames, className)}
      {...props}
    >
      {children}
    </Component>
  );
}