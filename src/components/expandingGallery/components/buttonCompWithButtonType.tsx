import { forwardRef } from 'react';
import ButtonComp, { buttonCompVariants } from './ButtonComp';
import type { ButtonCompProps, ButtonType } from './ButtonComp';
import type { VariantProps } from 'class-variance-authority';

type VariantKeys = VariantProps<typeof buttonCompVariants>['variant'];

interface WithButtonTypeProps
  extends Omit<ButtonCompProps, 'buttonType' | 'variant'> {
  buttonType: ButtonType;
  variant?: VariantKeys;
}

/**
 * Higher-order component that wraps the ButtonComp component and adds the buttonType and variant props.
 *
 * @param buttonType - The type of the button.
 * @param variant - The variant of the button.
 * @returns A higher-order component that renders the ButtonComp component with the buttonType prop.
 */
const buttonCompWithButtonType = ({
  buttonType,
  variant,
}: WithButtonTypeProps) => {
  const ButtonCompWithButtonType = forwardRef<
    HTMLButtonElement,
    Omit<ButtonCompProps, 'buttonType' | 'variant'>
  >((props, ref) => {
    const newProps = { ...props, buttonType, variant } as ButtonCompProps;
    return <ButtonComp ref={ref} {...newProps} />;
  });

  ButtonCompWithButtonType.displayName = 'buttonCompWithButtonType';

  return ButtonCompWithButtonType;
};

export default buttonCompWithButtonType;
