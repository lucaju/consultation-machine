'use client';

import { Flex } from '@radix-ui/themes';
import { useAtomValue, useSetAtom } from 'jotai';
import { useLocale, useTranslations } from 'next-intl';
import { useEffect } from 'react';
import { useRouter } from '@/app/navigation';
import { madlibStructureEN, madlibStructureFR } from '@/db/madlib/intiial-data';
import { madlibAtom, madlibReadyAtom } from '@/jotai/store';
import { Button } from '../button';
import { Form } from './form';
import { Result } from './result';

export const Madlib = () => {
  const locale = useLocale();
  const router = useRouter();
  const t = useTranslations();

  const madlib = locale === 'en' ? madlibStructureEN : madlibStructureFR;

  const setMadlibReady = useSetAtom(madlibAtom);
  const madlibReady = useAtomValue(madlibReadyAtom);

  // biome-ignore lint/correctness/useExhaustiveDependencies: mount-only seed of madlib structure
  useEffect(() => {
    setMadlibReady(madlib);
  }, []);

  const handleShowContributions = () => {
    router.push('/contributions');
  };

  return (
    <Flex direction="column" gap="4" align="center">
      {madlib.length > 0 && <Form />}
      <Button onClick={handleShowContributions} style={{ cursor: 'pointer' }} variant="surface">
        {t('Show Contributions')}
      </Button>
      {madlibReady && <Result />}
    </Flex>
  );
};
