'use client';
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from './utils/expandingGalleryUtils';
import { useExpandingGallery } from './contexts/ExpandingGalleryContext';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-30 dark:focus-visible:ring-neutral-300',
  {
    variants: {
      variant: {
        default:
          'bg-white hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-700 dark:hover:bg-neutral-500 dark:hover:text-neutral-50',
        next: 'bg-red-500 text-neutral-50 shadow-sm hover:bg-red-500/90 dark:bg-red-900 dark:text-neutral-50 dark:hover:bg-red-900/90',
        prev: 'bg-white hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-700 dark:hover:bg-neutral-500 dark:hover:text-neutral-50',
        close:
          'bg-neutral-100 text-neutral-900 shadow-sm hover:bg-neutral-100/80 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80',
      },
      size: {
        default: '',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'icon',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  beforeHandleClick?: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
  afterHandleClick?: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
  buttonType: 'next' | 'prev' | 'close';
}

const ExpandingGalleryButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      buttonType,
      beforeHandleClick,
      afterHandleClick,
      className,
      variant,
      size,
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';

    const {
      numberOfUniqueSlugs,
      currentUniqueIndex,
      orderedUniqueSlugsArray,
      setCurrentUniqueSlug,
    } = useExpandingGallery();

    if (currentUniqueIndex === null) return null;

    const buttonTypeLookUp = {
      next: {
        isEnabled:
          currentUniqueIndex !== numberOfUniqueSlugs - 1 &&
          currentUniqueIndex < numberOfUniqueSlugs &&
          currentUniqueIndex >= 0,
        onHandleClick: () => {
          if (!isEnabled) return;
          setCurrentUniqueSlug(orderedUniqueSlugsArray[currentUniqueIndex + 1]);
        },
      },
      prev: {
        isEnabled:
          currentUniqueIndex !== 0 &&
          currentUniqueIndex < numberOfUniqueSlugs &&
          currentUniqueIndex >= 0,
        onHandleClick: () => {
          if (!isEnabled) return;
          setCurrentUniqueSlug(orderedUniqueSlugsArray[currentUniqueIndex - 1]);
        },
      },
      close: {
        isEnabled: true,
        onHandleClick: () => {
          if (!isEnabled) return;
          setCurrentUniqueSlug(null);
        },
      },
    };

    const isEnabled = buttonTypeLookUp[buttonType]['isEnabled'];

    function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
      e.preventDefault();
      beforeHandleClick ? beforeHandleClick(e) : '';
      buttonTypeLookUp[buttonType]['onHandleClick']();
      afterHandleClick ? afterHandleClick(e) : '';
    }

    return (
      <Comp
        onClick={handleClick}
        disabled={!isEnabled}
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
ExpandingGalleryButton.displayName = 'Button';

export { ExpandingGalleryButton, buttonVariants };
