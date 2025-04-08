import type { Locales } from '@/i18n';
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { ThemeProvider } from 'next-themes';
// import { Libre_Caslon_Text } from 'next/font/google';
import { Nunito_Sans } from 'next/font/google';
import '../globals.css';
import { JotaiProvider } from '@/providers/jotai-provider';

// const Libre_Caslon = Libre_Caslon_Text({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-libre-caslon',
//   weight: '400',
// });
const Nunito = Nunito_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito_sans',
  weight: '400',
});

interface Props extends React.PropsWithChildren {
  params: {
    locale: Locales;
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
    <html
      // className={Libre_Caslon.className}
      className={Nunito.className}
      lang={locale}
      suppressHydrationWarning={true}
    >
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
