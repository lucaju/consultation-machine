'use client';

import { madlibAtom, madlibReadyAtom } from '@/jotai/store';
import { Box, Flex, Text } from '@radix-ui/themes';
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
          {madlib.map((item) =>
            item.type === 'text' ? (
              <Text key={item.id}>{item.value}</Text>
            ) : (
              <Text key={item.id} style={{ fontWeight: 'bold', marginInline: 4 }}>
                {item.value}
              </Text>
            ),
          )}
        </Box>
      )}
    </Flex>
  );
};
