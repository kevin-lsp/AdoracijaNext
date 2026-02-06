import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Adoramus Dominum | Evharistična Adoracija',
  description: 'Pridruži se evharističnemu češčenju. Ker molitev spreminja.',
  keywords: ['adoracija', 'evharistija', 'molitev', 'katoliška cerkev', 'Slovenija'],
  openGraph: {
    title: 'Adoramus Dominum',
    description: 'Ker molitev spreminja.',
    locale: 'sl_SI',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sl">
      <body className={`${cormorant.variable} ${inter.variable}`}>{children}</body>
    </html>
  );
}
