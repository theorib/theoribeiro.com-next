'use client';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import type {
  ButtonHTMLAttributes,
  MouseEvent as ReactMouseEvent,
  RefObject,
} from 'react';
import {
  type UniqueIndex,
  type UniqueSlug,
} from '@/shared/components/expandingGallery/ExpandingGridGallery.types';
import utils from '@/shared/components/expandingGallery/utils/utils';
import { cn } from '@/shared/lib/utils';
import useNavBtnTypeLookup from '@/shared/components/expandingGallery/hooks/useNavBtnTypeLookup';

export const navButtonCompVariants = cva('', {
  variants: {
    variant: {
      prevNext:
        'hover:text-neutral-900 dark:border-neutral-800 dark:bg-transparent border-neutral-50 dark:hover:transparent dark:hover:text-neutral-50',
      close:
        'hover:text-neutral-900 dark:border-neutral-800 dark:bg-transparent border-neutral-50  sm:dark:bg-transparent dark:hover:transparent dark:hover:text-neutral-50',
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
        'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-30 dark:focus-visible:ring-neutral-300 cursor-pointer',
    },
  ],

  defaultVariants: {
    variant: 'prevNext',
    size: 'icon',
  },
});

export type NavButtonType = 'next' | 'prev' | 'close';

export type ButtonClickHandler = {
  e?: ReactMouseEvent<HTMLButtonElement, MouseEvent>;
  uniqueIndex?: UniqueIndex;
  uniqueSlug?: UniqueSlug | null;
};
export type NavButtonCompProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof navButtonCompVariants> & {
    buttonType: NavButtonType;
    acceptServerActions?: boolean;
    beforeHandleClick?: ({ e }: ButtonClickHandler) => void;
    afterHandleClick?: ({ e, uniqueIndex }: ButtonClickHandler) => void;
    asChild?: boolean;
    ref?: RefObject<HTMLButtonElement>;
  };

function NavBtnComp({
  buttonType,
  acceptServerActions = false,
  beforeHandleClick = utils.voidFn,
  afterHandleClick = utils.voidFn,
  className,
  variant,
  size,
  asChild = false,
  ref,
  ...props
}: NavButtonCompProps) {
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

export default NavBtnComp;
