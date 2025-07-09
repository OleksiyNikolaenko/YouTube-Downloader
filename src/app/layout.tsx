import { Header } from '@/components';
import { SearchProvider, ThemeProvider } from '@/providers';
import type { Metadata } from 'next';
import { Manrope, Mochiy_Pop_One } from 'next/font/google';
import './globals.css';

const mochiy = Mochiy_Pop_One({
  weight: ['400'],
  variable: '--font-mochiy-pop',
});

const manrope = Manrope({
  variable: '--font-manrope',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'YouTube Donwloader',
  description: 'завантажити відео з YouTube',
  icons: {
    icon: '/favicon.ico',
    apple: ['/apple-touch-icon.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="uk" suppressHydrationWarning>
      <body
        className={`${manrope.variable} ${mochiy.variable} flex h-screen flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header />
          <SearchProvider>
            <main className="flex-1">{children}</main>
          </SearchProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
