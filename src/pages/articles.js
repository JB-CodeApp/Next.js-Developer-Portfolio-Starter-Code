import AnimatedText from "@/components/AnimatedText";
import React, { useState, useEffect, useRef } from 'react';
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue } from "framer-motion";
import article1 from "../../public/images/articles/laravel-in-enterprise-scalable-solution.webp";
import article2 from "../../public/images/articles/embracing-full-stack-development-modern-tech-landscape.webp";
import article3 from "../../public/images/articles/image.webp";
import article4 from "../../public/images/articles/laravel-in-enterprise-scalable-solution.webp";
import article5 from "../../public/images/articles/laravel-in-enterprise-scalable-solution.webp";
import TransitionEffect from "@/components/TransitionEffect";
import DataComponent from "./DataComponent";
import RandomTwo from "./RandomTwo";
import { NextSeo } from "next-seo";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        height={500}
        width={800}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
      />
    </Link>
  );
};

const Article = ({ img, title, date, link, width, height }) => {

  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className=" relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-white text-black first:mt-0 border  border-solid  border-black
    border-r-4 border-b-4 dark:border-white dark:bg-black dark:text-white 
    sm:flex-col"
    >
      <MovingImg title={title} img={img} link={link} width={500} height={500} fill={true}/>
      {/* <Image src={`/images/articles/${img}`} alt={title} width={width} height={height} /> */}

      <span className="text-fuchsia-400 font-semibold pl-4 dark:text-blue-600 sm:self-start sm:pl-0 xs:text-sm  ">
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-white border border-solid border-black rounded-2xl dark:bg-black dark:border-white">
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-black
        rounded-br-3xl"
      />
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          height={500}
          width={800}
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-xl font-semibold hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      {/* <MovingImg title={title} img={img} link={link} /> */}
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-fuchsia-400 font-semibold dark:text-blue-600">
        {time}
      </span>
    </li>
  );
};


function Articles({ img }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const imagePath = process.env.SITE_URL + `/images/articles/${img}`;

  return (
    <>
      <Head>
        <title>Laravel Developer </title>
        <meta name="description" content="any description" />
      </Head>

      <NextSeo
          title="Laravel Developer"
          description="Explore top-notch web development with Laravel, Vue.js, and more. Elevate your online presence with top-tier developers."
          canonical="https://laraveldeveloper.online/articles"
          openGraph={{
            url: 'https://laraveldeveloper.online/articles',
            title: 'Laravel Developer',
            description: 'Explore top-notch web development with Laravel, Vue.js, and more. Elevate your online presence with top-tier developers.',
            images: [
              {
                url: 'https://laraveldeveloper.online/images/blog.webp',
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
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-white">
        <Layout className="pt-16">
          <AnimatedText
            text="Our Creative Thinking Words "
            className="mb-16 mt-4 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl "
          />
          <RandomTwo />

          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>

          <ul>
            {data.map((article) => (
              <li key={article.id}>
                <Article
                  title={article.title}
                  date={article.date}
                  link={article.link}
                  // img={process.env.SITE_URL + `/images/articles/${article.img}`} fill={true}
                  img={`/images/articles/${article.img}`} 
                />
                {/* <Image
                  src={ process.env.SITE_URL + `/images/articles/${article.img}`}
                  alt={article.title}
                  width={500}
                  height={500}
                  /> */}
              </li>
            ))}
          </ul>
        </Layout>
      </main>
    </>
  );
}

export default Articles;
