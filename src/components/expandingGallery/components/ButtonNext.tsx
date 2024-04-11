'use client';
import * as React from 'react';
import ButtonComp, { buttonCompVariants } from './ButtonComp';
import { type VariantProps } from 'class-variance-authority';

interface ButtonNextProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'buttonType'>,
    VariantProps<typeof buttonCompVariants> {
  //...
}

const ButtonNext = React.forwardRef<HTMLButtonElement, ButtonNextProps>(
  ({ ...props }, ref) => {
    return <ButtonComp buttonType="next" ref={ref} {...props} />;
  },
);
ButtonNext.displayName = 'ButtonNext';
export default ButtonNext;
