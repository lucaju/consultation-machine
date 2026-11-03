import { type ButtonProps, Button as ButtonRadix } from '@radix-ui/themes';

export const Button = (props: ButtonProps) => {
  return <ButtonRadix style={{ cursor: 'pointer' }} {...props} />;
};
