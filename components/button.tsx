import { type ButtonProps, Button as ButtonRadix } from '@radix-ui/themes';
import { useRef } from 'react';

export const Button = ({
  loading,
  disabled,
  onPointerDown,
  onClick,
  style,
  ...props
}: ButtonProps) => {
  const pendingRef = useRef(false);
  const wasProcessingRef = useRef(false);
  const tracksProcessing = typeof loading === 'boolean' || typeof disabled === 'boolean';
  const processing = Boolean(loading || disabled);

  if (processing) {
    wasProcessingRef.current = true;
  } else if (wasProcessingRef.current) {
    wasProcessingRef.current = false;
    pendingRef.current = false;
  }

  const blocked = Boolean(processing || pendingRef.current);

  return (
    <ButtonRadix
      {...props}
      disabled={disabled || loading}
      loading={loading}
      onClick={(event) => {
        if (loading || disabled || pendingRef.current) {
          event.preventDefault();
          return;
        }

        if (tracksProcessing) pendingRef.current = true;
        onClick?.(event);
      }}
      onPointerDown={(event) => {
        if (loading || disabled || pendingRef.current) {
          event.preventDefault();
          return;
        }

        if (onPointerDown && tracksProcessing) pendingRef.current = true;
        onPointerDown?.(event);
      }}
      style={{ ...style, cursor: blocked ? 'var(--cursor-disabled)' : 'pointer' }}
    />
  );
};
