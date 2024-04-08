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

const ExpandingGalleryNext = React.forwardRef<
  HTMLButtonElement,
  ExpandingGalleryButtonProps
>(({ ...props }, ref) => {
  return <ExpandingGalleryButton buttonType="next" ref={ref} {...props} />;
});
ExpandingGalleryNext.displayName = 'Button';
export { ExpandingGalleryNext };
