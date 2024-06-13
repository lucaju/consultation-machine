'use client';

import { madlibAtom, madlibReadyAtom } from '@/jotai/store';
import { Box, Button, Flex, Text } from '@radix-ui/themes';
import { useAtom, useSetAtom } from 'jotai';
import { SelectInput } from './select-input';
import { TextInput } from './text-input';

export const Form = () => {
  const [madlib, setMadlib] = useAtom(madlibAtom);
  const madlibReady = useSetAtom(madlibReadyAtom);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    [...formData.entries()].forEach(([key, value]) => {
      const item = madlib.find((item) => item.id === key);
      if (!item) return;

      const index = madlib.indexOf(item);
      setMadlib((prev) => prev.with(index, { ...item, value: value.toString() }));
    });

    madlibReady(true);
  };

  return (
    <form method="post" onSubmit={handleSubmit}>
      <Box
        p="4"
        style={{ backgroundColor: 'var(--gray-a2)', borderRadius: 'var(--radius-3)' }}
        width="600"
      >
        {madlib.map((item) =>
          item.type === 'input' ? (
            <TextInput
              key={item.id}
              name={item.id}
              defaultValue={item.value}
              placeholder={item.placeholder}
            />
          ) : item.type === 'select' ? (
            <SelectInput
              key={item.id}
              name={item.id}
              defaultValue={item.value}
              options={item.options}
            />
          ) : (
            <Text size="4" key={item.id} style={{lineHeight: 2}}>{item.value}</Text>
          ),
        )}
      </Box>
      <Flex direction="column" m="4" width="600" align="center">
        <Button type="submit">Generate Madlib</Button>
      </Flex>
    </form>
  );
};
