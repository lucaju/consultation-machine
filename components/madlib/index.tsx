'use client';

import { madlibStructureEN, madlibStructureFR } from '@/jotai/intiial-data';
import { madlibAtom, madlibReadyAtom } from '@/jotai/store';
import { Flex } from '@radix-ui/themes';
import { useAtomValue, useSetAtom } from 'jotai';
import { useLocale } from 'next-intl';
import { useEffect } from 'react';
import { Form } from './form';
import { Result } from './result';

export const Madlib = () => {
  const locale = useLocale();
  const madlib = locale === 'en' ? madlibStructureEN : madlibStructureFR;

  const setMadlibReady = useSetAtom(madlibAtom);
  const madlibReady = useAtomValue(madlibReadyAtom);

  useEffect(() => {
    setMadlibReady(madlib);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Flex direction="column" gap="4" align="center">
      {madlib.length > 0 && <Form />}
      {madlibReady && <Result />}
    </Flex>
  );
};
