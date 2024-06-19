'use client';

import { madlibAtom } from '@/jotai/store';
import { Box, Flex, Heading, Text } from '@radix-ui/themes';
import { useAtomValue } from 'jotai';

export const Result = () => {
  const madlib = useAtomValue(madlibAtom);

  return (
    <Flex direction="column" gap="2" align="center">
      <Heading size="5">Prompt</Heading>
      <Box
        p="4"
        style={{
          backgroundColor: 'var(--gray-2)',
          borderRadius: 'var(--radius-3)',
          boxShadow: 'var(--shadow-2)',
        }}
        width="600"
      >
        {madlib.map(
          (item, index) =>
            item.type !== 'heading' && (
              <Text key={item.id} style={{ fontWeight: item.type === 'text' ? 'normal' : 'bold' }}>
                {madlib[index - 1]?.value.endsWith('.') ? ' ' : ''}
                {item.value.trim()}
                {madlib[index + 1]?.value.startsWith('.') ? '' : ' '}
              </Text>
            ),
        )}
      </Box>
    </Flex>
  );
};
