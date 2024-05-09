'use client';
// import * as React from 'react';
import type {
  ButtonHTMLAttributes,
  ForwardedRef,
  MouseEvent as ReactMouseEvent,
} from 'react';
import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import utils, { cn } from '../utils/utils';
import useNavBtnTypeLookup from '../hooks/useNavBtnTypeLookup';
import { UniqueIndex, UniqueSlug } from '../ExpandingGridGallery.types';

export const navButtonCompVariants = cva('', {
  variants: {
    variant: {
      prevNext:
        'bg-white hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-700 dark:hover:bg-neutral-500 dark:hover:text-neutral-50',
      close:
        'bg-white hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-700  sm:dark:bg-transparent dark:hover:bg-neutral-500 dark:hover:text-neutral-50',
    },
    size: {
      default: '',
      icon: '',
    },
  },
  compoundVariants: [
    {
      variant: ['close', 'prevNext'],
      className:
        'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-30 dark:focus-visible:ring-neutral-300',
    },
  ],

  defaultVariants: {
    variant: 'prevNext',
    size: 'icon',
  },
});

export type NavButtonType = 'next' | 'prev' | 'close';

export interface ButtonClickHandler {
  e?: ReactMouseEvent<HTMLButtonElement, MouseEvent>;
  uniqueIndex?: UniqueIndex;
  uniqueSlug?: UniqueSlug | null;
}
export interface NavButtonCompProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof navButtonCompVariants> {
  buttonType: NavButtonType;
  acceptServerActions?: boolean;
  beforeHandleClick?: ({ e }: ButtonClickHandler) => void;
  afterHandleClick?: ({ e, uniqueIndex }: ButtonClickHandler) => void;
  asChild?: boolean;
}

function NavBtnComp(
  {
    buttonType,
    acceptServerActions = false,
    beforeHandleClick = utils.voidFn,
    afterHandleClick = utils.voidFn,
    className,
    variant,
    size,
    asChild = false,
    ...props
  }: NavButtonCompProps,
  ref: ForwardedRef<HTMLButtonElement>,
) {
  const Comp = asChild ? Slot : 'button';
  const buttonTypeLookUp = useNavBtnTypeLookup();
  const isEnabled = buttonTypeLookUp[buttonType]['isEnabled'];

  function handleClick(e: ReactMouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    e.stopPropagation();

    beforeHandleClick(acceptServerActions ? { e } : {});

    const { uniqueIndex, uniqueSlug } =
      buttonTypeLookUp[buttonType]['onHandleClick']();

    afterHandleClick(
      acceptServerActions
        ? { e, uniqueIndex, uniqueSlug }
        : { uniqueIndex, uniqueSlug },
    );
  }

  return (
    <Comp
      onClick={handleClick}
      disabled={Boolean(!isEnabled)}
      aria-label={buttonTypeLookUp[buttonType]['ariaLabel']}
      className={cn(navButtonCompVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
}

NavBtnComp.displayName = 'NavBtnComp';

export default forwardRef(NavBtnComp);
