'use client';
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/utils';
import useButtonTypeLookup from '../hooks/useButtonTypeLookup';

export const buttonCompVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-30 dark:focus-visible:ring-neutral-300',
  {
    variants: {
      variant: {
        default:
          'bg-white hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-700 dark:hover:bg-neutral-500 dark:hover:text-neutral-50',
        close:
          'bg-white hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-700  sm:dark:bg-transparent dark:hover:bg-neutral-500 dark:hover:text-neutral-50',
      },
      size: {
        default: '',
        icon: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'icon',
    },
  },
);

export type ButtonType = 'next' | 'prev' | 'close';
export interface ButtonCompProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonCompVariants> {
  asChild?: boolean;
  beforeHandleClick?: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
  afterHandleClick?: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
  buttonType: ButtonType;
}

const ButtonComp = React.forwardRef<HTMLButtonElement, ButtonCompProps>(
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
    const buttonTypeLookUp = useButtonTypeLookup();
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
        disabled={Boolean(!isEnabled)}
        aria-label={buttonTypeLookUp[buttonType]['ariaLabel']}
        className={cn(buttonCompVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
ButtonComp.displayName = 'ButtonComp';

export default ButtonComp;
