'use client';

import { madlibAtom, madlibReadyAtom } from '@/jotai/store';
import { Box, Flex, Heading, Text } from '@radix-ui/themes';
import { useAtomValue } from 'jotai';

export const Result = () => {
  const madlib = useAtomValue(madlibAtom);
  const madlibReady = useAtomValue(madlibReadyAtom);

  return (
    <Flex direction="column" gap="2" align="center">
      {madlibReady && (
        <Box
          p="4"
          style={{
            backgroundColor: 'var(--gray-2)',
            borderRadius: 'var(--radius-3)',
            boxShadow: 'var(--shadow-2)',
          }}
          width="600"
        >
          {madlib.map((item, index) =>
            item.type === 'heading' ? (
              <Heading key={item.id} as="h6" size="4" style={{ marginTop: 12 }}>
                {item.value}
              </Heading>
            ) : item.type === 'text' ? (
              <Text key={item.id}>{item.value}</Text>
            ) : (
              <Text key={item.id} style={{ fontWeight: 'bold' }}>
                {madlib[index - 1].value.endsWith(' ') ? '' : ' '}
                {item.value.trim()}
                {madlib[index + 1].value.startsWith('.') ? '' : ' '}
              </Text>
            ),
          )}
        </Box>
      )}
    </Flex>
  );
};
