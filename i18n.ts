import { hasLocale } from 'next-intl';
import { defineRouting } from 'next-intl/routing';
import { getRequestConfig } from 'next-intl/server';
import { z } from 'zod';

export const routing = defineRouting({
  locales: ['en', 'fr'],
  defaultLocale: 'en',
});

export const locales = routing.locales;
export const localesSchema = z.enum(locales);
export type Locales = z.infer<typeof localesSchema>;

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`./locales/${locale}.json`)).default,
  };
});
