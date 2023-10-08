import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function MyApp({ Component, pageProps }: any) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}
