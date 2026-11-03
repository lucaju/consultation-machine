'use client';

import { Select } from '@radix-ui/themes';
import { useAtom } from 'jotai';
import { madlibAtom } from '@/jotai/store';

interface Props extends Select.RootProps {
  id: string;
  options: string[];
}

export const SelectInput = ({ id, name, onValueChange, options, ...props }: Props) => {
  const [madlib, setMadlib] = useAtom(madlibAtom);

  // biome-ignore lint/style/noNonNullAssertion: we know the item exists
  const item = madlib.find((item) => item.id === id)!;
  const index = madlib.indexOf(item);

  return (
    <Select.Root
      name={name}
      onValueChange={(value) => {
        setMadlib((prev) => prev.with(index, { ...item, value }));
        onValueChange?.(value);
      }}
      {...props}
    >
      <Select.Trigger id={id} style={{ marginInline: 4, marginTop: 4 }} variant="soft" />
      <Select.Content variant="soft">
        <Select.Group>
          {options.map((option) => (
            <Select.Item key={option} value={option}>
              {option}
            </Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};
