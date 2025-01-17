import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";
import project1 from "../../public/images/projects/jbcodeapp.webp";
import project2 from "../../public/images/projects/realestate.webp";
import project3 from "../../public/images/projects/restaurent.webp";
import project4 from "../../public/images/projects/HourlySpaces.webp";
import { NextSeo } from "next-seo";


const FramerImage = motion(Image);

const projects = () => {
  const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
      <article
        className="w-full flex items-center justify-between relative rounded-br-2xl
      rounded-3xl border border-solid border-black bg-white shadow-2xl p-12 dark:bg-black dark:border-white
      lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
      >
        <div
          className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-black dark:bg-white
        rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem] "
        />
        <Link
          href={link}
          target="_blank"
          className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
        >
          <FramerImage
            src={img}
            alt={title}
            className="w-full h-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          />
        </Link>

        <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
          <span className="text-fuchsia-400 font-medium text-xl dark:text-blue-600 xs:text-base">
            {type}
          </span>
          <Link
            href={link}
            target="_blank"
            className="hover:underline underline-offset-2"
          >
            <h2 className="my-2 w-full next-left text-4xl font-bold dark:text-white sm:text-sm">
              {title}
            </h2>
          </Link>

          <p className="my-2 font-medium text-black dark:text-white sm:text-sm">
            {summary}
          </p>

          <div className="mt-2 flex items-center">
            {/* <Link href={github} target="_blank" className="w-10">
              <GithubIcon />
            </Link> */}

            <Link
              href={link}
              target="_blank"
              className="ml-4 rounded-lg bg-black text-white p-2 px-6 text-lg font-semibold 
              dark:bg-white dark:text-black
              sm:px-4 sm:text-base "
            >
              Visit Projects
            </Link>
          </div>
        </div>
      </article>
    );
  };

  const Project = ({ title, type, img, link, github }) => {
    return (
      <article
        className="w-full flex flex-col items-center justify-center 
      rounded-2xl border border-solid border-black bg-white p-6 relative dark:bg-black dark:border-light xs:p-4
      "
      >
        <div
          className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-black
        rounded-br-3xl dark:bg-white md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"
        />
        <Link
          href={link}
          target="_blank"
          className="w-full cursor-pointer overflow-hidden rounded-lg "
        >
          <FramerImage
            src={img}
            alt={title}
            className="w-full h-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
        </Link>

        <div className="w-full flex flex-col items-start justify-between mt-4">
          <span className="text-fuchsia-400 font-medium text-xl dark:text-blue-600 lg:text-lg md:text-base">
            {type}
          </span>
          <Link
            href={link}
            target="_blank"
            className="hover:underline underline-offset-2"
          >
            <h2 className="my-2 w-full next-left text-3xl font-bold lg:text-2xl">
              {title}
            </h2>
          </Link>

          <div className="w-full mt-2 flex items-center justify-between">
            <Link
              href={link}
              target="_blank"
              className=" text-lg font-semibold underline md:text-base"
            >
              Visit
            </Link>
            {/* <Link href={github} target="_blank" className="w-8 md:w-6">
              <GithubIcon />
            </Link> */}
          </div>
        </div>
      </article>
    );
  };

  return (
    <>
      <Head>
        <title>Laravel Developer</title>
        <meta name="description" content="any description" />
      </Head>
      <NextSeo

          title="Laravel Developer"
          description="Explore top-notch web development with Laravel, Vue.js, and more. Elevate your online presence with top-tier developers."
          canonical="https://laraveldeveloper.online/projects"
          openGraph={{
            url: 'https://laraveldeveloper.online/projects',
            title: 'Laravel Developer',
            description: 'Explore top-notch web development with Laravel, Vue.js, and more. Elevate your online presence with top-tier developers.',
            images: [
              {
                url: 'https://laraveldeveloper.online/images/projects.webp',
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
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-white">
        <Layout className="pt-16">
          <AnimatedText
            text="Our Showcase"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl "
          />
          {/* First Project */}
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="JB CodeApp"
                img={project1}
                height={500}
                summary="Elevate your business with JB CodeApp, a leading IT solutions provider. Specializing in custom software, cloud services, and cybersecurity, we bring innovation and client-focused excellence. Let's transform possibilities together – contact us at contact@jbcodeapp.com Visit Our Website (https://jbcodeapp.com)."
                link="https://jbcodeapp.com/"
                github="/"
                type="Featured Projects"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Prime Property"
                img={project2}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                link="/"
                github="/"
                type="Featured Projects"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Bobs Burgers"
                img={project3}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                link="/"
                github="/"
                type="Featured Projects"
              />
            </div>

            {/* Second Project */}
            <div className="col-span-12">
              <FeaturedProject
                title="HourlySpaces"
                img={project4}
                height={500}
                summary="HourlySpaces is your go-to platform for flexible and convenient workspace solutions. Discover a curated selection of hourly, daily, and monthly rental spaces that cater to various needs. Whether you're a freelancer, entrepreneur, or remote worker, our user-friendly website connects you to a network of versatile spaces, including offices, meeting rooms, and event venues."
                link="/"
                github="/"
                type="Featured Projects"
              />
            </div>
            
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
