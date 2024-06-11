'use client';

import { Box, Button, Flex, Select, Text, TextField } from '@radix-ui/themes';
import { useState } from 'react';

type MadlibText = string;

type MadlibInput = {
  type: 'input';
  id: string;
  placeholder?: string;
  value: string;
};

type MadlibSelect = {
  type: 'select';
  id: string;
  options: string[];
  value: string;
};

type data = (MadlibText | MadlibInput | MadlibSelect)[];

const madlibStructure: data = [
  'Once upon a time, there was a ',
  { type: 'input', id: 'adjective', placeholder: 'Adjective', value: '' },
  { type: 'input', id: 'noun', placeholder: 'Noun', value: '' },
  ' who loved to ',
  { type: 'input', id: 'verb', placeholder: 'Verb', value: '' },
  { type: 'select', id: 'food', options: ['apple', 'banana', 'grape'], value: 'apple' },
  '.',
];

export const Story = () => {
  const [madlibGenerated, setTadlibGenerated] = useState(false);
  const [data, setData] = useState(madlibStructure);

  return (
    <Flex direction="column" gap="2" align="center">
      <Box
        style={{ backgroundColor: 'var(--gray-a2)', borderRadius: 'var(--radius-3)' }}
        width="600"
        p="4"
      >
        {data.map((item, index) => {
          if (typeof item === 'string') {
            return <Text key={index}>{item}</Text>;
          }

          if (item.type === 'input') {
            return (
              <TextField.Root
                key={index}
                onChange={(e) => {
                  const newValue = (data[index] = { ...item, value: e.target.value });
                  const newData = data.with(index, newValue);
                  setData(newData);
                }}
                placeholder={item.placeholder}
                style={{ display: 'inline-flex', margin: 4 }}
                variant="soft"
              />
            );
          }

          if (item.type === 'select') {
            return (
              <Select.Root
                key={index}
                defaultValue={item.value}
                onValueChange={(value) => {
                  const newValue = (data[index] = { ...item, value });
                  const newData = data.with(index, newValue);
                  setData(newData);
                }}
              >
                <Select.Trigger style={{ margin: 4 }} variant="soft" />
                <Select.Content>
                  <Select.Group>
                    <Select.Label>{item.id}</Select.Label>
                    {item.options.map((option) => (
                      <Select.Item key={option} value={option}>
                        {option}
                      </Select.Item>
                    ))}
                  </Select.Group>
                </Select.Content>
              </Select.Root>
            );
          }
        })}
      </Box>
      <Button onClick={() => setTadlibGenerated(true)}>Generate Madlib</Button>
      {madlibGenerated && (
        <Box
          style={{
            backgroundColor: 'var(--gray-a2)',
            borderRadius: 'var(--radius-3)',
            boxShadow: 'var(--shadow-3)',
          }}
          width="600"
          p="4"
        >
          {data.map((item, index) => {
            if (typeof item === 'string') {
              return <Text key={index}>{item}</Text>;
            }

            if (item.type === 'input') {
              return (
                <Text key={index} style={{ fontWeight: 'bold', marginInline: 4 }}>
                  {item.value}
                </Text>
              );
            }

            if (item.type === 'select') {
              return (
                <Text key={index} style={{ fontWeight: 'bold', marginInline: 4 }}>
                  {item.value}
                </Text>
              );
            }
          })}
        </Box>
      )}
    </Flex>
  );
};
