import "@/styles/globals.css";
import Head from "next/head";
import { Montserrat } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { NextSeo } from 'next-seo';

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function MyApp({ Component, pageProps }) {
  
  const router = useRouter();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/black_ld.ico" />
      </Head>
      
      <NextSeo
      title="Laravel Developer"
      description="Explore top-notch web development with Laravel, Vue.js, and more. Elevate your online presence with top-tier developers."
      canonical="https://laraveldeveloper.online/"
      openGraph={{
        url: 'https://laraveldeveloper.online/images/laravelexpert.webp',
        title: 'Laravel Developer',
        description: 'Explore top-notch web development with Laravel, Vue.js, and more. Elevate your online presence with top-tier developers.',
        images: [
          {
            url: 'https://laraveldeveloper.online/images/laravelexpert.webp',
            width: 1200,
            height: 640,
            alt: 'Laravel Developer',
            type: 'image/jpeg',
          },
        ],
        siteName: 'Laravel Developer',
      }}
      twitter={{
        site: '@jigar24_patel',
        cardType: 'summary_large_image',
      }}
    />

      <main
        className={`${montserrat.variable} font-mont bg-white dark:bg-black w-full min-h-screen`}
      >
        <NavBar />
        <AnimatePresence mode="wait">
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>

        <Footer />
      </main>
    </>
  );
}
