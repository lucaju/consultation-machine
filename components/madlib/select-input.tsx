'use client';

import { madlibAtom } from '@/jotai/store';
import { Select } from '@radix-ui/themes';
import { useAtom } from 'jotai';

interface Props extends Select.RootProps {
  options: string[];
}

export const SelectInput = ({ name, onValueChange, options, ...props }: Props) => {
  const [madlib, setMadlib] = useAtom(madlibAtom);

  const item = madlib.find((item) => item.id === name)!;
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
      <Select.Trigger style={{ margin: 4 }} variant="soft" />
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
