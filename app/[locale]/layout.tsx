import { locales } from '@/i18n';
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { ThemeProvider } from 'next-themes';
import { Libre_Caslon_Text } from 'next/font/google';
import '../globals.css';
import { JotaiProvider } from './jotai-provider';

const Libre_Caslon = Libre_Caslon_Text({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-libre-caslon',
  weight: '400',
});

interface Props extends React.PropsWithChildren {
  params: {
    locale: (typeof locales)[number];
  };
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale });
  const title = t('project.title');

  return {
    title,
  };
}

export default async function LocaleLayout({ children, params: { locale } }: Props) {
  const messages = await getMessages({ locale });

  return (
    <html className={Libre_Caslon.className} lang={locale} suppressHydrationWarning={true}>
      <body>
        <JotaiProvider>
          <NextIntlClientProvider messages={messages}>
            <ThemeProvider attribute="class">
              <Theme accentColor="iris">{children}</Theme>
            </ThemeProvider>
          </NextIntlClientProvider>
        </JotaiProvider>
      </body>
    </html>
  );
}
