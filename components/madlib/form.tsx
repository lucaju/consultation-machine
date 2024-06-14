'use client';

import { madlibAtom, madlibReadyAtom } from '@/jotai/store';
import { Box, Button, Flex, Heading, Text } from '@radix-ui/themes';
import { motion } from 'framer-motion';
import { useAtom } from 'jotai';
import { SelectInput } from './select-input';
import { TextInput } from './text-input';
import { useTranslations } from 'next-intl';

export const Form = () => {
  const t = useTranslations();
  const [madlib, setMadlib] = useAtom(madlibAtom);
  const [madlibReady, setMadlibReady] = useAtom(madlibReadyAtom);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    [...formData.entries()].forEach(([key, value]) => {
      const item = madlib.find((item) => item.id === key);
      if (!item) return;

      const index = madlib.indexOf(item);
      setMadlib((prev) => prev.with(index, { ...item, value: value.toString() }));
    });

    setMadlibReady(true);
  };

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
            {madlib.map((item) =>
              item.type === 'input' ? (
                <TextInput
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  defaultValue={item.value}
                  placeholder={item.placeholder}
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
                <Text key={item.id} id={item.id} size="3" style={{ lineHeight: 2.5 }}>
                  {item.value}
                </Text>
              ),
            )}
          </Box>

          <Flex direction="column" m="4" width="600" align="center">
            <Button type="submit">{t('project.create prompt')}</Button>
          </Flex>
        </form>
      </motion.div>
      {madlibReady && <Button onClick={() => setMadlibReady(false)}>{t('project.back')}</Button>}
    </>
  );
};
