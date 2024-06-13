'use client';

import { madlibAtom } from '@/jotai/store';
import { TextField } from '@radix-ui/themes';
import { useAtom } from 'jotai';

export const TextInput = ({ name, onChange, style, ...props }: TextField.RootProps) => {
  const [madlib, setMadlib] = useAtom(madlibAtom);

  const item = madlib.find((item) => item.id === name)!;
  const index = madlib.indexOf(item);

  return (
    <TextField.Root
      name={name}
      onChange={(event) => {
        setMadlib((prev) => prev.with(index, { ...item, value: event.target.value }));
        onChange?.(event);
      }}
      style={{ display: 'inline-flex', margin: 4, ...style }}
      variant="soft"
      {...props}
    />
  );
};
