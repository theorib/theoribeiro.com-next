import {
  type ReactNode,
  type ElementType,
  type ComponentPropsWithoutRef,
} from 'react';

export type GenericContainerProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

// A generic component that can become any HTML element or another ReactComponent
export default function GenericContainer<U extends ElementType>({
  as,
  children,
  ...props
}: GenericContainerProps<U>) {
  const Component = as || 'div';
  return <Component {...props}>{children}</Component>;
}
