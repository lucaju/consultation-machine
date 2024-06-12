'use client';

import { llmResultAtom, madlibAtom, madlibReadyAtom } from '@/jotai/store';
import { fetchOpenAi } from '@/server-actions';
import { Box, Button, Flex, Text } from '@radix-ui/themes';
import { useAtom, useAtomValue } from 'jotai';
import { useState } from 'react';

export const LLM = () => {
  const madlib = useAtomValue(madlibAtom);
  const madlibReady = useAtomValue(madlibReadyAtom);
  const [llmResult, setLlmResultAtom] = useAtom(llmResultAtom);
  const [error, setError] = useState(false);

  const handleSubmiit = async () => {
    setError(false);
    const prompt = madlib.map((item) => item.value).join(' ');
    const results = await fetchOpenAi(prompt);
    if (!results) {
      setError(true);
      return;
    }
    setLlmResultAtom(results);
  };

  return (
    <>
      {madlibReady && (
        <Flex direction="column" gap="2" align="center">
          <Button onClick={handleSubmiit}>Submit</Button>
          {llmResult && (
            <Box
              p="4"
              style={{
                backgroundColor: 'var(--gray-a2)',
                borderRadius: 'var(--radius-3)',
                boxShadow: 'var(--shadow-4)',
              }}
              width="600"
            >
              <Text>{llmResult}</Text>
            </Box>
          )}
          {error && <Text color="red">Something went wrong</Text>}
        </Flex>
      )}
    </>
  );
};
