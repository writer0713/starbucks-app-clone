import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import BottomAppBar from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Starbucks Clone',
  description: 'Starbucks Clone',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
