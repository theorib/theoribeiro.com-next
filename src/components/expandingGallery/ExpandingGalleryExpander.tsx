'use client';
import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';
import expandingGalleryUtils from './utils/utils';
import { useExpandingGallery } from './contexts/ExpandingGalleryContext';
import type { LiHTMLAttributes } from 'react';

export interface ExpandingGalleryExpanderProps
  extends LiHTMLAttributes<HTMLLIElement> {
  numColsMobile?: number;
  numColsTablet?: number;
  numColsDesktop?: number;
  className?: string;
  asChild?: boolean;
}

// A generic component that can become any HTML element or another ReactComponent
const ExpandingGalleryExpander = forwardRef<
  HTMLLIElement,
  ExpandingGalleryExpanderProps
>(
  (
    {
      numColsMobile = 1,
      numColsTablet = 2,
      numColsDesktop = 2,
      className,
      asChild,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'li';
    const { currentUniqueSlug, currentUniqueIndex, numberOfUniqueSlugs } =
      useExpandingGallery();

    if (currentUniqueSlug === null) return null;

    const { rowMobile, rowTablet, rowDesktop } =
      expandingGalleryUtils.getRowPositions({
        currentUniqueIndex,
        numberOfUniqueSlugs,
        numColsMobile,
        numColsTablet,
        numColsDesktop,
      });

    const expanderGridClassNames = `expanding-gallery-expander expanding-gallery-expander--expanded col-span-full ${expandingGalleryUtils.rowStartClass[rowMobile as keyof typeof expandingGalleryUtils.rowStartClass]} sm:${expandingGalleryUtils.rowStartClass[rowTablet as keyof typeof expandingGalleryUtils.rowStartClass]} md:${expandingGalleryUtils.rowStartClass[rowDesktop as keyof typeof expandingGalleryUtils.rowStartClass]}`;

    return (
      <Comp
        id={`${currentUniqueSlug}-expanded`}
        className={cn(expanderGridClassNames, className)}
        ref={ref}
        {...props}
      />
    );
  },
);
ExpandingGalleryExpander.displayName = 'ExpandingGalleryExpander';

export default ExpandingGalleryExpander;
