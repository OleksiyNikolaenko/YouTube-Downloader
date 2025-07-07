import { Header } from '@/components';
import { SearchProvider, ThemeProvider } from '@/providers';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
  preload: false,
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
  preload: false,
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
        className={`${geistSans.variable} ${geistMono.variable} flex h-screen flex-col`}>
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
