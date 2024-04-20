'use client';
import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';
import { useExpandingGridGallery } from '../contexts/ExpandingGridGalleryContext';
import type { ReactNode, ForwardedRef } from 'react';
import type { UniqueSlug } from '../ExpandingGridGallery.types';
import utils from '../utils/utils';

export interface ItemClickHandler {
  e?: React.MouseEvent;
  uniqueSlug?: UniqueSlug | null;
  currentUniqueSlug?: UniqueSlug | null;
}
export interface GridItemProps {
  uniqueSlug: string;
  acceptServerActions: boolean;
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
    `w-full block transition-opacity ${isActive ? 'opacity-35' : ''}`,
    `cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 focus:opacity-35`,
    `expanding-grid-gallery-item ${isActive ? 'expanding-grid-gallery-item--active' : ''}`,
  ];

  function handleClick(e: React.MouseEvent) {
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
      onClick: handleClick,
      className: cn(...definedClassNames, className),
    };
  }

  const compProps = asChild ? getUpdatedProps(props) : props;
  const buttonProps = getUpdatedProps(props);
  const ButtonComponent = <button {...buttonProps}>{children}</button>;

  return (
    <Comp id={uniqueSlug} ref={ref} {...compProps}>
      {asChild ? children : ButtonComponent}
    </Comp>
  );
}
GridItem.displayName = 'GridItem';

export default forwardRef(GridItem);
