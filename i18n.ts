import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';
import z from 'zod';

// Can be imported from a shared config
export const locales = ['en', 'fr'] as const;
export const localesSchema = z.enum(locales);
export type Locales = z.infer<typeof localesSchema>;

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as (typeof locales)[number])) notFound();

  return {
    messages: (await import(`./locales/${locale}.json`)).default,
  };
});
