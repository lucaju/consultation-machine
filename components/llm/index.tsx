'use client';

import { llmResultAtom, madlibAtom, madlibReadyAtom } from '@/jotai/store';
import { fetchOpenAi } from '@/server-actions';
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

  const handleSubmiit: MouseEventHandler<HTMLButtonElement> = async (event) => {
    setIsLoading(true);
    setError(false);

    const model = event.shiftKey ? 'gpt-4o' : 'gpt-3.5-turbo';

    const prompt = madlib
      .filter((item) => {
        if (item.type === 'input' && item.name === 'person_name') return false;
        return true;
      })
      .map((item, index, madlib) => {
        if (item.type === 'text') return item.value.trim();
        if (item.type === 'heading') {
          return ` ${item.value.trim()}. `;
        }

        let string = '';
        string += madlib[index - 1].value.endsWith(' ') ? '' : ' ';
        string += item.value.trim();
        string += madlib[index + 1].value.startsWith('.') ? '' : ' ';
        return string;
      })
      .join('');

    const response = await fetchOpenAi(prompt, model);
    setIsLoading(false);

    if (!response) {
      setError(true);
      return;
    }

    // console.log(response);

    const content = response.choices[0].message.content;
    setLlmResult(content);
  };

  return (
    <>
      {madlibReady && (
        <Flex direction="column" gap="2" align="center">
          <Button
            color={isHover ? 'plum' : 'iris'}
            disabled={isLoading}
            onClick={handleSubmiit}
            onMouseMove={(event) => {
              if (event.shiftKey) setIsHover(true);
            }}
            onMouseOut={() => setIsHover(false)}
          >
            {isLoading && <Spinner loading />}
            {t('project.create letter')}
          </Button>
          {error && <Text color="red">{t('project.something went wrong')}</Text>}
        </Flex>
      )}
      {llmResult && <Letter />}
    </>
  );
};
