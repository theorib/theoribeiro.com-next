'use client';
import * as React from 'react';
import ButtonComp, { buttonCompVariants } from './ButtonComp';
import { type VariantProps } from 'class-variance-authority';

interface ButtonCloseProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'buttonType'>,
    VariantProps<typeof buttonCompVariants> {
  //...
}

const ButtonClose = React.forwardRef<HTMLButtonElement, ButtonCloseProps>(
  ({ ...props }, ref) => {
    return (
      <ButtonComp buttonType="close" variant="close" ref={ref} {...props} />
    );
  },
);
ButtonClose.displayName = 'ButtonClose';
export default ButtonClose;
