import { Theme } from '@radix-ui/themes';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { ThemeProvider } from 'next-themes';
import '@radix-ui/themes/styles.css';
import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n';
import { JotaiProvider } from '@/providers/jotai-provider';
import '../globals.css';

const Nunito = Nunito_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito_sans',
  weight: '400',
});

interface Props extends React.PropsWithChildren {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  const title = t('project.title');

  return {
    title,
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <html className={Nunito.className} lang={locale} suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true}>
        <NextIntlClientProvider messages={messages}>
          <JotaiProvider>
            <ThemeProvider attribute="class">
              <Theme accentColor="iris">{children}</Theme>
            </ThemeProvider>
          </JotaiProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
