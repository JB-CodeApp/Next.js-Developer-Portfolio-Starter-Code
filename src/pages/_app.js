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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <NextSeo
      title="Laravel Developer"
      description="Looking for an Laravel developer? Explore top-notch web development services with a focus on Laravel, Vue.js, and more. Enhance your digital presence today!"
      canonical="https://laraveldeveloper.online/"
      openGraph={{
        url: 'https://laraveldeveloper.online/',
        title: 'Expert Laravel Developer',
        description: 'Looking for an Laravel developer? Explore top-notch web development services with a focus on Laravel, Vue.js, and more. Enhance your digital presence today!',
        images: [
          {
            url: 'https://www.example.ie/og-image-01.jpg',
            width: 800,
            height: 600,
            alt: 'Laravel Developer',
            type: 'image/jpeg',
          },
          { url: 'https://www.example.ie/og-image-04.jpg' },
        ],
        siteName: 'Laravel Developer',
      }}
      twitter={{
        handle: '@handle',
        site: '@site',
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
