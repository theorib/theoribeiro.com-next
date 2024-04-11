'use client';
import * as React from 'react';
import ButtonComp, { buttonCompVariants } from './ButtonComp';
import { type VariantProps } from 'class-variance-authority';
interface ButtonPrevProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'buttonType'>,
    VariantProps<typeof buttonCompVariants> {
  //...
}

const ButtonPrev = React.forwardRef<HTMLButtonElement, ButtonPrevProps>(
  ({ ...props }, ref) => {
    return <ButtonComp buttonType="prev" ref={ref} {...props} />;
  },
);
ButtonPrev.displayName = 'ButtonPrev';
export default ButtonPrev;
