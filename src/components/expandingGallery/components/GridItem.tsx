'use client';
import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';
import { useExpandingGridGallery } from '../contexts/ExpandingGridGalleryContext';
import type { ReactNode, ForwardedRef } from 'react';

// type ElementType = HTMLElement | typeof Slot | HTMLLIElement;
interface GridItemProps {
  uniqueSlug: string;
  afterHandleClick?: (e?: React.MouseEvent) => void;
  beforeHandleClick?: (e?: React.MouseEvent) => void;
  className?: string;
  asChild?: boolean;
  children: ReactNode;
}

// A generic component that can become any HTML element or another ReactComponent
const GridItem = (
  {
    uniqueSlug,
    afterHandleClick,
    beforeHandleClick,
    asChild,
    children,
    className,
    ...props
  }: GridItemProps,
  ref: ForwardedRef<HTMLLIElement>,
) => {
  const Comp = asChild ? Slot : 'li';

  const { currentUniqueSlug, setCurrentUniqueSlug, setPreviousScrollPosition } =
    useExpandingGridGallery();
  const isActive = currentUniqueSlug === uniqueSlug;

  const stylingClassNames = `w-full block transition-opacity ${isActive ? 'opacity-35' : ''}`;
  const accessibilityClassNames = `cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 focus:opacity-35`;
  const userCustomizationClassNames = `expanding-grid-gallery-item ${isActive ? 'expanding-grid-gallery-item--active' : ''}`;

  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();

    // hook to allow for custom behavior at the beginning of the handleClick function
    if (beforeHandleClick) beforeHandleClick(e);

    // store the current scroll position
    setPreviousScrollPosition({
      scrollX: window.scrollX,
      scrollY: window.scrollY,
    });

    // if the current unique slug is the same as the one clicked, set it to null
    if (isActive) {
      setCurrentUniqueSlug(null);
      return;
    }
    setCurrentUniqueSlug(uniqueSlug);

    // hook to allow for custom behavior after the handleClick function
    if (afterHandleClick) afterHandleClick(e);
  }

  type UpdatedProps = Omit<
    GridItemProps,
    | 'children'
    | 'uniqueSlug'
    | 'afterHandleClick'
    | 'beforeHandleClick'
    | 'asChild'
  >;

  function getUpdatedProps(props: UpdatedProps) {
    return {
      ...props,
      'aria-label': `Open ${uniqueSlug}`,
      'aria-expanded': isActive,
      onClick: handleClick,
      className: cn(
        stylingClassNames,
        accessibilityClassNames,
        userCustomizationClassNames,
        className,
      ),
    };
  }

  const compProps = asChild ? getUpdatedProps(props) : props;
  const buttonProps = getUpdatedProps(props);
  const ButtonComponent = <button {...buttonProps}>{children}</button>;

  return (
    <Comp
      id={uniqueSlug}
      ref={ref}
      // aria-label={`Open ${uniqueSlug}`}
      // role="button"
      // tabIndex={0}
      // aria-expanded={isActive}
      // className={cn(
      //   stylingClassNames,
      //   accessibilityClassNames,
      //   userCustomizationClassNames,
      //   className,
      // )}
      // onClick={handleClick}
      {...compProps}
    >
      {asChild ? children : ButtonComponent}
    </Comp>
  );
};

// GridItem.displayName = 'GridItem';

export default forwardRef(GridItem);
