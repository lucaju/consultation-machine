import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { JotaiProvider } from './jotai-provider';

export const metadata: Metadata = {
  title: 'Consultation Machine',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <JotaiProvider>
          <ThemeProvider attribute="class">
            <Theme accentColor="iris">{children}</Theme>
          </ThemeProvider>
        </JotaiProvider>
      </body>
    </html>
  );
}
