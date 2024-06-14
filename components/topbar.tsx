'use client';

import { Flex, Heading } from '@radix-ui/themes';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { LanguageSelector } from './language-selector';

export const Topbar = async () => {
  const t = useTranslations();
  return (
    <Flex direction="column" gap="2" align="center" py="5">
      <LanguageSelector />
      <Heading size="9">{t('project.title')}</Heading>
      <Heading size="3">
        <Link href="https://machineagencies.milieux.ca/" target="_blank">
          {t('project.by')} Machine Agencies
        </Link>
      </Heading>
    </Flex>
  );
};
