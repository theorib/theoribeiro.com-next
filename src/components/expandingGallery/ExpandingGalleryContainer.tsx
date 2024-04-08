import { cn } from '@/lib/utils';
import {
  type ReactNode,
  type ElementType,
  type ComponentPropsWithoutRef,
} from 'react';

export type ExpandingGalleryContainerProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<T>;

// A generic component that can become any HTML element or another ReactComponent
export default function ExpandingGalleryContainer<U extends ElementType>({
  as,
  children,
  className,
  ...props
}: ExpandingGalleryContainerProps<U>) {
  const Component = as || 'ul';
  return (
    <Component
      className={cn('grid gap-0 sm:grid-cols-2 sm:gap-0', className)}
      {...props}
    >
      {children}
    </Component>
  );
}
