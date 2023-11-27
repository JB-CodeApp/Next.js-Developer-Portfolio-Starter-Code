import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';
import { motion, useMotionValue } from "framer-motion";
import React, { useState, useEffect, useRef } from 'react';
import Link from "next/link";
import Image from "next/image";

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
  const Article = ({ name, date, link, img, width, height }) => {
    return (
      <motion.li
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="p-4 my-4 bg-white text-black border border-solid border-black border-r-4 border-b-4 dark:border-white dark:bg-black dark:text-white"
      >
        <span className="font-semibold">{name}</span>
        <span className="block text-gray-500">{date}</span>
        <span className="block">{link}</span>
        {/* <img src={`/images/articles/${img}`} alt={name} width={width} height={height} /> */}
      </motion.li>
    );
  };
  

const DataComponent = ({ data }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
      <h1>CSV Data From Datacomponents</h1>
      <ul>
        {isClient &&
          Array.isArray(data) &&
          data.map((item, index) => (
            <Article
              key={index}
              title={item.name}
              date={item.date}
              link={item.link}
              img={item.img}
              width={500}
              height={800}
            />
          ))}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'src/data', 'data.csv');
  const data = [];

  try {
    await new Promise((resolve, reject) => {
      fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', (row) => {
          data.push(row);
        })
        .on('end', resolve)
        .on('error', reject);
    });
  } catch (error) {
    console.error('Error reading CSV file:', error);
  }

  return {
    props: {
      data,
    },
  };
}

export default DataComponent;
