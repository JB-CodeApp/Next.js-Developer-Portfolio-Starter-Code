"use client"
import AnimatedText from "@/components/AnimatedText";
import React, { useState, useEffect, useRef } from 'react';
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue } from "framer-motion";
// import article1 from "../../public/images/articles/laravel-in-enterprise-scalable-solution.webp";
// import article2 from "../../public/images/articles/embracing-full-stack-development-modern-tech-landscape.webp";
// import article3 from "../../public/images/articles/create modal component in react using react portals.webp";
// import article4 from "../../public/images/articles/form validation in reactjs using custom react hook.webp";
// import article5 from "../../public/images/articles/smooth scrolling in reactjs.webp";
// import TransitionEffect from "@/components/TransitionEffect";
// import DataComponent from "./DataComponent";

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
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
      />
    </Link>
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

function RandomTwo(img) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/random');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleOnError = () => {
    setImgSrc("images/blog.webp");
  };

  const shuffledData = data.sort(() => Math.random() - 0.5);
  const selectedData = shuffledData.slice(0, 2);
  
  return (
    <>
     <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
        {selectedData.map((article) => (
          <li key={article.id}>
            {/* Assuming FeaturedArticle is a custom component */}
            <FeaturedArticle
              title={article.title}
              summary={article.summary}
              time={article.time}
              link={article.link}
              img={`/images/articles/${article.img}`} 
              onError={handleOnError}
            />
          </li>
        ))}
      </ul>

      {/* <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
        {data.map((article) => (
          <li key={article.id}>
            <FeaturedArticle
              title={article.title}
              summary={article.summary}
              time={article.time}
              link={article.link}
              // img={process.env.SITE_URL + `/images/articles/${article.img}`} 
              img={`/images/articles/${article.img}`} 
              // width={500}
              // height={800}
              onError={handleOnError}
            >
            </FeaturedArticle>
          </li>
        ))}
      </ul> */}
    </>
  );
}

export default RandomTwo;

          // <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
          //   <FeaturedArticle
          //     title={item.title}
          //     summary="Explore the versatility and strengths of Laravel as a top-tier PHP framework for developing large-scale enterprise applications. Discover how Laravel's flexibility, security, community support, and extensive features make it a compelling choice for businesses seeking to build scalable and secure solutions."
          //     time="9 min read"
          //     link="https://www.expertlaravel.com/blog/laravel-in-enterprise-scalable-solution"
          //     img={article1}
          //   />
          // </ul> 