import Head from 'next/head';
import { Inter } from "next/font/google";
import './globals.css';

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="description" content="Hayase - 디스코드 게임서버 현황 봇 | 문서" />
        <meta property="og:title" content="Hayase 문서" />
        <meta property="og:site_name" content="Hayase 문서" />
        <meta property="og:description" content="Hayase 디스코드 봇 문서" />
        <meta property="og:url" content="https://docs.hayasebot.app" />
        <meta property="og:image" content="https://docs.hayasebot.app/assets/static/eyecatch.webp" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://docs.hayasebot.app/assets/static/eyecatch.webp" />
      </Head>
      <main className={inter.className}>
        <div className="w-full px-8 py-1.5 flex justify-center bg-gradient-to-r from-rose-500 via-purple-500 to-pink-500">
          <span className='select-none text-gray-200 text-md md:text-md font-bold'>현재 알파 테스트 중으로 서비스 불안정이나 오작동의 가능성이 있습니다. 양해 부탁드립니다.</span>
        </div>
        <Component {...pageProps} />
      </main>
    </>
  );
}