import "@/styles/globals.css";
import Head from "next/head";
import { Montserrat } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className={`${montserrat.variable} font-mont bg-light w-full min-h-screen`}
      >
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}
