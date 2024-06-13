'use client';

import { llmResultAtom, madlibAtom, madlibReadyAtom } from '@/jotai/store';
import { fetchOpenAi } from '@/server-actions';
import { Box, Button, Flex, Spinner, Text } from '@radix-ui/themes';
import { useAtom, useAtomValue } from 'jotai';
import { useState } from 'react';
import { Letter } from './letter';

export const LLM = () => {
  const madlib = useAtomValue(madlibAtom);
  const madlibReady = useAtomValue(madlibReadyAtom);
  const [llmResult, setLlmResult] = useAtom(llmResultAtom);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmiit = async () => {
    setIsLoading(true);
    setError(false);

    const prompt = madlib
      .filter((item, index) => index > 1)
      .map((item) => item.value)
      .join(' ');
    console.log(prompt);

    const response = await fetchOpenAi(prompt);
    setIsLoading(false);

    if (!response) {
      setError(true);
      return;
    }

    console.log(response);

    const content = response.choices[0].message.content;
    setLlmResult(content);
  };

  return (
    <>
      {madlibReady && (
        <Flex direction="column" gap="2" align="center">
          <Button disabled={isLoading} onClick={handleSubmiit}>
            {isLoading && <Spinner loading />}
            Submit
          </Button>
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
      <Letter />
    </>
  );
};
