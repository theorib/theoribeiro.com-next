'use client';
import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';
import { useExpandingGridGallery } from '../contexts/ExpandingGridGalleryContext';
import type { ReactNode, ForwardedRef } from 'react';
import type { UniqueSlug } from '../ExpandingGridGallery.types';
import utils from '../utils/utils';

export interface ItemClickHandler {
  e?: React.UIEvent;
  uniqueSlug?: UniqueSlug | null;
  currentUniqueSlug?: UniqueSlug | null;
}
export interface GridItemProps {
  uniqueSlug: string;
  acceptServerActions?: boolean;
  beforeHandleClick?: ({
    e,
    uniqueSlug,
    currentUniqueSlug,
  }: ItemClickHandler) => void;
  afterHandleClick?: ({
    e,
    uniqueSlug,
    currentUniqueSlug,
  }: ItemClickHandler) => void;
  className?: string;
  asChild?: boolean;
  children: ReactNode;
}

type UpdatedProps = Omit<
  GridItemProps,
  | 'children'
  | 'uniqueSlug'
  | 'afterHandleClick'
  | 'beforeHandleClick'
  | 'asChild'
  | 'acceptServerActions'
>;

// A generic component that can become any HTML element or another ReactComponent
function GridItem(
  {
    uniqueSlug,
    afterHandleClick = utils.voidFn,
    beforeHandleClick = utils.voidFn,
    acceptServerActions = false,
    asChild,
    children,
    className,
    ...props
  }: GridItemProps,
  ref: ForwardedRef<HTMLLIElement>,
) {
  const Comp = asChild ? Slot : 'li';

  const { currentUniqueSlug, setCurrentUniqueSlug, setPreviousScrollPosition } =
    useExpandingGridGallery();

  const isActive = currentUniqueSlug === uniqueSlug;

  const definedClassNames = [
    `w-full block transition-opacity group/grid-item`,
    'cursor-pointer',

    // 'focus:outline-none',
    // 'focus-within:outline-none',
    'focus-visible:outline-none',

    // 'focus:ring-inset',
    // 'focus-within:ring-inset',
    // 'focus-visible:ring-inset',

    // 'focus:ring-inset focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50',
    // 'focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-opacity-50 focus-within:ring-inset',
    'focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-opacity-50',

    `expanding-grid-gallery-item ${isActive ? 'expanding-grid-gallery-item--active' : ''}`,
    // '[&.expanding-grid-gallery-item--active]:opacity-60',
  ];

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick(e);
    }
  }

  function handleClick(e: React.UIEvent) {
    e.preventDefault();
    e.stopPropagation();

    // hook to allow for custom behavior at the beginning of the handleClick function

    beforeHandleClick(
      acceptServerActions
        ? { uniqueSlug, currentUniqueSlug }
        : { e, uniqueSlug, currentUniqueSlug },
    );

    // store the current scroll position
    setPreviousScrollPosition({
      scrollX: window.scrollX,
      scrollY: window.scrollY,
    });

    // if the current unique slug is the same as the one clicked, set it to null
    if (isActive) setCurrentUniqueSlug(null);
    if (!isActive) setCurrentUniqueSlug(uniqueSlug);

    // hook to allow for custom behavior after the handleClick function
    afterHandleClick(
      acceptServerActions
        ? { uniqueSlug, currentUniqueSlug }
        : { e, uniqueSlug, currentUniqueSlug },
    );
  }

  function getUpdatedProps(props: UpdatedProps) {
    return {
      ...props,
      'aria-label': `Open ${uniqueSlug}`,
      'aria-expanded': isActive,
      role: 'button',
      tabIndex: 1,
      onClick: handleClick,
      onKeyDown: handleKeyDown,
      className: cn(...definedClassNames, className),
    };
  }

  const compProps = asChild ? getUpdatedProps(props) : props;
  const linkProps = getUpdatedProps(props);
  const LinkComponent = <a {...linkProps}>{children}</a>;

  return (
    <Comp id={uniqueSlug} ref={ref} {...compProps}>
      {asChild ? children : LinkComponent}
    </Comp>
  );
}
GridItem.displayName = 'GridItem';

export default forwardRef(GridItem);
