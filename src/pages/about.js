import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
// import profilePic from "../../public/images/profile/developer-pic-2.webp";
import profilePic from "../../public/images/profile/sir.webp";
import Image from "next/image";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";
import { NextSeo } from "next-seo";
import Link from "next/link";

const AnimatedNumber = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Laravel Developer </title>
        <meta name="description" content="any description" />
      </Head>
      <NextSeo

          title="Laravel Developer"
          description="Explore top-notch web development with Laravel, Vue.js, and more. Elevate your online presence with top-tier developers."
          canonical="https://laraveldeveloper.online/about"
          openGraph={{
            url: 'https://laraveldeveloper.online/images/about.webp',
            title: 'Laravel Developer',
            description: 'Explore top-notch web development with Laravel, Vue.js, and more. Elevate your online presence with top-tier developers.',
            images: [
              {
                url: 'https://laraveldeveloper.online/images/about.webp',
                width: 1200,
                height: 640,
                alt: 'Laravel Developer',
                type: 'image/jpeg',
              },
            ],
            siteName: 'Laravel Developer',
          }}

          />
      
      <TransitionEffect />
      <main className="flex  w-full flex-col items-center justify-center dark:text-white">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose! "
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-black/75 dark:text-white/75">
                Biography
              </h2>
              <p className="font-medium">
              Greetings! I am Jigar Patel, a seasoned Senior Full Stack web developer with 11+ years of hands-on experience. My expertise lies in PHP, particularly with a focus on Laravel and CodeIgniter frameworks. Specializing in Laravel and SaaS applications, I craft efficient REST APIs, excel in VueJS and ReactJS for captivating user interfaces, and employ agile methodologies for on-time project delivery. 
              </p>
              <p className="my-4 font-medium">
              My commitment to transparent communication and staying updated on industry trends ensures cutting-edge solutions. With a track record of satisfied clients globally, I am here to turn your web development visions into reality.
              </p>
              <p className="font-medium">
              Whether you need a tailor-made Laravel application, SaaS development, or a backend service specialist, I am at your service. 
              </p>
              <p className="my-4 font-medium">
              Lets collaborate to bring your ideas to life! <br /><br />
              Feel free to get in touch:<br /><br />
                📧 Email: &nbsp;
                <Link
                className="color-blue"
                href="mailto:jigar24.patel@gmail.com"
                target={"_blank"}
                >
                  jigar24.patel@gmail.com
                  </Link><br />

                💬 Skype: &nbsp;
                <Link
                href="skype:jigar24.patel"
                target={"_blank"}
                >jigar24.patel</Link>
              </p>
            </div>

            {/* image */}
            <div
              className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-black
            bg-white p-8 dark:bg-black dark:border-white xl-col-span-4 md:order-1 md:col-span-8"
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-black dark:bg-white" />
              <Image
                src={profilePic}
                alt="Laravel Developer Online"
                className="w-full h-auto  rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center ">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={80} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-black/75 dark:text-white/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Satisfied Clients
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center ">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={120} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-black/75 dark:text-white/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Projects Completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center ">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={11} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-black/75 dark:text-white/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Years of experience
                </h2>
              </div>
            </div>
          </div>

          {/* Skills Page */}
          <Skills />

          {/* Experience */}
          <Experience />

          {/* Education */}
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
