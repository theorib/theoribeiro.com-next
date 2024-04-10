'use client';
import * as React from 'react';
import ExpandingGalleryButton, {
  buttonVariants,
} from './ExpandingGalleryButton';
import { type VariantProps } from 'class-variance-authority';
interface ExpandingGalleryButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'buttonType'>,
    VariantProps<typeof buttonVariants> {
  //...
}

const ExpandingGalleryPrev = React.forwardRef<
  HTMLButtonElement,
  ExpandingGalleryButtonProps
>(({ ...props }, ref) => {
  return <ExpandingGalleryButton buttonType="prev" ref={ref} {...props} />;
});
ExpandingGalleryPrev.displayName = 'Button';
export default ExpandingGalleryPrev;
