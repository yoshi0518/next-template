import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import { env } from '@/env';
import { GoogleTagManager } from '@next/third-parties/google';

import '@/styles/globals.css';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  preload: false,
  display: 'swap',
  fallback: ['Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'sans-serif'],
});

export const metadata: Metadata = {
  title: '●●●',
  description: '●●●',
  keywords: ['●●●', '●●●', '●●●'],
  openGraph: {
    title: '●●●',
    description: '●●●',
    url: 'https://xxx.yoshi0518.com',
    siteName: '●●●',
  },
  robots: {
    index: !env.DEBUG, // falseでnoindex
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html
      lang="ja"
      className={notoSansJP.className}
    >
      <body>{children}</body>
      <GoogleTagManager gtmId={env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID} />
    </html>
  );
};

export default RootLayout;
