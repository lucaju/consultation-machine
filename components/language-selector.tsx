'use client';

import { usePathname, useRouter } from '@/app/navigation';
import { locales } from '@/i18n';
import { Select } from '@radix-ui/themes';
import { useLocale, useTranslations } from 'next-intl';
import { startTransition } from 'react';

export const LanguageSelector = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations();

  const onSelect = (value: typeof locale) => {
    startTransition(() => {
      router.replace(pathname, { locale: value as (typeof locales)[number] });
    });
  };

  return (
    <Select.Root value={locale} onValueChange={onSelect}>
      <Select.Trigger />
      <Select.Content>
        <Select.Group>
          <Select.Item value="en">{t('project.English')}</Select.Item>
          <Select.Item value="fr">{t('project.French')}</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};
