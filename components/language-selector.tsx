'use client';

import { usePathname, useRouter } from '@/app/navigation';
import { locales, type Locales } from '@/i18n';
import { Select } from '@radix-ui/themes';
import { useLocale, useTranslations } from 'next-intl';
import { startTransition } from 'react';

export const LanguageSelector = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations();

  const onSelect = (value: Locales) => {
    startTransition(() => {
      router.replace(pathname, { locale: value });
    });
  };

  return (
    <Select.Root value={locale} onValueChange={onSelect}>
      <Select.Trigger style={{ cursor: 'pointer' }} />
      <Select.Content>
        <Select.Group>
          {locales.map((value) => (
            <Select.Item key={value} style={{ cursor: 'pointer' }} value={value}>
              {t('project.language selector', { locale: value })}
            </Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};
