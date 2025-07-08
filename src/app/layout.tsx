import { Header } from '@/components';
import { SearchProvider, ThemeProvider } from '@/providers';
import type { Metadata } from 'next';
import { Mochiy_Pop_One, Poppins } from 'next/font/google';
import './globals.css';

const mochiy = Mochiy_Pop_One({
  weight: ['400'],
  variable: '--font-mochiy-pro',
});

const poppins = Poppins({
  variable: '--font-poppins',
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
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${poppins.variable} {${mochiy.variable}} flex h-screen flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Header />
          <SearchProvider>
            <main className="flex-1">{children}</main>
          </SearchProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
