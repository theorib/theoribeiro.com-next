'use client';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/shared/lib/utils';

import type { LiHTMLAttributes, RefObject } from 'react';
import utils from '@/shared/components/expandingGallery/utils/utils';
import { useExpandingGridGallery } from '@/shared/components/expandingGallery/contexts/ExpandingGridGalleryContext';

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

  const { rowMobile, rowTablet, rowDesktop } = utils.getRowPositions({
    currentUniqueIndex,
    numberOfUniqueSlugs,
    numColsMobile,
    numColsTablet,
    numColsDesktop,
  });

  const expanderGridClassNames = `expanding-grid-gallery-expander expanding-grid-gallery-expander--expanded col-span-full ${utils.rowStartClass[rowMobile as keyof typeof utils.rowStartClass]} sm:${utils.rowStartClass[rowTablet as keyof typeof utils.rowStartClass]} md:${utils.rowStartClass[rowDesktop as keyof typeof utils.rowStartClass]}`;

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
