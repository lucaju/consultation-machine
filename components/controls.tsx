'use client';

import { Box, Button, Flex, Select, Text, TextField } from '@radix-ui/themes';
import { useState } from 'react';

export const Constrols = () => {
  const [noun, setNoun] = useState('');
  const [verb, setVerb] = useState('');
  const [adjective, setAdjective] = useState('');
  const [food, setFood] = useState('');

  const [submitted, setSubmitted] = useState(false);

  return (
    <Box>
      <Flex direction="column" gap="2">
        <Text>Story</Text>
        <TextField.Root placeholder="Noun" onChange={(e) => setNoun(e.target.value)} value={noun} />
        <TextField.Root placeholder="Verb" onChange={(e) => setVerb(e.target.value)} value={verb} />
        <TextField.Root
          placeholder="Adjective"
          onChange={(e) => setAdjective(e.target.value)}
          value={adjective}
        />
        <Select.Root defaultValue="apple" onValueChange={(value) => setFood(value)}>
          <Select.Trigger />
          <Select.Content>
            <Select.Group>
              <Select.Label>Fruits</Select.Label>
              <Select.Item value="orange">Orange</Select.Item>
              <Select.Item value="apple">Apple</Select.Item>
              <Select.Item value="grape" disabled>
                Grape
              </Select.Item>
            </Select.Group>
            <Select.Separator />
            <Select.Group>
              <Select.Label>Vegetables</Select.Label>
              <Select.Item value="carrot">Carrot</Select.Item>
              <Select.Item value="potato">Potato</Select.Item>
            </Select.Group>
          </Select.Content>
        </Select.Root>
        <Button onClick={() => setSubmitted(true)}>Generate Madlib</Button>
      </Flex>
      {submitted && (
        <Text>{`Once upon a time, there was a ${adjective} ${noun} who loved to ${verb} ${food}.`}</Text>
      )}
    </Box>
  );
};
