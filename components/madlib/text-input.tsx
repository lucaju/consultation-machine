'use client';

import { madlibAtom } from '@/jotai/store';
import { TextField } from '@radix-ui/themes';
import { useAtom } from 'jotai';

export const TextInput = ({ id, name, onChange, style, ...props }: TextField.RootProps) => {
  const [madlib, setMadlib] = useAtom(madlibAtom);

  const item = madlib.find((item) => item.id === id)!;
  const index = madlib.indexOf(item);

  return (
    <TextField.Root
      id={id}
      name={name}
      onChange={(event) => {
        setMadlib((prev) => prev.with(index, { ...item, value: event.target.value }));
        onChange?.(event);
      }}
      style={{ display: 'inline-flex', marginInline: 4, ...style }}
      variant="soft"
      {...props}
    />
  );
};
