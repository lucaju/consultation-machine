import { Button as ButtonRadix, type ButtonProps } from '@radix-ui/themes';

export const Button = (props: ButtonProps) => {
  return <ButtonRadix style={{ cursor: 'pointer' }} {...props} />;
};
