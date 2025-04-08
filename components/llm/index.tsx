'use client';

import { llmResultAtom, madlibAtom, madlibReadyAtom } from '@/jotai/store';
import { fetchOllama } from '@/server-actions';
import { Button, Flex, Spinner, Text } from '@radix-ui/themes';
import { useAtom, useAtomValue } from 'jotai';
import { useTranslations } from 'next-intl';
import { MouseEventHandler, useState } from 'react';
import { Letter } from './letter';

export const LLM = () => {
  const t = useTranslations();

  const [llmResult, setLlmResult] = useAtom(llmResultAtom);
  const madlib = useAtomValue(madlibAtom);
  const madlibReady = useAtomValue(madlibReadyAtom);

  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const concatenaedMadlib = madlib
    .map((item, index, madlib) => {
      if (item.type === 'text') return item.value.trim();
      if (item.type === 'heading') return ` ${item.value.trim()}. `;

      let string = '';
      string += madlib[index - 1].value.endsWith(' ') ? '' : ' ';
      string += item.value.trim();
      string += madlib[index + 1].value.startsWith('.') ? '' : ' ';
      return string;
    })
    .join('');

  const handleSubmiit: MouseEventHandler<HTMLButtonElement> = async (event) => {
    setIsLoading(true);
    setError(false);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const model = event.shiftKey ? 'gpt-4o' : 'gpt-3.5-turbo';

    const prompt = concatenaedMadlib;

    // const modelResponse = await fetchOpenAi(prompt, model);
    const modelResponse = await fetchOllama(prompt);
    setIsLoading(false);

    if (!modelResponse) {
      setError(true);
      return;
    }

    setLlmResult(modelResponse.content);
  };

  return (
    <>
      {madlibReady && (
        <Flex direction="column" gap="2" align="center">
          <Button
            color={isHover ? 'plum' : 'iris'}
            disabled={isLoading}
            onPointerDown={handleSubmiit}
            onMouseMove={(event) => event.shiftKey && setIsHover(true)}
            onMouseOut={() => setIsHover(false)}
            style={{ cursor: 'pointer' }}
          >
            {isLoading && <Spinner loading />}
            {t('project.generate letter')}
          </Button>
          {error && <Text color="red">{t('project.something went wrong')}</Text>}
        </Flex>
      )}
      {llmResult && <Letter />}
    </>
  );
};
