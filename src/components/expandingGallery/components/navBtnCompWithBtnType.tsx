import { forwardRef } from 'react';
import NavBtnComp, { navButtonCompVariants } from './NavBtnComp';
import type { NavButtonCompProps, NavButtonType } from './NavBtnComp';
import type { VariantProps } from 'class-variance-authority';

type VariantKeys = VariantProps<typeof navButtonCompVariants>['variant'];

interface WithBtnTypeProps
  extends Omit<NavButtonCompProps, 'buttonType' | 'variant'> {
  buttonType: NavButtonType;
  variant?: VariantKeys;
}

/**
 * Higher-order component that wraps the NavBtnComp component and adds the buttonType and variant props.
 *
 * @param buttonType - The type of the button.
 * @param variant - The variant of the button.
 * @returns A higher-order component that renders the NavBtnComp component with the buttonType prop.
 */
const navBtnCompWithBtnType = ({ buttonType, variant }: WithBtnTypeProps) => {
  const ButtonCompWithButtonType = forwardRef<
    HTMLButtonElement,
    Omit<NavButtonCompProps, 'buttonType' | 'variant'>
  >((props, ref) => {
    const newProps = { ...props, buttonType, variant } as NavButtonCompProps;
    return <NavBtnComp ref={ref} {...newProps} />;
  });

  ButtonCompWithButtonType.displayName = 'navBtnCompWithBtnType';

  return ButtonCompWithButtonType;
};

export default navBtnCompWithBtnType;
