import { type RefObject } from 'react';

import type { VariantProps } from 'class-variance-authority';
import NavBtnComp, {
  type NavButtonCompProps,
  type navButtonCompVariants,
  type NavButtonType,
} from '@/shared/components/expandingGallery/components/NavBtnComp';

type VariantKeys = VariantProps<typeof navButtonCompVariants>['variant'];

type NavBtnCompWithBtnTypeProps = Omit<
  NavButtonCompProps,
  'buttonType' | 'variant' | 'ref'
> & {
  buttonType?: NavButtonType;
  variant?: VariantKeys;
  ref?: RefObject<HTMLButtonElement>;
};

/**
 * Higher-order component that wraps the NavBtnComp component and adds the buttonType and variant props.
 *
 * @param buttonType - The type of the button.
 * @param variant - The variant of the button.
 * @returns A higher-order component that renders the NavBtnComp component with the buttonType prop.
 */
function navBtnCompWithBtnType({
  buttonType,
  variant,
  ref,
}: NavBtnCompWithBtnTypeProps) {
  const ButtonCompWithButtonType = (props: NavBtnCompWithBtnTypeProps) => {
    const newProps = { ...props, buttonType, variant } as NavButtonCompProps;

    return <NavBtnComp {...newProps} ref={ref} />;
  };

  ButtonCompWithButtonType.displayName = 'navBtnCompWithBtnType';

  return ButtonCompWithButtonType;
}

navBtnCompWithBtnType.displayName = 'navBtnCompWithBtnType';
export default navBtnCompWithBtnType;
