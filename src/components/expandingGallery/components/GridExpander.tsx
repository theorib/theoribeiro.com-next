'use client';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';
import expandingGalleryUtils from '../utils/utils';
import { useExpandingGridGallery } from '../contexts/ExpandingGridGalleryContext';
import type { LiHTMLAttributes, RefObject } from 'react';

export interface GridExpanderProps extends LiHTMLAttributes<HTMLLIElement> {
  numColsMobile?: number;
  numColsTablet?: number;
  numColsDesktop?: number;
  className?: string;
  asChild?: boolean;
  ref?: RefObject<HTMLLIElement>;
}

// A generic component that can become any HTML element or another ReactComponent
function GridExpander({
  numColsMobile = 1,
  numColsTablet = 2,
  numColsDesktop = 2,
  className,
  asChild,
  ref,
  ...props
}: GridExpanderProps) {
  const Comp = asChild ? Slot : 'li';
  const { currentUniqueSlug, currentUniqueIndex, numberOfUniqueSlugs } =
    useExpandingGridGallery();

  if (currentUniqueSlug === null) return null;

  const { rowMobile, rowTablet, rowDesktop } =
    expandingGalleryUtils.getRowPositions({
      currentUniqueIndex,
      numberOfUniqueSlugs,
      numColsMobile,
      numColsTablet,
      numColsDesktop,
    });

  const expanderGridClassNames = `expanding-grid-gallery-expander expanding-grid-gallery-expander--expanded col-span-full ${expandingGalleryUtils.rowStartClass[rowMobile as keyof typeof expandingGalleryUtils.rowStartClass]} sm:${expandingGalleryUtils.rowStartClass[rowTablet as keyof typeof expandingGalleryUtils.rowStartClass]} md:${expandingGalleryUtils.rowStartClass[rowDesktop as keyof typeof expandingGalleryUtils.rowStartClass]}`;

  return (
    <Comp
      id={`${currentUniqueSlug}-expanded`}
      className={cn(expanderGridClassNames, className)}
      ref={ref}
      {...props}
    />
  );
}

GridExpander.displayName = 'GridExpander';

export default GridExpander;
