'use client';
import * as React from 'react';
import {
  ExpandingGalleryButton,
  buttonVariants,
} from './ExpandingGalleryButton';
import { type VariantProps } from 'class-variance-authority';
interface ExpandingGalleryButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'buttonType'>,
    VariantProps<typeof buttonVariants> {
  //...
}

const ExpandingGalleryClose = React.forwardRef<
  HTMLButtonElement,
  ExpandingGalleryButtonProps
>(({ ...props }, ref) => {
  return <ExpandingGalleryButton buttonType="close" ref={ref} {...props} />;
});
ExpandingGalleryClose.displayName = 'Button';
export { ExpandingGalleryClose };
