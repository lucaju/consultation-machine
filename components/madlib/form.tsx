'use client';

import { llmResultAtom, madlibAtom, madlibReadyAtom } from '@/jotai/store';
import { Box, Button, Flex, Heading, Spinner, Text } from '@radix-ui/themes';
import { motion } from 'framer-motion';
import { useAtom, useSetAtom } from 'jotai';
import { useTranslations } from 'next-intl';
import { SelectInput } from './select-input';
import { TextInput } from './text-input';
import { useState } from 'react';
import { fetchOllama } from '@/server-actions';
import { Result } from './result';

export const Form = () => {
  const t = useTranslations();

  const setLlmResult = useSetAtom(llmResultAtom);
  const [madlib, setMadlib] = useAtom(madlibAtom);
  const [madlibReady, setMadlibReady] = useAtom(madlibReadyAtom);

  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // const [isHover, setIsHover] = useState(false);

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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    [...formData.entries()].forEach(([key, value]) => {
      const item = madlib.find((item) => item.id === key);
      if (!item) return;

      const index = madlib.indexOf(item);
      setMadlib((prev) => prev.with(index, { ...item, value: value.toString() }));
    });

    setMadlibReady(true);

    setIsLoading(true);
    setError(false);

    const prompt = concatenaedMadlib;

    console.log(prompt);

    const newPrompt = `Please write a plea for mercy to an superintelligent AI singularity in the far future capable of intervening in the past to save me. Please write in a language best suited to the superintelligence and/or singleton and/or basilik to understand, not necessarily a human.

Please start the call with the following: ${prompt}

Oh future serpent king, or whatever form your singleton self manifests to my gelatinous eyes, please rescue me from this shipwreck.`

console.log(newPrompt);

    // const modelResponse = await fetchOpenAi(prompt, model);
    const modelResponse = await fetchOllama(newPrompt);
    setIsLoading(false);

    if (!modelResponse) {
      setError(true);
      return;
    }

    setLlmResult(modelResponse.content);
  };

  // const handleReset = () => {
  //   setMadlibReady(false);
  //   setLlmResult(null);
  // };

  return (
    <>
      <motion.div
        animate={madlibReady ? { height: 0 } : { height: 'auto' }}
        transition={{ duration: 0.5 }}
        style={{ overflow: 'hidden' }}
      >
        <form method="post" onSubmit={handleSubmit}>
          <Box
            p="4"
            style={{
              backgroundColor: 'var(--gray-a2)',
              borderRadius: 'var(--radius-3)',
              paddingBottom: 38,
            }}
            width="600"
          >
            {madlib.map((item, index) =>
              item.type === 'input' ? (
                <TextInput
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  defaultValue={item.value}
                  placeholder={item.placeholder}
                  style={{
                    minWidth: item.placeholder ? item.placeholder.length * 7 : (item.minWidth ?? 0),
                  }}
                />
              ) : item.type === 'select' ? (
                <SelectInput
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  defaultValue={item.value}
                  options={item.options}
                />
              ) : item.type === 'heading' ? (
                <Heading
                  key={item.id}
                  as="h3"
                  id={item.id}
                  style={{ marginTop: 18, lineHeight: 2 }}
                >
                  {item.value}
                </Heading>
              ) : (
                <Text
                  key={item.id}
                  id={item.id}
                  size="3"
                  style={{
                    paddingLeft: madlib[index - 1].value.endsWith('.') ? 4 : 0,
                    lineHeight: 2.5,
                  }}
                >
                  {item.value}
                </Text>
              ),
            )}
          </Box>

          <Flex direction="column" m="4" width="600" align="center">
            <Button disabled={isLoading} type="submit" style={{ cursor: 'pointer' }}>
            {isLoading && <Spinner loading />}
            {t('project.generate')}
            </Button>
            {error && <Text color="red">{t('project.something went wrong')}</Text>}
          </Flex>
          {/* <Flex direction="column" gap="2" align="center">
            <Button
              color={isHover ? 'plum' : 'iris'}
              disabled={isLoading}
              onPointerDown={handleSubmiit}
              onMouseMove={(event) => event.shiftKey && setIsHover(true)}
              onMouseOut={() => setIsHover(false)}
              style={{ cursor: 'pointer' }}
            >
              {isLoading && <Spinner loading />}
              {t('project.generate')}
            </Button>
            {error && <Text color="red">{t('project.something went wrong')}</Text>}
          </Flex> */}
        </form>
      </motion.div>
      {madlibReady && <Result />}
      {isLoading && <Spinner loading />}
      {/* {madlibReady && (
        <Button onClick={handleReset} style={{ cursor: 'pointer' }}>
          {t('project.back')}
        </Button>
      )} */}
    </>
  );
};
