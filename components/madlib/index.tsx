'use client';

import { madlibStructureEN, madlibStructureFR } from '@/jotai/intiial-data';
import { madlibAtom } from '@/jotai/store';
import { Flex } from '@radix-ui/themes';
import { useSetAtom } from 'jotai';
import { useLocale } from 'next-intl';
import { Form } from './form';
import { Result } from './result';

export const Madlib = () => {
  const locale = useLocale();
  const madlib = locale === 'en' ? madlibStructureEN : madlibStructureFR;
  const setMadlibReady = useSetAtom(madlibAtom);
  setMadlibReady(madlib);

  return (
    <Flex direction="column" gap="2" align="center">
      <Form />
      <Result />
    </Flex>
  );
};
